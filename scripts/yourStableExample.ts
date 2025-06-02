import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import {
  COIN_TYPE_LIST,
  dryRun,
  phantom,
  YourStableClient,
} from "your-stable-sdk";
import { loadSigner, logger } from ".";
import { getInputCoins } from "./utils";
import { Factory } from "your-stable-sdk/_generated/factory/structs.js";

const suiClient = new SuiClient({ url: getFullnodeUrl("mainnet") });

export async function createFactory() {
  const signer = loadSigner();
  const tx = new Transaction();

  // update the config for minted yourStable info
  const config = {
    // yourStableCoinType:
    //   "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD",
    yourStableCoinType: "",
    // treasuryCapId:
    //   "0x172bcfc5c5b37b55d09ce6878e645b4bd1677ce82927090b841415c767e3384a",
    treasuryCapId: "",
    // metadataObjectId:
    // "0xf3a64dd59356c14fb946c69fdabf225fc3c5c89a611a3511afc16e1c8b67d7ae",
    metadataObjectId: "",
    // supplyLimit: BigInt(1000 * 10 ** YourStableClient.underlyingDecimal),
    supplyLimit: BigInt(0),
  };

  const [factory, factoryCap] = YourStableClient.createFactoryMoveCall(
    tx,
    config.yourStableCoinType,
    config.treasuryCapId,
    config.metadataObjectId,
    config.supplyLimit,
  );

  // Factory object can be owned, wrapped or shared public depends on your use case
  const factoryType = Factory.r(
    phantom(config.yourStableCoinType),
  ).fullTypeName;
  tx.moveCall({
    target: "0x2::transfer::public_share_object",
    typeArguments: [factoryType],
    arguments: [factory],
  });

  const recipient = signer.toSuiAddress();
  tx.transferObjects([factoryCap], recipient);

  // you can dryRun without sending real transactions
  const dryRunResponse = await dryRun(suiClient, tx, signer.toSuiAddress());
  logger.info({ dryRunResponse });

  if (dryRunResponse.dryrunRes.effects.status.status === "success") {
    // execute transaction if it's proper
    const response = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer,
    });

    logger.info({ response });
  } else {
    logger.error(dryRunResponse.dryrunRes.effects.status.error);
  }
}

export async function mintYourStable() {
  const signer = loadSigner();

  const yourStableCoinType =
    "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD";

  // create Factory instance
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  logger.info("Interacting with Factory:");
  logger.info({ factory });

  const tx = new Transaction();
  // example: 0.01 USDC
  const depositedAmount = 0.01 * 10 ** 6;
  const usdcCoin = await getInputCoins(
    tx,
    suiClient,
    signer.toSuiAddress(),
    COIN_TYPE_LIST.USDC,
    BigInt(depositedAmount),
  );
  const yourStableCoin = factory.mintYourStableMoveCall(
    tx,
    COIN_TYPE_LIST.USDC,
    usdcCoin,
  );

  tx.transferObjects([yourStableCoin], signer.toSuiAddress());

  const dryRunResponse = await dryRun(suiClient, tx, signer.toSuiAddress());
  logger.info({ dryRunResponse });

  if (dryRunResponse.dryrunRes.effects.status.status === "success") {
    // execute transaction if it's proper
    const response = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer,
    });

    logger.info({ response });
  } else {
    logger.error(dryRunResponse.dryrunRes.effects.status.error);
  }
}

export async function burnYourStable() {
  const signer = loadSigner();

  const yourStableCoinType =
    "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD";

  // create Factory instance
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  logger.info("Interacting with Factory:");
  logger.info({ factory });

  const tx = new Transaction();
  // example: 0.01 yourStableCoin
  const burnedAmount = 0.01 * 10 ** YourStableClient.underlyingDecimal;
  const yourStableCoin = await getInputCoins(
    tx,
    suiClient,
    signer.toSuiAddress(),
    yourStableCoinType,
    BigInt(burnedAmount),
  );
  // stableCoin Amount to redeem
  const redeemedAmount = BigInt(burnedAmount);
  const buckCoin = factory.burnYourStableMoveCall(
    tx,
    yourStableCoin,
    "USDC",
    signer.toSuiAddress(),
    redeemedAmount,
  );

  tx.transferObjects([buckCoin], signer.toSuiAddress());

  const dryRunResponse = await dryRun(suiClient, tx, signer.toSuiAddress());
  logger.info({ dryRunResponse });

  if (dryRunResponse.dryrunRes.effects.status.status === "success") {
    //execute transaction if it's proper
    const response = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer,
    });

    logger.info({ response });
  } else {
    logger.error(dryRunResponse.dryrunRes.effects.status.error);
  }
}

export async function claimReward() {
  const signer = loadSigner();

  const yourStableCoinType =
    "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD";

  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  const stsBuckCoin = factory.claimRewardMoveCall(tx);
  tx.transferObjects([stsBuckCoin], signer.toSuiAddress());

  const dryRunResponse = await dryRun(suiClient, tx, signer.toSuiAddress());

  if (dryRunResponse.dryrunRes.effects.status.status === "success") {
    //execute transaction if it's proper
    const response = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer,
    });

    logger.info({ response });
  } else {
    logger.error(dryRunResponse.dryrunRes.effects.status.error);
  }
}

export async function setBaseLimit() {
  const signer = loadSigner();

  const yourStableCoinType =
    "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD";

  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  factory.setBasicLimitMoveCall(tx, BigInt(100 * 1000 * 10 ** 9));

  const dryRunResponse = await dryRun(suiClient, tx, signer.toSuiAddress());

  if (dryRunResponse.dryrunRes.effects.status.status === "success") {
    //execute transaction if it's proper
    const response = await suiClient.signAndExecuteTransaction({
      transaction: tx,
      signer,
    });

    logger.info({ response });
  } else {
    logger.error(dryRunResponse.dryrunRes.effects.status.error);
  }
}

async function getYourStableFactory() {
  const yourStableCoinType =
    "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD";

  // create Factory instance
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const yourStableTotalSupply =
    Number(await factory.getYourStableTotalSupply()) / 10 ** 9;
  const yourStableBasicSupply =
    Number(await factory.getYourStableBasicSupply()) / 10 ** 9;
  const yourStableExtensionSupplies =
    await factory.getYourStableExtensionSupplies();
  const underlyingSTSBUCKBalance = Number(
    factory.getUnderlyingSTSBUCKBalance(),
  );
  const underlyingSTSBUCKReserve =
    Number(factory.getUnderlyingSTSBuckReserve()) / 10 ** 9;
  const rewardSTSBuckAmount =
    Number(await factory.getRewardsSTSBuckAmount()) / 10 ** 9;
  const rewardsBuckAmount =
    Number(await factory.getRewardsBuckAmount()) / 10 ** 9;
  const quotedBuckFromUnderlyingSTSBuckBalance =
    Number(
      await factory.getQuotedStableCoinAmountByStSBuckAmount(
        BigInt(underlyingSTSBUCKBalance),
      ),
    ) /
    10 ** 9;

  logger.info({
    yourStableTotalSupply,
    yourStableBasicSupply,
    yourStableExtensionSupplies,
    underlyingSTSBUCKBalance,
    underlyingSTSBUCKReserve,
    rewardSTSBuckAmount,
    rewardsBuckAmount,
    quotedBuckFromUnderlyingSTSBuckBalance,
  });
}

setBaseLimit().catch(console.error);
