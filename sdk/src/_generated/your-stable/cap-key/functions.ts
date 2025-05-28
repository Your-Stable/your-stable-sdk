import {PUBLISHED_AT} from "..";
import {Transaction} from "@mysten/sui/transactions";

export function capKey( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::cap_key::cap_key`, arguments: [ ], }) }
