import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Vector} from "../../../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== PriceInfo =============================== */

export function isPriceInfo(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::price_aggregator::PriceInfo`; }

export interface PriceInfoFields { price: ToField<"u64">; timestamp: ToField<"u64"> }

export type PriceInfoReified = Reified< PriceInfo, PriceInfoFields >;

export class PriceInfo implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::price_aggregator::PriceInfo`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PriceInfo.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::price_aggregator::PriceInfo`; readonly $typeArgs: []; readonly $isPhantom = PriceInfo.$isPhantom;

 readonly price: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: PriceInfoFields, ) { this.$fullTypeName = composeSuiType( PriceInfo.$typeName, ...typeArgs ) as `${typeof PKG_V1}::price_aggregator::PriceInfo`; this.$typeArgs = typeArgs;

 this.price = fields.price;; this.timestamp = fields.timestamp; }

 static reified( ): PriceInfoReified { return { typeName: PriceInfo.$typeName, fullTypeName: composeSuiType( PriceInfo.$typeName, ...[] ) as `${typeof PKG_V1}::price_aggregator::PriceInfo`, typeArgs: [ ] as [], isPhantom: PriceInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PriceInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PriceInfo.fromBcs( data, ), bcs: PriceInfo.bcs, fromJSONField: (field: any) => PriceInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PriceInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PriceInfo.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PriceInfo.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PriceInfo.fetch( client, id, ), new: ( fields: PriceInfoFields, ) => { return new PriceInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PriceInfo>> { return phantom(PriceInfo.reified( )); } static get p() { return PriceInfo.phantom() }

 static get bcs() { return bcs.struct("PriceInfo", {

 price: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PriceInfo { return PriceInfo.reified( ).new( { price: decodeFromFields("u64", fields.price), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PriceInfo { if (!isPriceInfo(item.type)) { throw new Error("not a PriceInfo type");

 }

 return PriceInfo.reified( ).new( { price: decodeFromFieldsWithTypes("u64", item.fields.price), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): PriceInfo { return PriceInfo.fromFields( PriceInfo.bcs.parse(data) ) }

 toJSONField() { return {

 price: this.price.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PriceInfo { return PriceInfo.reified( ).new( { price: decodeFromJSONField("u64", field.price), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): PriceInfo { if (json.$typeName !== PriceInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PriceInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PriceInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceInfo object`); } return PriceInfo.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PriceInfo { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPriceInfo(data.bcs.type)) { throw new Error(`object at is not a PriceInfo object`); }

 return PriceInfo.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PriceInfo.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PriceInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceInfo object`); }

 return PriceInfo.fromSuiObjectData( res.data ); }

 }

/* ============================== PriceVector =============================== */

export function isPriceVector(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::price_aggregator::PriceVector`; }

export interface PriceVectorFields { vec: ToField<Vector<"u64">> }

export type PriceVectorReified = Reified< PriceVector, PriceVectorFields >;

export class PriceVector implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::price_aggregator::PriceVector`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PriceVector.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::price_aggregator::PriceVector`; readonly $typeArgs: []; readonly $isPhantom = PriceVector.$isPhantom;

 readonly vec: ToField<Vector<"u64">>

 private constructor(typeArgs: [], fields: PriceVectorFields, ) { this.$fullTypeName = composeSuiType( PriceVector.$typeName, ...typeArgs ) as `${typeof PKG_V1}::price_aggregator::PriceVector`; this.$typeArgs = typeArgs;

 this.vec = fields.vec; }

 static reified( ): PriceVectorReified { return { typeName: PriceVector.$typeName, fullTypeName: composeSuiType( PriceVector.$typeName, ...[] ) as `${typeof PKG_V1}::price_aggregator::PriceVector`, typeArgs: [ ] as [], isPhantom: PriceVector.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PriceVector.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceVector.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PriceVector.fromBcs( data, ), bcs: PriceVector.bcs, fromJSONField: (field: any) => PriceVector.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PriceVector.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PriceVector.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PriceVector.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PriceVector.fetch( client, id, ), new: ( fields: PriceVectorFields, ) => { return new PriceVector( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceVector.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PriceVector>> { return phantom(PriceVector.reified( )); } static get p() { return PriceVector.phantom() }

 static get bcs() { return bcs.struct("PriceVector", {

 vec: bcs.vector(bcs.u64())

}) };

 static fromFields( fields: Record<string, any> ): PriceVector { return PriceVector.reified( ).new( { vec: decodeFromFields(reified.vector("u64"), fields.vec) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PriceVector { if (!isPriceVector(item.type)) { throw new Error("not a PriceVector type");

 }

 return PriceVector.reified( ).new( { vec: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.vec) } ) }

 static fromBcs( data: Uint8Array ): PriceVector { return PriceVector.fromFields( PriceVector.bcs.parse(data) ) }

 toJSONField() { return {

 vec: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.vec),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PriceVector { return PriceVector.reified( ).new( { vec: decodeFromJSONField(reified.vector("u64"), field.vec) } ) }

 static fromJSON( json: Record<string, any> ): PriceVector { if (json.$typeName !== PriceVector.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PriceVector.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PriceVector { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceVector(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceVector object`); } return PriceVector.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PriceVector { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPriceVector(data.bcs.type)) { throw new Error(`object at is not a PriceVector object`); }

 return PriceVector.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PriceVector.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PriceVector> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceVector object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceVector(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceVector object`); }

 return PriceVector.fromSuiObjectData( res.data ); }

 }
