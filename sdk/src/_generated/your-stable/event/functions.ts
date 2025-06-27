import {PUBLISHED_AT} from "..";
import {String as String1} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface EmitNewFactoryEventArgs { factoryId: string | TransactionArgument; factoryCap: string | TransactionArgument; coinType: TransactionObjectInput; decimals: number | TransactionArgument; limit: bigint | TransactionArgument }

export function emitNewFactoryEvent( tx: Transaction, typeArg: string, args: EmitNewFactoryEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_new_factory_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.factoryId, `${ID.$typeName}`), pure(tx, args.factoryCap, `${ID.$typeName}`), obj(tx, args.coinType), pure(tx, args.decimals, `u8`), pure(tx, args.limit, `u64`) ], }) }

export interface EmitMintYourStableEventArgs { factoryId: string | TransactionArgument; stableCoinType: TransactionObjectInput; mintedAmount: bigint | TransactionArgument; chargedBuck: bigint | TransactionArgument; mintedStSbuckAmount: bigint | TransactionArgument; factorySupply: bigint | TransactionArgument; factoryUnderlyingBalance: bigint | TransactionArgument }

export function emitMintYourStableEvent( tx: Transaction, typeArg: string, args: EmitMintYourStableEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_mint_your_stable_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.factoryId, `${ID.$typeName}`), obj(tx, args.stableCoinType), pure(tx, args.mintedAmount, `u64`), pure(tx, args.chargedBuck, `u64`), pure(tx, args.mintedStSbuckAmount, `u64`), pure(tx, args.factorySupply, `u64`), pure(tx, args.factoryUnderlyingBalance, `u64`) ], }) }

export interface EmitBurnYourStableEventArgs { factoryId: string | TransactionArgument; stableCoinType: TransactionObjectInput; yourStableAmount: bigint | TransactionArgument; burnedStSbuckAmount: bigint | TransactionArgument; withdrawalBuck: bigint | TransactionArgument; factorySupply: bigint | TransactionArgument; factoryUnderlyingBalance: bigint | TransactionArgument }

export function emitBurnYourStableEvent( tx: Transaction, typeArg: string, args: EmitBurnYourStableEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_burn_your_stable_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.factoryId, `${ID.$typeName}`), obj(tx, args.stableCoinType), pure(tx, args.yourStableAmount, `u64`), pure(tx, args.burnedStSbuckAmount, `u64`), pure(tx, args.withdrawalBuck, `u64`), pure(tx, args.factorySupply, `u64`), pure(tx, args.factoryUnderlyingBalance, `u64`) ], }) }

export interface EmitMintYourStableWithExtensionEventArgs { factoryId: string | TransactionArgument; extensionType: TransactionObjectInput; yourStableAmount: bigint | TransactionArgument; extensionSupply: bigint | TransactionArgument }

export function emitMintYourStableWithExtensionEvent( tx: Transaction, typeArg: string, args: EmitMintYourStableWithExtensionEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_mint_your_stable_with_extension_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.factoryId, `${ID.$typeName}`), obj(tx, args.extensionType), pure(tx, args.yourStableAmount, `u64`), pure(tx, args.extensionSupply, `u64`) ], }) }

export interface EmitBurnYourStableWithExtensionEventArgs { factoryId: string | TransactionArgument; extensionType: TransactionObjectInput; yourStableAmount: bigint | TransactionArgument; extensionSupply: bigint | TransactionArgument }

export function emitBurnYourStableWithExtensionEvent( tx: Transaction, typeArg: string, args: EmitBurnYourStableWithExtensionEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_burn_your_stable_with_extension_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.factoryId, `${ID.$typeName}`), obj(tx, args.extensionType), pure(tx, args.yourStableAmount, `u64`), pure(tx, args.extensionSupply, `u64`) ], }) }

export interface EmitClaimRewardEventArgs { factory: string | TransactionArgument; stSbuckReward: bigint | TransactionArgument; sender: string | TransactionArgument }

export function emitClaimRewardEvent( tx: Transaction, typeArg: string, args: EmitClaimRewardEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_claim_reward_event`, typeArguments: [typeArg], arguments: [ pure(tx, args.factory, `${ID.$typeName}`), pure(tx, args.stSbuckReward, `u64`), pure(tx, args.sender, `address`) ], }) }

export interface SetBasicLimitArgs { factory: string | TransactionArgument; limit: bigint | TransactionArgument }

export function setBasicLimit( tx: Transaction, typeArg: string, args: SetBasicLimitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::set_basic_limit`, typeArguments: [typeArg], arguments: [ pure(tx, args.factory, `${ID.$typeName}`), pure(tx, args.limit, `u64`) ], }) }

export interface SetExtensionLimitArgs { factory: string | TransactionArgument; extension: TransactionObjectInput; limit: bigint | TransactionArgument }

export function setExtensionLimit( tx: Transaction, typeArg: string, args: SetExtensionLimitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::set_extension_limit`, typeArguments: [typeArg], arguments: [ pure(tx, args.factory, `${ID.$typeName}`), obj(tx, args.extension), pure(tx, args.limit, `u64`) ], }) }

export interface UpdateMetadataArgs { factory: string | TransactionArgument; metadata: string | TransactionArgument; name: (string | TransactionArgument | TransactionArgument | null); symbol: (string | TransactionArgument | TransactionArgument | null); description: (string | TransactionArgument | TransactionArgument | null); iconUrl: (string | TransactionArgument | TransactionArgument | null) }

export function updateMetadata( tx: Transaction, typeArg: string, args: UpdateMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::update_metadata`, typeArguments: [typeArg], arguments: [ pure(tx, args.factory, `${ID.$typeName}`), pure(tx, args.metadata, `${ID.$typeName}`), pure(tx, args.name, `${Option.$typeName}<${String.$typeName}>`), pure(tx, args.symbol, `${Option.$typeName}<${String1.$typeName}>`), pure(tx, args.description, `${Option.$typeName}<${String.$typeName}>`), pure(tx, args.iconUrl, `${Option.$typeName}<${String1.$typeName}>`) ], }) }

export interface EmitCreateQueueTicketEventArgs { stableCoinType: TransactionObjectInput; maxAmount: bigint | TransactionArgument; buckBalance: bigint | TransactionArgument; tid: bigint | TransactionArgument; timeToRedeem: bigint | TransactionArgument; recipient: string | TransactionArgument }

export function emitCreateQueueTicketEvent( tx: Transaction, typeArg: string, args: EmitCreateQueueTicketEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_create_queue_ticket_event`, typeArguments: [typeArg], arguments: [ obj(tx, args.stableCoinType), pure(tx, args.maxAmount, `u64`), pure(tx, args.buckBalance, `u64`), pure(tx, args.tid, `u64`), pure(tx, args.timeToRedeem, `u64`), pure(tx, args.recipient, `address`) ], }) }

export interface EmitRedeemEventArgs { stableCoinType: TransactionObjectInput; buckBalance: bigint | TransactionArgument; stableCoinAmount: bigint | TransactionArgument; tid: bigint | TransactionArgument; timeToRedeem: bigint | TransactionArgument; timestamp: bigint | TransactionArgument }

export function emitRedeemEvent( tx: Transaction, typeArg: string, args: EmitRedeemEventArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_redeem_event`, typeArguments: [typeArg], arguments: [ obj(tx, args.stableCoinType), pure(tx, args.buckBalance, `u64`), pure(tx, args.stableCoinAmount, `u64`), pure(tx, args.tid, `u64`), pure(tx, args.timeToRedeem, `u64`), pure(tx, args.timestamp, `u64`) ], }) }

export interface EmitSetRedeemerArgs { queue: string | TransactionArgument; redeemer: (string | TransactionArgument | TransactionArgument | null) }

export function emitSetRedeemer( tx: Transaction, typeArg: string, args: EmitSetRedeemerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::event::emit_set_redeemer`, typeArguments: [typeArg], arguments: [ pure(tx, args.queue, `${ID.$typeName}`), pure(tx, args.redeemer, `${Option.$typeName}<address>`) ], }) }
