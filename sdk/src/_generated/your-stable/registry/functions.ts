import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::init`, arguments: [ ], }) }

export interface RegisterArgs { registry: TransactionObjectInput; factoryId: string | TransactionArgument; factoryCapId: string | TransactionArgument }

export function register( tx: Transaction, typeArg: string, args: RegisterArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::registry::register`, typeArguments: [typeArg], arguments: [ obj(tx, args.registry), pure(tx, args.factoryId, `${ID.$typeName}`), pure(tx, args.factoryCapId, `${ID.$typeName}`) ], }) }
