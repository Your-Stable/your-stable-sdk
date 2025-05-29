import * as reified from "../../_framework/reified";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {VecMap} from "../../_dependencies/source/0x2/vec-map/structs";
import {ST_SBUCK} from "../../_dependencies/source/0xd01d27939064d79e4ae1179cd11cfeeff23943f32b1a842ea1a1e15a0045d77d/st-sbuck/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {LimitedSupply} from "../limited-supply/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== YourStableFactory =============================== */

export function isYourStableFactory(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::factory::YourStableFactory`; }

export interface YourStableFactoryFields { dummyField: ToField<"bool"> }

export type YourStableFactoryReified = Reified< YourStableFactory, YourStableFactoryFields >;

export class YourStableFactory implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::factory::YourStableFactory`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = YourStableFactory.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::factory::YourStableFactory`; readonly $typeArgs: []; readonly $isPhantom = YourStableFactory.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: YourStableFactoryFields, ) { this.$fullTypeName = composeSuiType( YourStableFactory.$typeName, ...typeArgs ) as `${typeof PKG_V1}::factory::YourStableFactory`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): YourStableFactoryReified { return { typeName: YourStableFactory.$typeName, fullTypeName: composeSuiType( YourStableFactory.$typeName, ...[] ) as `${typeof PKG_V1}::factory::YourStableFactory`, typeArgs: [ ] as [], isPhantom: YourStableFactory.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => YourStableFactory.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => YourStableFactory.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => YourStableFactory.fromBcs( data, ), bcs: YourStableFactory.bcs, fromJSONField: (field: any) => YourStableFactory.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => YourStableFactory.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => YourStableFactory.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => YourStableFactory.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => YourStableFactory.fetch( client, id, ), new: ( fields: YourStableFactoryFields, ) => { return new YourStableFactory( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return YourStableFactory.reified() }

 static phantom( ): PhantomReified<ToTypeStr<YourStableFactory>> { return phantom(YourStableFactory.reified( )); } static get p() { return YourStableFactory.phantom() }

 static get bcs() { return bcs.struct("YourStableFactory", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): YourStableFactory { return YourStableFactory.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): YourStableFactory { if (!isYourStableFactory(item.type)) { throw new Error("not a YourStableFactory type");

 }

 return YourStableFactory.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): YourStableFactory { return YourStableFactory.fromFields( YourStableFactory.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): YourStableFactory { return YourStableFactory.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): YourStableFactory { if (json.$typeName !== YourStableFactory.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return YourStableFactory.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): YourStableFactory { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isYourStableFactory(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a YourStableFactory object`); } return YourStableFactory.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): YourStableFactory { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isYourStableFactory(data.bcs.type)) { throw new Error(`object at is not a YourStableFactory object`); }

 return YourStableFactory.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return YourStableFactory.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<YourStableFactory> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching YourStableFactory object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isYourStableFactory(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a YourStableFactory object`); }

 return YourStableFactory.fromSuiObjectData( res.data ); }

 }

/* ============================== Factory =============================== */

export function isFactory(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::factory::Factory` + '<'); }

export interface FactoryFields<YourStable extends PhantomTypeArgument> { id: ToField<UID>; underlyingBalance: ToField<Balance<ToPhantom<ST_SBUCK>>>; basicSupply: ToField<LimitedSupply>; extensionSupplies: ToField<VecMap<TypeName, LimitedSupply>> }

export type FactoryReified<YourStable extends PhantomTypeArgument> = Reified< Factory<YourStable>, FactoryFields<YourStable> >;

export class Factory<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::factory::Factory`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Factory.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::factory::Factory<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = Factory.$isPhantom;

 readonly id: ToField<UID>; readonly underlyingBalance: ToField<Balance<ToPhantom<ST_SBUCK>>>; readonly basicSupply: ToField<LimitedSupply>; readonly extensionSupplies: ToField<VecMap<TypeName, LimitedSupply>>

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: FactoryFields<YourStable>, ) { this.$fullTypeName = composeSuiType( Factory.$typeName, ...typeArgs ) as `${typeof PKG_V1}::factory::Factory<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.underlyingBalance = fields.underlyingBalance;; this.basicSupply = fields.basicSupply;; this.extensionSupplies = fields.extensionSupplies; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): FactoryReified<ToPhantomTypeArgument<YourStable>> { return { typeName: Factory.$typeName, fullTypeName: composeSuiType( Factory.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::factory::Factory<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: Factory.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => Factory.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Factory.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => Factory.fromBcs( YourStable, data, ), bcs: Factory.bcs, fromJSONField: (field: any) => Factory.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => Factory.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => Factory.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => Factory.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => Factory.fetch( client, YourStable, id, ), new: ( fields: FactoryFields<ToPhantomTypeArgument<YourStable>>, ) => { return new Factory( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Factory.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<Factory<ToPhantomTypeArgument<YourStable>>>> { return phantom(Factory.reified( YourStable )); } static get p() { return Factory.phantom }

 static get bcs() { return bcs.struct("Factory", {

 id: UID.bcs, underlying_balance: Balance.bcs, basic_supply: LimitedSupply.bcs, extension_supplies: VecMap.bcs(TypeName.bcs, LimitedSupply.bcs)

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): Factory<ToPhantomTypeArgument<YourStable>> { return Factory.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), underlyingBalance: decodeFromFields(Balance.reified(reified.phantom(ST_SBUCK.reified())), fields.underlying_balance), basicSupply: decodeFromFields(LimitedSupply.reified(), fields.basic_supply), extensionSupplies: decodeFromFields(VecMap.reified(TypeName.reified(), LimitedSupply.reified()), fields.extension_supplies) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): Factory<ToPhantomTypeArgument<YourStable>> { if (!isFactory(item.type)) { throw new Error("not a Factory type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Factory.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), underlyingBalance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(ST_SBUCK.reified())), item.fields.underlying_balance), basicSupply: decodeFromFieldsWithTypes(LimitedSupply.reified(), item.fields.basic_supply), extensionSupplies: decodeFromFieldsWithTypes(VecMap.reified(TypeName.reified(), LimitedSupply.reified()), item.fields.extension_supplies) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): Factory<ToPhantomTypeArgument<YourStable>> { return Factory.fromFields( typeArg, Factory.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,underlyingBalance: this.underlyingBalance.toJSONField(),basicSupply: this.basicSupply.toJSONField(),extensionSupplies: this.extensionSupplies.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): Factory<ToPhantomTypeArgument<YourStable>> { return Factory.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), underlyingBalance: decodeFromJSONField(Balance.reified(reified.phantom(ST_SBUCK.reified())), field.underlyingBalance), basicSupply: decodeFromJSONField(LimitedSupply.reified(), field.basicSupply), extensionSupplies: decodeFromJSONField(VecMap.reified(TypeName.reified(), LimitedSupply.reified()), field.extensionSupplies) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): Factory<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== Factory.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Factory.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Factory.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): Factory<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFactory(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Factory object`); } return Factory.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): Factory<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFactory(data.bcs.type)) { throw new Error(`object at is not a Factory object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Factory.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Factory.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<Factory<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Factory object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFactory(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Factory object`); }

 return Factory.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== FactoryCap =============================== */

export function isFactoryCap(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::factory::FactoryCap` + '<'); }

export interface FactoryCapFields<YourStable extends PhantomTypeArgument> { id: ToField<UID> }

export type FactoryCapReified<YourStable extends PhantomTypeArgument> = Reified< FactoryCap<YourStable>, FactoryCapFields<YourStable> >;

export class FactoryCap<YourStable extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::factory::FactoryCap`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = FactoryCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::factory::FactoryCap<${PhantomToTypeStr<YourStable>}>`; readonly $typeArgs: [PhantomToTypeStr<YourStable>]; readonly $isPhantom = FactoryCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [PhantomToTypeStr<YourStable>], fields: FactoryCapFields<YourStable>, ) { this.$fullTypeName = composeSuiType( FactoryCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::factory::FactoryCap<${PhantomToTypeStr<YourStable>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): FactoryCapReified<ToPhantomTypeArgument<YourStable>> { return { typeName: FactoryCap.$typeName, fullTypeName: composeSuiType( FactoryCap.$typeName, ...[extractType(YourStable)] ) as `${typeof PKG_V1}::factory::FactoryCap<${PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>}>`, typeArgs: [ extractType(YourStable) ] as [PhantomToTypeStr<ToPhantomTypeArgument<YourStable>>], isPhantom: FactoryCap.$isPhantom, reifiedTypeArgs: [YourStable], fromFields: (fields: Record<string, any>) => FactoryCap.fromFields( YourStable, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FactoryCap.fromFieldsWithTypes( YourStable, item, ), fromBcs: (data: Uint8Array) => FactoryCap.fromBcs( YourStable, data, ), bcs: FactoryCap.bcs, fromJSONField: (field: any) => FactoryCap.fromJSONField( YourStable, field, ), fromJSON: (json: Record<string, any>) => FactoryCap.fromJSON( YourStable, json, ), fromSuiParsedData: (content: SuiParsedData) => FactoryCap.fromSuiParsedData( YourStable, content, ), fromSuiObjectData: (content: SuiObjectData) => FactoryCap.fromSuiObjectData( YourStable, content, ), fetch: async (client: SuiClient, id: string) => FactoryCap.fetch( client, YourStable, id, ), new: ( fields: FactoryCapFields<ToPhantomTypeArgument<YourStable>>, ) => { return new FactoryCap( [extractType(YourStable)], fields ) }, kind: "StructClassReified", } }

 static get r() { return FactoryCap.reified }

 static phantom<YourStable extends PhantomReified<PhantomTypeArgument>>( YourStable: YourStable ): PhantomReified<ToTypeStr<FactoryCap<ToPhantomTypeArgument<YourStable>>>> { return phantom(FactoryCap.reified( YourStable )); } static get p() { return FactoryCap.phantom }

 static get bcs() { return bcs.struct("FactoryCap", {

 id: UID.bcs

}) };

 static fromFields<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, fields: Record<string, any> ): FactoryCap<ToPhantomTypeArgument<YourStable>> { return FactoryCap.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, item: FieldsWithTypes ): FactoryCap<ToPhantomTypeArgument<YourStable>> { if (!isFactoryCap(item.type)) { throw new Error("not a FactoryCap type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return FactoryCap.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: Uint8Array ): FactoryCap<ToPhantomTypeArgument<YourStable>> { return FactoryCap.fromFields( typeArg, FactoryCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, field: any ): FactoryCap<ToPhantomTypeArgument<YourStable>> { return FactoryCap.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, json: Record<string, any> ): FactoryCap<ToPhantomTypeArgument<YourStable>> { if (json.$typeName !== FactoryCap.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(FactoryCap.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return FactoryCap.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, content: SuiParsedData ): FactoryCap<ToPhantomTypeArgument<YourStable>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFactoryCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FactoryCap object`); } return FactoryCap.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<YourStable extends PhantomReified<PhantomTypeArgument>>( typeArg: YourStable, data: SuiObjectData ): FactoryCap<ToPhantomTypeArgument<YourStable>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFactoryCap(data.bcs.type)) { throw new Error(`object at is not a FactoryCap object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return FactoryCap.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FactoryCap.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<YourStable extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: YourStable, id: string ): Promise<FactoryCap<ToPhantomTypeArgument<YourStable>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FactoryCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFactoryCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FactoryCap object`); }

 return FactoryCap.fromSuiObjectData( typeArg, res.data ); }

 }
