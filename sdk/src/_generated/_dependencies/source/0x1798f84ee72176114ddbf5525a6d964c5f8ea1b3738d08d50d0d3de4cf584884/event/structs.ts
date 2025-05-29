import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== CollectRewards =============================== */

export function isCollectRewards(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::event::CollectRewards`; }

export interface CollectRewardsFields { buckAmount: ToField<"u64"> }

export type CollectRewardsReified = Reified< CollectRewards, CollectRewardsFields >;

export class CollectRewards implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::CollectRewards`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CollectRewards.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::CollectRewards`; readonly $typeArgs: []; readonly $isPhantom = CollectRewards.$isPhantom;

 readonly buckAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: CollectRewardsFields, ) { this.$fullTypeName = composeSuiType( CollectRewards.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::CollectRewards`; this.$typeArgs = typeArgs;

 this.buckAmount = fields.buckAmount; }

 static reified( ): CollectRewardsReified { return { typeName: CollectRewards.$typeName, fullTypeName: composeSuiType( CollectRewards.$typeName, ...[] ) as `${typeof PKG_V1}::event::CollectRewards`, typeArgs: [ ] as [], isPhantom: CollectRewards.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CollectRewards.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CollectRewards.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CollectRewards.fromBcs( data, ), bcs: CollectRewards.bcs, fromJSONField: (field: any) => CollectRewards.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CollectRewards.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CollectRewards.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CollectRewards.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CollectRewards.fetch( client, id, ), new: ( fields: CollectRewardsFields, ) => { return new CollectRewards( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CollectRewards.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CollectRewards>> { return phantom(CollectRewards.reified( )); } static get p() { return CollectRewards.phantom() }

 static get bcs() { return bcs.struct("CollectRewards", {

 buck_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): CollectRewards { return CollectRewards.reified( ).new( { buckAmount: decodeFromFields("u64", fields.buck_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CollectRewards { if (!isCollectRewards(item.type)) { throw new Error("not a CollectRewards type");

 }

 return CollectRewards.reified( ).new( { buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount) } ) }

 static fromBcs( data: Uint8Array ): CollectRewards { return CollectRewards.fromFields( CollectRewards.bcs.parse(data) ) }

 toJSONField() { return {

 buckAmount: this.buckAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CollectRewards { return CollectRewards.reified( ).new( { buckAmount: decodeFromJSONField("u64", field.buckAmount) } ) }

 static fromJSON( json: Record<string, any> ): CollectRewards { if (json.$typeName !== CollectRewards.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CollectRewards.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CollectRewards { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCollectRewards(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CollectRewards object`); } return CollectRewards.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CollectRewards { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCollectRewards(data.bcs.type)) { throw new Error(`object at is not a CollectRewards object`); }

 return CollectRewards.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CollectRewards.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CollectRewards> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CollectRewards object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCollectRewards(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CollectRewards object`); }

 return CollectRewards.fromSuiObjectData( res.data ); }

 }

/* ============================== Deposit =============================== */

export function isDeposit(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::event::Deposit`; }

export interface DepositFields { buckAmount: ToField<"u64">; sbuckShare: ToField<"u64"> }

export type DepositReified = Reified< Deposit, DepositFields >;

export class Deposit implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::Deposit`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Deposit.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::Deposit`; readonly $typeArgs: []; readonly $isPhantom = Deposit.$isPhantom;

 readonly buckAmount: ToField<"u64">; readonly sbuckShare: ToField<"u64">

 private constructor(typeArgs: [], fields: DepositFields, ) { this.$fullTypeName = composeSuiType( Deposit.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::Deposit`; this.$typeArgs = typeArgs;

 this.buckAmount = fields.buckAmount;; this.sbuckShare = fields.sbuckShare; }

 static reified( ): DepositReified { return { typeName: Deposit.$typeName, fullTypeName: composeSuiType( Deposit.$typeName, ...[] ) as `${typeof PKG_V1}::event::Deposit`, typeArgs: [ ] as [], isPhantom: Deposit.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Deposit.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Deposit.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Deposit.fromBcs( data, ), bcs: Deposit.bcs, fromJSONField: (field: any) => Deposit.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Deposit.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Deposit.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Deposit.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Deposit.fetch( client, id, ), new: ( fields: DepositFields, ) => { return new Deposit( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Deposit.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Deposit>> { return phantom(Deposit.reified( )); } static get p() { return Deposit.phantom() }

 static get bcs() { return bcs.struct("Deposit", {

 buck_amount: bcs.u64(), sbuck_share: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Deposit { return Deposit.reified( ).new( { buckAmount: decodeFromFields("u64", fields.buck_amount), sbuckShare: decodeFromFields("u64", fields.sbuck_share) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Deposit { if (!isDeposit(item.type)) { throw new Error("not a Deposit type");

 }

 return Deposit.reified( ).new( { buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount), sbuckShare: decodeFromFieldsWithTypes("u64", item.fields.sbuck_share) } ) }

 static fromBcs( data: Uint8Array ): Deposit { return Deposit.fromFields( Deposit.bcs.parse(data) ) }

 toJSONField() { return {

 buckAmount: this.buckAmount.toString(),sbuckShare: this.sbuckShare.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Deposit { return Deposit.reified( ).new( { buckAmount: decodeFromJSONField("u64", field.buckAmount), sbuckShare: decodeFromJSONField("u64", field.sbuckShare) } ) }

 static fromJSON( json: Record<string, any> ): Deposit { if (json.$typeName !== Deposit.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Deposit.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Deposit { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeposit(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Deposit object`); } return Deposit.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Deposit { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeposit(data.bcs.type)) { throw new Error(`object at is not a Deposit object`); }

 return Deposit.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Deposit.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Deposit> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Deposit object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeposit(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Deposit object`); }

 return Deposit.fromSuiObjectData( res.data ); }

 }

/* ============================== Burn =============================== */

export function isBurn(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::event::Burn`; }

export interface BurnFields { sbuckShare: ToField<"u64">; buckAmount: ToField<"u64"> }

export type BurnReified = Reified< Burn, BurnFields >;

export class Burn implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::Burn`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Burn.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::Burn`; readonly $typeArgs: []; readonly $isPhantom = Burn.$isPhantom;

 readonly sbuckShare: ToField<"u64">; readonly buckAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: BurnFields, ) { this.$fullTypeName = composeSuiType( Burn.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::Burn`; this.$typeArgs = typeArgs;

 this.sbuckShare = fields.sbuckShare;; this.buckAmount = fields.buckAmount; }

 static reified( ): BurnReified { return { typeName: Burn.$typeName, fullTypeName: composeSuiType( Burn.$typeName, ...[] ) as `${typeof PKG_V1}::event::Burn`, typeArgs: [ ] as [], isPhantom: Burn.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Burn.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Burn.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Burn.fromBcs( data, ), bcs: Burn.bcs, fromJSONField: (field: any) => Burn.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Burn.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Burn.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Burn.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Burn.fetch( client, id, ), new: ( fields: BurnFields, ) => { return new Burn( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Burn.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Burn>> { return phantom(Burn.reified( )); } static get p() { return Burn.phantom() }

 static get bcs() { return bcs.struct("Burn", {

 sbuck_share: bcs.u64(), buck_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Burn { return Burn.reified( ).new( { sbuckShare: decodeFromFields("u64", fields.sbuck_share), buckAmount: decodeFromFields("u64", fields.buck_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Burn { if (!isBurn(item.type)) { throw new Error("not a Burn type");

 }

 return Burn.reified( ).new( { sbuckShare: decodeFromFieldsWithTypes("u64", item.fields.sbuck_share), buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount) } ) }

 static fromBcs( data: Uint8Array ): Burn { return Burn.fromFields( Burn.bcs.parse(data) ) }

 toJSONField() { return {

 sbuckShare: this.sbuckShare.toString(),buckAmount: this.buckAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Burn { return Burn.reified( ).new( { sbuckShare: decodeFromJSONField("u64", field.sbuckShare), buckAmount: decodeFromJSONField("u64", field.buckAmount) } ) }

 static fromJSON( json: Record<string, any> ): Burn { if (json.$typeName !== Burn.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Burn.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Burn { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurn(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Burn object`); } return Burn.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Burn { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBurn(data.bcs.type)) { throw new Error(`object at is not a Burn object`); }

 return Burn.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Burn.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Burn> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Burn object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurn(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Burn object`); }

 return Burn.fromSuiObjectData( res.data ); }

 }
