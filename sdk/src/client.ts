import { type SuiClient } from "@mysten/sui/client";
import {
  Factory,
  YourStableFactory,
} from "./_generated/your-stable/factory/structs";
import { phantom } from "./_generated/_framework/reified";
import {
  BUCKET_PROTOCOL_SHARED_OBJECT_REF,
  COIN_TYPE_LIST,
  CONFIG_SHARED_OBJECT_REF,
  FACTORY_REGISTRY_SHARED_OBJECT_REF,
  FLASK_SHARED_OBJECT_REF,
  FOUNTAIN_SHARED_OBJECT_REF,
  REDEMPTION_QUEUE,
  SAVING_VAULT_STRATEGY_SHARED_OBJECT_REF,
  ST_SBUCK_VAULT_SHARED_OBJECT_REF,
  type SUPPORTED_REDEMPTION_COIN,
  YOUR_STABLE_PACKAGE_UPGRADE_CAP,
} from "./lib/constant";
import { getLatestPackageId } from "./utils/package";
import { setPublishedAt } from "./_generated/your-stable";
import {
  burn,
  burnAndRedeem,
  claimReward,
  fromUnderlyingAmount,
  getRewardsValue,
  mint,
  new_,
  setBasicLimit,
  setExtensionLimit,
  toUnderlyingAmount,
  updateMetadata,
} from "./_generated/your-stable/factory/functions";
import {
  Transaction,
  type TransactionArgument,
  type TransactionObjectInput,
} from "@mysten/sui/transactions";
import { devInspectTransaction } from "./utils/transaction";
import { bcs } from "@mysten/sui/bcs";
import {
  batchRedeem,
  create,
  getTickets,
} from "./_generated/your-stable/redemption-queue/functions";
import { normalizeStructTag } from "@mysten/sui/utils";
import { RedemptionTicketInfo } from "./_generated/your-stable/redemption-queue/structs";

export class YourStableClient {
  factory: Factory<string>;
  factoryCap: string;
  client: SuiClient;
  static underlyingDecimal = 9;

  constructor(client: SuiClient, factory: Factory<string>, factoryCap: string) {
    this.factory = factory;
    this.factoryCap = factoryCap;
    this.client = client;
  }

  static async initialize(client: SuiClient, factoryType: string) {
    const factoryDynamicFieldKey = normalizeStructTag(factoryType).slice(2);
    const suiObjectResponse = await client.getDynamicFieldObject({
      parentId: FACTORY_REGISTRY_SHARED_OBJECT_REF.objectId,
      name: {
        type: "0x1::ascii::String",
        value: factoryDynamicFieldKey,
      },
    });

    if (suiObjectResponse.error)
      throw new Error(`Wrong factoryType: ${factoryType}`);

    const deploymentContent = suiObjectResponse.data?.content;

    if (!deploymentContent || deploymentContent.dataType !== "moveObject")
      throw new Error(
        `Failed to get dynamic content for deployments for factoryType: ${factoryType}`,
      );
    const { factory_cap_id: factoryCapId, factory_id: factoryId } =
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      (deploymentContent.fields as any).value.fields;

    const factory = await Factory.fetch(
      client,
      phantom(factoryType),
      factoryId,
    );

    await YourStableClient.updateToLatestPackage(client);

    return new YourStableClient(client, factory, factoryCapId);
  }

  async updateFactory() {
    const factory = await Factory.fetch(
      this.client,
      phantom(this.factory.$typeArgs[0]),
      this.factory.id,
    );

    this.factory = factory;
  }

  static async updateToLatestPackage(suiClient: SuiClient) {
    const latestPackageId = await getLatestPackageId(
      suiClient,
      YOUR_STABLE_PACKAGE_UPGRADE_CAP,
    );

    setPublishedAt(latestPackageId);
  }

  // --- Getter ---
  getUnderlyingSTSBUCKBalance() {
    return this.factory.underlyingBalance.value;
  }

  getYourStableTotalSupply() {
    const basicSupply = this.getYourStableBasicSupply();
    const extensionSupplies = this.getYourStableExtensionSupplies();

    return (
      basicSupply +
      Object.values(extensionSupplies).reduce(
        (acc, supply) => acc + supply.supply,
        BigInt(0),
      )
    );
  }

  getYourStableBasicSupply() {
    return this.factory.basicSupply.supply;
  }

  getYourStableExtensionSupplies() {
    return this.factory.extensionSupplies.contents.reduce(
      (acc, supply) => ({
        ...acc,
        [supply.key.name]: {
          supply: supply.value.supply,
          limit: supply.value.limit,
        },
      }),
      {} as Record<string, { limit: bigint; supply: bigint }>,
    );
  }

  async getUnderlyingSTSBuckReserve() {
    return YourStableClient.getQuotedStSBuckAmountByStableCoinAmount(
      this.client,
      this.factory.basicSupply.supply,
    );
  }

  async getRewardsSTSBuckAmount() {
    return (
      this.getUnderlyingSTSBUCKBalance() -
      (await this.getUnderlyingSTSBuckReserve())
    );
  }

  async getRewardsBuckAmount() {
    const tx = new Transaction();

    getRewardsValue(tx, this.factory.$typeArgs[0], {
      factory: tx.object(this.factory.id),
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
    });

    const devInspectResponse = await devInspectTransaction(this.client, tx);
    const value = devInspectResponse?.results?.[0]?.returnValues?.[0][0];
    return value ? BigInt(bcs.u64().parse(new Uint8Array(value))) : BigInt(0);
  }

  static async getQuotedStSBuckAmountByStableCoinAmount(
    suiClient: SuiClient,
    buckAmount: bigint,
  ) {
    const tx = new Transaction();

    toUnderlyingAmount(tx, {
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
      buckAmount,
    });

    const devInspectResponse = await devInspectTransaction(suiClient, tx);
    const value = devInspectResponse?.results?.[0]?.returnValues?.[0][0];
    return value ? BigInt(bcs.u64().parse(new Uint8Array(value))) : BigInt(0);
  }

  static async getQuotedStableCoinAmountByStSBuckAmount(
    suiClient: SuiClient,
    stsbuckAmount: bigint,
  ) {
    const tx = new Transaction();

    fromUnderlyingAmount(tx, {
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
      stsbuckAmount,
    });

    const devInspectResponse = await devInspectTransaction(suiClient, tx);
    const value = devInspectResponse?.results?.[0]?.returnValues?.[0][0];
    return value ? BigInt(bcs.u64().parse(new Uint8Array(value))) : BigInt(0);
  }

  static async getTicketInfos(
    suiClient: SuiClient,
    stableCoin: SUPPORTED_REDEMPTION_COIN,
    pageSize: number = 1000,
    cursor?: number,
  ) {
    const tx = new Transaction();

    getTickets(tx, [COIN_TYPE_LIST[stableCoin], YourStableFactory.$typeName], {
      queue: tx.sharedObjectRef(REDEMPTION_QUEUE[stableCoin]),
      cursor: cursor ? tx.pure.u64(cursor) : null,
      pageSize: tx.pure.u64(pageSize),
    });

    try {
      const devInspectResponse = await devInspectTransaction(suiClient, tx);

      if (devInspectResponse.effects.status.status === "success") {
        const returnValues = devInspectResponse?.results?.[0]?.returnValues;
        if (!returnValues || returnValues?.[0]?.[0][0] === 0) {
          return { tickets: [], cursor: null };
        } else {
          // RedemptionTicketInfos
          const redemptionTicketInfos = returnValues?.[0];
          if (!redemptionTicketInfos) return { tickets: [], cursor: null };
          // cursor
          const cursorData = returnValues?.[1];
          if (!cursorData) return { tickets: [], cursor: null };

          const tickets = bcs
            .vector(RedemptionTicketInfo.bcs)
            .parse(Uint8Array.from(redemptionTicketInfos[0]));

          const cursor = bcs
            .option(bcs.U64)
            .parse(Uint8Array.from(cursorData[0]));

          return {
            tickets,
            cursor,
          };
        }
      } else {
        return { tickets: [], cursor: null };
      }
    } catch (error) {
      console.error(error);

      return { tickets: [], cursor: null };
    }
  }

  // --- Move call ---
  static createFactoryMoveCall(
    tx: Transaction,
    yourStableType: string,
    treasuryCapId: string,
    metadataObjectId: string,
    limit: bigint,
  ) {
    const [factory, factoryCap] = new_(tx, yourStableType, {
      registry: tx.sharedObjectRef(FACTORY_REGISTRY_SHARED_OBJECT_REF),
      config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
      treasuryCap: tx.object(treasuryCapId),
      coinMetadata: tx.object(metadataObjectId),
      limit: tx.pure.u64(limit),
    });

    return [factory, factoryCap];
  }

  static createRedemptionQueueMoveCall(
    tx: Transaction,
    stableCoinType: string,
    ruleType: string,
    adminCap: TransactionObjectInput,
    delay: bigint | TransactionArgument,
    redeemer: string | TransactionArgument | null,
  ) {
    create(tx, [stableCoinType, ruleType], {
      adminCap,
      delay,
      redeemer,
    });
  }

  mintYourStableMoveCall(
    tx: Transaction,
    depositedStableCoinType: string,
    stableCoin: TransactionObjectInput,
  ) {
    const yourStableCoin = mint(
      tx,
      [depositedStableCoinType, this.factory.$typeArgs[0]],
      {
        factory: tx.object(this.factory.id),
        config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
        vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
        bucketProtocol: tx.sharedObjectRef(BUCKET_PROTOCOL_SHARED_OBJECT_REF),
        clock: tx.object.clock(),
        stableCoin,
      },
    );

    return yourStableCoin;
  }

  burnYourStableMoveCall(
    tx: Transaction,
    yourStableCoin: TransactionObjectInput,
  ) {
    const buckCoin = burn(tx, this.factory.$typeArgs[0], {
      factory: tx.object(this.factory.id),
      config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
      bucketProtocol: tx.sharedObjectRef(BUCKET_PROTOCOL_SHARED_OBJECT_REF),
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      flask: tx.sharedObjectRef(FLASK_SHARED_OBJECT_REF),
      fountain: tx.sharedObjectRef(FOUNTAIN_SHARED_OBJECT_REF),
      strategy: tx.sharedObjectRef(SAVING_VAULT_STRATEGY_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
      yourStableCoin,
    });

    return buckCoin;
  }

  burnAndRedeemYourStableMoveCall(
    tx: Transaction,
    yourStableCoin: TransactionObjectInput,
    recipient: string,
    redeemedAmount: bigint,
    redeemedStableCoin: SUPPORTED_REDEMPTION_COIN = "USDC",
  ) {
    const buckCoin = burnAndRedeem(
      tx,
      [COIN_TYPE_LIST[redeemedStableCoin], this.factory.$typeArgs[0]],
      {
        factory: tx.object(this.factory.id),
        config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
        queue: tx.sharedObjectRef(REDEMPTION_QUEUE[redeemedStableCoin]),
        bucketProtocol: tx.sharedObjectRef(BUCKET_PROTOCOL_SHARED_OBJECT_REF),
        vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
        flask: tx.sharedObjectRef(FLASK_SHARED_OBJECT_REF),
        fountain: tx.sharedObjectRef(FOUNTAIN_SHARED_OBJECT_REF),
        strategy: tx.sharedObjectRef(SAVING_VAULT_STRATEGY_SHARED_OBJECT_REF),
        clock: tx.object.clock(),
        redeemedAmount: tx.pure.u64(redeemedAmount),
        recipient: tx.pure.address(recipient),
        yourStableCoin,
      },
    );

    return buckCoin;
  }

  static batchRedeemMoveCall(
    tx: Transaction,
    redeemedStableCoin: SUPPORTED_REDEMPTION_COIN = "USDC",
    batchStart: null | bigint = null,
    batchSize: bigint = BigInt(500),
  ) {
    batchRedeem(
      tx,
      [COIN_TYPE_LIST[redeemedStableCoin], YourStableFactory.$typeName],
      {
        queue: tx.sharedObjectRef(REDEMPTION_QUEUE[redeemedStableCoin]),
        bucketProtocol: tx.sharedObjectRef(BUCKET_PROTOCOL_SHARED_OBJECT_REF),
        clock: tx.object.clock(),
        batchStart: tx.pure.option("u64", batchStart),
        batchSize: tx.pure.u64(batchSize),
      },
    );
  }

  // --> admin
  claimRewardMoveCall(tx: Transaction) {
    const stSbuckCoin = claimReward(tx, this.factory.$typeArgs[0], {
      factory: tx.object(this.factory.id),
      config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
    });

    return stSbuckCoin;
  }

  updateMetadataMoveCall(
    tx: Transaction,
    metadataObjectId: string,
    input?: {
      name?: string;
      symbol?: string;
      description?: string;
      iconUrl?: string;
    },
  ) {
    updateMetadata(tx, this.factory.$typeArgs[0], {
      cap: tx.object(this.factoryCap),
      factory: tx.object(this.factory.id),
      config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
      metadata: tx.object(metadataObjectId),
      name: tx.pure.option("string", input?.name || null),
      symbol: tx.pure.option("string", input?.symbol || null),
      description: tx.pure.option("string", input?.description || null),
      iconUrl: tx.pure.option("string", input?.iconUrl || null),
    });
  }

  setBasicLimitMoveCall(tx: Transaction, limit: bigint) {
    setBasicLimit(tx, this.factory.$typeArgs[0], {
      cap: tx.object(this.factoryCap),
      factory: tx.object(this.factory.id),
      config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
      limit: tx.pure.u64(limit),
    });
  }

  setExtensionLimitMoveCall(
    tx: Transaction,
    witnessType: string,
    limit: bigint,
  ) {
    setExtensionLimit(tx, [this.factory.$typeArgs[0], witnessType], {
      cap: tx.object(this.factoryCap),
      factory: tx.object(this.factory.id),
      config: tx.sharedObjectRef(CONFIG_SHARED_OBJECT_REF),
      limit: tx.pure.u64(limit),
    });
  }

  // <-- admin
}
