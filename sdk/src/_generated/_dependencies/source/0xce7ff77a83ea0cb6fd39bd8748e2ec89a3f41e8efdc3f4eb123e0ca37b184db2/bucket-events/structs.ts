import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/ascii/structs";
import {ID} from "../../0x2/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== BottleCreated =============================== */

export function isBottleCreated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::BottleCreated`; }

export interface BottleCreatedFields { collateralType: ToField<String>; debtor: ToField<"address">; bottleId: ToField<ID>; collateralAmount: ToField<"u64">; buckAmount: ToField<"u64"> }

export type BottleCreatedReified = Reified< BottleCreated, BottleCreatedFields >;

export class BottleCreated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::BottleCreated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BottleCreated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::BottleCreated`; readonly $typeArgs: []; readonly $isPhantom = BottleCreated.$isPhantom;

 readonly collateralType: ToField<String>; readonly debtor: ToField<"address">; readonly bottleId: ToField<ID>; readonly collateralAmount: ToField<"u64">; readonly buckAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: BottleCreatedFields, ) { this.$fullTypeName = composeSuiType( BottleCreated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::BottleCreated`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.debtor = fields.debtor;; this.bottleId = fields.bottleId;; this.collateralAmount = fields.collateralAmount;; this.buckAmount = fields.buckAmount; }

 static reified( ): BottleCreatedReified { return { typeName: BottleCreated.$typeName, fullTypeName: composeSuiType( BottleCreated.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::BottleCreated`, typeArgs: [ ] as [], isPhantom: BottleCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BottleCreated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BottleCreated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BottleCreated.fromBcs( data, ), bcs: BottleCreated.bcs, fromJSONField: (field: any) => BottleCreated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BottleCreated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BottleCreated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BottleCreated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BottleCreated.fetch( client, id, ), new: ( fields: BottleCreatedFields, ) => { return new BottleCreated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BottleCreated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BottleCreated>> { return phantom(BottleCreated.reified( )); } static get p() { return BottleCreated.phantom() }

 static get bcs() { return bcs.struct("BottleCreated", {

 collateral_type: String.bcs, debtor: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bottle_id: ID.bcs, collateral_amount: bcs.u64(), buck_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BottleCreated { return BottleCreated.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), debtor: decodeFromFields("address", fields.debtor), bottleId: decodeFromFields(ID.reified(), fields.bottle_id), collateralAmount: decodeFromFields("u64", fields.collateral_amount), buckAmount: decodeFromFields("u64", fields.buck_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BottleCreated { if (!isBottleCreated(item.type)) { throw new Error("not a BottleCreated type");

 }

 return BottleCreated.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), debtor: decodeFromFieldsWithTypes("address", item.fields.debtor), bottleId: decodeFromFieldsWithTypes(ID.reified(), item.fields.bottle_id), collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount), buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount) } ) }

 static fromBcs( data: Uint8Array ): BottleCreated { return BottleCreated.fromFields( BottleCreated.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,debtor: this.debtor,bottleId: this.bottleId,collateralAmount: this.collateralAmount.toString(),buckAmount: this.buckAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BottleCreated { return BottleCreated.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), debtor: decodeFromJSONField("address", field.debtor), bottleId: decodeFromJSONField(ID.reified(), field.bottleId), collateralAmount: decodeFromJSONField("u64", field.collateralAmount), buckAmount: decodeFromJSONField("u64", field.buckAmount) } ) }

 static fromJSON( json: Record<string, any> ): BottleCreated { if (json.$typeName !== BottleCreated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BottleCreated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BottleCreated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBottleCreated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BottleCreated object`); } return BottleCreated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BottleCreated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBottleCreated(data.bcs.type)) { throw new Error(`object at is not a BottleCreated object`); }

 return BottleCreated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BottleCreated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BottleCreated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BottleCreated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBottleCreated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BottleCreated object`); }

 return BottleCreated.fromSuiObjectData( res.data ); }

 }

/* ============================== BottleUpdated =============================== */

export function isBottleUpdated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::BottleUpdated`; }

export interface BottleUpdatedFields { collateralType: ToField<String>; debtor: ToField<"address">; bottleId: ToField<ID>; collateralAmount: ToField<"u64">; buckAmount: ToField<"u64"> }

export type BottleUpdatedReified = Reified< BottleUpdated, BottleUpdatedFields >;

export class BottleUpdated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::BottleUpdated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BottleUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::BottleUpdated`; readonly $typeArgs: []; readonly $isPhantom = BottleUpdated.$isPhantom;

 readonly collateralType: ToField<String>; readonly debtor: ToField<"address">; readonly bottleId: ToField<ID>; readonly collateralAmount: ToField<"u64">; readonly buckAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: BottleUpdatedFields, ) { this.$fullTypeName = composeSuiType( BottleUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::BottleUpdated`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.debtor = fields.debtor;; this.bottleId = fields.bottleId;; this.collateralAmount = fields.collateralAmount;; this.buckAmount = fields.buckAmount; }

 static reified( ): BottleUpdatedReified { return { typeName: BottleUpdated.$typeName, fullTypeName: composeSuiType( BottleUpdated.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::BottleUpdated`, typeArgs: [ ] as [], isPhantom: BottleUpdated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BottleUpdated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BottleUpdated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BottleUpdated.fromBcs( data, ), bcs: BottleUpdated.bcs, fromJSONField: (field: any) => BottleUpdated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BottleUpdated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BottleUpdated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BottleUpdated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BottleUpdated.fetch( client, id, ), new: ( fields: BottleUpdatedFields, ) => { return new BottleUpdated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BottleUpdated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BottleUpdated>> { return phantom(BottleUpdated.reified( )); } static get p() { return BottleUpdated.phantom() }

 static get bcs() { return bcs.struct("BottleUpdated", {

 collateral_type: String.bcs, debtor: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bottle_id: ID.bcs, collateral_amount: bcs.u64(), buck_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): BottleUpdated { return BottleUpdated.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), debtor: decodeFromFields("address", fields.debtor), bottleId: decodeFromFields(ID.reified(), fields.bottle_id), collateralAmount: decodeFromFields("u64", fields.collateral_amount), buckAmount: decodeFromFields("u64", fields.buck_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BottleUpdated { if (!isBottleUpdated(item.type)) { throw new Error("not a BottleUpdated type");

 }

 return BottleUpdated.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), debtor: decodeFromFieldsWithTypes("address", item.fields.debtor), bottleId: decodeFromFieldsWithTypes(ID.reified(), item.fields.bottle_id), collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount), buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount) } ) }

 static fromBcs( data: Uint8Array ): BottleUpdated { return BottleUpdated.fromFields( BottleUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,debtor: this.debtor,bottleId: this.bottleId,collateralAmount: this.collateralAmount.toString(),buckAmount: this.buckAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BottleUpdated { return BottleUpdated.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), debtor: decodeFromJSONField("address", field.debtor), bottleId: decodeFromJSONField(ID.reified(), field.bottleId), collateralAmount: decodeFromJSONField("u64", field.collateralAmount), buckAmount: decodeFromJSONField("u64", field.buckAmount) } ) }

 static fromJSON( json: Record<string, any> ): BottleUpdated { if (json.$typeName !== BottleUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BottleUpdated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BottleUpdated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBottleUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BottleUpdated object`); } return BottleUpdated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BottleUpdated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBottleUpdated(data.bcs.type)) { throw new Error(`object at is not a BottleUpdated object`); }

 return BottleUpdated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BottleUpdated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BottleUpdated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BottleUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBottleUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BottleUpdated object`); }

 return BottleUpdated.fromSuiObjectData( res.data ); }

 }

/* ============================== BottleDestroyed =============================== */

export function isBottleDestroyed(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::BottleDestroyed`; }

export interface BottleDestroyedFields { collateralType: ToField<String>; debtor: ToField<"address">; bottleId: ToField<ID> }

export type BottleDestroyedReified = Reified< BottleDestroyed, BottleDestroyedFields >;

export class BottleDestroyed implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::BottleDestroyed`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BottleDestroyed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::BottleDestroyed`; readonly $typeArgs: []; readonly $isPhantom = BottleDestroyed.$isPhantom;

 readonly collateralType: ToField<String>; readonly debtor: ToField<"address">; readonly bottleId: ToField<ID>

 private constructor(typeArgs: [], fields: BottleDestroyedFields, ) { this.$fullTypeName = composeSuiType( BottleDestroyed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::BottleDestroyed`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.debtor = fields.debtor;; this.bottleId = fields.bottleId; }

 static reified( ): BottleDestroyedReified { return { typeName: BottleDestroyed.$typeName, fullTypeName: composeSuiType( BottleDestroyed.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::BottleDestroyed`, typeArgs: [ ] as [], isPhantom: BottleDestroyed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BottleDestroyed.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BottleDestroyed.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BottleDestroyed.fromBcs( data, ), bcs: BottleDestroyed.bcs, fromJSONField: (field: any) => BottleDestroyed.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BottleDestroyed.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BottleDestroyed.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BottleDestroyed.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BottleDestroyed.fetch( client, id, ), new: ( fields: BottleDestroyedFields, ) => { return new BottleDestroyed( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BottleDestroyed.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BottleDestroyed>> { return phantom(BottleDestroyed.reified( )); } static get p() { return BottleDestroyed.phantom() }

 static get bcs() { return bcs.struct("BottleDestroyed", {

 collateral_type: String.bcs, debtor: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bottle_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): BottleDestroyed { return BottleDestroyed.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), debtor: decodeFromFields("address", fields.debtor), bottleId: decodeFromFields(ID.reified(), fields.bottle_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BottleDestroyed { if (!isBottleDestroyed(item.type)) { throw new Error("not a BottleDestroyed type");

 }

 return BottleDestroyed.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), debtor: decodeFromFieldsWithTypes("address", item.fields.debtor), bottleId: decodeFromFieldsWithTypes(ID.reified(), item.fields.bottle_id) } ) }

 static fromBcs( data: Uint8Array ): BottleDestroyed { return BottleDestroyed.fromFields( BottleDestroyed.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,debtor: this.debtor,bottleId: this.bottleId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BottleDestroyed { return BottleDestroyed.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), debtor: decodeFromJSONField("address", field.debtor), bottleId: decodeFromJSONField(ID.reified(), field.bottleId) } ) }

 static fromJSON( json: Record<string, any> ): BottleDestroyed { if (json.$typeName !== BottleDestroyed.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BottleDestroyed.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BottleDestroyed { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBottleDestroyed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BottleDestroyed object`); } return BottleDestroyed.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BottleDestroyed { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBottleDestroyed(data.bcs.type)) { throw new Error(`object at is not a BottleDestroyed object`); }

 return BottleDestroyed.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BottleDestroyed.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BottleDestroyed> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BottleDestroyed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBottleDestroyed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BottleDestroyed object`); }

 return BottleDestroyed.fromSuiObjectData( res.data ); }

 }

/* ============================== SurplusBottleGenerated =============================== */

export function isSurplusBottleGenerated(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::SurplusBottleGenerated`; }

export interface SurplusBottleGeneratedFields { collateralType: ToField<String>; debtor: ToField<"address">; bottleId: ToField<ID>; collateralAmount: ToField<"u64"> }

export type SurplusBottleGeneratedReified = Reified< SurplusBottleGenerated, SurplusBottleGeneratedFields >;

export class SurplusBottleGenerated implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::SurplusBottleGenerated`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SurplusBottleGenerated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::SurplusBottleGenerated`; readonly $typeArgs: []; readonly $isPhantom = SurplusBottleGenerated.$isPhantom;

 readonly collateralType: ToField<String>; readonly debtor: ToField<"address">; readonly bottleId: ToField<ID>; readonly collateralAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: SurplusBottleGeneratedFields, ) { this.$fullTypeName = composeSuiType( SurplusBottleGenerated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::SurplusBottleGenerated`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.debtor = fields.debtor;; this.bottleId = fields.bottleId;; this.collateralAmount = fields.collateralAmount; }

 static reified( ): SurplusBottleGeneratedReified { return { typeName: SurplusBottleGenerated.$typeName, fullTypeName: composeSuiType( SurplusBottleGenerated.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::SurplusBottleGenerated`, typeArgs: [ ] as [], isPhantom: SurplusBottleGenerated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SurplusBottleGenerated.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SurplusBottleGenerated.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SurplusBottleGenerated.fromBcs( data, ), bcs: SurplusBottleGenerated.bcs, fromJSONField: (field: any) => SurplusBottleGenerated.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SurplusBottleGenerated.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SurplusBottleGenerated.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SurplusBottleGenerated.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SurplusBottleGenerated.fetch( client, id, ), new: ( fields: SurplusBottleGeneratedFields, ) => { return new SurplusBottleGenerated( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SurplusBottleGenerated.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SurplusBottleGenerated>> { return phantom(SurplusBottleGenerated.reified( )); } static get p() { return SurplusBottleGenerated.phantom() }

 static get bcs() { return bcs.struct("SurplusBottleGenerated", {

 collateral_type: String.bcs, debtor: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bottle_id: ID.bcs, collateral_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SurplusBottleGenerated { return SurplusBottleGenerated.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), debtor: decodeFromFields("address", fields.debtor), bottleId: decodeFromFields(ID.reified(), fields.bottle_id), collateralAmount: decodeFromFields("u64", fields.collateral_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SurplusBottleGenerated { if (!isSurplusBottleGenerated(item.type)) { throw new Error("not a SurplusBottleGenerated type");

 }

 return SurplusBottleGenerated.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), debtor: decodeFromFieldsWithTypes("address", item.fields.debtor), bottleId: decodeFromFieldsWithTypes(ID.reified(), item.fields.bottle_id), collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount) } ) }

 static fromBcs( data: Uint8Array ): SurplusBottleGenerated { return SurplusBottleGenerated.fromFields( SurplusBottleGenerated.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,debtor: this.debtor,bottleId: this.bottleId,collateralAmount: this.collateralAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SurplusBottleGenerated { return SurplusBottleGenerated.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), debtor: decodeFromJSONField("address", field.debtor), bottleId: decodeFromJSONField(ID.reified(), field.bottleId), collateralAmount: decodeFromJSONField("u64", field.collateralAmount) } ) }

 static fromJSON( json: Record<string, any> ): SurplusBottleGenerated { if (json.$typeName !== SurplusBottleGenerated.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SurplusBottleGenerated.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SurplusBottleGenerated { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSurplusBottleGenerated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SurplusBottleGenerated object`); } return SurplusBottleGenerated.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SurplusBottleGenerated { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSurplusBottleGenerated(data.bcs.type)) { throw new Error(`object at is not a SurplusBottleGenerated object`); }

 return SurplusBottleGenerated.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SurplusBottleGenerated.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SurplusBottleGenerated> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SurplusBottleGenerated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSurplusBottleGenerated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SurplusBottleGenerated object`); }

 return SurplusBottleGenerated.fromSuiObjectData( res.data ); }

 }

/* ============================== SurplusBottleWithdrawal =============================== */

export function isSurplusBottleWithdrawal(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::SurplusBottleWithdrawal`; }

export interface SurplusBottleWithdrawalFields { collateralType: ToField<String>; debtor: ToField<"address">; bottleId: ToField<ID> }

export type SurplusBottleWithdrawalReified = Reified< SurplusBottleWithdrawal, SurplusBottleWithdrawalFields >;

export class SurplusBottleWithdrawal implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::SurplusBottleWithdrawal`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SurplusBottleWithdrawal.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::SurplusBottleWithdrawal`; readonly $typeArgs: []; readonly $isPhantom = SurplusBottleWithdrawal.$isPhantom;

 readonly collateralType: ToField<String>; readonly debtor: ToField<"address">; readonly bottleId: ToField<ID>

 private constructor(typeArgs: [], fields: SurplusBottleWithdrawalFields, ) { this.$fullTypeName = composeSuiType( SurplusBottleWithdrawal.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::SurplusBottleWithdrawal`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.debtor = fields.debtor;; this.bottleId = fields.bottleId; }

 static reified( ): SurplusBottleWithdrawalReified { return { typeName: SurplusBottleWithdrawal.$typeName, fullTypeName: composeSuiType( SurplusBottleWithdrawal.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::SurplusBottleWithdrawal`, typeArgs: [ ] as [], isPhantom: SurplusBottleWithdrawal.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SurplusBottleWithdrawal.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SurplusBottleWithdrawal.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SurplusBottleWithdrawal.fromBcs( data, ), bcs: SurplusBottleWithdrawal.bcs, fromJSONField: (field: any) => SurplusBottleWithdrawal.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SurplusBottleWithdrawal.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SurplusBottleWithdrawal.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SurplusBottleWithdrawal.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SurplusBottleWithdrawal.fetch( client, id, ), new: ( fields: SurplusBottleWithdrawalFields, ) => { return new SurplusBottleWithdrawal( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SurplusBottleWithdrawal.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SurplusBottleWithdrawal>> { return phantom(SurplusBottleWithdrawal.reified( )); } static get p() { return SurplusBottleWithdrawal.phantom() }

 static get bcs() { return bcs.struct("SurplusBottleWithdrawal", {

 collateral_type: String.bcs, debtor: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), bottle_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): SurplusBottleWithdrawal { return SurplusBottleWithdrawal.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), debtor: decodeFromFields("address", fields.debtor), bottleId: decodeFromFields(ID.reified(), fields.bottle_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SurplusBottleWithdrawal { if (!isSurplusBottleWithdrawal(item.type)) { throw new Error("not a SurplusBottleWithdrawal type");

 }

 return SurplusBottleWithdrawal.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), debtor: decodeFromFieldsWithTypes("address", item.fields.debtor), bottleId: decodeFromFieldsWithTypes(ID.reified(), item.fields.bottle_id) } ) }

 static fromBcs( data: Uint8Array ): SurplusBottleWithdrawal { return SurplusBottleWithdrawal.fromFields( SurplusBottleWithdrawal.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,debtor: this.debtor,bottleId: this.bottleId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SurplusBottleWithdrawal { return SurplusBottleWithdrawal.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), debtor: decodeFromJSONField("address", field.debtor), bottleId: decodeFromJSONField(ID.reified(), field.bottleId) } ) }

 static fromJSON( json: Record<string, any> ): SurplusBottleWithdrawal { if (json.$typeName !== SurplusBottleWithdrawal.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SurplusBottleWithdrawal.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SurplusBottleWithdrawal { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSurplusBottleWithdrawal(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SurplusBottleWithdrawal object`); } return SurplusBottleWithdrawal.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SurplusBottleWithdrawal { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSurplusBottleWithdrawal(data.bcs.type)) { throw new Error(`object at is not a SurplusBottleWithdrawal object`); }

 return SurplusBottleWithdrawal.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SurplusBottleWithdrawal.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SurplusBottleWithdrawal> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SurplusBottleWithdrawal object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSurplusBottleWithdrawal(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SurplusBottleWithdrawal object`); }

 return SurplusBottleWithdrawal.fromSuiObjectData( res.data ); }

 }

/* ============================== Redeem =============================== */

export function isRedeem(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::Redeem`; }

export interface RedeemFields { collateralType: ToField<String>; inputBuckAmount: ToField<"u64">; outputCollateralAmount: ToField<"u64"> }

export type RedeemReified = Reified< Redeem, RedeemFields >;

export class Redeem implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::Redeem`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Redeem.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::Redeem`; readonly $typeArgs: []; readonly $isPhantom = Redeem.$isPhantom;

 readonly collateralType: ToField<String>; readonly inputBuckAmount: ToField<"u64">; readonly outputCollateralAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: RedeemFields, ) { this.$fullTypeName = composeSuiType( Redeem.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::Redeem`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.inputBuckAmount = fields.inputBuckAmount;; this.outputCollateralAmount = fields.outputCollateralAmount; }

 static reified( ): RedeemReified { return { typeName: Redeem.$typeName, fullTypeName: composeSuiType( Redeem.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::Redeem`, typeArgs: [ ] as [], isPhantom: Redeem.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Redeem.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Redeem.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Redeem.fromBcs( data, ), bcs: Redeem.bcs, fromJSONField: (field: any) => Redeem.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Redeem.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Redeem.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Redeem.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Redeem.fetch( client, id, ), new: ( fields: RedeemFields, ) => { return new Redeem( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Redeem.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Redeem>> { return phantom(Redeem.reified( )); } static get p() { return Redeem.phantom() }

 static get bcs() { return bcs.struct("Redeem", {

 collateral_type: String.bcs, input_buck_amount: bcs.u64(), output_collateral_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Redeem { return Redeem.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), inputBuckAmount: decodeFromFields("u64", fields.input_buck_amount), outputCollateralAmount: decodeFromFields("u64", fields.output_collateral_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Redeem { if (!isRedeem(item.type)) { throw new Error("not a Redeem type");

 }

 return Redeem.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), inputBuckAmount: decodeFromFieldsWithTypes("u64", item.fields.input_buck_amount), outputCollateralAmount: decodeFromFieldsWithTypes("u64", item.fields.output_collateral_amount) } ) }

 static fromBcs( data: Uint8Array ): Redeem { return Redeem.fromFields( Redeem.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,inputBuckAmount: this.inputBuckAmount.toString(),outputCollateralAmount: this.outputCollateralAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Redeem { return Redeem.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), inputBuckAmount: decodeFromJSONField("u64", field.inputBuckAmount), outputCollateralAmount: decodeFromJSONField("u64", field.outputCollateralAmount) } ) }

 static fromJSON( json: Record<string, any> ): Redeem { if (json.$typeName !== Redeem.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Redeem.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Redeem { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedeem(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Redeem object`); } return Redeem.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Redeem { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedeem(data.bcs.type)) { throw new Error(`object at is not a Redeem object`); }

 return Redeem.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Redeem.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Redeem> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Redeem object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedeem(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Redeem object`); }

 return Redeem.fromSuiObjectData( res.data ); }

 }

/* ============================== FeeRateChanged =============================== */

export function isFeeRateChanged(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::FeeRateChanged`; }

export interface FeeRateChangedFields { collateralType: ToField<String>; baseFeeRate: ToField<"u64"> }

export type FeeRateChangedReified = Reified< FeeRateChanged, FeeRateChangedFields >;

export class FeeRateChanged implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::FeeRateChanged`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = FeeRateChanged.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::FeeRateChanged`; readonly $typeArgs: []; readonly $isPhantom = FeeRateChanged.$isPhantom;

 readonly collateralType: ToField<String>; readonly baseFeeRate: ToField<"u64">

 private constructor(typeArgs: [], fields: FeeRateChangedFields, ) { this.$fullTypeName = composeSuiType( FeeRateChanged.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::FeeRateChanged`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType;; this.baseFeeRate = fields.baseFeeRate; }

 static reified( ): FeeRateChangedReified { return { typeName: FeeRateChanged.$typeName, fullTypeName: composeSuiType( FeeRateChanged.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::FeeRateChanged`, typeArgs: [ ] as [], isPhantom: FeeRateChanged.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => FeeRateChanged.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FeeRateChanged.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => FeeRateChanged.fromBcs( data, ), bcs: FeeRateChanged.bcs, fromJSONField: (field: any) => FeeRateChanged.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => FeeRateChanged.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => FeeRateChanged.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => FeeRateChanged.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => FeeRateChanged.fetch( client, id, ), new: ( fields: FeeRateChangedFields, ) => { return new FeeRateChanged( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return FeeRateChanged.reified() }

 static phantom( ): PhantomReified<ToTypeStr<FeeRateChanged>> { return phantom(FeeRateChanged.reified( )); } static get p() { return FeeRateChanged.phantom() }

 static get bcs() { return bcs.struct("FeeRateChanged", {

 collateral_type: String.bcs, base_fee_rate: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): FeeRateChanged { return FeeRateChanged.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type), baseFeeRate: decodeFromFields("u64", fields.base_fee_rate) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): FeeRateChanged { if (!isFeeRateChanged(item.type)) { throw new Error("not a FeeRateChanged type");

 }

 return FeeRateChanged.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type), baseFeeRate: decodeFromFieldsWithTypes("u64", item.fields.base_fee_rate) } ) }

 static fromBcs( data: Uint8Array ): FeeRateChanged { return FeeRateChanged.fromFields( FeeRateChanged.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,baseFeeRate: this.baseFeeRate.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): FeeRateChanged { return FeeRateChanged.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType), baseFeeRate: decodeFromJSONField("u64", field.baseFeeRate) } ) }

 static fromJSON( json: Record<string, any> ): FeeRateChanged { if (json.$typeName !== FeeRateChanged.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return FeeRateChanged.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): FeeRateChanged { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFeeRateChanged(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FeeRateChanged object`); } return FeeRateChanged.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): FeeRateChanged { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFeeRateChanged(data.bcs.type)) { throw new Error(`object at is not a FeeRateChanged object`); }

 return FeeRateChanged.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FeeRateChanged.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<FeeRateChanged> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FeeRateChanged object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFeeRateChanged(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FeeRateChanged object`); }

 return FeeRateChanged.fromSuiObjectData( res.data ); }

 }

/* ============================== Redistribution =============================== */

export function isRedistribution(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bucket_events::Redistribution`; }

export interface RedistributionFields { collateralType: ToField<String> }

export type RedistributionReified = Reified< Redistribution, RedistributionFields >;

export class Redistribution implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket_events::Redistribution`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Redistribution.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket_events::Redistribution`; readonly $typeArgs: []; readonly $isPhantom = Redistribution.$isPhantom;

 readonly collateralType: ToField<String>

 private constructor(typeArgs: [], fields: RedistributionFields, ) { this.$fullTypeName = composeSuiType( Redistribution.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket_events::Redistribution`; this.$typeArgs = typeArgs;

 this.collateralType = fields.collateralType; }

 static reified( ): RedistributionReified { return { typeName: Redistribution.$typeName, fullTypeName: composeSuiType( Redistribution.$typeName, ...[] ) as `${typeof PKG_V1}::bucket_events::Redistribution`, typeArgs: [ ] as [], isPhantom: Redistribution.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Redistribution.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Redistribution.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Redistribution.fromBcs( data, ), bcs: Redistribution.bcs, fromJSONField: (field: any) => Redistribution.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Redistribution.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Redistribution.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Redistribution.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Redistribution.fetch( client, id, ), new: ( fields: RedistributionFields, ) => { return new Redistribution( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Redistribution.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Redistribution>> { return phantom(Redistribution.reified( )); } static get p() { return Redistribution.phantom() }

 static get bcs() { return bcs.struct("Redistribution", {

 collateral_type: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): Redistribution { return Redistribution.reified( ).new( { collateralType: decodeFromFields(String.reified(), fields.collateral_type) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Redistribution { if (!isRedistribution(item.type)) { throw new Error("not a Redistribution type");

 }

 return Redistribution.reified( ).new( { collateralType: decodeFromFieldsWithTypes(String.reified(), item.fields.collateral_type) } ) }

 static fromBcs( data: Uint8Array ): Redistribution { return Redistribution.fromFields( Redistribution.bcs.parse(data) ) }

 toJSONField() { return {

 collateralType: this.collateralType,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Redistribution { return Redistribution.reified( ).new( { collateralType: decodeFromJSONField(String.reified(), field.collateralType) } ) }

 static fromJSON( json: Record<string, any> ): Redistribution { if (json.$typeName !== Redistribution.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Redistribution.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Redistribution { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedistribution(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Redistribution object`); } return Redistribution.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Redistribution { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedistribution(data.bcs.type)) { throw new Error(`object at is not a Redistribution object`); }

 return Redistribution.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Redistribution.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Redistribution> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Redistribution object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedistribution(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Redistribution object`); }

 return Redistribution.fromSuiObjectData( res.data ); }

 }
