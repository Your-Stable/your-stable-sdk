import {String as String1} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== NewFactory =============================== */

export function isNewFactory(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::NewFactory` + '<'); }

export interface NewFactoryFields<YourStable extends PhantomTypeArgument> { factoryId: ToField<ID>; factoryCap: ToField<ID>; coinType: ToField<TypeName>; limit: ToField<"u64"> }

export type NewFactoryReified<YourStable extends PhantomTypeArgument> = Reified< NewFactory<YourStable>, NewFactoryFields<YourStable> >;

export class NewFactory<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::NewFactory`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = NewFactory.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::NewFactory<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = NewFactory.$isPhantom;

 readonly factoryId: ToField<ID>; readonly factoryCap: ToField<ID>; readonly coinType: ToField<TypeName>; readonly limit: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: NewFactoryFields<YourStable>, ) { this.$fullTypeName = composeSuiType( NewFactory.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::NewFactory<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factoryId = fields.factoryId;; this.factoryCap = fields.factoryCap;; this.coinType = fields.coinType;; this.limit = fields.limit; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): NewFactoryReified<ToPhantomTypeArgument<YourStable>> { return { typeName: NewFactory.$typeName, fullTypeName: composeSuiType( NewFactory.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::NewFactory<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: NewFactory.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => NewFactory.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NewFactory.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => NewFactory.fromBcs( YourStable, data, ), bcs: NewFactory.bcs, fromJSONField: (field: any) => NewFactory.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => NewFactory.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => NewFactory.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => NewFactory.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => NewFactory.fetch( client, YourStable, id, ), new: ( fields: NewFactoryFields<ToPhantomTypeArgument<YourStable>>, ) => { return new NewFactory( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return NewFactory.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<NewFactory<ToPhantomTypeArgument<YourStable>>>> { return phantom(NewFactory.reified( YourStable )); } static get p() { return NewFactory.phantom }

 static get bcs() { return bcs.struct("NewFactory", {

 factory_id: ID.bcs, factory_cap: ID.bcs, coin_type: TypeName.bcs, limit: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): NewFactory<ToPhantomTypeArgument<YourStable>> { return NewFactory.reified( typeArg, ).new( { factoryId: decodeFromFields(ID.reified(), fields.factory_id), factoryCap: decodeFromFields(ID.reified(), fields.factory_cap), coinType: decodeFromFields(TypeName.reified(), fields.coin_type), limit: decodeFromFields("u64", fields.limit) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): NewFactory<ToPhantomTypeArgument<YourStable>> { if (!isNewFactory(item.type)) { throw new Error("not a NewFactory type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return NewFactory.reified( typeArg, ).new( { factoryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_id), factoryCap: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_cap), coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type), limit: decodeFromFieldsWithTypes("u64", item.fields.limit) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): NewFactory<ToPhantomTypeArgument<YourStable>> { return NewFactory.fromFields( typeArg, NewFactory.bcs.parse(data) ) }

 toJSONField() { return {

 factoryId: this.factoryId,factoryCap: this.factoryCap,coinType: this.coinType.toJSONField(),limit: this.limit.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): NewFactory<ToPhantomTypeArgument<YourStable>> { return NewFactory.reified( typeArg, ).new( { factoryId: decodeFromJSONField(ID.reified(), field.factoryId), factoryCap: decodeFromJSONField(ID.reified(), field.factoryCap), coinType: decodeFromJSONField(TypeName.reified(), field.coinType), limit: decodeFromJSONField("u64", field.limit) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): NewFactory<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== NewFactory.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(NewFactory.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return NewFactory.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): NewFactory<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNewFactory(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NewFactory object`); } return NewFactory.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): NewFactory<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isNewFactory(data.bcs.type)) { throw new Error(`object at is not a NewFactory object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return NewFactory.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return NewFactory.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<NewFactory<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NewFactory object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNewFactory(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NewFactory object`); }

 return NewFactory.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== MintYourStable =============================== */

export function isMintYourStable(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::MintYourStable` + '<'); }

export interface MintYourStableFields<YourStable extends PhantomTypeArgument> { factoryId: ToField<ID>; stableCoinType: ToField<TypeName>; mintedAmount: ToField<"u64">; chargedBuck: ToField<"u64">; mintedStSbuckAmount: ToField<"u64">; factorySupply: ToField<"u64">; factoryUnderlyingBalance: ToField<"u64"> }

export type MintYourStableReified<YourStable extends PhantomTypeArgument> = Reified< MintYourStable<YourStable>, MintYourStableFields<YourStable> >;

export class MintYourStable<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::MintYourStable`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = MintYourStable.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::MintYourStable<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = MintYourStable.$isPhantom;

 readonly factoryId: ToField<ID>; readonly stableCoinType: ToField<TypeName>; readonly mintedAmount: ToField<"u64">; readonly chargedBuck: ToField<"u64">; readonly mintedStSbuckAmount: ToField<"u64">; readonly factorySupply: ToField<"u64">; readonly factoryUnderlyingBalance: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: MintYourStableFields<YourStable>, ) { this.$fullTypeName = composeSuiType( MintYourStable.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::MintYourStable<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factoryId = fields.factoryId;; this.stableCoinType = fields.stableCoinType;; this.mintedAmount = fields.mintedAmount;; this.chargedBuck = fields.chargedBuck;; this.mintedStSbuckAmount = fields.mintedStSbuckAmount;; this.factorySupply = fields.factorySupply;; this.factoryUnderlyingBalance = fields.factoryUnderlyingBalance; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): MintYourStableReified<ToPhantomTypeArgument<YourStable>> { return { typeName: MintYourStable.$typeName, fullTypeName: composeSuiType( MintYourStable.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::MintYourStable<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: MintYourStable.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => MintYourStable.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintYourStable.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => MintYourStable.fromBcs( YourStable, data, ), bcs: MintYourStable.bcs, fromJSONField: (field: any) => MintYourStable.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => MintYourStable.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => MintYourStable.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => MintYourStable.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => MintYourStable.fetch( client, YourStable, id, ), new: ( fields: MintYourStableFields<ToPhantomTypeArgument<YourStable>>, ) => { return new MintYourStable( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintYourStable.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<MintYourStable<ToPhantomTypeArgument<YourStable>>>> { return phantom(MintYourStable.reified( YourStable )); } static get p() { return MintYourStable.phantom }

 static get bcs() { return bcs.struct("MintYourStable", {

 factory_id: ID.bcs, stable_coin_type: TypeName.bcs, minted_amount: bcs.u64(), charged_buck: bcs.u64(), minted_st_sbuck_amount: bcs.u64(), factory_supply: bcs.u64(), factory_underlying_balance: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): MintYourStable<ToPhantomTypeArgument<YourStable>> { return MintYourStable.reified( typeArg, ).new( { factoryId: decodeFromFields(ID.reified(), fields.factory_id), stableCoinType: decodeFromFields(TypeName.reified(), fields.stable_coin_type), mintedAmount: decodeFromFields("u64", fields.minted_amount), chargedBuck: decodeFromFields("u64", fields.charged_buck), mintedStSbuckAmount: decodeFromFields("u64", fields.minted_st_sbuck_amount), factorySupply: decodeFromFields("u64", fields.factory_supply), factoryUnderlyingBalance: decodeFromFields("u64", fields.factory_underlying_balance) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): MintYourStable<ToPhantomTypeArgument<YourStable>> { if (!isMintYourStable(item.type)) { throw new Error("not a MintYourStable type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return MintYourStable.reified( typeArg, ).new( { factoryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_id), stableCoinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.stable_coin_type), mintedAmount: decodeFromFieldsWithTypes("u64", item.fields.minted_amount), chargedBuck: decodeFromFieldsWithTypes("u64", item.fields.charged_buck), mintedStSbuckAmount: decodeFromFieldsWithTypes("u64", item.fields.minted_st_sbuck_amount), factorySupply: decodeFromFieldsWithTypes("u64", item.fields.factory_supply), factoryUnderlyingBalance: decodeFromFieldsWithTypes("u64", item.fields.factory_underlying_balance) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): MintYourStable<ToPhantomTypeArgument<YourStable>> { return MintYourStable.fromFields( typeArg, MintYourStable.bcs.parse(data) ) }

 toJSONField() { return {

 factoryId: this.factoryId,stableCoinType: this.stableCoinType.toJSONField(),mintedAmount: this.mintedAmount.toString(),chargedBuck: this.chargedBuck.toString(),mintedStSbuckAmount: this.mintedStSbuckAmount.toString(),factorySupply: this.factorySupply.toString(),factoryUnderlyingBalance: this.factoryUnderlyingBalance.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): MintYourStable<ToPhantomTypeArgument<YourStable>> { return MintYourStable.reified( typeArg, ).new( { factoryId: decodeFromJSONField(ID.reified(), field.factoryId), stableCoinType: decodeFromJSONField(TypeName.reified(), field.stableCoinType), mintedAmount: decodeFromJSONField("u64", field.mintedAmount), chargedBuck: decodeFromJSONField("u64", field.chargedBuck), mintedStSbuckAmount: decodeFromJSONField("u64", field.mintedStSbuckAmount), factorySupply: decodeFromJSONField("u64", field.factorySupply), factoryUnderlyingBalance: decodeFromJSONField("u64", field.factoryUnderlyingBalance) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): MintYourStable<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== MintYourStable.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MintYourStable.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return MintYourStable.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): MintYourStable<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintYourStable(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintYourStable object`); } return MintYourStable.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): MintYourStable<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMintYourStable(data.bcs.type)) { throw new Error(`object at is not a MintYourStable object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return MintYourStable.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MintYourStable.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<MintYourStable<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintYourStable object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintYourStable(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintYourStable object`); }

 return MintYourStable.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== BurnYourStable =============================== */

export function isBurnYourStable(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::BurnYourStable` + '<'); }

export interface BurnYourStableFields<YourStable extends PhantomTypeArgument> { factoryId: ToField<ID>; stableCoinType: ToField<TypeName>; yourStableAmount: ToField<"u64">; withdrawalBuck: ToField<"u64">; burnedStSbuckAmount: ToField<"u64">; factorySupply: ToField<"u64">; factoryUnderlyingBalance: ToField<"u64"> }

export type BurnYourStableReified<YourStable extends PhantomTypeArgument> = Reified< BurnYourStable<YourStable>, BurnYourStableFields<YourStable> >;

export class BurnYourStable<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::BurnYourStable`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BurnYourStable.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::BurnYourStable<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = BurnYourStable.$isPhantom;

 readonly factoryId: ToField<ID>; readonly stableCoinType: ToField<TypeName>; readonly yourStableAmount: ToField<"u64">; readonly withdrawalBuck: ToField<"u64">; readonly burnedStSbuckAmount: ToField<"u64">; readonly factorySupply: ToField<"u64">; readonly factoryUnderlyingBalance: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: BurnYourStableFields<YourStable>, ) { this.$fullTypeName = composeSuiType( BurnYourStable.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::BurnYourStable<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factoryId = fields.factoryId;; this.stableCoinType = fields.stableCoinType;; this.yourStableAmount = fields.yourStableAmount;; this.withdrawalBuck = fields.withdrawalBuck;; this.burnedStSbuckAmount = fields.burnedStSbuckAmount;; this.factorySupply = fields.factorySupply;; this.factoryUnderlyingBalance = fields.factoryUnderlyingBalance; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): BurnYourStableReified<ToPhantomTypeArgument<YourStable>> { return { typeName: BurnYourStable.$typeName, fullTypeName: composeSuiType( BurnYourStable.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::BurnYourStable<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: BurnYourStable.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => BurnYourStable.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BurnYourStable.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => BurnYourStable.fromBcs( YourStable, data, ), bcs: BurnYourStable.bcs, fromJSONField: (field: any) => BurnYourStable.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => BurnYourStable.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => BurnYourStable.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => BurnYourStable.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => BurnYourStable.fetch( client, YourStable, id, ), new: ( fields: BurnYourStableFields<ToPhantomTypeArgument<YourStable>>, ) => { return new BurnYourStable( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BurnYourStable.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<BurnYourStable<ToPhantomTypeArgument<YourStable>>>> { return phantom(BurnYourStable.reified( YourStable )); } static get p() { return BurnYourStable.phantom }

 static get bcs() { return bcs.struct("BurnYourStable", {

 factory_id: ID.bcs, stable_coin_type: TypeName.bcs, your_stable_amount: bcs.u64(), withdrawal_buck: bcs.u64(), burned_st_sbuck_amount: bcs.u64(), factory_supply: bcs.u64(), factory_underlying_balance: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { return BurnYourStable.reified( typeArg, ).new( { factoryId: decodeFromFields(ID.reified(), fields.factory_id), stableCoinType: decodeFromFields(TypeName.reified(), fields.stable_coin_type), yourStableAmount: decodeFromFields("u64", fields.your_stable_amount), withdrawalBuck: decodeFromFields("u64", fields.withdrawal_buck), burnedStSbuckAmount: decodeFromFields("u64", fields.burned_st_sbuck_amount), factorySupply: decodeFromFields("u64", fields.factory_supply), factoryUnderlyingBalance: decodeFromFields("u64", fields.factory_underlying_balance) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { if (!isBurnYourStable(item.type)) { throw new Error("not a BurnYourStable type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BurnYourStable.reified( typeArg, ).new( { factoryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_id), stableCoinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.stable_coin_type), yourStableAmount: decodeFromFieldsWithTypes("u64", item.fields.your_stable_amount), withdrawalBuck: decodeFromFieldsWithTypes("u64", item.fields.withdrawal_buck), burnedStSbuckAmount: decodeFromFieldsWithTypes("u64", item.fields.burned_st_sbuck_amount), factorySupply: decodeFromFieldsWithTypes("u64", item.fields.factory_supply), factoryUnderlyingBalance: decodeFromFieldsWithTypes("u64", item.fields.factory_underlying_balance) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { return BurnYourStable.fromFields( typeArg, BurnYourStable.bcs.parse(data) ) }

 toJSONField() { return {

 factoryId: this.factoryId,stableCoinType: this.stableCoinType.toJSONField(),yourStableAmount: this.yourStableAmount.toString(),withdrawalBuck: this.withdrawalBuck.toString(),burnedStSbuckAmount: this.burnedStSbuckAmount.toString(),factorySupply: this.factorySupply.toString(),factoryUnderlyingBalance: this.factoryUnderlyingBalance.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { return BurnYourStable.reified( typeArg, ).new( { factoryId: decodeFromJSONField(ID.reified(), field.factoryId), stableCoinType: decodeFromJSONField(TypeName.reified(), field.stableCoinType), yourStableAmount: decodeFromJSONField("u64", field.yourStableAmount), withdrawalBuck: decodeFromJSONField("u64", field.withdrawalBuck), burnedStSbuckAmount: decodeFromJSONField("u64", field.burnedStSbuckAmount), factorySupply: decodeFromJSONField("u64", field.factorySupply), factoryUnderlyingBalance: decodeFromJSONField("u64", field.factoryUnderlyingBalance) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== BurnYourStable.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BurnYourStable.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BurnYourStable.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurnYourStable(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BurnYourStable object`); } return BurnYourStable.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): BurnYourStable<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBurnYourStable(data.bcs.type)) { throw new Error(`object at is not a BurnYourStable object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BurnYourStable.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BurnYourStable.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<BurnYourStable<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BurnYourStable object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurnYourStable(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BurnYourStable object`); }

 return BurnYourStable.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== MintYourStableWithExtension =============================== */

export function isMintYourStableWithExtension(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::MintYourStableWithExtension` + '<'); }

export interface MintYourStableWithExtensionFields<YourStable extends PhantomTypeArgument> { factoryId: ToField<ID>; extensionType: ToField<TypeName>; yourStableAmount: ToField<"u64">; extensionSupply: ToField<"u64"> }

export type MintYourStableWithExtensionReified<YourStable extends PhantomTypeArgument> = Reified< MintYourStableWithExtension<YourStable>, MintYourStableWithExtensionFields<YourStable> >;

export class MintYourStableWithExtension<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::MintYourStableWithExtension`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = MintYourStableWithExtension.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::MintYourStableWithExtension<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = MintYourStableWithExtension.$isPhantom;

 readonly factoryId: ToField<ID>; readonly extensionType: ToField<TypeName>; readonly yourStableAmount: ToField<"u64">; readonly extensionSupply: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: MintYourStableWithExtensionFields<YourStable>, ) { this.$fullTypeName = composeSuiType( MintYourStableWithExtension.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::MintYourStableWithExtension<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factoryId = fields.factoryId;; this.extensionType = fields.extensionType;; this.yourStableAmount = fields.yourStableAmount;; this.extensionSupply = fields.extensionSupply; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): MintYourStableWithExtensionReified<ToPhantomTypeArgument<YourStable>> { return { typeName: MintYourStableWithExtension.$typeName, fullTypeName: composeSuiType( MintYourStableWithExtension.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::MintYourStableWithExtension<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: MintYourStableWithExtension.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => MintYourStableWithExtension.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintYourStableWithExtension.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => MintYourStableWithExtension.fromBcs( YourStable, data, ), bcs: MintYourStableWithExtension.bcs, fromJSONField: (field: any) => MintYourStableWithExtension.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => MintYourStableWithExtension.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => MintYourStableWithExtension.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => MintYourStableWithExtension.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => MintYourStableWithExtension.fetch( client, YourStable, id, ), new: ( fields: MintYourStableWithExtensionFields<ToPhantomTypeArgument<YourStable>>, ) => { return new MintYourStableWithExtension( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintYourStableWithExtension.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>>>> { return phantom(MintYourStableWithExtension.reified( YourStable )); } static get p() { return MintYourStableWithExtension.phantom }

 static get bcs() { return bcs.struct("MintYourStableWithExtension", {

 factory_id: ID.bcs, extension_type: TypeName.bcs, your_stable_amount: bcs.u64(), extension_supply: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { return MintYourStableWithExtension.reified( typeArg, ).new( { factoryId: decodeFromFields(ID.reified(), fields.factory_id), extensionType: decodeFromFields(TypeName.reified(), fields.extension_type), yourStableAmount: decodeFromFields("u64", fields.your_stable_amount), extensionSupply: decodeFromFields("u64", fields.extension_supply) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (!isMintYourStableWithExtension(item.type)) { throw new Error("not a MintYourStableWithExtension type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return MintYourStableWithExtension.reified( typeArg, ).new( { factoryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_id), extensionType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.extension_type), yourStableAmount: decodeFromFieldsWithTypes("u64", item.fields.your_stable_amount), extensionSupply: decodeFromFieldsWithTypes("u64", item.fields.extension_supply) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { return MintYourStableWithExtension.fromFields( typeArg, MintYourStableWithExtension.bcs.parse(data) ) }

 toJSONField() { return {

 factoryId: this.factoryId,extensionType: this.extensionType.toJSONField(),yourStableAmount: this.yourStableAmount.toString(),extensionSupply: this.extensionSupply.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { return MintYourStableWithExtension.reified( typeArg, ).new( { factoryId: decodeFromJSONField(ID.reified(), field.factoryId), extensionType: decodeFromJSONField(TypeName.reified(), field.extensionType), yourStableAmount: decodeFromJSONField("u64", field.yourStableAmount), extensionSupply: decodeFromJSONField("u64", field.extensionSupply) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== MintYourStableWithExtension.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MintYourStableWithExtension.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return MintYourStableWithExtension.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintYourStableWithExtension(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintYourStableWithExtension object`); } return MintYourStableWithExtension.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMintYourStableWithExtension(data.bcs.type)) { throw new Error(`object at is not a MintYourStableWithExtension object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return MintYourStableWithExtension.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MintYourStableWithExtension.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<MintYourStableWithExtension<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintYourStableWithExtension object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintYourStableWithExtension(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintYourStableWithExtension object`); }

 return MintYourStableWithExtension.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== BurnYourStableWithExtension =============================== */

export function isBurnYourStableWithExtension(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::BurnYourStableWithExtension` + '<'); }

export interface BurnYourStableWithExtensionFields<YourStable extends PhantomTypeArgument> { factoryId: ToField<ID>; extensionType: ToField<TypeName>; yourStableAmount: ToField<"u64">; extensionSupply: ToField<"u64"> }

export type BurnYourStableWithExtensionReified<YourStable extends PhantomTypeArgument> = Reified< BurnYourStableWithExtension<YourStable>, BurnYourStableWithExtensionFields<YourStable> >;

export class BurnYourStableWithExtension<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::BurnYourStableWithExtension`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BurnYourStableWithExtension.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::BurnYourStableWithExtension<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = BurnYourStableWithExtension.$isPhantom;

 readonly factoryId: ToField<ID>; readonly extensionType: ToField<TypeName>; readonly yourStableAmount: ToField<"u64">; readonly extensionSupply: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: BurnYourStableWithExtensionFields<YourStable>, ) { this.$fullTypeName = composeSuiType( BurnYourStableWithExtension.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::BurnYourStableWithExtension<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factoryId = fields.factoryId;; this.extensionType = fields.extensionType;; this.yourStableAmount = fields.yourStableAmount;; this.extensionSupply = fields.extensionSupply; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): BurnYourStableWithExtensionReified<ToPhantomTypeArgument<YourStable>> { return { typeName: BurnYourStableWithExtension.$typeName, fullTypeName: composeSuiType( BurnYourStableWithExtension.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::BurnYourStableWithExtension<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: BurnYourStableWithExtension.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => BurnYourStableWithExtension.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BurnYourStableWithExtension.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => BurnYourStableWithExtension.fromBcs( YourStable, data, ), bcs: BurnYourStableWithExtension.bcs, fromJSONField: (field: any) => BurnYourStableWithExtension.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => BurnYourStableWithExtension.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => BurnYourStableWithExtension.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => BurnYourStableWithExtension.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => BurnYourStableWithExtension.fetch( client, YourStable, id, ), new: ( fields: BurnYourStableWithExtensionFields<ToPhantomTypeArgument<YourStable>>, ) => { return new BurnYourStableWithExtension( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BurnYourStableWithExtension.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>>>> { return phantom(BurnYourStableWithExtension.reified( YourStable )); } static get p() { return BurnYourStableWithExtension.phantom }

 static get bcs() { return bcs.struct("BurnYourStableWithExtension", {

 factory_id: ID.bcs, extension_type: TypeName.bcs, your_stable_amount: bcs.u64(), extension_supply: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { return BurnYourStableWithExtension.reified( typeArg, ).new( { factoryId: decodeFromFields(ID.reified(), fields.factory_id), extensionType: decodeFromFields(TypeName.reified(), fields.extension_type), yourStableAmount: decodeFromFields("u64", fields.your_stable_amount), extensionSupply: decodeFromFields("u64", fields.extension_supply) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (!isBurnYourStableWithExtension(item.type)) { throw new Error("not a BurnYourStableWithExtension type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BurnYourStableWithExtension.reified( typeArg, ).new( { factoryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_id), extensionType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.extension_type), yourStableAmount: decodeFromFieldsWithTypes("u64", item.fields.your_stable_amount), extensionSupply: decodeFromFieldsWithTypes("u64", item.fields.extension_supply) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { return BurnYourStableWithExtension.fromFields( typeArg, BurnYourStableWithExtension.bcs.parse(data) ) }

 toJSONField() { return {

 factoryId: this.factoryId,extensionType: this.extensionType.toJSONField(),yourStableAmount: this.yourStableAmount.toString(),extensionSupply: this.extensionSupply.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { return BurnYourStableWithExtension.reified( typeArg, ).new( { factoryId: decodeFromJSONField(ID.reified(), field.factoryId), extensionType: decodeFromJSONField(TypeName.reified(), field.extensionType), yourStableAmount: decodeFromJSONField("u64", field.yourStableAmount), extensionSupply: decodeFromJSONField("u64", field.extensionSupply) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== BurnYourStableWithExtension.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BurnYourStableWithExtension.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BurnYourStableWithExtension.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurnYourStableWithExtension(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BurnYourStableWithExtension object`); } return BurnYourStableWithExtension.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBurnYourStableWithExtension(data.bcs.type)) { throw new Error(`object at is not a BurnYourStableWithExtension object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BurnYourStableWithExtension.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BurnYourStableWithExtension.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<BurnYourStableWithExtension<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BurnYourStableWithExtension object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurnYourStableWithExtension(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BurnYourStableWithExtension object`); }

 return BurnYourStableWithExtension.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== ClaimReward =============================== */

export function isClaimReward(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::ClaimReward` + '<'); }

export interface ClaimRewardFields<YourStable extends PhantomTypeArgument> { factory: ToField<ID>; stSbuckReward: ToField<"u64"> }

export type ClaimRewardReified<YourStable extends PhantomTypeArgument> = Reified< ClaimReward<YourStable>, ClaimRewardFields<YourStable> >;

export class ClaimReward<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::ClaimReward`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = ClaimReward.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::ClaimReward<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = ClaimReward.$isPhantom;

 readonly factory: ToField<ID>; readonly stSbuckReward: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: ClaimRewardFields<YourStable>, ) { this.$fullTypeName = composeSuiType( ClaimReward.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::ClaimReward<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factory = fields.factory;; this.stSbuckReward = fields.stSbuckReward; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): ClaimRewardReified<ToPhantomTypeArgument<YourStable>> { return { typeName: ClaimReward.$typeName, fullTypeName: composeSuiType( ClaimReward.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::ClaimReward<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: ClaimReward.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => ClaimReward.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimReward.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => ClaimReward.fromBcs( YourStable, data, ), bcs: ClaimReward.bcs, fromJSONField: (field: any) => ClaimReward.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => ClaimReward.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimReward.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => ClaimReward.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => ClaimReward.fetch( client, YourStable, id, ), new: ( fields: ClaimRewardFields<ToPhantomTypeArgument<YourStable>>, ) => { return new ClaimReward( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimReward.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<ClaimReward<ToPhantomTypeArgument<YourStable>>>> { return phantom(ClaimReward.reified( YourStable )); } static get p() { return ClaimReward.phantom }

 static get bcs() { return bcs.struct("ClaimReward", {

 factory: ID.bcs, st_sbuck_reward: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): ClaimReward<ToPhantomTypeArgument<YourStable>> { return ClaimReward.reified( typeArg, ).new( { factory: decodeFromFields(ID.reified(), fields.factory), stSbuckReward: decodeFromFields("u64", fields.st_sbuck_reward) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): ClaimReward<ToPhantomTypeArgument<YourStable>> { if (!isClaimReward(item.type)) { throw new Error("not a ClaimReward type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ClaimReward.reified( typeArg, ).new( { factory: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory), stSbuckReward: decodeFromFieldsWithTypes("u64", item.fields.st_sbuck_reward) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): ClaimReward<ToPhantomTypeArgument<YourStable>> { return ClaimReward.fromFields( typeArg, ClaimReward.bcs.parse(data) ) }

 toJSONField() { return {

 factory: this.factory,stSbuckReward: this.stSbuckReward.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): ClaimReward<ToPhantomTypeArgument<YourStable>> { return ClaimReward.reified( typeArg, ).new( { factory: decodeFromJSONField(ID.reified(), field.factory), stSbuckReward: decodeFromJSONField("u64", field.stSbuckReward) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): ClaimReward<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== ClaimReward.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ClaimReward.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ClaimReward.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): ClaimReward<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimReward(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimReward object`); } return ClaimReward.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): ClaimReward<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaimReward(data.bcs.type)) { throw new Error(`object at is not a ClaimReward object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return ClaimReward.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ClaimReward.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<ClaimReward<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimReward object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimReward(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimReward object`); }

 return ClaimReward.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SetBasicLimit =============================== */

export function isSetBasicLimit(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::SetBasicLimit` + '<'); }

export interface SetBasicLimitFields<YourStable extends PhantomTypeArgument> { factory: ToField<ID>; limit: ToField<"u64"> }

export type SetBasicLimitReified<YourStable extends PhantomTypeArgument> = Reified< SetBasicLimit<YourStable>, SetBasicLimitFields<YourStable> >;

export class SetBasicLimit<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::SetBasicLimit`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SetBasicLimit.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::SetBasicLimit<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = SetBasicLimit.$isPhantom;

 readonly factory: ToField<ID>; readonly limit: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: SetBasicLimitFields<YourStable>, ) { this.$fullTypeName = composeSuiType( SetBasicLimit.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::SetBasicLimit<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factory = fields.factory;; this.limit = fields.limit; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): SetBasicLimitReified<ToPhantomTypeArgument<YourStable>> { return { typeName: SetBasicLimit.$typeName, fullTypeName: composeSuiType( SetBasicLimit.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::SetBasicLimit<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: SetBasicLimit.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => SetBasicLimit.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SetBasicLimit.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => SetBasicLimit.fromBcs( YourStable, data, ), bcs: SetBasicLimit.bcs, fromJSONField: (field: any) => SetBasicLimit.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => SetBasicLimit.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => SetBasicLimit.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => SetBasicLimit.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => SetBasicLimit.fetch( client, YourStable, id, ), new: ( fields: SetBasicLimitFields<ToPhantomTypeArgument<YourStable>>, ) => { return new SetBasicLimit( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SetBasicLimit.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<SetBasicLimit<ToPhantomTypeArgument<YourStable>>>> { return phantom(SetBasicLimit.reified( YourStable )); } static get p() { return SetBasicLimit.phantom }

 static get bcs() { return bcs.struct("SetBasicLimit", {

 factory: ID.bcs, limit: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { return SetBasicLimit.reified( typeArg, ).new( { factory: decodeFromFields(ID.reified(), fields.factory), limit: decodeFromFields("u64", fields.limit) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { if (!isSetBasicLimit(item.type)) { throw new Error("not a SetBasicLimit type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SetBasicLimit.reified( typeArg, ).new( { factory: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory), limit: decodeFromFieldsWithTypes("u64", item.fields.limit) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { return SetBasicLimit.fromFields( typeArg, SetBasicLimit.bcs.parse(data) ) }

 toJSONField() { return {

 factory: this.factory,limit: this.limit.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { return SetBasicLimit.reified( typeArg, ).new( { factory: decodeFromJSONField(ID.reified(), field.factory), limit: decodeFromJSONField("u64", field.limit) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== SetBasicLimit.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SetBasicLimit.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return SetBasicLimit.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSetBasicLimit(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SetBasicLimit object`); } return SetBasicLimit.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): SetBasicLimit<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSetBasicLimit(data.bcs.type)) { throw new Error(`object at is not a SetBasicLimit object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return SetBasicLimit.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SetBasicLimit.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<SetBasicLimit<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SetBasicLimit object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSetBasicLimit(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SetBasicLimit object`); }

 return SetBasicLimit.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SetExtensionLimit =============================== */

export function isSetExtensionLimit(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::SetExtensionLimit` + '<'); }

export interface SetExtensionLimitFields<YourStable extends PhantomTypeArgument> { factory: ToField<ID>; extension: ToField<TypeName>; limit: ToField<"u64"> }

export type SetExtensionLimitReified<YourStable extends PhantomTypeArgument> = Reified< SetExtensionLimit<YourStable>, SetExtensionLimitFields<YourStable> >;

export class SetExtensionLimit<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::SetExtensionLimit`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SetExtensionLimit.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::SetExtensionLimit<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = SetExtensionLimit.$isPhantom;

 readonly factory: ToField<ID>; readonly extension: ToField<TypeName>; readonly limit: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: SetExtensionLimitFields<YourStable>, ) { this.$fullTypeName = composeSuiType( SetExtensionLimit.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::SetExtensionLimit<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factory = fields.factory;; this.extension = fields.extension;; this.limit = fields.limit; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): SetExtensionLimitReified<ToPhantomTypeArgument<YourStable>> { return { typeName: SetExtensionLimit.$typeName, fullTypeName: composeSuiType( SetExtensionLimit.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::SetExtensionLimit<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: SetExtensionLimit.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => SetExtensionLimit.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SetExtensionLimit.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => SetExtensionLimit.fromBcs( YourStable, data, ), bcs: SetExtensionLimit.bcs, fromJSONField: (field: any) => SetExtensionLimit.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => SetExtensionLimit.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => SetExtensionLimit.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => SetExtensionLimit.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => SetExtensionLimit.fetch( client, YourStable, id, ), new: ( fields: SetExtensionLimitFields<ToPhantomTypeArgument<YourStable>>, ) => { return new SetExtensionLimit( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SetExtensionLimit.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<SetExtensionLimit<ToPhantomTypeArgument<YourStable>>>> { return phantom(SetExtensionLimit.reified( YourStable )); } static get p() { return SetExtensionLimit.phantom }

 static get bcs() { return bcs.struct("SetExtensionLimit", {

 factory: ID.bcs, extension: TypeName.bcs, limit: bcs.u64()

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { return SetExtensionLimit.reified( typeArg, ).new( { factory: decodeFromFields(ID.reified(), fields.factory), extension: decodeFromFields(TypeName.reified(), fields.extension), limit: decodeFromFields("u64", fields.limit) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { if (!isSetExtensionLimit(item.type)) { throw new Error("not a SetExtensionLimit type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SetExtensionLimit.reified( typeArg, ).new( { factory: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory), extension: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.extension), limit: decodeFromFieldsWithTypes("u64", item.fields.limit) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { return SetExtensionLimit.fromFields( typeArg, SetExtensionLimit.bcs.parse(data) ) }

 toJSONField() { return {

 factory: this.factory,extension: this.extension.toJSONField(),limit: this.limit.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { return SetExtensionLimit.reified( typeArg, ).new( { factory: decodeFromJSONField(ID.reified(), field.factory), extension: decodeFromJSONField(TypeName.reified(), field.extension), limit: decodeFromJSONField("u64", field.limit) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== SetExtensionLimit.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SetExtensionLimit.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return SetExtensionLimit.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSetExtensionLimit(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SetExtensionLimit object`); } return SetExtensionLimit.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): SetExtensionLimit<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSetExtensionLimit(data.bcs.type)) { throw new Error(`object at is not a SetExtensionLimit object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return SetExtensionLimit.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SetExtensionLimit.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<SetExtensionLimit<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SetExtensionLimit object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSetExtensionLimit(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SetExtensionLimit object`); }

 return SetExtensionLimit.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== UpdateMetadata =============================== */

export function isUpdateMetadata(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::UpdateMetadata` + '<'); }

export interface UpdateMetadataFields<YourStable extends PhantomTypeArgument> { factory: ToField<ID>; metadata: ToField<ID>; name: ToField<Option<String>>; symbol: ToField<Option<String1>>; description: ToField<Option<String>>; iconUrl: ToField<Option<String1>> }

export type UpdateMetadataReified<YourStable extends PhantomTypeArgument> = Reified< UpdateMetadata<YourStable>, UpdateMetadataFields<YourStable> >;

export class UpdateMetadata<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::UpdateMetadata`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = UpdateMetadata.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::UpdateMetadata<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = UpdateMetadata.$isPhantom;

 readonly factory: ToField<ID>; readonly metadata: ToField<ID>; readonly name: ToField<Option<String>>; readonly symbol: ToField<Option<String1>>; readonly description: ToField<Option<String>>; readonly iconUrl: ToField<Option<String1>>

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: UpdateMetadataFields<YourStable>, ) { this.$fullTypeName = composeSuiType( UpdateMetadata.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::UpdateMetadata<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.factory = fields.factory;; this.metadata = fields.metadata;; this.name = fields.name;; this.symbol = fields.symbol;; this.description = fields.description;; this.iconUrl = fields.iconUrl; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): UpdateMetadataReified<ToPhantomTypeArgument<YourStable>> { return { typeName: UpdateMetadata.$typeName, fullTypeName: composeSuiType( UpdateMetadata.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::event::UpdateMetadata<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: UpdateMetadata.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => UpdateMetadata.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateMetadata.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => UpdateMetadata.fromBcs( YourStable, data, ), bcs: UpdateMetadata.bcs, fromJSONField: (field: any) => UpdateMetadata.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => UpdateMetadata.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateMetadata.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => UpdateMetadata.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => UpdateMetadata.fetch( client, YourStable, id, ), new: ( fields: UpdateMetadataFields<ToPhantomTypeArgument<YourStable>>, ) => { return new UpdateMetadata( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateMetadata.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<UpdateMetadata<ToPhantomTypeArgument<YourStable>>>> { return phantom(UpdateMetadata.reified( YourStable )); } static get p() { return UpdateMetadata.phantom }

 static get bcs() { return bcs.struct("UpdateMetadata", {

 factory: ID.bcs, metadata: ID.bcs, name: Option.bcs(String.bcs), symbol: Option.bcs(String1.bcs), description: Option.bcs(String.bcs), icon_url: Option.bcs(String1.bcs)

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { return UpdateMetadata.reified( typeArg, ).new( { factory: decodeFromFields(ID.reified(), fields.factory), metadata: decodeFromFields(ID.reified(), fields.metadata), name: decodeFromFields(Option.reified(String.reified()), fields.name), symbol: decodeFromFields(Option.reified(String1.reified()), fields.symbol), description: decodeFromFields(Option.reified(String.reified()), fields.description), iconUrl: decodeFromFields(Option.reified(String1.reified()), fields.icon_url) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { if (!isUpdateMetadata(item.type)) { throw new Error("not a UpdateMetadata type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return UpdateMetadata.reified( typeArg, ).new( { factory: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory), metadata: decodeFromFieldsWithTypes(ID.reified(), item.fields.metadata), name: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.name), symbol: decodeFromFieldsWithTypes(Option.reified(String1.reified()), item.fields.symbol), description: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.description), iconUrl: decodeFromFieldsWithTypes(Option.reified(String1.reified()), item.fields.icon_url) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { return UpdateMetadata.fromFields( typeArg, UpdateMetadata.bcs.parse(data) ) }

 toJSONField() { return {

 factory: this.factory,metadata: this.metadata,name: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.name),symbol: fieldToJSON<Option<String1>>(`${Option.$typeName}<${String1.$typeName}>`, this.symbol),description: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.description),iconUrl: fieldToJSON<Option<String1>>(`${Option.$typeName}<${String1.$typeName}>`, this.iconUrl),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { return UpdateMetadata.reified( typeArg, ).new( { factory: decodeFromJSONField(ID.reified(), field.factory), metadata: decodeFromJSONField(ID.reified(), field.metadata), name: decodeFromJSONField(Option.reified(String.reified()), field.name), symbol: decodeFromJSONField(Option.reified(String1.reified()), field.symbol), description: decodeFromJSONField(Option.reified(String.reified()), field.description), iconUrl: decodeFromJSONField(Option.reified(String1.reified()), field.iconUrl) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== UpdateMetadata.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(UpdateMetadata.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return UpdateMetadata.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateMetadata(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateMetadata object`); } return UpdateMetadata.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): UpdateMetadata<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdateMetadata(data.bcs.type)) { throw new Error(`object at is not a UpdateMetadata object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return UpdateMetadata.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdateMetadata.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<UpdateMetadata<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateMetadata object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateMetadata(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateMetadata object`); }

 return UpdateMetadata.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== CreateQueueTicket =============================== */

export function isCreateQueueTicket(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::CreateQueueTicket` + '<'); }

export interface CreateQueueTicketFields<R extends PhantomTypeArgument> { stableCoinType: ToField<TypeName>; maxAmount: ToField<"u64">; buckBalance: ToField<"u64">; tid: ToField<"u64">; timeToRedeem: ToField<"u64">; recipient: ToField<"address"> }

export type CreateQueueTicketReified<R extends PhantomTypeArgument> = Reified< CreateQueueTicket<R>, CreateQueueTicketFields<R> >;

export class CreateQueueTicket<R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::CreateQueueTicket`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CreateQueueTicket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::CreateQueueTicket<${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<R>]; readonly $isPhantom = CreateQueueTicket.$isPhantom;

 readonly stableCoinType: ToField<TypeName>; readonly maxAmount: ToField<"u64">; readonly buckBalance: ToField<"u64">; readonly tid: ToField<"u64">; readonly timeToRedeem: ToField<"u64">; readonly recipient: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<R>], fields: CreateQueueTicketFields<R>, ) { this.$fullTypeName = composeSuiType( CreateQueueTicket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::CreateQueueTicket<${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.stableCoinType = fields.stableCoinType;; this.maxAmount = fields.maxAmount;; this.buckBalance = fields.buckBalance;; this.tid = fields.tid;; this.timeToRedeem = fields.timeToRedeem;; this.recipient = fields.recipient; }

 static reified<R extends PhantomReified<PhantomTypeArgument>>( R: R ): CreateQueueTicketReified<ToPhantomTypeArgument<R>> { return { typeName: CreateQueueTicket.$typeName, fullTypeName: composeSuiType( CreateQueueTicket.$typeName, ...[extractType(R)] ) as `${typeof PKG_V1}::event::CreateQueueTicket<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: CreateQueueTicket.$isPhantom, reifiedTypeArgs: [R], fromFields: (fields: Record<string, any>) => CreateQueueTicket.fromFields( R, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CreateQueueTicket.fromFieldsWithTypes( R, item, ), fromBcs: (data: Uint8Array) => CreateQueueTicket.fromBcs( R, data, ), bcs: CreateQueueTicket.bcs, fromJSONField: (field: any) => CreateQueueTicket.fromJSONField( R, field, ), fromJSON: (json: Record<string, any>) => CreateQueueTicket.fromJSON( R, json, ), fromSuiParsedData: (content: SuiParsedData) => CreateQueueTicket.fromSuiParsedData( R, content, ), fromSuiObjectData: (content: SuiObjectData) => CreateQueueTicket.fromSuiObjectData( R, content, ), fetch: async (client: SuiClient, id: string) => CreateQueueTicket.fetch( client, R, id, ), new: ( fields: CreateQueueTicketFields<ToPhantomTypeArgument<R>>, ) => { return new CreateQueueTicket( [extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CreateQueueTicket.reified }

 static phantom<R extends PhantomReified<PhantomTypeArgument>>( R: R ): PhantomReified<ToTypeStr<CreateQueueTicket<ToPhantomTypeArgument<R>>>> { return phantom(CreateQueueTicket.reified( R )); } static get p() { return CreateQueueTicket.phantom }

 static get bcs() { return bcs.struct("CreateQueueTicket", {

 stable_coin_type: TypeName.bcs, max_amount: bcs.u64(), buck_balance: bcs.u64(), tid: bcs.u64(), time_to_redeem: bcs.u64(), recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, fields: Record<string, any> ): CreateQueueTicket<ToPhantomTypeArgument<R>> { return CreateQueueTicket.reified( typeArg, ).new( { stableCoinType: decodeFromFields(TypeName.reified(), fields.stable_coin_type), maxAmount: decodeFromFields("u64", fields.max_amount), buckBalance: decodeFromFields("u64", fields.buck_balance), tid: decodeFromFields("u64", fields.tid), timeToRedeem: decodeFromFields("u64", fields.time_to_redeem), recipient: decodeFromFields("address", fields.recipient) } ) }

 static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, item: FieldsWithTypes ): CreateQueueTicket<ToPhantomTypeArgument<R>> { if (!isCreateQueueTicket(item.type)) { throw new Error("not a CreateQueueTicket type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CreateQueueTicket.reified( typeArg, ).new( { stableCoinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.stable_coin_type), maxAmount: decodeFromFieldsWithTypes("u64", item.fields.max_amount), buckBalance: decodeFromFieldsWithTypes("u64", item.fields.buck_balance), tid: decodeFromFieldsWithTypes("u64", item.fields.tid), timeToRedeem: decodeFromFieldsWithTypes("u64", item.fields.time_to_redeem), recipient: decodeFromFieldsWithTypes("address", item.fields.recipient) } ) }

 static fromBcs<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: Uint8Array ): CreateQueueTicket<ToPhantomTypeArgument<R>> { return CreateQueueTicket.fromFields( typeArg, CreateQueueTicket.bcs.parse(data) ) }

 toJSONField() { return {

 stableCoinType: this.stableCoinType.toJSONField(),maxAmount: this.maxAmount.toString(),buckBalance: this.buckBalance.toString(),tid: this.tid.toString(),timeToRedeem: this.timeToRedeem.toString(),recipient: this.recipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, field: any ): CreateQueueTicket<ToPhantomTypeArgument<R>> { return CreateQueueTicket.reified( typeArg, ).new( { stableCoinType: decodeFromJSONField(TypeName.reified(), field.stableCoinType), maxAmount: decodeFromJSONField("u64", field.maxAmount), buckBalance: decodeFromJSONField("u64", field.buckBalance), tid: decodeFromJSONField("u64", field.tid), timeToRedeem: decodeFromJSONField("u64", field.timeToRedeem), recipient: decodeFromJSONField("address", field.recipient) } ) }

 static fromJSON<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, json: Record<string, any> ): CreateQueueTicket<ToPhantomTypeArgument<R>> { if (json.$typeName !== CreateQueueTicket.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CreateQueueTicket.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CreateQueueTicket.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, content: SuiParsedData ): CreateQueueTicket<ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCreateQueueTicket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CreateQueueTicket object`); } return CreateQueueTicket.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: SuiObjectData ): CreateQueueTicket<ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCreateQueueTicket(data.bcs.type)) { throw new Error(`object at is not a CreateQueueTicket object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CreateQueueTicket.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CreateQueueTicket.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: R, id: string ): Promise<CreateQueueTicket<ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CreateQueueTicket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCreateQueueTicket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CreateQueueTicket object`); }

 return CreateQueueTicket.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== Redeem =============================== */

export function isRedeem(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::Redeem` + '<'); }

export interface RedeemFields<R extends PhantomTypeArgument> { stableCoinType: ToField<TypeName>; buckBalance: ToField<"u64">; stableCoinAmount: ToField<"u64">; tid: ToField<"u64">; timeToRedeem: ToField<"u64">; timestamp: ToField<"u64"> }

export type RedeemReified<R extends PhantomTypeArgument> = Reified< Redeem<R>, RedeemFields<R> >;

export class Redeem<R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::Redeem`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Redeem.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::Redeem<${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<R>]; readonly $isPhantom = Redeem.$isPhantom;

 readonly stableCoinType: ToField<TypeName>; readonly buckBalance: ToField<"u64">; readonly stableCoinAmount: ToField<"u64">; readonly tid: ToField<"u64">; readonly timeToRedeem: ToField<"u64">; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<R>], fields: RedeemFields<R>, ) { this.$fullTypeName = composeSuiType( Redeem.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::Redeem<${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.stableCoinType = fields.stableCoinType;; this.buckBalance = fields.buckBalance;; this.stableCoinAmount = fields.stableCoinAmount;; this.tid = fields.tid;; this.timeToRedeem = fields.timeToRedeem;; this.timestamp = fields.timestamp; }

 static reified<R extends PhantomReified<PhantomTypeArgument>>( R: R ): RedeemReified<ToPhantomTypeArgument<R>> { return { typeName: Redeem.$typeName, fullTypeName: composeSuiType( Redeem.$typeName, ...[extractType(R)] ) as `${typeof PKG_V1}::event::Redeem<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: Redeem.$isPhantom, reifiedTypeArgs: [R], fromFields: (fields: Record<string, any>) => Redeem.fromFields( R, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Redeem.fromFieldsWithTypes( R, item, ), fromBcs: (data: Uint8Array) => Redeem.fromBcs( R, data, ), bcs: Redeem.bcs, fromJSONField: (field: any) => Redeem.fromJSONField( R, field, ), fromJSON: (json: Record<string, any>) => Redeem.fromJSON( R, json, ), fromSuiParsedData: (content: SuiParsedData) => Redeem.fromSuiParsedData( R, content, ), fromSuiObjectData: (content: SuiObjectData) => Redeem.fromSuiObjectData( R, content, ), fetch: async (client: SuiClient, id: string) => Redeem.fetch( client, R, id, ), new: ( fields: RedeemFields<ToPhantomTypeArgument<R>>, ) => { return new Redeem( [extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Redeem.reified }

 static phantom<R extends PhantomReified<PhantomTypeArgument>>( R: R ): PhantomReified<ToTypeStr<Redeem<ToPhantomTypeArgument<R>>>> { return phantom(Redeem.reified( R )); } static get p() { return Redeem.phantom }

 static get bcs() { return bcs.struct("Redeem", {

 stable_coin_type: TypeName.bcs, buck_balance: bcs.u64(), stable_coin_amount: bcs.u64(), tid: bcs.u64(), time_to_redeem: bcs.u64(), timestamp: bcs.u64()

}) };

 static fromFields<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, fields: Record<string, any> ): Redeem<ToPhantomTypeArgument<R>> { return Redeem.reified( typeArg, ).new( { stableCoinType: decodeFromFields(TypeName.reified(), fields.stable_coin_type), buckBalance: decodeFromFields("u64", fields.buck_balance), stableCoinAmount: decodeFromFields("u64", fields.stable_coin_amount), tid: decodeFromFields("u64", fields.tid), timeToRedeem: decodeFromFields("u64", fields.time_to_redeem), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, item: FieldsWithTypes ): Redeem<ToPhantomTypeArgument<R>> { if (!isRedeem(item.type)) { throw new Error("not a Redeem type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Redeem.reified( typeArg, ).new( { stableCoinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.stable_coin_type), buckBalance: decodeFromFieldsWithTypes("u64", item.fields.buck_balance), stableCoinAmount: decodeFromFieldsWithTypes("u64", item.fields.stable_coin_amount), tid: decodeFromFieldsWithTypes("u64", item.fields.tid), timeToRedeem: decodeFromFieldsWithTypes("u64", item.fields.time_to_redeem), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: Uint8Array ): Redeem<ToPhantomTypeArgument<R>> { return Redeem.fromFields( typeArg, Redeem.bcs.parse(data) ) }

 toJSONField() { return {

 stableCoinType: this.stableCoinType.toJSONField(),buckBalance: this.buckBalance.toString(),stableCoinAmount: this.stableCoinAmount.toString(),tid: this.tid.toString(),timeToRedeem: this.timeToRedeem.toString(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, field: any ): Redeem<ToPhantomTypeArgument<R>> { return Redeem.reified( typeArg, ).new( { stableCoinType: decodeFromJSONField(TypeName.reified(), field.stableCoinType), buckBalance: decodeFromJSONField("u64", field.buckBalance), stableCoinAmount: decodeFromJSONField("u64", field.stableCoinAmount), tid: decodeFromJSONField("u64", field.tid), timeToRedeem: decodeFromJSONField("u64", field.timeToRedeem), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, json: Record<string, any> ): Redeem<ToPhantomTypeArgument<R>> { if (json.$typeName !== Redeem.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Redeem.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Redeem.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, content: SuiParsedData ): Redeem<ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRedeem(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Redeem object`); } return Redeem.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: SuiObjectData ): Redeem<ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRedeem(data.bcs.type)) { throw new Error(`object at is not a Redeem object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Redeem.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Redeem.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: R, id: string ): Promise<Redeem<ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Redeem object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRedeem(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Redeem object`); }

 return Redeem.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SetRedeemer =============================== */

export function isSetRedeemer(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::event::SetRedeemer` + '<'); }

export interface SetRedeemerFields<R extends PhantomTypeArgument> { queue: ToField<ID>; redeemer: ToField<Option<"address">> }

export type SetRedeemerReified<R extends PhantomTypeArgument> = Reified< SetRedeemer<R>, SetRedeemerFields<R> >;

export class SetRedeemer<R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::event::SetRedeemer`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SetRedeemer.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::event::SetRedeemer<${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<R>]; readonly $isPhantom = SetRedeemer.$isPhantom;

 readonly queue: ToField<ID>; readonly redeemer: ToField<Option<"address">>

 private constructor(typeArgs: [PhantomToTypeStr<R>], fields: SetRedeemerFields<R>, ) { this.$fullTypeName = composeSuiType( SetRedeemer.$typeName, ...typeArgs ) as `${typeof PKG_V1}::event::SetRedeemer<${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.queue = fields.queue;; this.redeemer = fields.redeemer; }

 static reified<R extends PhantomReified<PhantomTypeArgument>>( R: R ): SetRedeemerReified<ToPhantomTypeArgument<R>> { return { typeName: SetRedeemer.$typeName, fullTypeName: composeSuiType( SetRedeemer.$typeName, ...[extractType(R)] ) as `${typeof PKG_V1}::event::SetRedeemer<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: SetRedeemer.$isPhantom, reifiedTypeArgs: [R], fromFields: (fields: Record<string, any>) => SetRedeemer.fromFields( R, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SetRedeemer.fromFieldsWithTypes( R, item, ), fromBcs: (data: Uint8Array) => SetRedeemer.fromBcs( R, data, ), bcs: SetRedeemer.bcs, fromJSONField: (field: any) => SetRedeemer.fromJSONField( R, field, ), fromJSON: (json: Record<string, any>) => SetRedeemer.fromJSON( R, json, ), fromSuiParsedData: (content: SuiParsedData) => SetRedeemer.fromSuiParsedData( R, content, ), fromSuiObjectData: (content: SuiObjectData) => SetRedeemer.fromSuiObjectData( R, content, ), fetch: async (client: SuiClient, id: string) => SetRedeemer.fetch( client, R, id, ), new: ( fields: SetRedeemerFields<ToPhantomTypeArgument<R>>, ) => { return new SetRedeemer( [extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SetRedeemer.reified }

 static phantom<R extends PhantomReified<PhantomTypeArgument>>( R: R ): PhantomReified<ToTypeStr<SetRedeemer<ToPhantomTypeArgument<R>>>> { return phantom(SetRedeemer.reified( R )); } static get p() { return SetRedeemer.phantom }

 static get bcs() { return bcs.struct("SetRedeemer", {

 queue: ID.bcs, redeemer: Option.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, fields: Record<string, any> ): SetRedeemer<ToPhantomTypeArgument<R>> { return SetRedeemer.reified( typeArg, ).new( { queue: decodeFromFields(ID.reified(), fields.queue), redeemer: decodeFromFields(Option.reified("address"), fields.redeemer) } ) }

 static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, item: FieldsWithTypes ): SetRedeemer<ToPhantomTypeArgument<R>> { if (!isSetRedeemer(item.type)) { throw new Error("not a SetRedeemer type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SetRedeemer.reified( typeArg, ).new( { queue: decodeFromFieldsWithTypes(ID.reified(), item.fields.queue), redeemer: decodeFromFieldsWithTypes(Option.reified("address"), item.fields.redeemer) } ) }

 static fromBcs<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: Uint8Array ): SetRedeemer<ToPhantomTypeArgument<R>> { return SetRedeemer.fromFields( typeArg, SetRedeemer.bcs.parse(data) ) }

 toJSONField() { return {

 queue: this.queue,redeemer: fieldToJSON<Option<"address">>(`${Option.$typeName}<address>`, this.redeemer),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, field: any ): SetRedeemer<ToPhantomTypeArgument<R>> { return SetRedeemer.reified( typeArg, ).new( { queue: decodeFromJSONField(ID.reified(), field.queue), redeemer: decodeFromJSONField(Option.reified("address"), field.redeemer) } ) }

 static fromJSON<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, json: Record<string, any> ): SetRedeemer<ToPhantomTypeArgument<R>> { if (json.$typeName !== SetRedeemer.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SetRedeemer.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return SetRedeemer.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, content: SuiParsedData ): SetRedeemer<ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSetRedeemer(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SetRedeemer object`); } return SetRedeemer.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: SuiObjectData ): SetRedeemer<ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSetRedeemer(data.bcs.type)) { throw new Error(`object at is not a SetRedeemer object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return SetRedeemer.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SetRedeemer.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: R, id: string ): Promise<SetRedeemer<ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SetRedeemer object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSetRedeemer(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SetRedeemer object`); }

 return SetRedeemer.fromSuiObjectData( typeArg, res.data ); }

 }
