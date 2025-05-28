import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== GovernanceWitness =============================== */

export function isGovernanceWitness(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::governance_witness::GovernanceWitness`; }

export interface GovernanceWitnessFields { dummyField: ToField<"bool"> }

export type GovernanceWitnessReified = Reified< GovernanceWitness, GovernanceWitnessFields >;

export class GovernanceWitness implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::governance_witness::GovernanceWitness`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = GovernanceWitness.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::governance_witness::GovernanceWitness`; readonly $typeArgs: []; readonly $isPhantom = GovernanceWitness.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: GovernanceWitnessFields, ) { this.$fullTypeName = composeSuiType( GovernanceWitness.$typeName, ...typeArgs ) as `${typeof PKG_V1}::governance_witness::GovernanceWitness`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): GovernanceWitnessReified { return { typeName: GovernanceWitness.$typeName, fullTypeName: composeSuiType( GovernanceWitness.$typeName, ...[] ) as `${typeof PKG_V1}::governance_witness::GovernanceWitness`, typeArgs: [ ] as [], isPhantom: GovernanceWitness.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => GovernanceWitness.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => GovernanceWitness.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => GovernanceWitness.fromBcs( data, ), bcs: GovernanceWitness.bcs, fromJSONField: (field: any) => GovernanceWitness.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => GovernanceWitness.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => GovernanceWitness.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => GovernanceWitness.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => GovernanceWitness.fetch( client, id, ), new: ( fields: GovernanceWitnessFields, ) => { return new GovernanceWitness( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return GovernanceWitness.reified() }

 static phantom( ): PhantomReified<ToTypeStr<GovernanceWitness>> { return phantom(GovernanceWitness.reified( )); } static get p() { return GovernanceWitness.phantom() }

 static get bcs() { return bcs.struct("GovernanceWitness", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): GovernanceWitness { return GovernanceWitness.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): GovernanceWitness { if (!isGovernanceWitness(item.type)) { throw new Error("not a GovernanceWitness type");

 }

 return GovernanceWitness.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): GovernanceWitness { return GovernanceWitness.fromFields( GovernanceWitness.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): GovernanceWitness { return GovernanceWitness.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): GovernanceWitness { if (json.$typeName !== GovernanceWitness.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return GovernanceWitness.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): GovernanceWitness { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isGovernanceWitness(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a GovernanceWitness object`); } return GovernanceWitness.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): GovernanceWitness { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isGovernanceWitness(data.bcs.type)) { throw new Error(`object at is not a GovernanceWitness object`); }

 return GovernanceWitness.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return GovernanceWitness.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<GovernanceWitness> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching GovernanceWitness object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isGovernanceWitness(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a GovernanceWitness object`); }

 return GovernanceWitness.fromSuiObjectData( res.data ); }

 }
