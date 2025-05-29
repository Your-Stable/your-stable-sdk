import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== ST_SBUCK =============================== */

export function isST_SBUCK(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::st_sbuck::ST_SBUCK`; }

export interface ST_SBUCKFields { dummyField: ToField<"bool"> }

export type ST_SBUCKReified = Reified< ST_SBUCK, ST_SBUCKFields >;

export class ST_SBUCK implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::st_sbuck::ST_SBUCK`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ST_SBUCK.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::st_sbuck::ST_SBUCK`; readonly $typeArgs: []; readonly $isPhantom = ST_SBUCK.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ST_SBUCKFields, ) { this.$fullTypeName = composeSuiType( ST_SBUCK.$typeName, ...typeArgs ) as `${typeof PKG_V1}::st_sbuck::ST_SBUCK`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ST_SBUCKReified { return { typeName: ST_SBUCK.$typeName, fullTypeName: composeSuiType( ST_SBUCK.$typeName, ...[] ) as `${typeof PKG_V1}::st_sbuck::ST_SBUCK`, typeArgs: [ ] as [], isPhantom: ST_SBUCK.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ST_SBUCK.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ST_SBUCK.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ST_SBUCK.fromBcs( data, ), bcs: ST_SBUCK.bcs, fromJSONField: (field: any) => ST_SBUCK.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ST_SBUCK.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ST_SBUCK.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ST_SBUCK.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ST_SBUCK.fetch( client, id, ), new: ( fields: ST_SBUCKFields, ) => { return new ST_SBUCK( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ST_SBUCK.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ST_SBUCK>> { return phantom(ST_SBUCK.reified( )); } static get p() { return ST_SBUCK.phantom() }

 static get bcs() { return bcs.struct("ST_SBUCK", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ST_SBUCK { return ST_SBUCK.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ST_SBUCK { if (!isST_SBUCK(item.type)) { throw new Error("not a ST_SBUCK type");

 }

 return ST_SBUCK.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): ST_SBUCK { return ST_SBUCK.fromFields( ST_SBUCK.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ST_SBUCK { return ST_SBUCK.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ST_SBUCK { if (json.$typeName !== ST_SBUCK.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ST_SBUCK.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ST_SBUCK { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isST_SBUCK(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ST_SBUCK object`); } return ST_SBUCK.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ST_SBUCK { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isST_SBUCK(data.bcs.type)) { throw new Error(`object at is not a ST_SBUCK object`); }

 return ST_SBUCK.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ST_SBUCK.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ST_SBUCK> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ST_SBUCK object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isST_SBUCK(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ST_SBUCK object`); }

 return ST_SBUCK.fromSuiObjectData( res.data ); }

 }
