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
    yourStableCoinType:
      "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD",
    // yourStableCoinType: "",
    treasuryCapId:
      "0x82004b20e7d6b78eceeb61fc69d2c3e5a10a9e4448d37a2876e67fe5059741ce",
    // treasuryCapId: "",
    metadataObjectId:
    "0x9aa8e18af0d91d6be64c9478ad6ef01e513720664b816545aed79071014a2d62",
    // metadataObjectId: "",
    supplyLimit: BigInt(10000 * 10 ** YourStableClient.underlyingDecimal),
    // supplyLimit: BigInt(0),
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
  const buckCoin = factory.burnYourStableMoveCall(tx, yourStableCoin, "USDC");

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

export async function burnAndRedeemYourStable(
  burnedAmount: bigint,
  redeemedAmount: bigint,
) {
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
  const yourStableCoin = await getInputCoins(
    tx,
    suiClient,
    signer.toSuiAddress(),
    yourStableCoinType,
    burnedAmount,
  );
  // stableCoin Amount to redeem
  const buckCoin = factory.burnAndRedeemYourStableMoveCall(
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

export async function batchRedeem() {
  const signer = loadSigner();

  const yourStableCoinType =
    "0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD";

  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  factory.batchRedeem(tx, 'USDC', null, BigInt(100))

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

createFactory().catch(console.error);
