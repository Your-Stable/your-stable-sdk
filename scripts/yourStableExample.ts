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
import { Factory } from "your-stable-sdk/_generated/your-stable/factory/structs";

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
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

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
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

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
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

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
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

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

  const tx = new Transaction();
  YourStableClient.batchRedeem(tx, "USDC", null, BigInt(100));

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
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

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

export async function updateMetadata() {
  const signer = loadSigner();

  const yourStableCoinType =
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

  // create Factory instance
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  logger.info("Interacting with Factory:");
  logger.info({ factory });

  const tx = new Transaction();
  const metadataObjectId =
    "0x9aa8e18af0d91d6be64c9478ad6ef01e513720664b816545aed79071014a2d62";
  factory.updateMetadataMoveCall(tx, metadataObjectId, {
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBPdXRlciBjaXJjbGUgLS0+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NSIgZmlsbD0iYmxhY2siIHN0cm9rZT0ibm9uZSIvPgogIAogIDwhLS0gSW5uZXIgY2lyY2xlIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9IndoaXRlIiBzdHJva2U9Im5vbmUiLz4KICA8IS0tIExhcmdlICJKIiBpbiB0aGUgY2VudGVyIC0tPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iODYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIAogICAgICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj5KPC90ZXh0PgogIAogIDwhLS0gIlVTRCIgdGV4dCBiZWxvdyB0aGUgSiAtLT4KICA8dGV4dCB4PSIxMDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSIzMDAiIAogICAgICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIiBvcGFjaXR5PSIwLjciPlVTRDwvdGV4dD4KICA8IS0tIFNpbXBsZSBib3JkZXIgcmluZyAtLT4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9Ijg3IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=",
  });

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

async function getYourStableFactory() {
  const yourStableCoinType =
    "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";

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
    Number(await factory.getUnderlyingSTSBuckReserve()) / 10 ** 9;
  const rewardSTSBuckAmount =
    Number(await factory.getRewardsSTSBuckAmount()) / 10 ** 9;
  const rewardsBuckAmount =
    Number(await factory.getRewardsBuckAmount()) / 10 ** 9;
  const quotedBuckFromUnderlyingSTSBuckBalance =
    Number(
      await YourStableClient.getQuotedStableCoinAmountByStSBuckAmount(
        suiClient,
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

getYourStableFactory().catch(console.error);
