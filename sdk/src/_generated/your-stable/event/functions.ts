import { PUBLISHED_AT } from "..";
import { ID } from "../../_dependencies/source/0x2/object/structs";
import { obj, pure } from "../../_framework/util";
import type {
  Transaction} from "@mysten/sui/transactions";
import {
  type TransactionArgument,
  type TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface EmitNewFactoryEventArgs {
  factoryId: string | TransactionArgument;
  factoryCap: string | TransactionArgument;
  coinType: TransactionObjectInput;
  limit: bigint | TransactionArgument;
}

export function emitNewFactoryEvent(
  tx: Transaction,
  typeArg: string,
  args: EmitNewFactoryEventArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit_new_factory_event`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.factoryId, `${ID.$typeName}`),
      pure(tx, args.factoryCap, `${ID.$typeName}`),
      obj(tx, args.coinType),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface EmitMintYourStableEventArgs {
  factoryId: string | TransactionArgument;
  stableCoinType: TransactionObjectInput;
  mintedAmount: bigint | TransactionArgument;
  chargedBuck: bigint | TransactionArgument;
  mintedStSbuckAmount: bigint | TransactionArgument;
  factorySupply: bigint | TransactionArgument;
  factoryUnderlyingBalance: bigint | TransactionArgument;
}

export function emitMintYourStableEvent(
  tx: Transaction,
  typeArg: string,
  args: EmitMintYourStableEventArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit_mint_your_stable_event`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.factoryId, `${ID.$typeName}`),
      obj(tx, args.stableCoinType),
      pure(tx, args.mintedAmount, `u64`),
      pure(tx, args.chargedBuck, `u64`),
      pure(tx, args.mintedStSbuckAmount, `u64`),
      pure(tx, args.factorySupply, `u64`),
      pure(tx, args.factoryUnderlyingBalance, `u64`),
    ],
  });
}

export interface EmitBurnYourStableEventArgs {
  factoryId: string | TransactionArgument;
  stableCoinType: TransactionObjectInput;
  burnedAmount: bigint | TransactionArgument;
  dischargedBuck: bigint | TransactionArgument;
  burnedStSbuckAmount: bigint | TransactionArgument;
  factorySupply: bigint | TransactionArgument;
  factoryUnderlyingBalance: bigint | TransactionArgument;
}

export function emitBurnYourStableEvent(
  tx: Transaction,
  typeArg: string,
  args: EmitBurnYourStableEventArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit_burn_your_stable_event`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.factoryId, `${ID.$typeName}`),
      obj(tx, args.stableCoinType),
      pure(tx, args.burnedAmount, `u64`),
      pure(tx, args.dischargedBuck, `u64`),
      pure(tx, args.burnedStSbuckAmount, `u64`),
      pure(tx, args.factorySupply, `u64`),
      pure(tx, args.factoryUnderlyingBalance, `u64`),
    ],
  });
}

export interface EmitClaimRewardEventArgs {
  factory: string | TransactionArgument;
  stSbuckReward: bigint | TransactionArgument;
}

export function emitClaimRewardEvent(
  tx: Transaction,
  typeArg: string,
  args: EmitClaimRewardEventArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit_claim_reward_event`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.factory, `${ID.$typeName}`),
      pure(tx, args.stSbuckReward, `u64`),
    ],
  });
}

export interface EmitCreateQueueTicketEventArgs {
  stableCoinType: TransactionObjectInput;
  maxAmount: bigint | TransactionArgument;
  buckBalance: bigint | TransactionArgument;
  tid: bigint | TransactionArgument;
  timeToRedeem: bigint | TransactionArgument;
}

export function emitCreateQueueTicketEvent(
  tx: Transaction,
  typeArg: string,
  args: EmitCreateQueueTicketEventArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit_create_queue_ticket_event`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.stableCoinType),
      pure(tx, args.maxAmount, `u64`),
      pure(tx, args.buckBalance, `u64`),
      pure(tx, args.tid, `u64`),
      pure(tx, args.timeToRedeem, `u64`),
    ],
  });
}

export interface EmitRedeemEventArgs {
  stableCoinType: TransactionObjectInput;
  buckBalance: bigint | TransactionArgument;
  stableCoinAmount: bigint | TransactionArgument;
  tid: bigint | TransactionArgument;
  timeToRedeem: bigint | TransactionArgument;
  timestamp: bigint | TransactionArgument;
}

export function emitRedeemEvent(
  tx: Transaction,
  typeArg: string,
  args: EmitRedeemEventArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit_redeem_event`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.stableCoinType),
      pure(tx, args.buckBalance, `u64`),
      pure(tx, args.stableCoinAmount, `u64`),
      pure(tx, args.tid, `u64`),
      pure(tx, args.timeToRedeem, `u64`),
      pure(tx, args.timestamp, `u64`),
    ],
  });
}
