import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import dotenv from "dotenv";
import pino from "pino";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { COIN_TYPE_LIST, dryRun, YourStableClient } from "your-stable-sdk";
import { Transaction } from "@mysten/sui/transactions";
import { getInputCoins } from "./utils";

export const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

dotenv.config();

export function loadSigner() {
  const secret = process.env?.SUI_PRIVATE_KEY;

  if (!secret) throw "SUI_PRIVATE_KEY env value not setup";
  const { secretKey } = decodeSuiPrivateKey(secret);
  return Ed25519Keypair.fromSecretKey(secretKey);
}

async function main(isRedeemUSDC: boolean) {
  const signer = loadSigner();

  const yourStableCoinType =
    "0x85b4ecaa1d0e8f5289044b8a0721d94d802af20350c71cc4e903f26958e7c82d::up_usd::UP_USD";

  const suiClient = new SuiClient({ url: getFullnodeUrl("mainnet") });

  // create Factory instance
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  logger.info("Interacting with Factory:");
  logger.info({ factory });

  const tx = new Transaction();
  // example: 0.01 YourStable
  const burnedAmount = 0.05 * 10 ** YourStableClient.underlyingDecimal;
  const yourStableCoin = await getInputCoins(
    tx,
    suiClient,
    signer.toSuiAddress(),
    yourStableCoinType,
    BigInt(burnedAmount),
  );
  // stableCoin Amount to redeem
  let buckCoin;
  if (isRedeemUSDC) {
    buckCoin = factory.burnAndRedeemYourStableMoveCall(
      tx,
      yourStableCoin,
      signer.toSuiAddress(),
      BigInt(burnedAmount),
      "USDC",
    );
  } else {
    buckCoin = factory.burnAndGetBuckYourStableMoveCall(tx, yourStableCoin);
  }
  tx.transferObjects([buckCoin], signer.toSuiAddress());

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

main(false).catch(logger.error);
