import { type SuiClient } from "@mysten/sui/client";
import { Factory } from "./_generated/your-stable/factory/structs";
import { phantom } from "./_generated/_framework/reified";
import {
  BUCKET_PROTOCOL_SHARED_OBJECT_REF,
  ST_SBUCK_VAULT_SHARED_OBJECT_REF,
  YOUR_STABLE_PACKAGE_ADMIN_CAP,
} from "./lib/constant";
import { getLatestPackageId } from "./utils/package";
import { setPublishedAt } from "./_generated/your-stable";
import {
  burn,
  claimReward,
  fromUnderlyingAmount,
  getRewardsValue,
  mint,
  setBasicLimit,
  setExtensionLimit,
  toUnderlyingAmount,
  updateMetadata,
} from "./_generated/your-stable/factory/functions";
import {
  Transaction,
  type TransactionObjectInput,
} from "@mysten/sui/transactions";
import { devInspectTransaction } from "./utils/transaction";
import { bcs } from "@mysten/sui/bcs";

export class YourStableClient {
  factory: Factory<string>;
  client: SuiClient;
  underlyingDecimal = 9;

  constructor(client: SuiClient, factory: Factory<string>) {
    this.factory = factory;
    this.client = client;
  }

  static async initialize(
    client: SuiClient,
    factoryId: string,
    factoryType: string,
  ) {
    const factory = await Factory.fetch(
      client,
      phantom(factoryType),
      factoryId,
    );

    const latestPackageId = await getLatestPackageId(
      client,
      YOUR_STABLE_PACKAGE_ADMIN_CAP,
    );

    if (latestPackageId)
      console.log("@YourStable | latestPackageId:", latestPackageId);
    setPublishedAt(latestPackageId);

    return new YourStableClient(client, factory);
  }

  // --- Move call ---
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
    return this.getQuotedStSBuckAmountByStableCoinAmount(
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

  async getQuotedStSBuckAmountByStableCoinAmount(stableAmount: bigint) {
    const tx = new Transaction();

    toUnderlyingAmount(tx, {
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
      stableAmount,
    });

    const devInspectResponse = await devInspectTransaction(this.client, tx);
    const value = devInspectResponse?.results?.[0]?.returnValues?.[0][0];
    return value ? BigInt(bcs.u64().parse(new Uint8Array(value))) : BigInt(0);
  }

  async getQuotedStableCoinAmountByStSBuckAmount(stSBuckAmount: bigint) {
    const tx = new Transaction();

    fromUnderlyingAmount(tx, {
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
      underlyingAmount: stSBuckAmount,
    });

    const devInspectResponse = await devInspectTransaction(this.client, tx);
    const value = devInspectResponse?.results?.[0]?.returnValues?.[0][0];
    return value ? BigInt(bcs.u64().parse(new Uint8Array(value))) : BigInt(0);
  }

  // --- Move call ---

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
    redeemedStableCoinType: string,
    yourStableCoin: TransactionObjectInput,
  ) {
    const [withdrawTicket, redeemRequest] = burn(
      tx,
      [redeemedStableCoinType, this.factory.$typeArgs[0]],
      {
        factory: tx.object(this.factory.id),
        vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
        clock: tx.object.clock(),
        yourStableCoin,
      },
    );

    return [withdrawTicket, redeemRequest];
  }

  // --> admin
  claimRewardMoveCall(tx: Transaction, factoryCap: string) {
    const stSbuckCoin = claimReward(tx, this.factory.$typeArgs[0], {
      cap: tx.object(factoryCap),
      factory: tx.object(this.factory.id),
      vault: tx.sharedObjectRef(ST_SBUCK_VAULT_SHARED_OBJECT_REF),
      clock: tx.object.clock(),
    });

    return stSbuckCoin;
  }

  updateMetadataMoveCall(
    tx: Transaction,
    factoryCap: string,
    metadataObjectId: string,
    input?: {
      name?: string;
      symbol?: string;
      description?: string;
      iconUrl?: string;
    },
  ) {
    updateMetadata(tx, this.factory.$typeArgs[0], {
      cap: tx.object(factoryCap),
      factory: tx.object(this.factory.id),
      metadata: tx.object(metadataObjectId),
      name: tx.pure.option("string", input?.name || null),
      symbol: tx.pure.option("string", input?.symbol || null),
      description: tx.pure.option("string", input?.description || null),
      iconUrl: tx.pure.option("string", input?.iconUrl || null),
    });
  }

  setBasicLimitMoveCall(tx: Transaction, factoryCap: string, limit: bigint) {
    setBasicLimit(tx, this.factory.$typeArgs[0], {
      cap: tx.object(factoryCap),
      factory: tx.object(this.factory.id),
      limit: tx.pure.u64(limit),
    });
  }

  setExtensionLimitMoveCall(
    tx: Transaction,
    witnessType: string,
    factoryCap: string,
    limit: bigint,
  ) {
    setExtensionLimit(tx, [this.factory.$typeArgs[0], witnessType], {
      cap: tx.object(factoryCap),
      factory: tx.object(this.factory.id),
      limit: tx.pure.u64(limit),
    });
  }

  // <-- admin
}
