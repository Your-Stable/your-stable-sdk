import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Float} from "../../0x1798f84ee72176114ddbf5525a6d964c5f8ea1b3738d08d50d0d3de4cf584884/float/structs";
import {TreasuryCap} from "../../0x2/coin/structs";
import {ID, UID} from "../../0x2/object/structs";
import {PKG_V1, PKG_V15, PKG_V3, PKG_V4} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== BUCK =============================== */

export function isBUCK(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::buck::BUCK`; }

export interface BUCKFields { dummyField: ToField<"bool"> }

export type BUCKReified = Reified< BUCK, BUCKFields >;

export class BUCK implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::buck::BUCK`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BUCK.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::buck::BUCK`; readonly $typeArgs: []; readonly $isPhantom = BUCK.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: BUCKFields, ) { this.$fullTypeName = composeSuiType( BUCK.$typeName, ...typeArgs ) as `${typeof PKG_V1}::buck::BUCK`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): BUCKReified { return { typeName: BUCK.$typeName, fullTypeName: composeSuiType( BUCK.$typeName, ...[] ) as `${typeof PKG_V1}::buck::BUCK`, typeArgs: [ ] as [], isPhantom: BUCK.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BUCK.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BUCK.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BUCK.fromBcs( data, ), bcs: BUCK.bcs, fromJSONField: (field: any) => BUCK.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BUCK.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BUCK.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BUCK.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BUCK.fetch( client, id, ), new: ( fields: BUCKFields, ) => { return new BUCK( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BUCK.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BUCK>> { return phantom(BUCK.reified( )); } static get p() { return BUCK.phantom() }

 static get bcs() { return bcs.struct("BUCK", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BUCK { return BUCK.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BUCK { if (!isBUCK(item.type)) { throw new Error("not a BUCK type");

 }

 return BUCK.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): BUCK { return BUCK.fromFields( BUCK.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BUCK { return BUCK.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): BUCK { if (json.$typeName !== BUCK.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BUCK.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BUCK { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBUCK(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BUCK object`); } return BUCK.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BUCK { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBUCK(data.bcs.type)) { throw new Error(`object at is not a BUCK object`); }

 return BUCK.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BUCK.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BUCK> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BUCK object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBUCK(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BUCK object`); }

 return BUCK.fromSuiObjectData( res.data ); }

 }

/* ============================== BucketProtocol =============================== */

export function isBucketProtocol(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::buck::BucketProtocol`; }

export interface BucketProtocolFields { id: ToField<UID>; version: ToField<"u64">; buckTreasuryCap: ToField<TreasuryCap<ToPhantom<BUCK>>>; minBottleSize: ToField<"u64"> }

export type BucketProtocolReified = Reified< BucketProtocol, BucketProtocolFields >;

export class BucketProtocol implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::buck::BucketProtocol`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BucketProtocol.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::buck::BucketProtocol`; readonly $typeArgs: []; readonly $isPhantom = BucketProtocol.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly buckTreasuryCap: ToField<TreasuryCap<ToPhantom<BUCK>>>; readonly minBottleSize: ToField<"u64">

 private constructor(typeArgs: [], fields: BucketProtocolFields, ) { this.$fullTypeName = composeSuiType( BucketProtocol.$typeName, ...typeArgs ) as `${typeof PKG_V1}::buck::BucketProtocol`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.buckTreasuryCap = fields.buckTreasuryCap;; this.minBottleSize = fields.minBottleSize; }

 static reified( ): BucketProtocolReified { return { typeName: BucketProtocol.$typeName, fullTypeName: composeSuiType( BucketProtocol.$typeName, ...[] ) as `${typeof PKG_V1}::buck::BucketProtocol`, typeArgs: [ ] as [], isPhantom: BucketProtocol.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BucketProtocol.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BucketProtocol.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BucketProtocol.fromBcs( data, ), bcs: BucketProtocol.bcs, fromJSONField: (field: any) => BucketProtocol.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BucketProtocol.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BucketProtocol.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BucketProtocol.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BucketProtocol.fetch( client, id, ), new: ( fields: BucketProtocolFields, ) => { return new BucketProtocol( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BucketProtocol.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BucketProtocol>> { return phantom(BucketProtocol.reified( )); } static get p() { return BucketProtocol.phantom() }

 static get bcs() { return bcs.struct("BucketProtocol", {

 id: UID.bcs, version: bcs.u64(), buck_treasury_cap: TreasuryCap.bcs, min_bottle_size: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BucketProtocol { return BucketProtocol.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), buckTreasuryCap: decodeFromFields(TreasuryCap.reified(reified.phantom(BUCK.reified())), fields.buck_treasury_cap), minBottleSize: decodeFromFields("u64", fields.min_bottle_size) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BucketProtocol { if (!isBucketProtocol(item.type)) { throw new Error("not a BucketProtocol type");

 }

 return BucketProtocol.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), buckTreasuryCap: decodeFromFieldsWithTypes(TreasuryCap.reified(reified.phantom(BUCK.reified())), item.fields.buck_treasury_cap), minBottleSize: decodeFromFieldsWithTypes("u64", item.fields.min_bottle_size) } ) }

 static fromBcs( data: Uint8Array ): BucketProtocol { return BucketProtocol.fromFields( BucketProtocol.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),buckTreasuryCap: this.buckTreasuryCap.toJSONField(),minBottleSize: this.minBottleSize.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BucketProtocol { return BucketProtocol.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), buckTreasuryCap: decodeFromJSONField(TreasuryCap.reified(reified.phantom(BUCK.reified())), field.buckTreasuryCap), minBottleSize: decodeFromJSONField("u64", field.minBottleSize) } ) }

 static fromJSON( json: Record<string, any> ): BucketProtocol { if (json.$typeName !== BucketProtocol.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BucketProtocol.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BucketProtocol { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBucketProtocol(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BucketProtocol object`); } return BucketProtocol.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BucketProtocol { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBucketProtocol(data.bcs.type)) { throw new Error(`object at is not a BucketProtocol object`); }

 return BucketProtocol.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BucketProtocol.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BucketProtocol> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BucketProtocol object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBucketProtocol(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BucketProtocol object`); }

 return BucketProtocol.fromSuiObjectData( res.data ); }

 }

/* ============================== BucketType =============================== */

export function isBucketType(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::buck::BucketType` + '<'); }

export interface BucketTypeFields<T extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type BucketTypeReified<T extends PhantomTypeArgument> = Reified< BucketType<T>, BucketTypeFields<T> >;

export class BucketType<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::buck::BucketType`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BucketType.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::buck::BucketType<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = BucketType.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: BucketTypeFields<T>, ) { this.$fullTypeName = composeSuiType( BucketType.$typeName, ...typeArgs ) as `${typeof PKG_V1}::buck::BucketType<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): BucketTypeReified<ToPhantomTypeArgument<T>> { return { typeName: BucketType.$typeName, fullTypeName: composeSuiType( BucketType.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::buck::BucketType<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: BucketType.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => BucketType.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BucketType.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => BucketType.fromBcs( T, data, ), bcs: BucketType.bcs, fromJSONField: (field: any) => BucketType.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => BucketType.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => BucketType.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => BucketType.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => BucketType.fetch( client, T, id, ), new: ( fields: BucketTypeFields<ToPhantomTypeArgument<T>>, ) => { return new BucketType( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BucketType.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<BucketType<ToPhantomTypeArgument<T>>>> { return phantom(BucketType.reified( T )); } static get p() { return BucketType.phantom }

 static get bcs() { return bcs.struct("BucketType", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): BucketType<ToPhantomTypeArgument<T>> { return BucketType.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): BucketType<ToPhantomTypeArgument<T>> { if (!isBucketType(item.type)) { throw new Error("not a BucketType type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BucketType.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): BucketType<ToPhantomTypeArgument<T>> { return BucketType.fromFields( typeArg, BucketType.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): BucketType<ToPhantomTypeArgument<T>> { return BucketType.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): BucketType<ToPhantomTypeArgument<T>> { if (json.$typeName !== BucketType.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BucketType.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BucketType.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): BucketType<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBucketType(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BucketType object`); } return BucketType.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): BucketType<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBucketType(data.bcs.type)) { throw new Error(`object at is not a BucketType object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BucketType.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BucketType.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<BucketType<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BucketType object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBucketType(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BucketType object`); }

 return BucketType.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== WellType =============================== */

export function isWellType(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::buck::WellType` + '<'); }

export interface WellTypeFields<T extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type WellTypeReified<T extends PhantomTypeArgument> = Reified< WellType<T>, WellTypeFields<T> >;

export class WellType<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::buck::WellType`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = WellType.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::buck::WellType<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = WellType.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: WellTypeFields<T>, ) { this.$fullTypeName = composeSuiType( WellType.$typeName, ...typeArgs ) as `${typeof PKG_V1}::buck::WellType<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): WellTypeReified<ToPhantomTypeArgument<T>> { return { typeName: WellType.$typeName, fullTypeName: composeSuiType( WellType.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::buck::WellType<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: WellType.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => WellType.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WellType.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => WellType.fromBcs( T, data, ), bcs: WellType.bcs, fromJSONField: (field: any) => WellType.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => WellType.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => WellType.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => WellType.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => WellType.fetch( client, T, id, ), new: ( fields: WellTypeFields<ToPhantomTypeArgument<T>>, ) => { return new WellType( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return WellType.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<WellType<ToPhantomTypeArgument<T>>>> { return phantom(WellType.reified( T )); } static get p() { return WellType.phantom }

 static get bcs() { return bcs.struct("WellType", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): WellType<ToPhantomTypeArgument<T>> { return WellType.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): WellType<ToPhantomTypeArgument<T>> { if (!isWellType(item.type)) { throw new Error("not a WellType type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return WellType.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): WellType<ToPhantomTypeArgument<T>> { return WellType.fromFields( typeArg, WellType.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): WellType<ToPhantomTypeArgument<T>> { return WellType.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): WellType<ToPhantomTypeArgument<T>> { if (json.$typeName !== WellType.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(WellType.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return WellType.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): WellType<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWellType(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WellType object`); } return WellType.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): WellType<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWellType(data.bcs.type)) { throw new Error(`object at is not a WellType object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return WellType.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WellType.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<WellType<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WellType object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWellType(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WellType object`); }

 return WellType.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== TankType =============================== */

export function isTankType(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::buck::TankType` + '<'); }

export interface TankTypeFields<T extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type TankTypeReified<T extends PhantomTypeArgument> = Reified< TankType<T>, TankTypeFields<T> >;

export class TankType<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::buck::TankType`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = TankType.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::buck::TankType<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = TankType.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: TankTypeFields<T>, ) { this.$fullTypeName = composeSuiType( TankType.$typeName, ...typeArgs ) as `${typeof PKG_V1}::buck::TankType<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): TankTypeReified<ToPhantomTypeArgument<T>> { return { typeName: TankType.$typeName, fullTypeName: composeSuiType( TankType.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::buck::TankType<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: TankType.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => TankType.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TankType.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => TankType.fromBcs( T, data, ), bcs: TankType.bcs, fromJSONField: (field: any) => TankType.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => TankType.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => TankType.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => TankType.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => TankType.fetch( client, T, id, ), new: ( fields: TankTypeFields<ToPhantomTypeArgument<T>>, ) => { return new TankType( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return TankType.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<TankType<ToPhantomTypeArgument<T>>>> { return phantom(TankType.reified( T )); } static get p() { return TankType.phantom }

 static get bcs() { return bcs.struct("TankType", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): TankType<ToPhantomTypeArgument<T>> { return TankType.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): TankType<ToPhantomTypeArgument<T>> { if (!isTankType(item.type)) { throw new Error("not a TankType type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return TankType.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): TankType<ToPhantomTypeArgument<T>> { return TankType.fromFields( typeArg, TankType.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): TankType<ToPhantomTypeArgument<T>> { return TankType.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): TankType<ToPhantomTypeArgument<T>> { if (json.$typeName !== TankType.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(TankType.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return TankType.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): TankType<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTankType(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TankType object`); } return TankType.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): TankType<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTankType(data.bcs.type)) { throw new Error(`object at is not a TankType object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return TankType.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TankType.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<TankType<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TankType object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTankType(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TankType object`); }

 return TankType.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::buck::AdminCap`; }

export interface AdminCapFields { id: ToField<UID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::buck::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::buck::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::buck::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::buck::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAdminCap(data.bcs.type)) { throw new Error(`object at is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromSuiObjectData( res.data ); }

 }

/* ============================== FlashMintConfig =============================== */

export function isFlashMintConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V3}::buck::FlashMintConfig`; }

export interface FlashMintConfigFields { id: ToField<UID>; feeRate: ToField<"u64">; maxAmount: ToField<"u64">; totalAmount: ToField<"u64"> }

export type FlashMintConfigReified = Reified< FlashMintConfig, FlashMintConfigFields >;

export class FlashMintConfig implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::buck::FlashMintConfig`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FlashMintConfig.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::buck::FlashMintConfig`; readonly $typeArgs: []; readonly $isPhantom = FlashMintConfig.$isPhantom;

 readonly id: ToField<UID>; readonly feeRate: ToField<"u64">; readonly maxAmount: ToField<"u64">; readonly totalAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: FlashMintConfigFields, ) { this.$fullTypeName = composeSuiType( FlashMintConfig.$typeName, ...typeArgs ) as `${typeof PKG_V3}::buck::FlashMintConfig`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.feeRate = fields.feeRate;; this.maxAmount = fields.maxAmount;; this.totalAmount = fields.totalAmount; }

 static reified( ): FlashMintConfigReified { return { typeName: FlashMintConfig.$typeName, fullTypeName: composeSuiType( FlashMintConfig.$typeName, ...[] ) as `${typeof PKG_V3}::buck::FlashMintConfig`, typeArgs: [ ] as [], isPhantom: FlashMintConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FlashMintConfig.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FlashMintConfig.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FlashMintConfig.fromBcs( data, ), bcs: FlashMintConfig.bcs, fromJSONField: (field: any) => FlashMintConfig.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FlashMintConfig.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FlashMintConfig.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FlashMintConfig.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FlashMintConfig.fetch( client, id, ), new: ( fields: FlashMintConfigFields, ) => { return new FlashMintConfig( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FlashMintConfig.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FlashMintConfig>> { return phantom(FlashMintConfig.reified( )); } static get p() { return FlashMintConfig.phantom() }

 static get bcs() { return bcs.struct("FlashMintConfig", {

 id: UID.bcs, fee_rate: bcs.u64(), max_amount: bcs.u64(), total_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FlashMintConfig { return FlashMintConfig.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), feeRate: decodeFromFields("u64", fields.fee_rate), maxAmount: decodeFromFields("u64", fields.max_amount), totalAmount: decodeFromFields("u64", fields.total_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FlashMintConfig { if (!isFlashMintConfig(item.type)) { throw new Error("not a FlashMintConfig type");

 }

 return FlashMintConfig.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), feeRate: decodeFromFieldsWithTypes("u64", item.fields.fee_rate), maxAmount: decodeFromFieldsWithTypes("u64", item.fields.max_amount), totalAmount: decodeFromFieldsWithTypes("u64", item.fields.total_amount) } ) }

 static fromBcs( data: Uint8Array ): FlashMintConfig { return FlashMintConfig.fromFields( FlashMintConfig.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,feeRate: this.feeRate.toString(),maxAmount: this.maxAmount.toString(),totalAmount: this.totalAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FlashMintConfig { return FlashMintConfig.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), feeRate: decodeFromJSONField("u64", field.feeRate), maxAmount: decodeFromJSONField("u64", field.maxAmount), totalAmount: decodeFromJSONField("u64", field.totalAmount) } ) }

 static fromJSON( json: Record<string, any> ): FlashMintConfig { if (json.$typeName !== FlashMintConfig.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FlashMintConfig.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FlashMintConfig { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashMintConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlashMintConfig object`); } return FlashMintConfig.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FlashMintConfig { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlashMintConfig(data.bcs.type)) { throw new Error(`object at is not a FlashMintConfig object`); }

 return FlashMintConfig.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FlashMintConfig.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FlashMintConfig> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlashMintConfig object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashMintConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlashMintConfig object`); }

 return FlashMintConfig.fromSuiObjectData( res.data ); }

 }

/* ============================== FlashMintReceipt =============================== */

export function isFlashMintReceipt(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V3}::buck::FlashMintReceipt`; }

export interface FlashMintReceiptFields { configId: ToField<ID>; mintAmount: ToField<"u64">; feeAmount: ToField<"u64"> }

export type FlashMintReceiptReified = Reified< FlashMintReceipt, FlashMintReceiptFields >;

export class FlashMintReceipt implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::buck::FlashMintReceipt`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FlashMintReceipt.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::buck::FlashMintReceipt`; readonly $typeArgs: []; readonly $isPhantom = FlashMintReceipt.$isPhantom;

 readonly configId: ToField<ID>; readonly mintAmount: ToField<"u64">; readonly feeAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: FlashMintReceiptFields, ) { this.$fullTypeName = composeSuiType( FlashMintReceipt.$typeName, ...typeArgs ) as `${typeof PKG_V3}::buck::FlashMintReceipt`; this.$typeArgs = typeArgs;

 this.configId = fields.configId;; this.mintAmount = fields.mintAmount;; this.feeAmount = fields.feeAmount; }

 static reified( ): FlashMintReceiptReified { return { typeName: FlashMintReceipt.$typeName, fullTypeName: composeSuiType( FlashMintReceipt.$typeName, ...[] ) as `${typeof PKG_V3}::buck::FlashMintReceipt`, typeArgs: [ ] as [], isPhantom: FlashMintReceipt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FlashMintReceipt.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FlashMintReceipt.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FlashMintReceipt.fromBcs( data, ), bcs: FlashMintReceipt.bcs, fromJSONField: (field: any) => FlashMintReceipt.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FlashMintReceipt.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FlashMintReceipt.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FlashMintReceipt.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FlashMintReceipt.fetch( client, id, ), new: ( fields: FlashMintReceiptFields, ) => { return new FlashMintReceipt( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FlashMintReceipt.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FlashMintReceipt>> { return phantom(FlashMintReceipt.reified( )); } static get p() { return FlashMintReceipt.phantom() }

 static get bcs() { return bcs.struct("FlashMintReceipt", {

 config_id: ID.bcs, mint_amount: bcs.u64(), fee_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FlashMintReceipt { return FlashMintReceipt.reified( ).new( { configId: decodeFromFields(ID.reified(), fields.config_id), mintAmount: decodeFromFields("u64", fields.mint_amount), feeAmount: decodeFromFields("u64", fields.fee_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FlashMintReceipt { if (!isFlashMintReceipt(item.type)) { throw new Error("not a FlashMintReceipt type");

 }

 return FlashMintReceipt.reified( ).new( { configId: decodeFromFieldsWithTypes(ID.reified(), item.fields.config_id), mintAmount: decodeFromFieldsWithTypes("u64", item.fields.mint_amount), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount) } ) }

 static fromBcs( data: Uint8Array ): FlashMintReceipt { return FlashMintReceipt.fromFields( FlashMintReceipt.bcs.parse(data) ) }

 toJSONField() { return {

 configId: this.configId,mintAmount: this.mintAmount.toString(),feeAmount: this.feeAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FlashMintReceipt { return FlashMintReceipt.reified( ).new( { configId: decodeFromJSONField(ID.reified(), field.configId), mintAmount: decodeFromJSONField("u64", field.mintAmount), feeAmount: decodeFromJSONField("u64", field.feeAmount) } ) }

 static fromJSON( json: Record<string, any> ): FlashMintReceipt { if (json.$typeName !== FlashMintReceipt.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FlashMintReceipt.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FlashMintReceipt { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashMintReceipt(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlashMintReceipt object`); } return FlashMintReceipt.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FlashMintReceipt { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlashMintReceipt(data.bcs.type)) { throw new Error(`object at is not a FlashMintReceipt object`); }

 return FlashMintReceipt.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FlashMintReceipt.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FlashMintReceipt> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlashMintReceipt object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashMintReceipt(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlashMintReceipt object`); }

 return FlashMintReceipt.fromSuiObjectData( res.data ); }

 }

/* ============================== NoFeePermission =============================== */

export function isNoFeePermission(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V3}::buck::NoFeePermission`; }

export interface NoFeePermissionFields { id: ToField<UID> }

export type NoFeePermissionReified = Reified< NoFeePermission, NoFeePermissionFields >;

export class NoFeePermission implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::buck::NoFeePermission`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = NoFeePermission.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::buck::NoFeePermission`; readonly $typeArgs: []; readonly $isPhantom = NoFeePermission.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: NoFeePermissionFields, ) { this.$fullTypeName = composeSuiType( NoFeePermission.$typeName, ...typeArgs ) as `${typeof PKG_V3}::buck::NoFeePermission`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): NoFeePermissionReified { return { typeName: NoFeePermission.$typeName, fullTypeName: composeSuiType( NoFeePermission.$typeName, ...[] ) as `${typeof PKG_V3}::buck::NoFeePermission`, typeArgs: [ ] as [], isPhantom: NoFeePermission.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NoFeePermission.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NoFeePermission.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NoFeePermission.fromBcs( data, ), bcs: NoFeePermission.bcs, fromJSONField: (field: any) => NoFeePermission.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NoFeePermission.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NoFeePermission.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => NoFeePermission.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => NoFeePermission.fetch( client, id, ), new: ( fields: NoFeePermissionFields, ) => { return new NoFeePermission( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NoFeePermission.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NoFeePermission>> { return phantom(NoFeePermission.reified( )); } static get p() { return NoFeePermission.phantom() }

 static get bcs() { return bcs.struct("NoFeePermission", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): NoFeePermission { return NoFeePermission.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NoFeePermission { if (!isNoFeePermission(item.type)) { throw new Error("not a NoFeePermission type");

 }

 return NoFeePermission.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): NoFeePermission { return NoFeePermission.fromFields( NoFeePermission.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NoFeePermission { return NoFeePermission.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): NoFeePermission { if (json.$typeName !== NoFeePermission.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NoFeePermission.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NoFeePermission { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNoFeePermission(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NoFeePermission object`); } return NoFeePermission.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): NoFeePermission { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNoFeePermission(data.bcs.type)) { throw new Error(`object at is not a NoFeePermission object`); }

 return NoFeePermission.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NoFeePermission.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<NoFeePermission> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NoFeePermission object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNoFeePermission(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NoFeePermission object`); }

 return NoFeePermission.fromSuiObjectData( res.data ); }

 }

/* ============================== ReservoirType =============================== */

export function isReservoirType(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V3}::buck::ReservoirType` + '<'); }

export interface ReservoirTypeFields<T extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type ReservoirTypeReified<T extends PhantomTypeArgument> = Reified< ReservoirType<T>, ReservoirTypeFields<T> >;

export class ReservoirType<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V3}::buck::ReservoirType`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = ReservoirType.$typeName; readonly $fullTypeName: `${typeof PKG_V3}::buck::ReservoirType<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = ReservoirType.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: ReservoirTypeFields<T>, ) { this.$fullTypeName = composeSuiType( ReservoirType.$typeName, ...typeArgs ) as `${typeof PKG_V3}::buck::ReservoirType<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): ReservoirTypeReified<ToPhantomTypeArgument<T>> { return { typeName: ReservoirType.$typeName, fullTypeName: composeSuiType( ReservoirType.$typeName, ...[extractType(T)] ) as `${typeof PKG_V3}::buck::ReservoirType<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: ReservoirType.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => ReservoirType.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ReservoirType.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => ReservoirType.fromBcs( T, data, ), bcs: ReservoirType.bcs, fromJSONField: (field: any) => ReservoirType.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => ReservoirType.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => ReservoirType.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => ReservoirType.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => ReservoirType.fetch( client, T, id, ), new: ( fields: ReservoirTypeFields<ToPhantomTypeArgument<T>>, ) => { return new ReservoirType( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ReservoirType.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<ReservoirType<ToPhantomTypeArgument<T>>>> { return phantom(ReservoirType.reified( T )); } static get p() { return ReservoirType.phantom }

 static get bcs() { return bcs.struct("ReservoirType", {

 dummy_field: bcs.bool()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): ReservoirType<ToPhantomTypeArgument<T>> { return ReservoirType.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): ReservoirType<ToPhantomTypeArgument<T>> { if (!isReservoirType(item.type)) { throw new Error("not a ReservoirType type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ReservoirType.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): ReservoirType<ToPhantomTypeArgument<T>> { return ReservoirType.fromFields( typeArg, ReservoirType.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): ReservoirType<ToPhantomTypeArgument<T>> { return ReservoirType.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): ReservoirType<ToPhantomTypeArgument<T>> { if (json.$typeName !== ReservoirType.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ReservoirType.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ReservoirType.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): ReservoirType<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isReservoirType(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ReservoirType object`); } return ReservoirType.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): ReservoirType<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isReservoirType(data.bcs.type)) { throw new Error(`object at is not a ReservoirType object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return ReservoirType.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ReservoirType.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<ReservoirType<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ReservoirType object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isReservoirType(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ReservoirType object`); }

 return ReservoirType.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SBuckRateKey =============================== */

export function isSBuckRateKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V15}::buck::SBuckRateKey`; }

export interface SBuckRateKeyFields { dummyField: ToField<"bool"> }

export type SBuckRateKeyReified = Reified< SBuckRateKey, SBuckRateKeyFields >;

export class SBuckRateKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V15}::buck::SBuckRateKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SBuckRateKey.$typeName; readonly $fullTypeName: `${typeof PKG_V15}::buck::SBuckRateKey`; readonly $typeArgs: []; readonly $isPhantom = SBuckRateKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: SBuckRateKeyFields, ) { this.$fullTypeName = composeSuiType( SBuckRateKey.$typeName, ...typeArgs ) as `${typeof PKG_V15}::buck::SBuckRateKey`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): SBuckRateKeyReified { return { typeName: SBuckRateKey.$typeName, fullTypeName: composeSuiType( SBuckRateKey.$typeName, ...[] ) as `${typeof PKG_V15}::buck::SBuckRateKey`, typeArgs: [ ] as [], isPhantom: SBuckRateKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SBuckRateKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SBuckRateKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SBuckRateKey.fromBcs( data, ), bcs: SBuckRateKey.bcs, fromJSONField: (field: any) => SBuckRateKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SBuckRateKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SBuckRateKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SBuckRateKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SBuckRateKey.fetch( client, id, ), new: ( fields: SBuckRateKeyFields, ) => { return new SBuckRateKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SBuckRateKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SBuckRateKey>> { return phantom(SBuckRateKey.reified( )); } static get p() { return SBuckRateKey.phantom() }

 static get bcs() { return bcs.struct("SBuckRateKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): SBuckRateKey { return SBuckRateKey.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SBuckRateKey { if (!isSBuckRateKey(item.type)) { throw new Error("not a SBuckRateKey type");

 }

 return SBuckRateKey.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): SBuckRateKey { return SBuckRateKey.fromFields( SBuckRateKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SBuckRateKey { return SBuckRateKey.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): SBuckRateKey { if (json.$typeName !== SBuckRateKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SBuckRateKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SBuckRateKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSBuckRateKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SBuckRateKey object`); } return SBuckRateKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SBuckRateKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSBuckRateKey(data.bcs.type)) { throw new Error(`object at is not a SBuckRateKey object`); }

 return SBuckRateKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SBuckRateKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SBuckRateKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SBuckRateKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSBuckRateKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SBuckRateKey object`); }

 return SBuckRateKey.fromSuiObjectData( res.data ); }

 }

/* ============================== SBuckEmission =============================== */

export function isSBuckEmission(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V15}::buck::SBuckEmission`; }

export interface SBuckEmissionFields { id: ToField<UID>; latestTime: ToField<"u64">; rate: ToField<Float> }

export type SBuckEmissionReified = Reified< SBuckEmission, SBuckEmissionFields >;

export class SBuckEmission implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V15}::buck::SBuckEmission`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SBuckEmission.$typeName; readonly $fullTypeName: `${typeof PKG_V15}::buck::SBuckEmission`; readonly $typeArgs: []; readonly $isPhantom = SBuckEmission.$isPhantom;

 readonly id: ToField<UID>; readonly latestTime: ToField<"u64">; readonly rate: ToField<Float>

 private constructor(typeArgs: [], fields: SBuckEmissionFields, ) { this.$fullTypeName = composeSuiType( SBuckEmission.$typeName, ...typeArgs ) as `${typeof PKG_V15}::buck::SBuckEmission`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.latestTime = fields.latestTime;; this.rate = fields.rate; }

 static reified( ): SBuckEmissionReified { return { typeName: SBuckEmission.$typeName, fullTypeName: composeSuiType( SBuckEmission.$typeName, ...[] ) as `${typeof PKG_V15}::buck::SBuckEmission`, typeArgs: [ ] as [], isPhantom: SBuckEmission.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SBuckEmission.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SBuckEmission.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SBuckEmission.fromBcs( data, ), bcs: SBuckEmission.bcs, fromJSONField: (field: any) => SBuckEmission.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SBuckEmission.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SBuckEmission.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SBuckEmission.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SBuckEmission.fetch( client, id, ), new: ( fields: SBuckEmissionFields, ) => { return new SBuckEmission( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SBuckEmission.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SBuckEmission>> { return phantom(SBuckEmission.reified( )); } static get p() { return SBuckEmission.phantom() }

 static get bcs() { return bcs.struct("SBuckEmission", {

 id: UID.bcs, latest_time: bcs.u64(), rate: Float.bcs

}) };

 static fromFields( fields: Record<string, any> ): SBuckEmission { return SBuckEmission.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), latestTime: decodeFromFields("u64", fields.latest_time), rate: decodeFromFields(Float.reified(), fields.rate) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SBuckEmission { if (!isSBuckEmission(item.type)) { throw new Error("not a SBuckEmission type");

 }

 return SBuckEmission.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), latestTime: decodeFromFieldsWithTypes("u64", item.fields.latest_time), rate: decodeFromFieldsWithTypes(Float.reified(), item.fields.rate) } ) }

 static fromBcs( data: Uint8Array ): SBuckEmission { return SBuckEmission.fromFields( SBuckEmission.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,latestTime: this.latestTime.toString(),rate: this.rate.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SBuckEmission { return SBuckEmission.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), latestTime: decodeFromJSONField("u64", field.latestTime), rate: decodeFromJSONField(Float.reified(), field.rate) } ) }

 static fromJSON( json: Record<string, any> ): SBuckEmission { if (json.$typeName !== SBuckEmission.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SBuckEmission.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SBuckEmission { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSBuckEmission(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SBuckEmission object`); } return SBuckEmission.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SBuckEmission { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSBuckEmission(data.bcs.type)) { throw new Error(`object at is not a SBuckEmission object`); }

 return SBuckEmission.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SBuckEmission.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SBuckEmission> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SBuckEmission object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSBuckEmission(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SBuckEmission object`); }

 return SBuckEmission.fromSuiObjectData( res.data ); }

 }

/* ============================== BUCKET_PROTOCOL =============================== */

export function isBUCKET_PROTOCOL(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V15}::buck::BUCKET_PROTOCOL`; }

export interface BUCKET_PROTOCOLFields { dummyField: ToField<"bool"> }

export type BUCKET_PROTOCOLReified = Reified< BUCKET_PROTOCOL, BUCKET_PROTOCOLFields >;

export class BUCKET_PROTOCOL implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V15}::buck::BUCKET_PROTOCOL`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BUCKET_PROTOCOL.$typeName; readonly $fullTypeName: `${typeof PKG_V15}::buck::BUCKET_PROTOCOL`; readonly $typeArgs: []; readonly $isPhantom = BUCKET_PROTOCOL.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: BUCKET_PROTOCOLFields, ) { this.$fullTypeName = composeSuiType( BUCKET_PROTOCOL.$typeName, ...typeArgs ) as `${typeof PKG_V15}::buck::BUCKET_PROTOCOL`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): BUCKET_PROTOCOLReified { return { typeName: BUCKET_PROTOCOL.$typeName, fullTypeName: composeSuiType( BUCKET_PROTOCOL.$typeName, ...[] ) as `${typeof PKG_V15}::buck::BUCKET_PROTOCOL`, typeArgs: [ ] as [], isPhantom: BUCKET_PROTOCOL.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BUCKET_PROTOCOL.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BUCKET_PROTOCOL.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BUCKET_PROTOCOL.fromBcs( data, ), bcs: BUCKET_PROTOCOL.bcs, fromJSONField: (field: any) => BUCKET_PROTOCOL.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BUCKET_PROTOCOL.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BUCKET_PROTOCOL.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BUCKET_PROTOCOL.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BUCKET_PROTOCOL.fetch( client, id, ), new: ( fields: BUCKET_PROTOCOLFields, ) => { return new BUCKET_PROTOCOL( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BUCKET_PROTOCOL.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BUCKET_PROTOCOL>> { return phantom(BUCKET_PROTOCOL.reified( )); } static get p() { return BUCKET_PROTOCOL.phantom() }

 static get bcs() { return bcs.struct("BUCKET_PROTOCOL", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BUCKET_PROTOCOL { return BUCKET_PROTOCOL.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BUCKET_PROTOCOL { if (!isBUCKET_PROTOCOL(item.type)) { throw new Error("not a BUCKET_PROTOCOL type");

 }

 return BUCKET_PROTOCOL.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): BUCKET_PROTOCOL { return BUCKET_PROTOCOL.fromFields( BUCKET_PROTOCOL.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BUCKET_PROTOCOL { return BUCKET_PROTOCOL.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): BUCKET_PROTOCOL { if (json.$typeName !== BUCKET_PROTOCOL.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BUCKET_PROTOCOL.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BUCKET_PROTOCOL { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBUCKET_PROTOCOL(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BUCKET_PROTOCOL object`); } return BUCKET_PROTOCOL.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BUCKET_PROTOCOL { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBUCKET_PROTOCOL(data.bcs.type)) { throw new Error(`object at is not a BUCKET_PROTOCOL object`); }

 return BUCKET_PROTOCOL.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BUCKET_PROTOCOL.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BUCKET_PROTOCOL> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BUCKET_PROTOCOL object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBUCKET_PROTOCOL(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BUCKET_PROTOCOL object`); }

 return BUCKET_PROTOCOL.fromSuiObjectData( res.data ); }

 }

/* ============================== TestVersion =============================== */

export function isTestVersion(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V4}::buck::TestVersion`; }

export interface TestVersionFields { id: ToField<UID>; version: ToField<"u64"> }

export type TestVersionReified = Reified< TestVersion, TestVersionFields >;

export class TestVersion implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V4}::buck::TestVersion`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TestVersion.$typeName; readonly $fullTypeName: `${typeof PKG_V4}::buck::TestVersion`; readonly $typeArgs: []; readonly $isPhantom = TestVersion.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: TestVersionFields, ) { this.$fullTypeName = composeSuiType( TestVersion.$typeName, ...typeArgs ) as `${typeof PKG_V4}::buck::TestVersion`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version; }

 static reified( ): TestVersionReified { return { typeName: TestVersion.$typeName, fullTypeName: composeSuiType( TestVersion.$typeName, ...[] ) as `${typeof PKG_V4}::buck::TestVersion`, typeArgs: [ ] as [], isPhantom: TestVersion.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TestVersion.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TestVersion.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TestVersion.fromBcs( data, ), bcs: TestVersion.bcs, fromJSONField: (field: any) => TestVersion.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TestVersion.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TestVersion.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TestVersion.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TestVersion.fetch( client, id, ), new: ( fields: TestVersionFields, ) => { return new TestVersion( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TestVersion.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TestVersion>> { return phantom(TestVersion.reified( )); } static get p() { return TestVersion.phantom() }

 static get bcs() { return bcs.struct("TestVersion", {

 id: UID.bcs, version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TestVersion { return TestVersion.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TestVersion { if (!isTestVersion(item.type)) { throw new Error("not a TestVersion type");

 }

 return TestVersion.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): TestVersion { return TestVersion.fromFields( TestVersion.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TestVersion { return TestVersion.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): TestVersion { if (json.$typeName !== TestVersion.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TestVersion.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TestVersion { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTestVersion(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TestVersion object`); } return TestVersion.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TestVersion { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTestVersion(data.bcs.type)) { throw new Error(`object at is not a TestVersion object`); }

 return TestVersion.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TestVersion.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TestVersion> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TestVersion object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTestVersion(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TestVersion object`); }

 return TestVersion.fromSuiObjectData( res.data ); }

 }
