import * as reified from "../../_framework/reified";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {LinkedTable} from "../../_dependencies/source/0x2/linked-table/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {BUCK} from "../../_dependencies/source/0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2/buck/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== RedemptionQueueW =============================== */

export function isRedemptionQueueW(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::redemption_queue::RedemptionQueueW`; }

export interface RedemptionQueueWFields { dummyField: ToField<"bool"> }

export type RedemptionQueueWReified = Reified< RedemptionQueueW, RedemptionQueueWFields >;

export class RedemptionQueueW implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::redemption_queue::RedemptionQueueW`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RedemptionQueueW.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::redemption_queue::RedemptionQueueW`; readonly $typeArgs: []; readonly $isPhantom = RedemptionQueueW.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: RedemptionQueueWFields, ) { this.$fullTypeName = composeSuiType( RedemptionQueueW.$typeName, ...typeArgs ) as `${typeof PKG_V1}::redemption_queue::RedemptionQueueW`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): RedemptionQueueWReified { return { typeName: RedemptionQueueW.$typeName, fullTypeName: composeSuiType( RedemptionQueueW.$typeName, ...[] ) as `${typeof PKG_V1}::redemption_queue::RedemptionQueueW`, typeArgs: [ ] as [], isPhantom: RedemptionQueueW.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RedemptionQueueW.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RedemptionQueueW.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RedemptionQueueW.fromBcs( data, ), bcs: RedemptionQueueW.bcs, fromJSONField: (field: any) => RedemptionQueueW.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RedemptionQueueW.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RedemptionQueueW.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RedemptionQueueW.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RedemptionQueueW.fetch( client, id, ), new: ( fields: RedemptionQueueWFields, ) => { return new RedemptionQueueW( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RedemptionQueueW.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RedemptionQueueW>> { return phantom(RedemptionQueueW.reified( )); } static get p() { return RedemptionQueueW.phantom() }

 static get bcs() { return bcs.struct("RedemptionQueueW", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): RedemptionQueueW { return RedemptionQueueW.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RedemptionQueueW { if (!isRedemptionQueueW(item.type)) { throw new Error("not a RedemptionQueueW type");

 }

 return RedemptionQueueW.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): RedemptionQueueW { return RedemptionQueueW.fromFields( RedemptionQueueW.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RedemptionQueueW { return RedemptionQueueW.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): RedemptionQueueW { if (json.$typeName !== RedemptionQueueW.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RedemptionQueueW.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RedemptionQueueW { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedemptionQueueW(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RedemptionQueueW object`); } return RedemptionQueueW.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RedemptionQueueW { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedemptionQueueW(data.bcs.type)) { throw new Error(`object at is not a RedemptionQueueW object`); }

 return RedemptionQueueW.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RedemptionQueueW.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RedemptionQueueW> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RedemptionQueueW object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedemptionQueueW(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RedemptionQueueW object`); }

 return RedemptionQueueW.fromSuiObjectData( res.data ); }

 }

/* ============================== RedemptionTicket =============================== */

export function isRedemptionTicket(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::redemption_queue::RedemptionTicket`; }

export interface RedemptionTicketFields { recipient: ToField<"address">; balance: ToField<Balance<ToPhantom<BUCK>>>; timeToRedeem: ToField<"u64"> }

export type RedemptionTicketReified = Reified< RedemptionTicket, RedemptionTicketFields >;

export class RedemptionTicket implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::redemption_queue::RedemptionTicket`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RedemptionTicket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::redemption_queue::RedemptionTicket`; readonly $typeArgs: []; readonly $isPhantom = RedemptionTicket.$isPhantom;

 readonly recipient: ToField<"address">; readonly balance: ToField<Balance<ToPhantom<BUCK>>>; readonly timeToRedeem: ToField<"u64">

 private constructor(typeArgs: [], fields: RedemptionTicketFields, ) { this.$fullTypeName = composeSuiType( RedemptionTicket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::redemption_queue::RedemptionTicket`; this.$typeArgs = typeArgs;

 this.recipient = fields.recipient;; this.balance = fields.balance;; this.timeToRedeem = fields.timeToRedeem; }

 static reified( ): RedemptionTicketReified { return { typeName: RedemptionTicket.$typeName, fullTypeName: composeSuiType( RedemptionTicket.$typeName, ...[] ) as `${typeof PKG_V1}::redemption_queue::RedemptionTicket`, typeArgs: [ ] as [], isPhantom: RedemptionTicket.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RedemptionTicket.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RedemptionTicket.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RedemptionTicket.fromBcs( data, ), bcs: RedemptionTicket.bcs, fromJSONField: (field: any) => RedemptionTicket.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RedemptionTicket.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RedemptionTicket.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RedemptionTicket.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RedemptionTicket.fetch( client, id, ), new: ( fields: RedemptionTicketFields, ) => { return new RedemptionTicket( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RedemptionTicket.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RedemptionTicket>> { return phantom(RedemptionTicket.reified( )); } static get p() { return RedemptionTicket.phantom() }

 static get bcs() { return bcs.struct("RedemptionTicket", {

 recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), balance: Balance.bcs, time_to_redeem: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RedemptionTicket { return RedemptionTicket.reified( ).new( { recipient: decodeFromFields("address", fields.recipient), balance: decodeFromFields(Balance.reified(reified.phantom(BUCK.reified())), fields.balance), timeToRedeem: decodeFromFields("u64", fields.time_to_redeem) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RedemptionTicket { if (!isRedemptionTicket(item.type)) { throw new Error("not a RedemptionTicket type");

 }

 return RedemptionTicket.reified( ).new( { recipient: decodeFromFieldsWithTypes("address", item.fields.recipient), balance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(BUCK.reified())), item.fields.balance), timeToRedeem: decodeFromFieldsWithTypes("u64", item.fields.time_to_redeem) } ) }

 static fromBcs( data: Uint8Array ): RedemptionTicket { return RedemptionTicket.fromFields( RedemptionTicket.bcs.parse(data) ) }

 toJSONField() { return {

 recipient: this.recipient,balance: this.balance.toJSONField(),timeToRedeem: this.timeToRedeem.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RedemptionTicket { return RedemptionTicket.reified( ).new( { recipient: decodeFromJSONField("address", field.recipient), balance: decodeFromJSONField(Balance.reified(reified.phantom(BUCK.reified())), field.balance), timeToRedeem: decodeFromJSONField("u64", field.timeToRedeem) } ) }

 static fromJSON( json: Record<string, any> ): RedemptionTicket { if (json.$typeName !== RedemptionTicket.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RedemptionTicket.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RedemptionTicket { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedemptionTicket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RedemptionTicket object`); } return RedemptionTicket.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RedemptionTicket { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedemptionTicket(data.bcs.type)) { throw new Error(`object at is not a RedemptionTicket object`); }

 return RedemptionTicket.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RedemptionTicket.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RedemptionTicket> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RedemptionTicket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedemptionTicket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RedemptionTicket object`); }

 return RedemptionTicket.fromSuiObjectData( res.data ); }

 }

/* ============================== RedemptionQueue =============================== */

export function isRedemptionQueue(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::redemption_queue::RedemptionQueue` + '<'); }

export interface RedemptionQueueFields<U extends PhantomTypeArgument, Rule extends PhantomTypeArgument> { id: ToField<UID>; delay: ToField<"u64">; counter: ToField<"u64">; innerTable: ToField<LinkedTable<"u64", ToPhantom<RedemptionTicket>>>; redeemer: ToField<Option<"address">>; isActive: ToField<"bool"> }

export type RedemptionQueueReified<U extends PhantomTypeArgument, Rule extends PhantomTypeArgument> = Reified< RedemptionQueue<U, Rule>, RedemptionQueueFields<U, Rule> >;

export class RedemptionQueue<U extends PhantomTypeArgument, Rule extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::redemption_queue::RedemptionQueue`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = RedemptionQueue.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::redemption_queue::RedemptionQueue<${PhantomToTypeStr<U>}, ${PhantomToTypeStr<Rule>}>`; readonly $typeArgs: [PhantomToTypeStr<U>, PhantomToTypeStr<Rule>]; readonly $isPhantom = RedemptionQueue.$isPhantom;

 readonly id: ToField<UID>; readonly delay: ToField<"u64">; readonly counter: ToField<"u64">; readonly innerTable: ToField<LinkedTable<"u64", ToPhantom<RedemptionTicket>>>; readonly redeemer: ToField<Option<"address">>; readonly isActive: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<U>, PhantomToTypeStr<Rule>], fields: RedemptionQueueFields<U, Rule>, ) { this.$fullTypeName = composeSuiType( RedemptionQueue.$typeName, ...typeArgs ) as `${typeof PKG_V1}::redemption_queue::RedemptionQueue<${PhantomToTypeStr<U>}, ${PhantomToTypeStr<Rule>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.delay = fields.delay;; this.counter = fields.counter;; this.innerTable = fields.innerTable;; this.redeemer = fields.redeemer;; this.isActive = fields.isActive; }

 static reified<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( U: U, Rule: Rule ): RedemptionQueueReified<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { return { typeName: RedemptionQueue.$typeName, fullTypeName: composeSuiType( RedemptionQueue.$typeName, ...[extractType(U), extractType(Rule)] ) as `${typeof PKG_V1}::redemption_queue::RedemptionQueue<${PhantomToTypeStr<ToPhantomTypeArgument<U>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<Rule>>}>`, typeArgs: [ extractType(U), extractType(Rule) ] as [PhantomToTypeStr<ToPhantomTypeArgument<U>>, PhantomToTypeStr<ToPhantomTypeArgument<Rule>>], isPhantom: RedemptionQueue.$isPhantom, reifiedTypeArgs: [U, Rule], fromFields: (fields: Record<string, any>) => RedemptionQueue.fromFields( [U, Rule], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RedemptionQueue.fromFieldsWithTypes( [U, Rule], item, ), fromBcs: (data: Uint8Array) => RedemptionQueue.fromBcs( [U, Rule], data, ), bcs: RedemptionQueue.bcs, fromJSONField: (field: any) => RedemptionQueue.fromJSONField( [U, Rule], field, ), fromJSON: (json: Record<string, any>) => RedemptionQueue.fromJSON( [U, Rule], json, ), fromSuiParsedData: (content: SuiParsedData) => RedemptionQueue.fromSuiParsedData( [U, Rule], content, ), fromSuiObjectData: (content: SuiObjectData) => RedemptionQueue.fromSuiObjectData( [U, Rule], content, ), fetch: async (client: SuiClient, id: string) => RedemptionQueue.fetch( client, [U, Rule], id, ), new: ( fields: RedemptionQueueFields<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>>, ) => { return new RedemptionQueue( [extractType(U), extractType(Rule)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RedemptionQueue.reified }

 static phantom<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( U: U, Rule: Rule ): PhantomReified<ToTypeStr<RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>>>> { return phantom(RedemptionQueue.reified( U, Rule )); } static get p() { return RedemptionQueue.phantom }

 static get bcs() { return bcs.struct("RedemptionQueue", {

 id: UID.bcs, delay: bcs.u64(), counter: bcs.u64(), inner_table: LinkedTable.bcs(bcs.u64()), redeemer: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), is_active: bcs.bool()

}) };

 static fromFields<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], fields: Record<string, any> ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { return RedemptionQueue.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), delay: decodeFromFields("u64", fields.delay), counter: decodeFromFields("u64", fields.counter), innerTable: decodeFromFields(LinkedTable.reified("u64", reified.phantom(RedemptionTicket.reified())), fields.inner_table), redeemer: decodeFromFields(Option.reified("address"), fields.redeemer), isActive: decodeFromFields("bool", fields.is_active) } ) }

 static fromFieldsWithTypes<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], item: FieldsWithTypes ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { if (!isRedemptionQueue(item.type)) { throw new Error("not a RedemptionQueue type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return RedemptionQueue.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), delay: decodeFromFieldsWithTypes("u64", item.fields.delay), counter: decodeFromFieldsWithTypes("u64", item.fields.counter), innerTable: decodeFromFieldsWithTypes(LinkedTable.reified("u64", reified.phantom(RedemptionTicket.reified())), item.fields.inner_table), redeemer: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.redeemer), isActive: decodeFromFieldsWithTypes("bool", item.fields.is_active) } ) }

 static fromBcs<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], data: Uint8Array ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { return RedemptionQueue.fromFields( typeArgs, RedemptionQueue.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,delay: this.delay.toString(),counter: this.counter.toString(),innerTable: this.innerTable.toJSONField(),redeemer: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.redeemer),isActive: this.isActive,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], field: any ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { return RedemptionQueue.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), delay: decodeFromJSONField("u64", field.delay), counter: decodeFromJSONField("u64", field.counter), innerTable: decodeFromJSONField(LinkedTable.reified("u64", reified.phantom(RedemptionTicket.reified())), field.innerTable), redeemer: decodeFromJSONField(Option.reified("address"), field.redeemer), isActive: decodeFromJSONField("bool", field.isActive) } ) }

 static fromJSON<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], json: Record<string, any> ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { if (json.$typeName !== RedemptionQueue.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RedemptionQueue.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return RedemptionQueue.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], content: SuiParsedData ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedemptionQueue(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RedemptionQueue object`); } return RedemptionQueue.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, Rule], data: SuiObjectData ): RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedemptionQueue(data.bcs.type)) { throw new Error(`object at is not a RedemptionQueue object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return RedemptionQueue.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RedemptionQueue.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<U extends PhantomReified<PhantomTypeArgument>, Rule extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [U, Rule], id: string ): Promise<RedemptionQueue<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<Rule>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RedemptionQueue object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedemptionQueue(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RedemptionQueue object`); }

 return RedemptionQueue.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== RedeemRequest =============================== */

export function isRedeemRequest(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::redemption_queue::RedeemRequest` + '<'); }

export interface RedeemRequestFields<U extends PhantomTypeArgument, R extends PhantomTypeArgument> { maxAmount: ToField<"u64">; balance: ToField<Balance<ToPhantom<BUCK>>> }

export type RedeemRequestReified<U extends PhantomTypeArgument, R extends PhantomTypeArgument> = Reified< RedeemRequest<U, R>, RedeemRequestFields<U, R> >;

export class RedeemRequest<U extends PhantomTypeArgument, R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::redemption_queue::RedeemRequest`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = RedeemRequest.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::redemption_queue::RedeemRequest<${PhantomToTypeStr<U>}, ${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<U>, PhantomToTypeStr<R>]; readonly $isPhantom = RedeemRequest.$isPhantom;

 readonly maxAmount: ToField<"u64">; readonly balance: ToField<Balance<ToPhantom<BUCK>>>

 private constructor(typeArgs: [PhantomToTypeStr<U>, PhantomToTypeStr<R>], fields: RedeemRequestFields<U, R>, ) { this.$fullTypeName = composeSuiType( RedeemRequest.$typeName, ...typeArgs ) as `${typeof PKG_V1}::redemption_queue::RedeemRequest<${PhantomToTypeStr<U>}, ${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.maxAmount = fields.maxAmount;; this.balance = fields.balance; }

 static reified<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( U: U, R: R ): RedeemRequestReified<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { return { typeName: RedeemRequest.$typeName, fullTypeName: composeSuiType( RedeemRequest.$typeName, ...[extractType(U), extractType(R)] ) as `${typeof PKG_V1}::redemption_queue::RedeemRequest<${PhantomToTypeStr<ToPhantomTypeArgument<U>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(U), extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<U>>, PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: RedeemRequest.$isPhantom, reifiedTypeArgs: [U, R], fromFields: (fields: Record<string, any>) => RedeemRequest.fromFields( [U, R], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RedeemRequest.fromFieldsWithTypes( [U, R], item, ), fromBcs: (data: Uint8Array) => RedeemRequest.fromBcs( [U, R], data, ), bcs: RedeemRequest.bcs, fromJSONField: (field: any) => RedeemRequest.fromJSONField( [U, R], field, ), fromJSON: (json: Record<string, any>) => RedeemRequest.fromJSON( [U, R], json, ), fromSuiParsedData: (content: SuiParsedData) => RedeemRequest.fromSuiParsedData( [U, R], content, ), fromSuiObjectData: (content: SuiObjectData) => RedeemRequest.fromSuiObjectData( [U, R], content, ), fetch: async (client: SuiClient, id: string) => RedeemRequest.fetch( client, [U, R], id, ), new: ( fields: RedeemRequestFields<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>>, ) => { return new RedeemRequest( [extractType(U), extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return RedeemRequest.reified }

 static phantom<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( U: U, R: R ): PhantomReified<ToTypeStr<RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>>>> { return phantom(RedeemRequest.reified( U, R )); } static get p() { return RedeemRequest.phantom }

 static get bcs() { return bcs.struct("RedeemRequest", {

 max_amount: bcs.u64(), balance: Balance.bcs

}) };

 static fromFields<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], fields: Record<string, any> ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { return RedeemRequest.reified( typeArgs[0], typeArgs[1], ).new( { maxAmount: decodeFromFields("u64", fields.max_amount), balance: decodeFromFields(Balance.reified(reified.phantom(BUCK.reified())), fields.balance) } ) }

 static fromFieldsWithTypes<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], item: FieldsWithTypes ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { if (!isRedeemRequest(item.type)) { throw new Error("not a RedeemRequest type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return RedeemRequest.reified( typeArgs[0], typeArgs[1], ).new( { maxAmount: decodeFromFieldsWithTypes("u64", item.fields.max_amount), balance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(BUCK.reified())), item.fields.balance) } ) }

 static fromBcs<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], data: Uint8Array ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { return RedeemRequest.fromFields( typeArgs, RedeemRequest.bcs.parse(data) ) }

 toJSONField() { return {

 maxAmount: this.maxAmount.toString(),balance: this.balance.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], field: any ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { return RedeemRequest.reified( typeArgs[0], typeArgs[1], ).new( { maxAmount: decodeFromJSONField("u64", field.maxAmount), balance: decodeFromJSONField(Balance.reified(reified.phantom(BUCK.reified())), field.balance) } ) }

 static fromJSON<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], json: Record<string, any> ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { if (json.$typeName !== RedeemRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(RedeemRequest.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return RedeemRequest.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], content: SuiParsedData ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedeemRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RedeemRequest object`); } return RedeemRequest.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [U, R], data: SuiObjectData ): RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedeemRequest(data.bcs.type)) { throw new Error(`object at is not a RedeemRequest object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return RedeemRequest.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RedeemRequest.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<U extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [U, R], id: string ): Promise<RedeemRequest<ToPhantomTypeArgument<U>, ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RedeemRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedeemRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RedeemRequest object`); }

 return RedeemRequest.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== RedemptionTicketInfo =============================== */

export function isRedemptionTicketInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::redemption_queue::RedemptionTicketInfo`; }

export interface RedemptionTicketInfoFields { ticketId: ToField<"u64">; recipient: ToField<"address">; balance: ToField<"u64">; timeToRedeem: ToField<"u64"> }

export type RedemptionTicketInfoReified = Reified< RedemptionTicketInfo, RedemptionTicketInfoFields >;

export class RedemptionTicketInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::redemption_queue::RedemptionTicketInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RedemptionTicketInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::redemption_queue::RedemptionTicketInfo`; readonly $typeArgs: []; readonly $isPhantom = RedemptionTicketInfo.$isPhantom;

 readonly ticketId: ToField<"u64">; readonly recipient: ToField<"address">; readonly balance: ToField<"u64">; readonly timeToRedeem: ToField<"u64">

 private constructor(typeArgs: [], fields: RedemptionTicketInfoFields, ) { this.$fullTypeName = composeSuiType( RedemptionTicketInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::redemption_queue::RedemptionTicketInfo`; this.$typeArgs = typeArgs;

 this.ticketId = fields.ticketId;; this.recipient = fields.recipient;; this.balance = fields.balance;; this.timeToRedeem = fields.timeToRedeem; }

 static reified( ): RedemptionTicketInfoReified { return { typeName: RedemptionTicketInfo.$typeName, fullTypeName: composeSuiType( RedemptionTicketInfo.$typeName, ...[] ) as `${typeof PKG_V1}::redemption_queue::RedemptionTicketInfo`, typeArgs: [ ] as [], isPhantom: RedemptionTicketInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RedemptionTicketInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RedemptionTicketInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RedemptionTicketInfo.fromBcs( data, ), bcs: RedemptionTicketInfo.bcs, fromJSONField: (field: any) => RedemptionTicketInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RedemptionTicketInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RedemptionTicketInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RedemptionTicketInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RedemptionTicketInfo.fetch( client, id, ), new: ( fields: RedemptionTicketInfoFields, ) => { return new RedemptionTicketInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RedemptionTicketInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RedemptionTicketInfo>> { return phantom(RedemptionTicketInfo.reified( )); } static get p() { return RedemptionTicketInfo.phantom() }

 static get bcs() { return bcs.struct("RedemptionTicketInfo", {

 ticket_id: bcs.u64(), recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), balance: bcs.u64(), time_to_redeem: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): RedemptionTicketInfo { return RedemptionTicketInfo.reified( ).new( { ticketId: decodeFromFields("u64", fields.ticket_id), recipient: decodeFromFields("address", fields.recipient), balance: decodeFromFields("u64", fields.balance), timeToRedeem: decodeFromFields("u64", fields.time_to_redeem) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RedemptionTicketInfo { if (!isRedemptionTicketInfo(item.type)) { throw new Error("not a RedemptionTicketInfo type");

 }

 return RedemptionTicketInfo.reified( ).new( { ticketId: decodeFromFieldsWithTypes("u64", item.fields.ticket_id), recipient: decodeFromFieldsWithTypes("address", item.fields.recipient), balance: decodeFromFieldsWithTypes("u64", item.fields.balance), timeToRedeem: decodeFromFieldsWithTypes("u64", item.fields.time_to_redeem) } ) }

 static fromBcs( data: Uint8Array ): RedemptionTicketInfo { return RedemptionTicketInfo.fromFields( RedemptionTicketInfo.bcs.parse(data) ) }

 toJSONField() { return {

 ticketId: this.ticketId.toString(),recipient: this.recipient,balance: this.balance.toString(),timeToRedeem: this.timeToRedeem.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RedemptionTicketInfo { return RedemptionTicketInfo.reified( ).new( { ticketId: decodeFromJSONField("u64", field.ticketId), recipient: decodeFromJSONField("address", field.recipient), balance: decodeFromJSONField("u64", field.balance), timeToRedeem: decodeFromJSONField("u64", field.timeToRedeem) } ) }

 static fromJSON( json: Record<string, any> ): RedemptionTicketInfo { if (json.$typeName !== RedemptionTicketInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RedemptionTicketInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RedemptionTicketInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedemptionTicketInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RedemptionTicketInfo object`); } return RedemptionTicketInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RedemptionTicketInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedemptionTicketInfo(data.bcs.type)) { throw new Error(`object at is not a RedemptionTicketInfo object`); }

 return RedemptionTicketInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RedemptionTicketInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RedemptionTicketInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RedemptionTicketInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedemptionTicketInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RedemptionTicketInfo object`); }

 return RedemptionTicketInfo.fromSuiObjectData( res.data ); }

 }
