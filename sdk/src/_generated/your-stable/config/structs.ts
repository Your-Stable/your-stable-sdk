import * as reified from "../../_framework/reified";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {VecSet} from "../../_dependencies/source/0x2/vec-set/structs";
import {BUCK} from "../../_dependencies/source/0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2/buck/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Config =============================== */

export function isConfig(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::Config`; }

export interface ConfigFields { id: ToField<UID>; packageVersions: ToField<VecSet<"u16">>; whitelist: ToField<VecSet<TypeName>>; buckReserve: ToField<Balance<ToPhantom<BUCK>>> }

export type ConfigReified = Reified< Config, ConfigFields >;

export class Config implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::Config`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Config.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::Config`; readonly $typeArgs: []; readonly $isPhantom = Config.$isPhantom;

 readonly id: ToField<UID>; readonly packageVersions: ToField<VecSet<"u16">>; readonly whitelist: ToField<VecSet<TypeName>>; readonly buckReserve: ToField<Balance<ToPhantom<BUCK>>>

 private constructor(typeArgs: [], fields: ConfigFields, ) { this.$fullTypeName = composeSuiType( Config.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::Config`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.packageVersions = fields.packageVersions;; this.whitelist = fields.whitelist;; this.buckReserve = fields.buckReserve; }

 static reified( ): ConfigReified { return { typeName: Config.$typeName, fullTypeName: composeSuiType( Config.$typeName, ...[] ) as `${typeof PKG_V1}::config::Config`, typeArgs: [ ] as [], isPhantom: Config.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Config.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Config.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Config.fromBcs( data, ), bcs: Config.bcs, fromJSONField: (field: any) => Config.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Config.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Config.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Config.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Config.fetch( client, id, ), new: ( fields: ConfigFields, ) => { return new Config( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Config.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Config>> { return phantom(Config.reified( )); } static get p() { return Config.phantom() }

 static get bcs() { return bcs.struct("Config", {

 id: UID.bcs, package_versions: VecSet.bcs(bcs.u16()), whitelist: VecSet.bcs(TypeName.bcs), buck_reserve: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): Config { return Config.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), packageVersions: decodeFromFields(VecSet.reified("u16"), fields.package_versions), whitelist: decodeFromFields(VecSet.reified(TypeName.reified()), fields.whitelist), buckReserve: decodeFromFields(Balance.reified(reified.phantom(BUCK.reified())), fields.buck_reserve) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Config { if (!isConfig(item.type)) { throw new Error("not a Config type");

 }

 return Config.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), packageVersions: decodeFromFieldsWithTypes(VecSet.reified("u16"), item.fields.package_versions), whitelist: decodeFromFieldsWithTypes(VecSet.reified(TypeName.reified()), item.fields.whitelist), buckReserve: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(BUCK.reified())), item.fields.buck_reserve) } ) }

 static fromBcs( data: Uint8Array ): Config { return Config.fromFields( Config.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,packageVersions: this.packageVersions.toJSONField(),whitelist: this.whitelist.toJSONField(),buckReserve: this.buckReserve.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Config { return Config.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), packageVersions: decodeFromJSONField(VecSet.reified("u16"), field.packageVersions), whitelist: decodeFromJSONField(VecSet.reified(TypeName.reified()), field.whitelist), buckReserve: decodeFromJSONField(Balance.reified(reified.phantom(BUCK.reified())), field.buckReserve) } ) }

 static fromJSON( json: Record<string, any> ): Config { if (json.$typeName !== Config.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Config.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Config { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Config object`); } return Config.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Config { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isConfig(data.bcs.type)) { throw new Error(`object at is not a Config object`); }

 return Config.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Config.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Config> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Config object`); }

 return Config.fromSuiObjectData( res.data ); }

 }
