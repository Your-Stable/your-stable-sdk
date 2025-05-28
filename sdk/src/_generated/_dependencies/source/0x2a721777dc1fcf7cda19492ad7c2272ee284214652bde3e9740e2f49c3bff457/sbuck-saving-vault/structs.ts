import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Option} from "../../0x1/option/structs";
import {SBUCK} from "../../0x1798f84ee72176114ddbf5525a6d964c5f8ea1b3738d08d50d0d3de4cf584884/sbuck/structs";
import {Balance} from "../../0x2/balance/structs";
import {ID, UID} from "../../0x2/object/structs";
import {SUI} from "../../0x2/sui/structs";
import {StakeProof} from "../../0x75b23bde4de9aca930d8c1f1780aa65ee777d8b33c3045b053a178b452222e82/fountain-core/structs";
import {BUCK} from "../../0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2/buck/structs";
import {PKG_V1} from "../index";
import {VaultAccess} from "../vault/structs";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::sbuck_saving_vault::AdminCap`; }

export interface AdminCapFields { id: ToField<UID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sbuck_saving_vault::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sbuck_saving_vault::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sbuck_saving_vault::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::sbuck_saving_vault::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

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

/* ============================== Strategy =============================== */

export function isStrategy(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::sbuck_saving_vault::Strategy`; }

export interface StrategyFields { id: ToField<UID>; version: ToField<"u64">; adminCapId: ToField<ID>; vaultAccess: ToField<Option<VaultAccess>>; underlyingNominalValueBuck: ToField<"u64">; collectedProfitBuck: ToField<Balance<ToPhantom<BUCK>>>; collectedProfitSui: ToField<Balance<ToPhantom<SUI>>>; stakeProof: ToField<Option<StakeProof<ToPhantom<SBUCK>, ToPhantom<SUI>>>> }

export type StrategyReified = Reified< Strategy, StrategyFields >;

export class Strategy implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::sbuck_saving_vault::Strategy`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Strategy.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::sbuck_saving_vault::Strategy`; readonly $typeArgs: []; readonly $isPhantom = Strategy.$isPhantom;

 readonly id: ToField<UID>; readonly version: ToField<"u64">; readonly adminCapId: ToField<ID>; readonly vaultAccess: ToField<Option<VaultAccess>>; readonly underlyingNominalValueBuck: ToField<"u64">; readonly collectedProfitBuck: ToField<Balance<ToPhantom<BUCK>>>; readonly collectedProfitSui: ToField<Balance<ToPhantom<SUI>>>; readonly stakeProof: ToField<Option<StakeProof<ToPhantom<SBUCK>, ToPhantom<SUI>>>>

 private constructor(typeArgs: [], fields: StrategyFields, ) { this.$fullTypeName = composeSuiType( Strategy.$typeName, ...typeArgs ) as `${typeof PKG_V1}::sbuck_saving_vault::Strategy`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.version = fields.version;; this.adminCapId = fields.adminCapId;; this.vaultAccess = fields.vaultAccess;; this.underlyingNominalValueBuck = fields.underlyingNominalValueBuck;; this.collectedProfitBuck = fields.collectedProfitBuck;; this.collectedProfitSui = fields.collectedProfitSui;; this.stakeProof = fields.stakeProof; }

 static reified( ): StrategyReified { return { typeName: Strategy.$typeName, fullTypeName: composeSuiType( Strategy.$typeName, ...[] ) as `${typeof PKG_V1}::sbuck_saving_vault::Strategy`, typeArgs: [ ] as [], isPhantom: Strategy.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Strategy.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Strategy.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Strategy.fromBcs( data, ), bcs: Strategy.bcs, fromJSONField: (field: any) => Strategy.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Strategy.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Strategy.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Strategy.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Strategy.fetch( client, id, ), new: ( fields: StrategyFields, ) => { return new Strategy( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Strategy.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Strategy>> { return phantom(Strategy.reified( )); } static get p() { return Strategy.phantom() }

 static get bcs() { return bcs.struct("Strategy", {

 id: UID.bcs, version: bcs.u64(), admin_cap_id: ID.bcs, vault_access: Option.bcs(VaultAccess.bcs), underlying_nominal_value_buck: bcs.u64(), collected_profit_buck: Balance.bcs, collected_profit_sui: Balance.bcs, stake_proof: Option.bcs(StakeProof.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Strategy { return Strategy.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), version: decodeFromFields("u64", fields.version), adminCapId: decodeFromFields(ID.reified(), fields.admin_cap_id), vaultAccess: decodeFromFields(Option.reified(VaultAccess.reified()), fields.vault_access), underlyingNominalValueBuck: decodeFromFields("u64", fields.underlying_nominal_value_buck), collectedProfitBuck: decodeFromFields(Balance.reified(reified.phantom(BUCK.reified())), fields.collected_profit_buck), collectedProfitSui: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.collected_profit_sui), stakeProof: decodeFromFields(Option.reified(StakeProof.reified(reified.phantom(SBUCK.reified()), reified.phantom(SUI.reified()))), fields.stake_proof) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Strategy { if (!isStrategy(item.type)) { throw new Error("not a Strategy type");

 }

 return Strategy.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), version: decodeFromFieldsWithTypes("u64", item.fields.version), adminCapId: decodeFromFieldsWithTypes(ID.reified(), item.fields.admin_cap_id), vaultAccess: decodeFromFieldsWithTypes(Option.reified(VaultAccess.reified()), item.fields.vault_access), underlyingNominalValueBuck: decodeFromFieldsWithTypes("u64", item.fields.underlying_nominal_value_buck), collectedProfitBuck: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(BUCK.reified())), item.fields.collected_profit_buck), collectedProfitSui: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.collected_profit_sui), stakeProof: decodeFromFieldsWithTypes(Option.reified(StakeProof.reified(reified.phantom(SBUCK.reified()), reified.phantom(SUI.reified()))), item.fields.stake_proof) } ) }

 static fromBcs( data: Uint8Array ): Strategy { return Strategy.fromFields( Strategy.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,version: this.version.toString(),adminCapId: this.adminCapId,vaultAccess: fieldToJSON<Option<VaultAccess>>(`${Option.$typeName}<${VaultAccess.$typeName}>`, this.vaultAccess),underlyingNominalValueBuck: this.underlyingNominalValueBuck.toString(),collectedProfitBuck: this.collectedProfitBuck.toJSONField(),collectedProfitSui: this.collectedProfitSui.toJSONField(),stakeProof: fieldToJSON<Option<StakeProof<ToPhantom<SBUCK>, ToPhantom<SUI>>>>(`${Option.$typeName}<${StakeProof.$typeName}<${SBUCK.$typeName}, ${SUI.$typeName}>>`, this.stakeProof),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Strategy { return Strategy.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), version: decodeFromJSONField("u64", field.version), adminCapId: decodeFromJSONField(ID.reified(), field.adminCapId), vaultAccess: decodeFromJSONField(Option.reified(VaultAccess.reified()), field.vaultAccess), underlyingNominalValueBuck: decodeFromJSONField("u64", field.underlyingNominalValueBuck), collectedProfitBuck: decodeFromJSONField(Balance.reified(reified.phantom(BUCK.reified())), field.collectedProfitBuck), collectedProfitSui: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.collectedProfitSui), stakeProof: decodeFromJSONField(Option.reified(StakeProof.reified(reified.phantom(SBUCK.reified()), reified.phantom(SUI.reified()))), field.stakeProof) } ) }

 static fromJSON( json: Record<string, any> ): Strategy { if (json.$typeName !== Strategy.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Strategy.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Strategy { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStrategy(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Strategy object`); } return Strategy.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Strategy { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStrategy(data.bcs.type)) { throw new Error(`object at is not a Strategy object`); }

 return Strategy.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Strategy.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Strategy> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Strategy object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStrategy(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Strategy object`); }

 return Strategy.fromSuiObjectData( res.data ); }

 }
