import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {UID} from "../../0x2/object/structs";
import {PKG_V14, PKG_V3} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Reservoir =============================== */

export function isReservoir(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V3}::reservoir::Reservoir` + '<'); }

export interface ReservoirFields<T extends PhantomTypeArgument> { id: ToField<UID>; conversionRate: ToField<"u64">; chargeFeeRate: ToField<"u64">; dischargeFeeRate: ToField<"u64">; pool: ToField<Balance<T>>; buckMintedAmount: ToField<"u64"> }

export type ReservoirReified<T extends PhantomTypeArgument> = Reified< Reservoir<T>, ReservoirFields<T> >;

export class Reservoir<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::reservoir::Reservoir`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Reservoir.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::reservoir::Reservoir<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = Reservoir.$isPhantom;

 readonly id: ToField<UID>; readonly conversionRate: ToField<"u64">; readonly chargeFeeRate: ToField<"u64">; readonly dischargeFeeRate: ToField<"u64">; readonly pool: ToField<Balance<T>>; readonly buckMintedAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: ReservoirFields<T>, ) { this.$fullTypeName = composeSuiType( Reservoir.$typeName, ...typeArgs ) as `${typeof PKG_V3}::reservoir::Reservoir<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.conversionRate = fields.conversionRate;; this.chargeFeeRate = fields.chargeFeeRate;; this.dischargeFeeRate = fields.dischargeFeeRate;; this.pool = fields.pool;; this.buckMintedAmount = fields.buckMintedAmount; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): ReservoirReified<ToPhantomTypeArgument<T>> { return { typeName: Reservoir.$typeName, fullTypeName: composeSuiType( Reservoir.$typeName, ...[extractType(T)] ) as `${typeof PKG_V3}::reservoir::Reservoir<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: Reservoir.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => Reservoir.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Reservoir.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => Reservoir.fromBcs( T, data, ), bcs: Reservoir.bcs, fromJSONField: (field: any) => Reservoir.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => Reservoir.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => Reservoir.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => Reservoir.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => Reservoir.fetch( client, T, id, ), new: ( fields: ReservoirFields<ToPhantomTypeArgument<T>>, ) => { return new Reservoir( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Reservoir.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<Reservoir<ToPhantomTypeArgument<T>>>> { return phantom(Reservoir.reified( T )); } static get p() { return Reservoir.phantom }

 static get bcs() { return bcs.struct("Reservoir", {

 id: UID.bcs, conversion_rate: bcs.u64(), charge_fee_rate: bcs.u64(), discharge_fee_rate: bcs.u64(), pool: Balance.bcs, buck_minted_amount: bcs.u64()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): Reservoir<ToPhantomTypeArgument<T>> { return Reservoir.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), conversionRate: decodeFromFields("u64", fields.conversion_rate), chargeFeeRate: decodeFromFields("u64", fields.charge_fee_rate), dischargeFeeRate: decodeFromFields("u64", fields.discharge_fee_rate), pool: decodeFromFields(Balance.reified(typeArg), fields.pool), buckMintedAmount: decodeFromFields("u64", fields.buck_minted_amount) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): Reservoir<ToPhantomTypeArgument<T>> { if (!isReservoir(item.type)) { throw new Error("not a Reservoir type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Reservoir.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), conversionRate: decodeFromFieldsWithTypes("u64", item.fields.conversion_rate), chargeFeeRate: decodeFromFieldsWithTypes("u64", item.fields.charge_fee_rate), dischargeFeeRate: decodeFromFieldsWithTypes("u64", item.fields.discharge_fee_rate), pool: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.pool), buckMintedAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_minted_amount) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): Reservoir<ToPhantomTypeArgument<T>> { return Reservoir.fromFields( typeArg, Reservoir.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,conversionRate: this.conversionRate.toString(),chargeFeeRate: this.chargeFeeRate.toString(),dischargeFeeRate: this.dischargeFeeRate.toString(),pool: this.pool.toJSONField(),buckMintedAmount: this.buckMintedAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): Reservoir<ToPhantomTypeArgument<T>> { return Reservoir.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), conversionRate: decodeFromJSONField("u64", field.conversionRate), chargeFeeRate: decodeFromJSONField("u64", field.chargeFeeRate), dischargeFeeRate: decodeFromJSONField("u64", field.dischargeFeeRate), pool: decodeFromJSONField(Balance.reified(typeArg), field.pool), buckMintedAmount: decodeFromJSONField("u64", field.buckMintedAmount) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): Reservoir<ToPhantomTypeArgument<T>> { if (json.$typeName !== Reservoir.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Reservoir.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Reservoir.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): Reservoir<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isReservoir(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Reservoir object`); } return Reservoir.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): Reservoir<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isReservoir(data.bcs.type)) { throw new Error(`object at is not a Reservoir object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Reservoir.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Reservoir.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<Reservoir<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Reservoir object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isReservoir(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Reservoir object`); }

 return Reservoir.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== FeeConfigKey =============================== */

export function isFeeConfigKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V14}::reservoir::FeeConfigKey`; }

export interface FeeConfigKeyFields { dummyField: ToField<"bool"> }

export type FeeConfigKeyReified = Reified< FeeConfigKey, FeeConfigKeyFields >;

export class FeeConfigKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V14}::reservoir::FeeConfigKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FeeConfigKey.$typeName; readonly $fullTypeName: `${typeof PKG_V14}::reservoir::FeeConfigKey`; readonly $typeArgs: []; readonly $isPhantom = FeeConfigKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: FeeConfigKeyFields, ) { this.$fullTypeName = composeSuiType( FeeConfigKey.$typeName, ...typeArgs ) as `${typeof PKG_V14}::reservoir::FeeConfigKey`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): FeeConfigKeyReified { return { typeName: FeeConfigKey.$typeName, fullTypeName: composeSuiType( FeeConfigKey.$typeName, ...[] ) as `${typeof PKG_V14}::reservoir::FeeConfigKey`, typeArgs: [ ] as [], isPhantom: FeeConfigKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeConfigKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeConfigKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeeConfigKey.fromBcs( data, ), bcs: FeeConfigKey.bcs, fromJSONField: (field: any) => FeeConfigKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeeConfigKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeeConfigKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FeeConfigKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FeeConfigKey.fetch( client, id, ), new: ( fields: FeeConfigKeyFields, ) => { return new FeeConfigKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeConfigKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeeConfigKey>> { return phantom(FeeConfigKey.reified( )); } static get p() { return FeeConfigKey.phantom() }

 static get bcs() { return bcs.struct("FeeConfigKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): FeeConfigKey { return FeeConfigKey.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeeConfigKey { if (!isFeeConfigKey(item.type)) { throw new Error("not a FeeConfigKey type");

 }

 return FeeConfigKey.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): FeeConfigKey { return FeeConfigKey.fromFields( FeeConfigKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeeConfigKey { return FeeConfigKey.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): FeeConfigKey { if (json.$typeName !== FeeConfigKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeeConfigKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeeConfigKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeConfigKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeConfigKey object`); } return FeeConfigKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FeeConfigKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFeeConfigKey(data.bcs.type)) { throw new Error(`object at is not a FeeConfigKey object`); }

 return FeeConfigKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FeeConfigKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeeConfigKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeConfigKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeConfigKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeConfigKey object`); }

 return FeeConfigKey.fromSuiObjectData( res.data ); }

 }

/* ============================== FeeConfig =============================== */

export function isFeeConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V14}::reservoir::FeeConfig`; }

export interface FeeConfigFields { chargeFeeRate: ToField<"u64">; dischargeFeeRate: ToField<"u64"> }

export type FeeConfigReified = Reified< FeeConfig, FeeConfigFields >;

export class FeeConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V14}::reservoir::FeeConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FeeConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V14}::reservoir::FeeConfig`; readonly $typeArgs: []; readonly $isPhantom = FeeConfig.$isPhantom;

 readonly chargeFeeRate: ToField<"u64">; readonly dischargeFeeRate: ToField<"u64">

 private constructor(typeArgs: [], fields: FeeConfigFields, ) { this.$fullTypeName = composeSuiType( FeeConfig.$typeName, ...typeArgs ) as `${typeof PKG_V14}::reservoir::FeeConfig`; this.$typeArgs = typeArgs;

 this.chargeFeeRate = fields.chargeFeeRate;; this.dischargeFeeRate = fields.dischargeFeeRate; }

 static reified( ): FeeConfigReified { return { typeName: FeeConfig.$typeName, fullTypeName: composeSuiType( FeeConfig.$typeName, ...[] ) as `${typeof PKG_V14}::reservoir::FeeConfig`, typeArgs: [ ] as [], isPhantom: FeeConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeeConfig.fromBcs( data, ), bcs: FeeConfig.bcs, fromJSONField: (field: any) => FeeConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeeConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeeConfig.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FeeConfig.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FeeConfig.fetch( client, id, ), new: ( fields: FeeConfigFields, ) => { return new FeeConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeeConfig>> { return phantom(FeeConfig.reified( )); } static get p() { return FeeConfig.phantom() }

 static get bcs() { return bcs.struct("FeeConfig", {

 charge_fee_rate: bcs.u64(), discharge_fee_rate: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FeeConfig { return FeeConfig.reified( ).new( { chargeFeeRate: decodeFromFields("u64", fields.charge_fee_rate), dischargeFeeRate: decodeFromFields("u64", fields.discharge_fee_rate) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeeConfig { if (!isFeeConfig(item.type)) { throw new Error("not a FeeConfig type");

 }

 return FeeConfig.reified( ).new( { chargeFeeRate: decodeFromFieldsWithTypes("u64", item.fields.charge_fee_rate), dischargeFeeRate: decodeFromFieldsWithTypes("u64", item.fields.discharge_fee_rate) } ) }

 static fromBcs( data: Uint8Array ): FeeConfig { return FeeConfig.fromFields( FeeConfig.bcs.parse(data) ) }

 toJSONField() { return {

 chargeFeeRate: this.chargeFeeRate.toString(),dischargeFeeRate: this.dischargeFeeRate.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeeConfig { return FeeConfig.reified( ).new( { chargeFeeRate: decodeFromJSONField("u64", field.chargeFeeRate), dischargeFeeRate: decodeFromJSONField("u64", field.dischargeFeeRate) } ) }

 static fromJSON( json: Record<string, any> ): FeeConfig { if (json.$typeName !== FeeConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeeConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeeConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeConfig object`); } return FeeConfig.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FeeConfig { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFeeConfig(data.bcs.type)) { throw new Error(`object at is not a FeeConfig object`); }

 return FeeConfig.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FeeConfig.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeeConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeConfig object`); }

 return FeeConfig.fromSuiObjectData( res.data ); }

 }
