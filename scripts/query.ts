import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import dotenv from "dotenv";
import pino from "pino";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { YourStableClient } from "your-stable-sdk";

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

async function main() {
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

  // add referch function to sync the latest state
  await factory.updateFactory();

  logger.info(await factory.getRewardsBuckAmount());
  logger.info(await factory.getRewardsSTSBuckAmount());
  logger.info(factory.getYourStableBasicSupply());
  logger.info(factory.getYourStableTotalSupply());
  logger.info(factory.getUnderlyingSTSBUCKBalance());
  logger.info(await factory.getUnderlyingSTSBuckReserve());
  logger.info(factory.getYourStableExtensionSupplies());
}

main().catch(logger.error);
