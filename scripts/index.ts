import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import dotenv from "dotenv";
import pino from "pino";

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
  const signer = loadSigner();

  const senderAddress = signer.toSuiAddress();

  logger.info(`Using Signer: ${senderAddress}`);
}

// eslint-disable-next-line no-console
main().catch(console.error);
