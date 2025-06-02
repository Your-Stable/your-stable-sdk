import {PUBLISHED_AT} from "..";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function errQueueIsNotActive( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::err_queue_is_not_active`, arguments: [ ], }) }

export function errExceedMaxAmountToRedeem( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::err_exceed_max_amount_to_redeem`, arguments: [ ], }) }

export function errInvalidRedeemer( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::err_invalid_redeemer`, arguments: [ ], }) }

export function errIndexExceedSize( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::err_index_exceed_size`, arguments: [ ], }) }

export function errZeroBatchSize( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::err_zero_batch_size`, arguments: [ ], }) }

export function errInvalidAddress( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::err_invalid_address`, arguments: [ ], }) }

export function redeemRequestMaxAmount( tx: Transaction, typeArgs: [string, string], quest: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::redeem_request_max_amount`, typeArguments: typeArgs, arguments: [ obj(tx, quest) ], }) }

export interface RequestArgs { r: GenericArg; maxAmount: bigint | TransactionArgument }

export function request( tx: Transaction, typeArgs: [string, string], args: RequestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::request`, typeArguments: typeArgs, arguments: [ generic(tx, `${typeArgs[1]}`, args.r), pure(tx, args.maxAmount, `u64`) ], }) }

export interface AddBalanceArgs { req: TransactionObjectInput; balance: TransactionObjectInput }

export function addBalance( tx: Transaction, typeArgs: [string, string], args: AddBalanceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::add_balance`, typeArguments: typeArgs, arguments: [ obj(tx, args.req), obj(tx, args.balance) ], }) }

export interface CreateTicketArgs { queue: TransactionObjectInput; clock: TransactionObjectInput; req: TransactionObjectInput; recipient: string | TransactionArgument }

export function createTicket( tx: Transaction, typeArgs: [string, string], args: CreateTicketArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::create_ticket`, typeArguments: typeArgs, arguments: [ obj(tx, args.queue), obj(tx, args.clock), obj(tx, args.req), pure(tx, args.recipient, `address`) ], }) }

export interface BatchRedeemArgs { queue: TransactionObjectInput; bucketProtocol: TransactionObjectInput; clock: TransactionObjectInput; batchStart: (bigint | TransactionArgument | TransactionArgument | null); batchSize: bigint | TransactionArgument }

export function batchRedeem( tx: Transaction, typeArgs: [string, string], args: BatchRedeemArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::batch_redeem`, typeArguments: typeArgs, arguments: [ obj(tx, args.queue), obj(tx, args.bucketProtocol), obj(tx, args.clock), pure(tx, args.batchStart, `${Option.$typeName}<u64>`), pure(tx, args.batchSize, `u64`) ], }) }

export interface CreateArgs { adminCap: TransactionObjectInput; delay: bigint | TransactionArgument; redeemer: (string | TransactionArgument | TransactionArgument | null) }

export function create( tx: Transaction, typeArgs: [string, string], args: CreateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::create`, typeArguments: typeArgs, arguments: [ obj(tx, args.adminCap), pure(tx, args.delay, `u64`), pure(tx, args.redeemer, `${Option.$typeName}<address>`) ], }) }

export interface SetRedeemerArgs { queue: TransactionObjectInput; adminCap: TransactionObjectInput; redeemer: (string | TransactionArgument | TransactionArgument | null) }

export function setRedeemer( tx: Transaction, typeArgs: [string, string], args: SetRedeemerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::set_redeemer`, typeArguments: typeArgs, arguments: [ obj(tx, args.queue), obj(tx, args.adminCap), pure(tx, args.redeemer, `${Option.$typeName}<address>`) ], }) }

export interface SetDelayArgs { queue: TransactionObjectInput; adminCap: TransactionObjectInput; delay: bigint | TransactionArgument }

export function setDelay( tx: Transaction, typeArgs: [string, string], args: SetDelayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::set_delay`, typeArguments: typeArgs, arguments: [ obj(tx, args.queue), obj(tx, args.adminCap), pure(tx, args.delay, `u64`) ], }) }

export interface ToggleActiveArgs { queue: TransactionObjectInput; adminCap: TransactionObjectInput }

export function toggleActive( tx: Transaction, typeArgs: [string, string], args: ToggleActiveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::toggle_active`, typeArguments: typeArgs, arguments: [ obj(tx, args.queue), obj(tx, args.adminCap) ], }) }

export function isActive( tx: Transaction, typeArgs: [string, string], queue: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::is_active`, typeArguments: typeArgs, arguments: [ obj(tx, queue) ], }) }

export function assertIsActive( tx: Transaction, typeArgs: [string, string], queue: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::assert_is_active`, typeArguments: typeArgs, arguments: [ obj(tx, queue) ], }) }

export function assertIsRedeemer( tx: Transaction, typeArgs: [string, string], queue: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::assert_is_redeemer`, typeArguments: typeArgs, arguments: [ obj(tx, queue) ], }) }

export function innerTable( tx: Transaction, typeArgs: [string, string], queue: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::inner_table`, typeArguments: typeArgs, arguments: [ obj(tx, queue) ], }) }

export function delay( tx: Transaction, typeArgs: [string, string], queue: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::delay`, typeArguments: typeArgs, arguments: [ obj(tx, queue) ], }) }

export function ticketRecipient( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::ticket_recipient`, arguments: [ obj(tx, ticket) ], }) }

export function ticketBalance( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::ticket_balance`, arguments: [ obj(tx, ticket) ], }) }

export function timeToRedeem( tx: Transaction, ticket: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::redemption_queue::time_to_redeem`, arguments: [ obj(tx, ticket) ], }) }
