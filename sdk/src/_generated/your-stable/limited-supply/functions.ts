import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function errDestroyNonEmptySupply( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::err_destroy_non_empty_supply`, arguments: [ ], }) }

export function errExceedLimit( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::err_exceed_limit`, arguments: [ ], }) }

export function errSupplyNotEnough( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::err_supply_not_enough`, arguments: [ ], }) }

export function errLimitExceedSupply( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::err_limit_exceed_supply`, arguments: [ ], }) }

export function new_( tx: Transaction, limit: bigint | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::new`, arguments: [ pure(tx, limit, `u64`) ], }) }

export function destroy( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::destroy`, arguments: [ obj(tx, self) ], }) }

export interface IncreaseArgs { self: TransactionObjectInput; amount: bigint | TransactionArgument }

export function increase( tx: Transaction, args: IncreaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::increase`, arguments: [ obj(tx, args.self), pure(tx, args.amount, `u64`) ], }) }

export interface DecreaseArgs { self: TransactionObjectInput; amount: bigint | TransactionArgument }

export function decrease( tx: Transaction, args: DecreaseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::decrease`, arguments: [ obj(tx, args.self), pure(tx, args.amount, `u64`) ], }) }

export interface SetLimitArgs { self: TransactionObjectInput; limit: bigint | TransactionArgument }

export function setLimit( tx: Transaction, args: SetLimitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::set_limit`, arguments: [ obj(tx, args.self), pure(tx, args.limit, `u64`) ], }) }

export function limit( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::limit`, arguments: [ obj(tx, self) ], }) }

export function supply( tx: Transaction, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::limited_supply::supply`, arguments: [ obj(tx, self) ], }) }
