import { PUBLISHED_AT } from "..";
import { String as String1 } from "../../_dependencies/source/0x1/ascii/structs";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { GenericArg, generic, obj, pure } from "../../_framework/util";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export function errInvalidExtensionType(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::err_invalid_extension_type`,
    arguments: [],
  });
}

export function errSenderIsNotBeneficiary(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::err_sender_is_not_beneficiary`,
    arguments: [],
  });
}

export interface NewArgs {
  registry: TransactionObjectInput;
  config: TransactionObjectInput;
  treasuryCap: TransactionObjectInput;
  coinMetadata: TransactionObjectInput;
  limit: bigint | TransactionArgument;
}

export function new_(tx: Transaction, typeArg: string, args: NewArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::new`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.registry),
      obj(tx, args.config),
      obj(tx, args.treasuryCap),
      obj(tx, args.coinMetadata),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface MintArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
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
      obj(tx, args.config),
      obj(tx, args.vault),
      obj(tx, args.bucketProtocol),
      obj(tx, args.clock),
      obj(tx, args.stableCoin),
    ],
  });
}

export interface BurnArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  bucketProtocol: TransactionObjectInput;
  vault: TransactionObjectInput;
  flask: TransactionObjectInput;
  fountain: TransactionObjectInput;
  strategy: TransactionObjectInput;
  clock: TransactionObjectInput;
  yourStableCoin: TransactionObjectInput;
}

export function burn(tx: Transaction, typeArg: string, args: BurnArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::burn`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.config),
      obj(tx, args.bucketProtocol),
      obj(tx, args.vault),
      obj(tx, args.flask),
      obj(tx, args.fountain),
      obj(tx, args.strategy),
      obj(tx, args.clock),
      obj(tx, args.yourStableCoin),
    ],
  });
}

export interface BurnAndRedeemArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  queue: TransactionObjectInput;
  bucketProtocol: TransactionObjectInput;
  vault: TransactionObjectInput;
  flask: TransactionObjectInput;
  fountain: TransactionObjectInput;
  strategy: TransactionObjectInput;
  clock: TransactionObjectInput;
  yourStableCoin: TransactionObjectInput;
  redeemedAmount: bigint | TransactionArgument;
  recipient: string | TransactionArgument;
}

export function burnAndRedeem(
  tx: Transaction,
  typeArgs: [string, string],
  args: BurnAndRedeemArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::burn_and_redeem`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.config),
      obj(tx, args.queue),
      obj(tx, args.bucketProtocol),
      obj(tx, args.vault),
      obj(tx, args.flask),
      obj(tx, args.fountain),
      obj(tx, args.strategy),
      obj(tx, args.clock),
      obj(tx, args.yourStableCoin),
      pure(tx, args.redeemedAmount, `u64`),
      pure(tx, args.recipient, `address`),
    ],
  });
}

export interface RedeemArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  bucketProtocol: TransactionObjectInput;
  vault: TransactionObjectInput;
  flask: TransactionObjectInput;
  fountain: TransactionObjectInput;
  strategy: TransactionObjectInput;
  clock: TransactionObjectInput;
  yourStableCoin: TransactionObjectInput;
}

export function redeem(
  tx: Transaction,
  typeArgs: [string, string],
  args: RedeemArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::redeem`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.config),
      obj(tx, args.bucketProtocol),
      obj(tx, args.vault),
      obj(tx, args.flask),
      obj(tx, args.fountain),
      obj(tx, args.strategy),
      obj(tx, args.clock),
      obj(tx, args.yourStableCoin),
    ],
  });
}

export interface MintWithExtensionArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  witness: GenericArg;
  yourStableAmount: bigint | TransactionArgument;
}

export function mintWithExtension(
  tx: Transaction,
  typeArgs: [string, string],
  args: MintWithExtensionArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::mint_with_extension`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.config),
      generic(tx, `${typeArgs[0]}`, args.witness),
      pure(tx, args.yourStableAmount, `u64`),
    ],
  });
}

export interface BurnWithExtensionArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  witness: GenericArg;
  yourStableCoin: TransactionObjectInput;
}

export function burnWithExtension(
  tx: Transaction,
  typeArgs: [string, string],
  args: BurnWithExtensionArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::burn_with_extension`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.config),
      generic(tx, `${typeArgs[0]}`, args.witness),
      obj(tx, args.yourStableCoin),
    ],
  });
}

export interface SetBasicLimitArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
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
      obj(tx, args.config),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface SetExtensionLimitArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
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
      obj(tx, args.config),
      pure(tx, args.limit, `u64`),
    ],
  });
}

export interface ClaimRewardArgs {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
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
      obj(tx, args.factory),
      obj(tx, args.config),
      obj(tx, args.vault),
      obj(tx, args.clock),
    ],
  });
}

export interface UpdateMetadataArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
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
      obj(tx, args.config),
      obj(tx, args.metadata),
      pure(tx, args.name, `${Option.$typeName}<${String.$typeName}>`),
      pure(tx, args.symbol, `${Option.$typeName}<${String1.$typeName}>`),
      pure(tx, args.description, `${Option.$typeName}<${String.$typeName}>`),
      pure(tx, args.iconUrl, `${Option.$typeName}<${String1.$typeName}>`),
    ],
  });
}

export interface AddBeneficiaryArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  account: string | TransactionArgument;
}

export function addBeneficiary(
  tx: Transaction,
  typeArg: string,
  args: AddBeneficiaryArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::add_beneficiary`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.cap),
      obj(tx, args.factory),
      obj(tx, args.config),
      pure(tx, args.account, `address`),
    ],
  });
}

export interface RemoveBeneficiaryArgs {
  cap: TransactionObjectInput;
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  account: string | TransactionArgument;
}

export function removeBeneficiary(
  tx: Transaction,
  typeArg: string,
  args: RemoveBeneficiaryArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::remove_beneficiary`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.cap),
      obj(tx, args.factory),
      obj(tx, args.config),
      pure(tx, args.account, `address`),
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

export function yourStableDecimals(
  tx: Transaction,
  typeArg: string,
  factory: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::your_stable_decimals`,
    typeArguments: [typeArg],
    arguments: [obj(tx, factory)],
  });
}

export interface ToUnderlyingAmountArgs {
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
  buckAmount: bigint | TransactionArgument;
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
      pure(tx, args.buckAmount, `u64`),
    ],
  });
}

export interface FromUnderlyingAmountArgs {
  vault: TransactionObjectInput;
  clock: TransactionObjectInput;
  stsbuckAmount: bigint | TransactionArgument;
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
      pure(tx, args.stsbuckAmount, `u64`),
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

export interface ToNormalizedAmountArgs {
  factory: TransactionObjectInput;
  amount: bigint | TransactionArgument;
}

export function toNormalizedAmount(
  tx: Transaction,
  typeArg: string,
  args: ToNormalizedAmountArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::to_normalized_amount`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.factory), pure(tx, args.amount, `u64`)],
  });
}

export interface FromNormalizedAmountArgs {
  factory: TransactionObjectInput;
  amount: bigint | TransactionArgument;
}

export function fromNormalizedAmount(
  tx: Transaction,
  typeArg: string,
  args: FromNormalizedAmountArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::from_normalized_amount`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.factory), pure(tx, args.amount, `u64`)],
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

export interface Burn_Args {
  factory: TransactionObjectInput;
  config: TransactionObjectInput;
  bucketProtocol: TransactionObjectInput;
  vault: TransactionObjectInput;
  flask: TransactionObjectInput;
  fountain: TransactionObjectInput;
  strategy: TransactionObjectInput;
  clock: TransactionObjectInput;
  yourStableCoin: TransactionObjectInput;
}

export function burn_(
  tx: Transaction,
  typeArgs: [string, string],
  args: Burn_Args,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::factory::burn_`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.factory),
      obj(tx, args.config),
      obj(tx, args.bucketProtocol),
      obj(tx, args.vault),
      obj(tx, args.flask),
      obj(tx, args.fountain),
      obj(tx, args.strategy),
      obj(tx, args.clock),
      obj(tx, args.yourStableCoin),
    ],
  });
}
