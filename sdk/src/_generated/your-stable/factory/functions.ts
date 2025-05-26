import { PUBLISHED_AT } from "..";
import { String as String1 } from "../../_dependencies/source/0x1/ascii/structs";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { obj, pure } from "../../_framework/util";
import type {
  Transaction} from "@mysten/sui/transactions";
import {
  type TransactionArgument,
  type TransactionObjectInput,
} from "@mysten/sui/transactions";

export function errMismatchedDecimals(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::err_mismatched_decimals`,
    arguments: [],
  });
}

export interface NewArgs {
  treasuryCap: TransactionObjectInput;
  coinMetadata: TransactionObjectInput;
  limit: bigint | TransactionArgument;
}

export function new_(tx: Transaction, typeArg: string, args: NewArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::new`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.treasuryCap),
      obj(tx, args.coinMetadata),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface MintArgs {
  factory: TransactionObjectInput;
  vault: TransactionObjectInput;
  bucketProtocol: TransactionObjectInput;
  clock: TransactionObjectInput;
  stableCoin: TransactionObjectInput;
}

export function mint(
  tx: Transaction,
  typeArgs: [string, string],
  args: MintArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::mint`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.vault),
      obj(tx, args.bucketProtocol),
      obj(tx, args.clock),
      obj(tx, args.stableCoin),
    ],
  });
}

export interface BurnArgs {
  factory: TransactionObjectInput;
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
  yourStableCoin: TransactionObjectInput;
}

export function burn(
  tx: Transaction,
  typeArgs: [string, string],
  args: BurnArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::burn`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.vault),
      obj(tx, args.clock),
      obj(tx, args.yourStableCoin),
    ],
  });
}

export interface SetBasicLimitArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  limit: bigint | TransactionArgument;
}

export function setBasicLimit(
  tx: Transaction,
  typeArg: string,
  args: SetBasicLimitArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::set_basic_limit`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.cap),
      obj(tx, args.factory),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface SetExtensionLimitArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  limit: bigint | TransactionArgument;
}

export function setExtensionLimit(
  tx: Transaction,
  typeArgs: [string, string],
  args: SetExtensionLimitArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::set_extension_limit`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.cap),
      obj(tx, args.factory),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface ClaimRewardArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
}

export function claimReward(
  tx: Transaction,
  typeArg: string,
  args: ClaimRewardArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::claim_reward`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.cap),
      obj(tx, args.factory),
      obj(tx, args.vault),
      obj(tx, args.clock),
    ],
  });
}

export interface UpdateMetadataArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  metadata: TransactionObjectInput;
  name: string | TransactionArgument | TransactionArgument | null;
  symbol: string | TransactionArgument | TransactionArgument | null;
  description: string | TransactionArgument | TransactionArgument | null;
  iconUrl: string | TransactionArgument | TransactionArgument | null;
}

export function updateMetadata(
  tx: Transaction,
  typeArg: string,
  args: UpdateMetadataArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::update_metadata`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.cap),
      obj(tx, args.factory),
      obj(tx, args.metadata),
      pure(tx, args.name, `${Option.$typeName}<${String.$typeName}>`),
      pure(tx, args.symbol, `${Option.$typeName}<${String1.$typeName}>`),
      pure(tx, args.description, `${Option.$typeName}<${String.$typeName}>`),
      pure(tx, args.iconUrl, `${Option.$typeName}<${String1.$typeName}>`),
    ],
  });
}

export function underlyingBalance(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::underlying_balance`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}

export function totalSupply(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::total_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}

export function basicSupply(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::basic_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}

export interface UnderlyingReserveArgs {
  factory: TransactionObjectInput;
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
}

export function underlyingReserve(
  tx: Transaction,
  typeArg: string,
  args: UnderlyingReserveArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::underlying_reserve`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.vault),
      obj(tx, args.clock),
    ],
  });
}

export function extensionSupplies(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::extension_supplies`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}

export function underlyingDecimals(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::underlying_decimals`,
    arguments: [],
  });
}

export interface ToUnderlyingAmountArgs {
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
  stableAmount: bigint | TransactionArgument;
}

export function toUnderlyingAmount(
  tx: Transaction,
  args: ToUnderlyingAmountArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::to_underlying_amount`,
    arguments: [
      obj(tx, args.vault),
      obj(tx, args.clock),
      pure(tx, args.stableAmount, `u64`),
    ],
  });
}

export interface FromUnderlyingAmountArgs {
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
  underlyingAmount: bigint | TransactionArgument;
}

export function fromUnderlyingAmount(
  tx: Transaction,
  args: FromUnderlyingAmountArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::from_underlying_amount`,
    arguments: [
      obj(tx, args.vault),
      obj(tx, args.clock),
      pure(tx, args.underlyingAmount, `u64`),
    ],
  });
}

export interface GetRewardsAmountArgs {
  factory: TransactionObjectInput;
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
}

export function getRewardsAmount(
  tx: Transaction,
  typeArg: string,
  args: GetRewardsAmountArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::get_rewards_amount`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.vault),
      obj(tx, args.clock),
    ],
  });
}

export interface GetRewardsValueArgs {
  factory: TransactionObjectInput;
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
}

export function getRewardsValue(
  tx: Transaction,
  typeArg: string,
  args: GetRewardsValueArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::get_rewards_value`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.vault),
      obj(tx, args.clock),
    ],
  });
}

export function borrowCap(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::borrow_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}

export function borrowCapMut(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::borrow_cap_mut`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}
