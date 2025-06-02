import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Deployments =============================== */

export function isDeployments(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::Deployments`; }

export interface DeploymentsFields { factoryId: ToField<ID>; factoryCapId: ToField<ID> }

export type DeploymentsReified = Reified< Deployments, DeploymentsFields >;

export class Deployments implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::Deployments`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Deployments.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::Deployments`; readonly $typeArgs: []; readonly $isPhantom = Deployments.$isPhantom;

 readonly factoryId: ToField<ID>; readonly factoryCapId: ToField<ID>

 private constructor(typeArgs: [], fields: DeploymentsFields, ) { this.$fullTypeName = composeSuiType( Deployments.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::Deployments`; this.$typeArgs = typeArgs;

 this.factoryId = fields.factoryId;; this.factoryCapId = fields.factoryCapId; }

 static reified( ): DeploymentsReified { return { typeName: Deployments.$typeName, fullTypeName: composeSuiType( Deployments.$typeName, ...[] ) as `${typeof PKG_V1}::registry::Deployments`, typeArgs: [ ] as [], isPhantom: Deployments.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Deployments.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Deployments.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Deployments.fromBcs( data, ), bcs: Deployments.bcs, fromJSONField: (field: any) => Deployments.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Deployments.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Deployments.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Deployments.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Deployments.fetch( client, id, ), new: ( fields: DeploymentsFields, ) => { return new Deployments( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Deployments.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Deployments>> { return phantom(Deployments.reified( )); } static get p() { return Deployments.phantom() }

 static get bcs() { return bcs.struct("Deployments", {

 factory_id: ID.bcs, factory_cap_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): Deployments { return Deployments.reified( ).new( { factoryId: decodeFromFields(ID.reified(), fields.factory_id), factoryCapId: decodeFromFields(ID.reified(), fields.factory_cap_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Deployments { if (!isDeployments(item.type)) { throw new Error("not a Deployments type");

 }

 return Deployments.reified( ).new( { factoryId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_id), factoryCapId: decodeFromFieldsWithTypes(ID.reified(), item.fields.factory_cap_id) } ) }

 static fromBcs( data: Uint8Array ): Deployments { return Deployments.fromFields( Deployments.bcs.parse(data) ) }

 toJSONField() { return {

 factoryId: this.factoryId,factoryCapId: this.factoryCapId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Deployments { return Deployments.reified( ).new( { factoryId: decodeFromJSONField(ID.reified(), field.factoryId), factoryCapId: decodeFromJSONField(ID.reified(), field.factoryCapId) } ) }

 static fromJSON( json: Record<string, any> ): Deployments { if (json.$typeName !== Deployments.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Deployments.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Deployments { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeployments(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Deployments object`); } return Deployments.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Deployments { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeployments(data.bcs.type)) { throw new Error(`object at is not a Deployments object`); }

 return Deployments.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Deployments.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Deployments> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Deployments object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeployments(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Deployments object`); }

 return Deployments.fromSuiObjectData( res.data ); }

 }

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::registry::Registry`; }

export interface RegistryFields { id: ToField<UID> }

export type RegistryReified = Reified< Registry, RegistryFields >;

export class Registry implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::registry::Registry`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Registry.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::registry::Registry`; readonly $typeArgs: []; readonly $isPhantom = Registry.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: RegistryFields, ) { this.$fullTypeName = composeSuiType( Registry.$typeName, ...typeArgs ) as `${typeof PKG_V1}::registry::Registry`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): RegistryReified { return { typeName: Registry.$typeName, fullTypeName: composeSuiType( Registry.$typeName, ...[] ) as `${typeof PKG_V1}::registry::Registry`, typeArgs: [ ] as [], isPhantom: Registry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Registry.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Registry.fromBcs( data, ), bcs: Registry.bcs, fromJSONField: (field: any) => Registry.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Registry.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Registry.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Registry.fetch( client, id, ), new: ( fields: RegistryFields, ) => { return new Registry( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Registry.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Registry>> { return phantom(Registry.reified( )); } static get p() { return Registry.phantom() }

 static get bcs() { return bcs.struct("Registry", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): Registry { return Registry.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Registry { if (!isRegistry(item.type)) { throw new Error("not a Registry type");

 }

 return Registry.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): Registry { return Registry.fromFields( Registry.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Registry { return Registry.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): Registry { if (json.$typeName !== Registry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Registry.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Registry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRegistry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Registry object`); } return Registry.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Registry { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) { throw new Error(`object at is not a Registry object`); }

 return Registry.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Registry.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Registry> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Registry object`); }

 return Registry.fromSuiObjectData( res.data ); }

 }
