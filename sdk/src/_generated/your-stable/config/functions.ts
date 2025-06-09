import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function errInvalidPackageVersion( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::err_invalid_package_version`, arguments: [ ], }) }

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::init`, arguments: [ ], }) }

export interface AddPackageVersionArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; version: number | TransactionArgument }

export function addPackageVersion( tx: Transaction, args: AddPackageVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::add_package_version`, arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.version, `u16`) ], }) }

export interface RemovePackageVersionArgs { self: TransactionObjectInput; adminCap: TransactionObjectInput; version: number | TransactionArgument }

export function removePackageVersion( tx: Transaction, args: RemovePackageVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::remove_package_version`, arguments: [ obj(tx, args.self), obj(tx, args.adminCap), pure(tx, args.version, `u16`) ], }) }

export function assertPackageVersion( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::config::assert_package_version`, arguments: [ obj(tx, self) ], }) }
