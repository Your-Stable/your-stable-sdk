import { type SuiClient } from "@mysten/sui/client";
import { type Transaction } from "@mysten/sui/transactions";
import { DUMMY_ADDRESS } from "../lib/constant";

export async function dryRun(
  client: SuiClient,
  tx: Transaction,
  senderAddress: string,
) {
  tx.setSender(senderAddress);
  const bytes = await tx.build({ client });
  return {
    dryrunRes: await client.dryRunTransactionBlock({
      transactionBlock: bytes,
    }),
    txBytes: bytes,
  };
}

export async function devInspectTransaction(
  client: SuiClient,
  tx: Transaction,
) {
  return await client.devInspectTransactionBlock({
    sender: DUMMY_ADDRESS,
    transactionBlock: tx,
  });
}
