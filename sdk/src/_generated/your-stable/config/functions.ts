import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function errInvalidPackageVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::err_invalid_package_version`, arguments: [ ], }) }

export function errNotWhitelisted( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::err_not_whitelisted`, arguments: [ ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::init`, arguments: [ ], }) }

export interface AddPackageVersionArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; version: number | TransactionArgument }

export function addPackageVersion( tx: Transaction, args: AddPackageVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::add_package_version`, arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.version, `u16`) ], }) }

export interface RemovePackageVersionArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; version: number | TransactionArgument }

export function removePackageVersion( tx: Transaction, args: RemovePackageVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::remove_package_version`, arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.version, `u16`) ], }) }

export interface AddWhitelistArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput }

export function addWhitelist( tx: Transaction, typeArg: string, args: AddWhitelistArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::add_whitelist`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.adminCap) ], }) }

export interface RemoveWhitelistArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput }

export function removeWhitelist( tx: Transaction, typeArg: string, args: RemoveWhitelistArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::remove_whitelist`, typeArguments: [typeArg], arguments: [ obj(tx, args.self), obj(tx, args.adminCap) ], }) }

export function packageVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::package_version`, arguments: [ ], }) }

export function assertPackageVersion( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::assert_package_version`, arguments: [ obj(tx, self) ], }) }

export function assertIsWhitelisted( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::assert_is_whitelisted`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export interface AddReserveArgs { config: TransactionObjectInput; coin: TransactionObjectInput }

export function addReserve( tx: Transaction, args: AddReserveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::add_reserve`, arguments: [ obj(tx, args.config), obj(tx, args.coin) ], }) }

export interface TakeFromReserveArgs { config: TransactionObjectInput; amount: bigint | TransactionArgument }

export function takeFromReserve( tx: Transaction, args: TakeFromReserveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::take_from_reserve`, arguments: [ obj(tx, args.config), pure(tx, args.amount, `u64`) ], }) }
