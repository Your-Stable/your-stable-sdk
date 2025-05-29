import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {ID, UID} from "../../0x2/object/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::fountain_core::AdminCap`; }

export interface AdminCapFields { id: ToField<UID>; fountainId: ToField<ID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>; readonly fountainId: ToField<ID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.fountainId = fields.fountainId; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::fountain_core::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs, fountain_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), fountainId: decodeFromFields(ID.reified(), fields.fountain_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,fountainId: this.fountainId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), fountainId: decodeFromJSONField(ID.reified(), field.fountainId) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAdminCap(data.bcs.type)) { throw new Error(`object at is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromSuiObjectData( res.data ); }

 }

/* ============================== Fountain =============================== */

export function isFountain(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::Fountain` + '<'); }

export interface FountainFields<S extends PhantomTypeArgument, R extends PhantomTypeArgument> { id: ToField<UID>; source: ToField<Balance<R>>; flowAmount: ToField<"u64">; flowInterval: ToField<"u64">; pool: ToField<Balance<R>>; staked: ToField<Balance<S>>; totalWeight: ToField<"u64">; cumulativeUnit: ToField<"u128">; latestReleaseTime: ToField<"u64">; minLockTime: ToField<"u64">; maxLockTime: ToField<"u64"> }

export type FountainReified<S extends PhantomTypeArgument, R extends PhantomTypeArgument> = Reified< Fountain<S, R>, FountainFields<S, R> >;

export class Fountain<S extends PhantomTypeArgument, R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::Fountain`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = Fountain.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::Fountain<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>]; readonly $isPhantom = Fountain.$isPhantom;

 readonly id: ToField<UID>; readonly source: ToField<Balance<R>>; readonly flowAmount: ToField<"u64">; readonly flowInterval: ToField<"u64">; readonly pool: ToField<Balance<R>>; readonly staked: ToField<Balance<S>>; readonly totalWeight: ToField<"u64">; readonly cumulativeUnit: ToField<"u128">; readonly latestReleaseTime: ToField<"u64">; readonly minLockTime: ToField<"u64">; readonly maxLockTime: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>], fields: FountainFields<S, R>, ) { this.$fullTypeName = composeSuiType( Fountain.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::Fountain<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.source = fields.source;; this.flowAmount = fields.flowAmount;; this.flowInterval = fields.flowInterval;; this.pool = fields.pool;; this.staked = fields.staked;; this.totalWeight = fields.totalWeight;; this.cumulativeUnit = fields.cumulativeUnit;; this.latestReleaseTime = fields.latestReleaseTime;; this.minLockTime = fields.minLockTime;; this.maxLockTime = fields.maxLockTime; }

 static reified<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): FountainReified<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return { typeName: Fountain.$typeName, fullTypeName: composeSuiType( Fountain.$typeName, ...[extractType(S), extractType(R)] ) as `${typeof PKG_V1}::fountain_core::Fountain<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(S), extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>, PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: Fountain.$isPhantom, reifiedTypeArgs: [S, R], fromFields: (fields: Record<string, any>) => Fountain.fromFields( [S, R], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Fountain.fromFieldsWithTypes( [S, R], item, ), fromBcs: (data: Uint8Array) => Fountain.fromBcs( [S, R], data, ), bcs: Fountain.bcs, fromJSONField: (field: any) => Fountain.fromJSONField( [S, R], field, ), fromJSON: (json: Record<string, any>) => Fountain.fromJSON( [S, R], json, ), fromSuiParsedData: (content: SuiParsedData) => Fountain.fromSuiParsedData( [S, R], content, ), fromSuiObjectData: (content: SuiObjectData) => Fountain.fromSuiObjectData( [S, R], content, ), fetch: async (client: SuiClient, id: string) => Fountain.fetch( client, [S, R], id, ), new: ( fields: FountainFields<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>, ) => { return new Fountain( [extractType(S), extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Fountain.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): PhantomReified<ToTypeStr<Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>>> { return phantom(Fountain.reified( S, R )); } static get p() { return Fountain.phantom }

 static get bcs() { return bcs.struct("Fountain", {

 id: UID.bcs, source: Balance.bcs, flow_amount: bcs.u64(), flow_interval: bcs.u64(), pool: Balance.bcs, staked: Balance.bcs, total_weight: bcs.u64(), cumulative_unit: bcs.u128(), latest_release_time: bcs.u64(), min_lock_time: bcs.u64(), max_lock_time: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], fields: Record<string, any> ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return Fountain.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), source: decodeFromFields(Balance.reified(typeArgs[1]), fields.source), flowAmount: decodeFromFields("u64", fields.flow_amount), flowInterval: decodeFromFields("u64", fields.flow_interval), pool: decodeFromFields(Balance.reified(typeArgs[1]), fields.pool), staked: decodeFromFields(Balance.reified(typeArgs[0]), fields.staked), totalWeight: decodeFromFields("u64", fields.total_weight), cumulativeUnit: decodeFromFields("u128", fields.cumulative_unit), latestReleaseTime: decodeFromFields("u64", fields.latest_release_time), minLockTime: decodeFromFields("u64", fields.min_lock_time), maxLockTime: decodeFromFields("u64", fields.max_lock_time) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], item: FieldsWithTypes ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (!isFountain(item.type)) { throw new Error("not a Fountain type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return Fountain.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), source: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.source), flowAmount: decodeFromFieldsWithTypes("u64", item.fields.flow_amount), flowInterval: decodeFromFieldsWithTypes("u64", item.fields.flow_interval), pool: decodeFromFieldsWithTypes(Balance.reified(typeArgs[1]), item.fields.pool), staked: decodeFromFieldsWithTypes(Balance.reified(typeArgs[0]), item.fields.staked), totalWeight: decodeFromFieldsWithTypes("u64", item.fields.total_weight), cumulativeUnit: decodeFromFieldsWithTypes("u128", item.fields.cumulative_unit), latestReleaseTime: decodeFromFieldsWithTypes("u64", item.fields.latest_release_time), minLockTime: decodeFromFieldsWithTypes("u64", item.fields.min_lock_time), maxLockTime: decodeFromFieldsWithTypes("u64", item.fields.max_lock_time) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: Uint8Array ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return Fountain.fromFields( typeArgs, Fountain.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,source: this.source.toJSONField(),flowAmount: this.flowAmount.toString(),flowInterval: this.flowInterval.toString(),pool: this.pool.toJSONField(),staked: this.staked.toJSONField(),totalWeight: this.totalWeight.toString(),cumulativeUnit: this.cumulativeUnit.toString(),latestReleaseTime: this.latestReleaseTime.toString(),minLockTime: this.minLockTime.toString(),maxLockTime: this.maxLockTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], field: any ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return Fountain.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), source: decodeFromJSONField(Balance.reified(typeArgs[1]), field.source), flowAmount: decodeFromJSONField("u64", field.flowAmount), flowInterval: decodeFromJSONField("u64", field.flowInterval), pool: decodeFromJSONField(Balance.reified(typeArgs[1]), field.pool), staked: decodeFromJSONField(Balance.reified(typeArgs[0]), field.staked), totalWeight: decodeFromJSONField("u64", field.totalWeight), cumulativeUnit: decodeFromJSONField("u128", field.cumulativeUnit), latestReleaseTime: decodeFromJSONField("u64", field.latestReleaseTime), minLockTime: decodeFromJSONField("u64", field.minLockTime), maxLockTime: decodeFromJSONField("u64", field.maxLockTime) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], json: Record<string, any> ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (json.$typeName !== Fountain.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Fountain.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return Fountain.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], content: SuiParsedData ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFountain(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Fountain object`); } return Fountain.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: SuiObjectData ): Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFountain(data.bcs.type)) { throw new Error(`object at is not a Fountain object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return Fountain.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Fountain.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [S, R], id: string ): Promise<Fountain<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Fountain object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFountain(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Fountain object`); }

 return Fountain.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== StakeProof =============================== */

export function isStakeProof(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::StakeProof` + '<'); }

export interface StakeProofFields<S extends PhantomTypeArgument, R extends PhantomTypeArgument> { id: ToField<UID>; fountainId: ToField<ID>; stakeAmount: ToField<"u64">; startUint: ToField<"u128">; stakeWeight: ToField<"u64">; lockUntil: ToField<"u64"> }

export type StakeProofReified<S extends PhantomTypeArgument, R extends PhantomTypeArgument> = Reified< StakeProof<S, R>, StakeProofFields<S, R> >;

export class StakeProof<S extends PhantomTypeArgument, R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::StakeProof`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = StakeProof.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::StakeProof<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>]; readonly $isPhantom = StakeProof.$isPhantom;

 readonly id: ToField<UID>; readonly fountainId: ToField<ID>; readonly stakeAmount: ToField<"u64">; readonly startUint: ToField<"u128">; readonly stakeWeight: ToField<"u64">; readonly lockUntil: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>], fields: StakeProofFields<S, R>, ) { this.$fullTypeName = composeSuiType( StakeProof.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::StakeProof<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.fountainId = fields.fountainId;; this.stakeAmount = fields.stakeAmount;; this.startUint = fields.startUint;; this.stakeWeight = fields.stakeWeight;; this.lockUntil = fields.lockUntil; }

 static reified<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): StakeProofReified<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return { typeName: StakeProof.$typeName, fullTypeName: composeSuiType( StakeProof.$typeName, ...[extractType(S), extractType(R)] ) as `${typeof PKG_V1}::fountain_core::StakeProof<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(S), extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>, PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: StakeProof.$isPhantom, reifiedTypeArgs: [S, R], fromFields: (fields: Record<string, any>) => StakeProof.fromFields( [S, R], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeProof.fromFieldsWithTypes( [S, R], item, ), fromBcs: (data: Uint8Array) => StakeProof.fromBcs( [S, R], data, ), bcs: StakeProof.bcs, fromJSONField: (field: any) => StakeProof.fromJSONField( [S, R], field, ), fromJSON: (json: Record<string, any>) => StakeProof.fromJSON( [S, R], json, ), fromSuiParsedData: (content: SuiParsedData) => StakeProof.fromSuiParsedData( [S, R], content, ), fromSuiObjectData: (content: SuiObjectData) => StakeProof.fromSuiObjectData( [S, R], content, ), fetch: async (client: SuiClient, id: string) => StakeProof.fetch( client, [S, R], id, ), new: ( fields: StakeProofFields<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>, ) => { return new StakeProof( [extractType(S), extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeProof.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): PhantomReified<ToTypeStr<StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>>> { return phantom(StakeProof.reified( S, R )); } static get p() { return StakeProof.phantom }

 static get bcs() { return bcs.struct("StakeProof", {

 id: UID.bcs, fountain_id: ID.bcs, stake_amount: bcs.u64(), start_uint: bcs.u128(), stake_weight: bcs.u64(), lock_until: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], fields: Record<string, any> ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return StakeProof.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFields(UID.reified(), fields.id), fountainId: decodeFromFields(ID.reified(), fields.fountain_id), stakeAmount: decodeFromFields("u64", fields.stake_amount), startUint: decodeFromFields("u128", fields.start_uint), stakeWeight: decodeFromFields("u64", fields.stake_weight), lockUntil: decodeFromFields("u64", fields.lock_until) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], item: FieldsWithTypes ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (!isStakeProof(item.type)) { throw new Error("not a StakeProof type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return StakeProof.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount), startUint: decodeFromFieldsWithTypes("u128", item.fields.start_uint), stakeWeight: decodeFromFieldsWithTypes("u64", item.fields.stake_weight), lockUntil: decodeFromFieldsWithTypes("u64", item.fields.lock_until) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: Uint8Array ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return StakeProof.fromFields( typeArgs, StakeProof.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,fountainId: this.fountainId,stakeAmount: this.stakeAmount.toString(),startUint: this.startUint.toString(),stakeWeight: this.stakeWeight.toString(),lockUntil: this.lockUntil.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], field: any ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return StakeProof.reified( typeArgs[0], typeArgs[1], ).new( { id: decodeFromJSONField(UID.reified(), field.id), fountainId: decodeFromJSONField(ID.reified(), field.fountainId), stakeAmount: decodeFromJSONField("u64", field.stakeAmount), startUint: decodeFromJSONField("u128", field.startUint), stakeWeight: decodeFromJSONField("u64", field.stakeWeight), lockUntil: decodeFromJSONField("u64", field.lockUntil) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], json: Record<string, any> ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (json.$typeName !== StakeProof.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(StakeProof.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return StakeProof.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], content: SuiParsedData ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeProof(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeProof object`); } return StakeProof.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: SuiObjectData ): StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeProof(data.bcs.type)) { throw new Error(`object at is not a StakeProof object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return StakeProof.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeProof.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [S, R], id: string ): Promise<StakeProof<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeProof object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeProof(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeProof object`); }

 return StakeProof.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== PenaltyKey =============================== */

export function isPenaltyKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::fountain_core::PenaltyKey`; }

export interface PenaltyKeyFields { dummyField: ToField<"bool"> }

export type PenaltyKeyReified = Reified< PenaltyKey, PenaltyKeyFields >;

export class PenaltyKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::PenaltyKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PenaltyKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::PenaltyKey`; readonly $typeArgs: []; readonly $isPhantom = PenaltyKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: PenaltyKeyFields, ) { this.$fullTypeName = composeSuiType( PenaltyKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::PenaltyKey`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): PenaltyKeyReified { return { typeName: PenaltyKey.$typeName, fullTypeName: composeSuiType( PenaltyKey.$typeName, ...[] ) as `${typeof PKG_V1}::fountain_core::PenaltyKey`, typeArgs: [ ] as [], isPhantom: PenaltyKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PenaltyKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PenaltyKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PenaltyKey.fromBcs( data, ), bcs: PenaltyKey.bcs, fromJSONField: (field: any) => PenaltyKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PenaltyKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PenaltyKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PenaltyKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PenaltyKey.fetch( client, id, ), new: ( fields: PenaltyKeyFields, ) => { return new PenaltyKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PenaltyKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PenaltyKey>> { return phantom(PenaltyKey.reified( )); } static get p() { return PenaltyKey.phantom() }

 static get bcs() { return bcs.struct("PenaltyKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): PenaltyKey { return PenaltyKey.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PenaltyKey { if (!isPenaltyKey(item.type)) { throw new Error("not a PenaltyKey type");

 }

 return PenaltyKey.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): PenaltyKey { return PenaltyKey.fromFields( PenaltyKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PenaltyKey { return PenaltyKey.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): PenaltyKey { if (json.$typeName !== PenaltyKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PenaltyKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PenaltyKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPenaltyKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PenaltyKey object`); } return PenaltyKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PenaltyKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPenaltyKey(data.bcs.type)) { throw new Error(`object at is not a PenaltyKey object`); }

 return PenaltyKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PenaltyKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PenaltyKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PenaltyKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPenaltyKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PenaltyKey object`); }

 return PenaltyKey.fromSuiObjectData( res.data ); }

 }

/* ============================== PenaltyVault =============================== */

export function isPenaltyVault(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::PenaltyVault` + '<'); }

export interface PenaltyVaultFields<S extends PhantomTypeArgument> { maxPenaltyRate: ToField<"u64">; vault: ToField<Balance<S>> }

export type PenaltyVaultReified<S extends PhantomTypeArgument> = Reified< PenaltyVault<S>, PenaltyVaultFields<S> >;

export class PenaltyVault<S extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::PenaltyVault`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PenaltyVault.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::PenaltyVault<${PhantomToTypeStr<S>}>`; readonly $typeArgs: [PhantomToTypeStr<S>]; readonly $isPhantom = PenaltyVault.$isPhantom;

 readonly maxPenaltyRate: ToField<"u64">; readonly vault: ToField<Balance<S>>

 private constructor(typeArgs: [PhantomToTypeStr<S>], fields: PenaltyVaultFields<S>, ) { this.$fullTypeName = composeSuiType( PenaltyVault.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::PenaltyVault<${PhantomToTypeStr<S>}>`; this.$typeArgs = typeArgs;

 this.maxPenaltyRate = fields.maxPenaltyRate;; this.vault = fields.vault; }

 static reified<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PenaltyVaultReified<ToPhantomTypeArgument<S>> { return { typeName: PenaltyVault.$typeName, fullTypeName: composeSuiType( PenaltyVault.$typeName, ...[extractType(S)] ) as `${typeof PKG_V1}::fountain_core::PenaltyVault<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}>`, typeArgs: [ extractType(S) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>], isPhantom: PenaltyVault.$isPhantom, reifiedTypeArgs: [S], fromFields: (fields: Record<string, any>) => PenaltyVault.fromFields( S, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PenaltyVault.fromFieldsWithTypes( S, item, ), fromBcs: (data: Uint8Array) => PenaltyVault.fromBcs( S, data, ), bcs: PenaltyVault.bcs, fromJSONField: (field: any) => PenaltyVault.fromJSONField( S, field, ), fromJSON: (json: Record<string, any>) => PenaltyVault.fromJSON( S, json, ), fromSuiParsedData: (content: SuiParsedData) => PenaltyVault.fromSuiParsedData( S, content, ), fromSuiObjectData: (content: SuiObjectData) => PenaltyVault.fromSuiObjectData( S, content, ), fetch: async (client: SuiClient, id: string) => PenaltyVault.fetch( client, S, id, ), new: ( fields: PenaltyVaultFields<ToPhantomTypeArgument<S>>, ) => { return new PenaltyVault( [extractType(S)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PenaltyVault.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PhantomReified<ToTypeStr<PenaltyVault<ToPhantomTypeArgument<S>>>> { return phantom(PenaltyVault.reified( S )); } static get p() { return PenaltyVault.phantom }

 static get bcs() { return bcs.struct("PenaltyVault", {

 max_penalty_rate: bcs.u64(), vault: Balance.bcs

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, fields: Record<string, any> ): PenaltyVault<ToPhantomTypeArgument<S>> { return PenaltyVault.reified( typeArg, ).new( { maxPenaltyRate: decodeFromFields("u64", fields.max_penalty_rate), vault: decodeFromFields(Balance.reified(typeArg), fields.vault) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, item: FieldsWithTypes ): PenaltyVault<ToPhantomTypeArgument<S>> { if (!isPenaltyVault(item.type)) { throw new Error("not a PenaltyVault type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PenaltyVault.reified( typeArg, ).new( { maxPenaltyRate: decodeFromFieldsWithTypes("u64", item.fields.max_penalty_rate), vault: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.vault) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: Uint8Array ): PenaltyVault<ToPhantomTypeArgument<S>> { return PenaltyVault.fromFields( typeArg, PenaltyVault.bcs.parse(data) ) }

 toJSONField() { return {

 maxPenaltyRate: this.maxPenaltyRate.toString(),vault: this.vault.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, field: any ): PenaltyVault<ToPhantomTypeArgument<S>> { return PenaltyVault.reified( typeArg, ).new( { maxPenaltyRate: decodeFromJSONField("u64", field.maxPenaltyRate), vault: decodeFromJSONField(Balance.reified(typeArg), field.vault) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, json: Record<string, any> ): PenaltyVault<ToPhantomTypeArgument<S>> { if (json.$typeName !== PenaltyVault.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PenaltyVault.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PenaltyVault.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, content: SuiParsedData ): PenaltyVault<ToPhantomTypeArgument<S>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPenaltyVault(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PenaltyVault object`); } return PenaltyVault.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: SuiObjectData ): PenaltyVault<ToPhantomTypeArgument<S>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPenaltyVault(data.bcs.type)) { throw new Error(`object at is not a PenaltyVault object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PenaltyVault.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PenaltyVault.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: S, id: string ): Promise<PenaltyVault<ToPhantomTypeArgument<S>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PenaltyVault object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPenaltyVault(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PenaltyVault object`); }

 return PenaltyVault.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== StakeEvent =============================== */

export function isStakeEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::StakeEvent` + '<'); }

export interface StakeEventFields<S extends PhantomTypeArgument, R extends PhantomTypeArgument> { fountainId: ToField<ID>; stakeAmount: ToField<"u64">; stakeWeight: ToField<"u64">; lockTime: ToField<"u64">; startTime: ToField<"u64"> }

export type StakeEventReified<S extends PhantomTypeArgument, R extends PhantomTypeArgument> = Reified< StakeEvent<S, R>, StakeEventFields<S, R> >;

export class StakeEvent<S extends PhantomTypeArgument, R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::StakeEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = StakeEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::StakeEvent<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>]; readonly $isPhantom = StakeEvent.$isPhantom;

 readonly fountainId: ToField<ID>; readonly stakeAmount: ToField<"u64">; readonly stakeWeight: ToField<"u64">; readonly lockTime: ToField<"u64">; readonly startTime: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>], fields: StakeEventFields<S, R>, ) { this.$fullTypeName = composeSuiType( StakeEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::StakeEvent<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.stakeAmount = fields.stakeAmount;; this.stakeWeight = fields.stakeWeight;; this.lockTime = fields.lockTime;; this.startTime = fields.startTime; }

 static reified<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): StakeEventReified<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return { typeName: StakeEvent.$typeName, fullTypeName: composeSuiType( StakeEvent.$typeName, ...[extractType(S), extractType(R)] ) as `${typeof PKG_V1}::fountain_core::StakeEvent<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(S), extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>, PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: StakeEvent.$isPhantom, reifiedTypeArgs: [S, R], fromFields: (fields: Record<string, any>) => StakeEvent.fromFields( [S, R], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeEvent.fromFieldsWithTypes( [S, R], item, ), fromBcs: (data: Uint8Array) => StakeEvent.fromBcs( [S, R], data, ), bcs: StakeEvent.bcs, fromJSONField: (field: any) => StakeEvent.fromJSONField( [S, R], field, ), fromJSON: (json: Record<string, any>) => StakeEvent.fromJSON( [S, R], json, ), fromSuiParsedData: (content: SuiParsedData) => StakeEvent.fromSuiParsedData( [S, R], content, ), fromSuiObjectData: (content: SuiObjectData) => StakeEvent.fromSuiObjectData( [S, R], content, ), fetch: async (client: SuiClient, id: string) => StakeEvent.fetch( client, [S, R], id, ), new: ( fields: StakeEventFields<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>, ) => { return new StakeEvent( [extractType(S), extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeEvent.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): PhantomReified<ToTypeStr<StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>>> { return phantom(StakeEvent.reified( S, R )); } static get p() { return StakeEvent.phantom }

 static get bcs() { return bcs.struct("StakeEvent", {

 fountain_id: ID.bcs, stake_amount: bcs.u64(), stake_weight: bcs.u64(), lock_time: bcs.u64(), start_time: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], fields: Record<string, any> ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return StakeEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), stakeAmount: decodeFromFields("u64", fields.stake_amount), stakeWeight: decodeFromFields("u64", fields.stake_weight), lockTime: decodeFromFields("u64", fields.lock_time), startTime: decodeFromFields("u64", fields.start_time) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], item: FieldsWithTypes ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (!isStakeEvent(item.type)) { throw new Error("not a StakeEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return StakeEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount), stakeWeight: decodeFromFieldsWithTypes("u64", item.fields.stake_weight), lockTime: decodeFromFieldsWithTypes("u64", item.fields.lock_time), startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: Uint8Array ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return StakeEvent.fromFields( typeArgs, StakeEvent.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,stakeAmount: this.stakeAmount.toString(),stakeWeight: this.stakeWeight.toString(),lockTime: this.lockTime.toString(),startTime: this.startTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], field: any ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return StakeEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), stakeAmount: decodeFromJSONField("u64", field.stakeAmount), stakeWeight: decodeFromJSONField("u64", field.stakeWeight), lockTime: decodeFromJSONField("u64", field.lockTime), startTime: decodeFromJSONField("u64", field.startTime) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], json: Record<string, any> ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (json.$typeName !== StakeEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(StakeEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return StakeEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], content: SuiParsedData ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeEvent object`); } return StakeEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: SuiObjectData ): StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStakeEvent(data.bcs.type)) { throw new Error(`object at is not a StakeEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return StakeEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return StakeEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [S, R], id: string ): Promise<StakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeEvent object`); }

 return StakeEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== ClaimEvent =============================== */

export function isClaimEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::ClaimEvent` + '<'); }

export interface ClaimEventFields<S extends PhantomTypeArgument, R extends PhantomTypeArgument> { fountainId: ToField<ID>; rewardAmount: ToField<"u64">; claimTime: ToField<"u64"> }

export type ClaimEventReified<S extends PhantomTypeArgument, R extends PhantomTypeArgument> = Reified< ClaimEvent<S, R>, ClaimEventFields<S, R> >;

export class ClaimEvent<S extends PhantomTypeArgument, R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::ClaimEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = ClaimEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::ClaimEvent<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>]; readonly $isPhantom = ClaimEvent.$isPhantom;

 readonly fountainId: ToField<ID>; readonly rewardAmount: ToField<"u64">; readonly claimTime: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>], fields: ClaimEventFields<S, R>, ) { this.$fullTypeName = composeSuiType( ClaimEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::ClaimEvent<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.rewardAmount = fields.rewardAmount;; this.claimTime = fields.claimTime; }

 static reified<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): ClaimEventReified<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return { typeName: ClaimEvent.$typeName, fullTypeName: composeSuiType( ClaimEvent.$typeName, ...[extractType(S), extractType(R)] ) as `${typeof PKG_V1}::fountain_core::ClaimEvent<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(S), extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>, PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: ClaimEvent.$isPhantom, reifiedTypeArgs: [S, R], fromFields: (fields: Record<string, any>) => ClaimEvent.fromFields( [S, R], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimEvent.fromFieldsWithTypes( [S, R], item, ), fromBcs: (data: Uint8Array) => ClaimEvent.fromBcs( [S, R], data, ), bcs: ClaimEvent.bcs, fromJSONField: (field: any) => ClaimEvent.fromJSONField( [S, R], field, ), fromJSON: (json: Record<string, any>) => ClaimEvent.fromJSON( [S, R], json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimEvent.fromSuiParsedData( [S, R], content, ), fromSuiObjectData: (content: SuiObjectData) => ClaimEvent.fromSuiObjectData( [S, R], content, ), fetch: async (client: SuiClient, id: string) => ClaimEvent.fetch( client, [S, R], id, ), new: ( fields: ClaimEventFields<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>, ) => { return new ClaimEvent( [extractType(S), extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimEvent.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): PhantomReified<ToTypeStr<ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>>> { return phantom(ClaimEvent.reified( S, R )); } static get p() { return ClaimEvent.phantom }

 static get bcs() { return bcs.struct("ClaimEvent", {

 fountain_id: ID.bcs, reward_amount: bcs.u64(), claim_time: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], fields: Record<string, any> ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return ClaimEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), rewardAmount: decodeFromFields("u64", fields.reward_amount), claimTime: decodeFromFields("u64", fields.claim_time) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], item: FieldsWithTypes ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (!isClaimEvent(item.type)) { throw new Error("not a ClaimEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return ClaimEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), rewardAmount: decodeFromFieldsWithTypes("u64", item.fields.reward_amount), claimTime: decodeFromFieldsWithTypes("u64", item.fields.claim_time) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: Uint8Array ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return ClaimEvent.fromFields( typeArgs, ClaimEvent.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,rewardAmount: this.rewardAmount.toString(),claimTime: this.claimTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], field: any ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return ClaimEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), rewardAmount: decodeFromJSONField("u64", field.rewardAmount), claimTime: decodeFromJSONField("u64", field.claimTime) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], json: Record<string, any> ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (json.$typeName !== ClaimEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ClaimEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return ClaimEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], content: SuiParsedData ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimEvent object`); } return ClaimEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: SuiObjectData ): ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaimEvent(data.bcs.type)) { throw new Error(`object at is not a ClaimEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return ClaimEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ClaimEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [S, R], id: string ): Promise<ClaimEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimEvent object`); }

 return ClaimEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== UnstakeEvent =============================== */

export function isUnstakeEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::UnstakeEvent` + '<'); }

export interface UnstakeEventFields<S extends PhantomTypeArgument, R extends PhantomTypeArgument> { fountainId: ToField<ID>; unstakeAmount: ToField<"u64">; unstakeWeigth: ToField<"u64">; endTime: ToField<"u64"> }

export type UnstakeEventReified<S extends PhantomTypeArgument, R extends PhantomTypeArgument> = Reified< UnstakeEvent<S, R>, UnstakeEventFields<S, R> >;

export class UnstakeEvent<S extends PhantomTypeArgument, R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::UnstakeEvent`; static readonly $numTypeParams = 2; static readonly $isPhantom = [true,true,] as const;

 readonly $typeName = UnstakeEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::UnstakeEvent<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>]; readonly $isPhantom = UnstakeEvent.$isPhantom;

 readonly fountainId: ToField<ID>; readonly unstakeAmount: ToField<"u64">; readonly unstakeWeigth: ToField<"u64">; readonly endTime: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>, PhantomToTypeStr<R>], fields: UnstakeEventFields<S, R>, ) { this.$fullTypeName = composeSuiType( UnstakeEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::UnstakeEvent<${PhantomToTypeStr<S>}, ${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.unstakeAmount = fields.unstakeAmount;; this.unstakeWeigth = fields.unstakeWeigth;; this.endTime = fields.endTime; }

 static reified<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): UnstakeEventReified<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return { typeName: UnstakeEvent.$typeName, fullTypeName: composeSuiType( UnstakeEvent.$typeName, ...[extractType(S), extractType(R)] ) as `${typeof PKG_V1}::fountain_core::UnstakeEvent<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(S), extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>, PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: UnstakeEvent.$isPhantom, reifiedTypeArgs: [S, R], fromFields: (fields: Record<string, any>) => UnstakeEvent.fromFields( [S, R], fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakeEvent.fromFieldsWithTypes( [S, R], item, ), fromBcs: (data: Uint8Array) => UnstakeEvent.fromBcs( [S, R], data, ), bcs: UnstakeEvent.bcs, fromJSONField: (field: any) => UnstakeEvent.fromJSONField( [S, R], field, ), fromJSON: (json: Record<string, any>) => UnstakeEvent.fromJSON( [S, R], json, ), fromSuiParsedData: (content: SuiParsedData) => UnstakeEvent.fromSuiParsedData( [S, R], content, ), fromSuiObjectData: (content: SuiObjectData) => UnstakeEvent.fromSuiObjectData( [S, R], content, ), fetch: async (client: SuiClient, id: string) => UnstakeEvent.fetch( client, [S, R], id, ), new: ( fields: UnstakeEventFields<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>, ) => { return new UnstakeEvent( [extractType(S), extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnstakeEvent.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( S: S, R: R ): PhantomReified<ToTypeStr<UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>>> { return phantom(UnstakeEvent.reified( S, R )); } static get p() { return UnstakeEvent.phantom }

 static get bcs() { return bcs.struct("UnstakeEvent", {

 fountain_id: ID.bcs, unstake_amount: bcs.u64(), unstake_weigth: bcs.u64(), end_time: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], fields: Record<string, any> ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return UnstakeEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), unstakeAmount: decodeFromFields("u64", fields.unstake_amount), unstakeWeigth: decodeFromFields("u64", fields.unstake_weigth), endTime: decodeFromFields("u64", fields.end_time) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], item: FieldsWithTypes ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (!isUnstakeEvent(item.type)) { throw new Error("not a UnstakeEvent type");

 } assertFieldsWithTypesArgsMatch(item, typeArgs);

 return UnstakeEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), unstakeAmount: decodeFromFieldsWithTypes("u64", item.fields.unstake_amount), unstakeWeigth: decodeFromFieldsWithTypes("u64", item.fields.unstake_weigth), endTime: decodeFromFieldsWithTypes("u64", item.fields.end_time) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: Uint8Array ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return UnstakeEvent.fromFields( typeArgs, UnstakeEvent.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,unstakeAmount: this.unstakeAmount.toString(),unstakeWeigth: this.unstakeWeigth.toString(),endTime: this.endTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], field: any ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { return UnstakeEvent.reified( typeArgs[0], typeArgs[1], ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), unstakeAmount: decodeFromJSONField("u64", field.unstakeAmount), unstakeWeigth: decodeFromJSONField("u64", field.unstakeWeigth), endTime: decodeFromJSONField("u64", field.endTime) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], json: Record<string, any> ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (json.$typeName !== UnstakeEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(UnstakeEvent.$typeName, ...typeArgs.map(extractType)), json.$typeArgs, typeArgs, )

 return UnstakeEvent.fromJSONField( typeArgs, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], content: SuiParsedData ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnstakeEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnstakeEvent object`); } return UnstakeEvent.fromFieldsWithTypes( typeArgs, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( typeArgs: [S, R], data: SuiObjectData ): UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnstakeEvent(data.bcs.type)) { throw new Error(`object at is not a UnstakeEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 2) { throw new Error(`type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`); }; for (let i = 0; i < 2; i++) { const gotTypeArg = compressSuiType(gotTypeArgs[i]); const expectedTypeArg = compressSuiType(extractType(typeArgs[i])); if (gotTypeArg !== expectedTypeArg) { throw new Error(`type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); } };

 return UnstakeEvent.fromBcs( typeArgs, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UnstakeEvent.fromSuiParsedData( typeArgs, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>, R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArgs: [S, R], id: string ): Promise<UnstakeEvent<ToPhantomTypeArgument<S>, ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnstakeEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakeEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnstakeEvent object`); }

 return UnstakeEvent.fromSuiObjectData( typeArgs, res.data ); }

 }

/* ============================== PenaltyEvent =============================== */

export function isPenaltyEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::PenaltyEvent` + '<'); }

export interface PenaltyEventFields<S extends PhantomTypeArgument> { fountainId: ToField<ID>; penaltyAmount: ToField<"u64"> }

export type PenaltyEventReified<S extends PhantomTypeArgument> = Reified< PenaltyEvent<S>, PenaltyEventFields<S> >;

export class PenaltyEvent<S extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::PenaltyEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PenaltyEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::PenaltyEvent<${PhantomToTypeStr<S>}>`; readonly $typeArgs: [PhantomToTypeStr<S>]; readonly $isPhantom = PenaltyEvent.$isPhantom;

 readonly fountainId: ToField<ID>; readonly penaltyAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>], fields: PenaltyEventFields<S>, ) { this.$fullTypeName = composeSuiType( PenaltyEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::PenaltyEvent<${PhantomToTypeStr<S>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.penaltyAmount = fields.penaltyAmount; }

 static reified<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PenaltyEventReified<ToPhantomTypeArgument<S>> { return { typeName: PenaltyEvent.$typeName, fullTypeName: composeSuiType( PenaltyEvent.$typeName, ...[extractType(S)] ) as `${typeof PKG_V1}::fountain_core::PenaltyEvent<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}>`, typeArgs: [ extractType(S) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>], isPhantom: PenaltyEvent.$isPhantom, reifiedTypeArgs: [S], fromFields: (fields: Record<string, any>) => PenaltyEvent.fromFields( S, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PenaltyEvent.fromFieldsWithTypes( S, item, ), fromBcs: (data: Uint8Array) => PenaltyEvent.fromBcs( S, data, ), bcs: PenaltyEvent.bcs, fromJSONField: (field: any) => PenaltyEvent.fromJSONField( S, field, ), fromJSON: (json: Record<string, any>) => PenaltyEvent.fromJSON( S, json, ), fromSuiParsedData: (content: SuiParsedData) => PenaltyEvent.fromSuiParsedData( S, content, ), fromSuiObjectData: (content: SuiObjectData) => PenaltyEvent.fromSuiObjectData( S, content, ), fetch: async (client: SuiClient, id: string) => PenaltyEvent.fetch( client, S, id, ), new: ( fields: PenaltyEventFields<ToPhantomTypeArgument<S>>, ) => { return new PenaltyEvent( [extractType(S)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PenaltyEvent.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PhantomReified<ToTypeStr<PenaltyEvent<ToPhantomTypeArgument<S>>>> { return phantom(PenaltyEvent.reified( S )); } static get p() { return PenaltyEvent.phantom }

 static get bcs() { return bcs.struct("PenaltyEvent", {

 fountain_id: ID.bcs, penalty_amount: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, fields: Record<string, any> ): PenaltyEvent<ToPhantomTypeArgument<S>> { return PenaltyEvent.reified( typeArg, ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), penaltyAmount: decodeFromFields("u64", fields.penalty_amount) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, item: FieldsWithTypes ): PenaltyEvent<ToPhantomTypeArgument<S>> { if (!isPenaltyEvent(item.type)) { throw new Error("not a PenaltyEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PenaltyEvent.reified( typeArg, ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), penaltyAmount: decodeFromFieldsWithTypes("u64", item.fields.penalty_amount) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: Uint8Array ): PenaltyEvent<ToPhantomTypeArgument<S>> { return PenaltyEvent.fromFields( typeArg, PenaltyEvent.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,penaltyAmount: this.penaltyAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, field: any ): PenaltyEvent<ToPhantomTypeArgument<S>> { return PenaltyEvent.reified( typeArg, ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), penaltyAmount: decodeFromJSONField("u64", field.penaltyAmount) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, json: Record<string, any> ): PenaltyEvent<ToPhantomTypeArgument<S>> { if (json.$typeName !== PenaltyEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PenaltyEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PenaltyEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, content: SuiParsedData ): PenaltyEvent<ToPhantomTypeArgument<S>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPenaltyEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PenaltyEvent object`); } return PenaltyEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: SuiObjectData ): PenaltyEvent<ToPhantomTypeArgument<S>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPenaltyEvent(data.bcs.type)) { throw new Error(`object at is not a PenaltyEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PenaltyEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PenaltyEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: S, id: string ): Promise<PenaltyEvent<ToPhantomTypeArgument<S>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PenaltyEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPenaltyEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PenaltyEvent object`); }

 return PenaltyEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SupplyEvent =============================== */

export function isSupplyEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::SupplyEvent` + '<'); }

export interface SupplyEventFields<R extends PhantomTypeArgument> { fountainId: ToField<ID>; amount: ToField<"u64"> }

export type SupplyEventReified<R extends PhantomTypeArgument> = Reified< SupplyEvent<R>, SupplyEventFields<R> >;

export class SupplyEvent<R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::SupplyEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SupplyEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::SupplyEvent<${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<R>]; readonly $isPhantom = SupplyEvent.$isPhantom;

 readonly fountainId: ToField<ID>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<R>], fields: SupplyEventFields<R>, ) { this.$fullTypeName = composeSuiType( SupplyEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::SupplyEvent<${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.amount = fields.amount; }

 static reified<R extends PhantomReified<PhantomTypeArgument>>( R: R ): SupplyEventReified<ToPhantomTypeArgument<R>> { return { typeName: SupplyEvent.$typeName, fullTypeName: composeSuiType( SupplyEvent.$typeName, ...[extractType(R)] ) as `${typeof PKG_V1}::fountain_core::SupplyEvent<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: SupplyEvent.$isPhantom, reifiedTypeArgs: [R], fromFields: (fields: Record<string, any>) => SupplyEvent.fromFields( R, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SupplyEvent.fromFieldsWithTypes( R, item, ), fromBcs: (data: Uint8Array) => SupplyEvent.fromBcs( R, data, ), bcs: SupplyEvent.bcs, fromJSONField: (field: any) => SupplyEvent.fromJSONField( R, field, ), fromJSON: (json: Record<string, any>) => SupplyEvent.fromJSON( R, json, ), fromSuiParsedData: (content: SuiParsedData) => SupplyEvent.fromSuiParsedData( R, content, ), fromSuiObjectData: (content: SuiObjectData) => SupplyEvent.fromSuiObjectData( R, content, ), fetch: async (client: SuiClient, id: string) => SupplyEvent.fetch( client, R, id, ), new: ( fields: SupplyEventFields<ToPhantomTypeArgument<R>>, ) => { return new SupplyEvent( [extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SupplyEvent.reified }

 static phantom<R extends PhantomReified<PhantomTypeArgument>>( R: R ): PhantomReified<ToTypeStr<SupplyEvent<ToPhantomTypeArgument<R>>>> { return phantom(SupplyEvent.reified( R )); } static get p() { return SupplyEvent.phantom }

 static get bcs() { return bcs.struct("SupplyEvent", {

 fountain_id: ID.bcs, amount: bcs.u64()

}) };

 static fromFields<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, fields: Record<string, any> ): SupplyEvent<ToPhantomTypeArgument<R>> { return SupplyEvent.reified( typeArg, ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, item: FieldsWithTypes ): SupplyEvent<ToPhantomTypeArgument<R>> { if (!isSupplyEvent(item.type)) { throw new Error("not a SupplyEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SupplyEvent.reified( typeArg, ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: Uint8Array ): SupplyEvent<ToPhantomTypeArgument<R>> { return SupplyEvent.fromFields( typeArg, SupplyEvent.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, field: any ): SupplyEvent<ToPhantomTypeArgument<R>> { return SupplyEvent.reified( typeArg, ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, json: Record<string, any> ): SupplyEvent<ToPhantomTypeArgument<R>> { if (json.$typeName !== SupplyEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SupplyEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return SupplyEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, content: SuiParsedData ): SupplyEvent<ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSupplyEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SupplyEvent object`); } return SupplyEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: SuiObjectData ): SupplyEvent<ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSupplyEvent(data.bcs.type)) { throw new Error(`object at is not a SupplyEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return SupplyEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SupplyEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: R, id: string ): Promise<SupplyEvent<ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SupplyEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSupplyEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SupplyEvent object`); }

 return SupplyEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== WithdrawEvent =============================== */

export function isWithdrawEvent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::WithdrawEvent` + '<'); }

export interface WithdrawEventFields<R extends PhantomTypeArgument> { fountainId: ToField<ID>; amount: ToField<"u64"> }

export type WithdrawEventReified<R extends PhantomTypeArgument> = Reified< WithdrawEvent<R>, WithdrawEventFields<R> >;

export class WithdrawEvent<R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::WithdrawEvent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = WithdrawEvent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::WithdrawEvent<${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<R>]; readonly $isPhantom = WithdrawEvent.$isPhantom;

 readonly fountainId: ToField<ID>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<R>], fields: WithdrawEventFields<R>, ) { this.$fullTypeName = composeSuiType( WithdrawEvent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::WithdrawEvent<${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.amount = fields.amount; }

 static reified<R extends PhantomReified<PhantomTypeArgument>>( R: R ): WithdrawEventReified<ToPhantomTypeArgument<R>> { return { typeName: WithdrawEvent.$typeName, fullTypeName: composeSuiType( WithdrawEvent.$typeName, ...[extractType(R)] ) as `${typeof PKG_V1}::fountain_core::WithdrawEvent<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: WithdrawEvent.$isPhantom, reifiedTypeArgs: [R], fromFields: (fields: Record<string, any>) => WithdrawEvent.fromFields( R, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawEvent.fromFieldsWithTypes( R, item, ), fromBcs: (data: Uint8Array) => WithdrawEvent.fromBcs( R, data, ), bcs: WithdrawEvent.bcs, fromJSONField: (field: any) => WithdrawEvent.fromJSONField( R, field, ), fromJSON: (json: Record<string, any>) => WithdrawEvent.fromJSON( R, json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawEvent.fromSuiParsedData( R, content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawEvent.fromSuiObjectData( R, content, ), fetch: async (client: SuiClient, id: string) => WithdrawEvent.fetch( client, R, id, ), new: ( fields: WithdrawEventFields<ToPhantomTypeArgument<R>>, ) => { return new WithdrawEvent( [extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawEvent.reified }

 static phantom<R extends PhantomReified<PhantomTypeArgument>>( R: R ): PhantomReified<ToTypeStr<WithdrawEvent<ToPhantomTypeArgument<R>>>> { return phantom(WithdrawEvent.reified( R )); } static get p() { return WithdrawEvent.phantom }

 static get bcs() { return bcs.struct("WithdrawEvent", {

 fountain_id: ID.bcs, amount: bcs.u64()

}) };

 static fromFields<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, fields: Record<string, any> ): WithdrawEvent<ToPhantomTypeArgument<R>> { return WithdrawEvent.reified( typeArg, ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, item: FieldsWithTypes ): WithdrawEvent<ToPhantomTypeArgument<R>> { if (!isWithdrawEvent(item.type)) { throw new Error("not a WithdrawEvent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return WithdrawEvent.reified( typeArg, ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: Uint8Array ): WithdrawEvent<ToPhantomTypeArgument<R>> { return WithdrawEvent.fromFields( typeArg, WithdrawEvent.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, field: any ): WithdrawEvent<ToPhantomTypeArgument<R>> { return WithdrawEvent.reified( typeArg, ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, json: Record<string, any> ): WithdrawEvent<ToPhantomTypeArgument<R>> { if (json.$typeName !== WithdrawEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(WithdrawEvent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return WithdrawEvent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, content: SuiParsedData ): WithdrawEvent<ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawEvent object`); } return WithdrawEvent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: SuiObjectData ): WithdrawEvent<ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawEvent(data.bcs.type)) { throw new Error(`object at is not a WithdrawEvent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return WithdrawEvent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawEvent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: R, id: string ): Promise<WithdrawEvent<ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawEvent object`); }

 return WithdrawEvent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== FlowRateUpdated =============================== */

export function isFlowRateUpdated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::FlowRateUpdated` + '<'); }

export interface FlowRateUpdatedFields<R extends PhantomTypeArgument> { fountainId: ToField<ID>; flowAmount: ToField<"u64">; flowInterval: ToField<"u64"> }

export type FlowRateUpdatedReified<R extends PhantomTypeArgument> = Reified< FlowRateUpdated<R>, FlowRateUpdatedFields<R> >;

export class FlowRateUpdated<R extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::FlowRateUpdated`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = FlowRateUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::FlowRateUpdated<${PhantomToTypeStr<R>}>`; readonly $typeArgs: [PhantomToTypeStr<R>]; readonly $isPhantom = FlowRateUpdated.$isPhantom;

 readonly fountainId: ToField<ID>; readonly flowAmount: ToField<"u64">; readonly flowInterval: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<R>], fields: FlowRateUpdatedFields<R>, ) { this.$fullTypeName = composeSuiType( FlowRateUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::FlowRateUpdated<${PhantomToTypeStr<R>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.flowAmount = fields.flowAmount;; this.flowInterval = fields.flowInterval; }

 static reified<R extends PhantomReified<PhantomTypeArgument>>( R: R ): FlowRateUpdatedReified<ToPhantomTypeArgument<R>> { return { typeName: FlowRateUpdated.$typeName, fullTypeName: composeSuiType( FlowRateUpdated.$typeName, ...[extractType(R)] ) as `${typeof PKG_V1}::fountain_core::FlowRateUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`, typeArgs: [ extractType(R) ] as [PhantomToTypeStr<ToPhantomTypeArgument<R>>], isPhantom: FlowRateUpdated.$isPhantom, reifiedTypeArgs: [R], fromFields: (fields: Record<string, any>) => FlowRateUpdated.fromFields( R, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FlowRateUpdated.fromFieldsWithTypes( R, item, ), fromBcs: (data: Uint8Array) => FlowRateUpdated.fromBcs( R, data, ), bcs: FlowRateUpdated.bcs, fromJSONField: (field: any) => FlowRateUpdated.fromJSONField( R, field, ), fromJSON: (json: Record<string, any>) => FlowRateUpdated.fromJSON( R, json, ), fromSuiParsedData: (content: SuiParsedData) => FlowRateUpdated.fromSuiParsedData( R, content, ), fromSuiObjectData: (content: SuiObjectData) => FlowRateUpdated.fromSuiObjectData( R, content, ), fetch: async (client: SuiClient, id: string) => FlowRateUpdated.fetch( client, R, id, ), new: ( fields: FlowRateUpdatedFields<ToPhantomTypeArgument<R>>, ) => { return new FlowRateUpdated( [extractType(R)], fields ) }, kind: "StructClassReified", } }

 static get r() { return FlowRateUpdated.reified }

 static phantom<R extends PhantomReified<PhantomTypeArgument>>( R: R ): PhantomReified<ToTypeStr<FlowRateUpdated<ToPhantomTypeArgument<R>>>> { return phantom(FlowRateUpdated.reified( R )); } static get p() { return FlowRateUpdated.phantom }

 static get bcs() { return bcs.struct("FlowRateUpdated", {

 fountain_id: ID.bcs, flow_amount: bcs.u64(), flow_interval: bcs.u64()

}) };

 static fromFields<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, fields: Record<string, any> ): FlowRateUpdated<ToPhantomTypeArgument<R>> { return FlowRateUpdated.reified( typeArg, ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), flowAmount: decodeFromFields("u64", fields.flow_amount), flowInterval: decodeFromFields("u64", fields.flow_interval) } ) }

 static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, item: FieldsWithTypes ): FlowRateUpdated<ToPhantomTypeArgument<R>> { if (!isFlowRateUpdated(item.type)) { throw new Error("not a FlowRateUpdated type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return FlowRateUpdated.reified( typeArg, ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), flowAmount: decodeFromFieldsWithTypes("u64", item.fields.flow_amount), flowInterval: decodeFromFieldsWithTypes("u64", item.fields.flow_interval) } ) }

 static fromBcs<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: Uint8Array ): FlowRateUpdated<ToPhantomTypeArgument<R>> { return FlowRateUpdated.fromFields( typeArg, FlowRateUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,flowAmount: this.flowAmount.toString(),flowInterval: this.flowInterval.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, field: any ): FlowRateUpdated<ToPhantomTypeArgument<R>> { return FlowRateUpdated.reified( typeArg, ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), flowAmount: decodeFromJSONField("u64", field.flowAmount), flowInterval: decodeFromJSONField("u64", field.flowInterval) } ) }

 static fromJSON<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, json: Record<string, any> ): FlowRateUpdated<ToPhantomTypeArgument<R>> { if (json.$typeName !== FlowRateUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(FlowRateUpdated.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return FlowRateUpdated.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, content: SuiParsedData ): FlowRateUpdated<ToPhantomTypeArgument<R>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlowRateUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlowRateUpdated object`); } return FlowRateUpdated.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>( typeArg: R, data: SuiObjectData ): FlowRateUpdated<ToPhantomTypeArgument<R>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlowRateUpdated(data.bcs.type)) { throw new Error(`object at is not a FlowRateUpdated object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return FlowRateUpdated.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FlowRateUpdated.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<R extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: R, id: string ): Promise<FlowRateUpdated<ToPhantomTypeArgument<R>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlowRateUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlowRateUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlowRateUpdated object`); }

 return FlowRateUpdated.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== MaxPenaltyRateUpdated =============================== */

export function isMaxPenaltyRateUpdated(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::MaxPenaltyRateUpdated` + '<'); }

export interface MaxPenaltyRateUpdatedFields<S extends PhantomTypeArgument> { fountainId: ToField<ID>; maxPenaltyRate: ToField<"u64"> }

export type MaxPenaltyRateUpdatedReified<S extends PhantomTypeArgument> = Reified< MaxPenaltyRateUpdated<S>, MaxPenaltyRateUpdatedFields<S> >;

export class MaxPenaltyRateUpdated<S extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::MaxPenaltyRateUpdated`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = MaxPenaltyRateUpdated.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::MaxPenaltyRateUpdated<${PhantomToTypeStr<S>}>`; readonly $typeArgs: [PhantomToTypeStr<S>]; readonly $isPhantom = MaxPenaltyRateUpdated.$isPhantom;

 readonly fountainId: ToField<ID>; readonly maxPenaltyRate: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>], fields: MaxPenaltyRateUpdatedFields<S>, ) { this.$fullTypeName = composeSuiType( MaxPenaltyRateUpdated.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::MaxPenaltyRateUpdated<${PhantomToTypeStr<S>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.maxPenaltyRate = fields.maxPenaltyRate; }

 static reified<S extends PhantomReified<PhantomTypeArgument>>( S: S ): MaxPenaltyRateUpdatedReified<ToPhantomTypeArgument<S>> { return { typeName: MaxPenaltyRateUpdated.$typeName, fullTypeName: composeSuiType( MaxPenaltyRateUpdated.$typeName, ...[extractType(S)] ) as `${typeof PKG_V1}::fountain_core::MaxPenaltyRateUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}>`, typeArgs: [ extractType(S) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>], isPhantom: MaxPenaltyRateUpdated.$isPhantom, reifiedTypeArgs: [S], fromFields: (fields: Record<string, any>) => MaxPenaltyRateUpdated.fromFields( S, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MaxPenaltyRateUpdated.fromFieldsWithTypes( S, item, ), fromBcs: (data: Uint8Array) => MaxPenaltyRateUpdated.fromBcs( S, data, ), bcs: MaxPenaltyRateUpdated.bcs, fromJSONField: (field: any) => MaxPenaltyRateUpdated.fromJSONField( S, field, ), fromJSON: (json: Record<string, any>) => MaxPenaltyRateUpdated.fromJSON( S, json, ), fromSuiParsedData: (content: SuiParsedData) => MaxPenaltyRateUpdated.fromSuiParsedData( S, content, ), fromSuiObjectData: (content: SuiObjectData) => MaxPenaltyRateUpdated.fromSuiObjectData( S, content, ), fetch: async (client: SuiClient, id: string) => MaxPenaltyRateUpdated.fetch( client, S, id, ), new: ( fields: MaxPenaltyRateUpdatedFields<ToPhantomTypeArgument<S>>, ) => { return new MaxPenaltyRateUpdated( [extractType(S)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MaxPenaltyRateUpdated.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PhantomReified<ToTypeStr<MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>>>> { return phantom(MaxPenaltyRateUpdated.reified( S )); } static get p() { return MaxPenaltyRateUpdated.phantom }

 static get bcs() { return bcs.struct("MaxPenaltyRateUpdated", {

 fountain_id: ID.bcs, max_penalty_rate: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, fields: Record<string, any> ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { return MaxPenaltyRateUpdated.reified( typeArg, ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), maxPenaltyRate: decodeFromFields("u64", fields.max_penalty_rate) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, item: FieldsWithTypes ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { if (!isMaxPenaltyRateUpdated(item.type)) { throw new Error("not a MaxPenaltyRateUpdated type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return MaxPenaltyRateUpdated.reified( typeArg, ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), maxPenaltyRate: decodeFromFieldsWithTypes("u64", item.fields.max_penalty_rate) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: Uint8Array ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { return MaxPenaltyRateUpdated.fromFields( typeArg, MaxPenaltyRateUpdated.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,maxPenaltyRate: this.maxPenaltyRate.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, field: any ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { return MaxPenaltyRateUpdated.reified( typeArg, ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), maxPenaltyRate: decodeFromJSONField("u64", field.maxPenaltyRate) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, json: Record<string, any> ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { if (json.$typeName !== MaxPenaltyRateUpdated.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MaxPenaltyRateUpdated.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return MaxPenaltyRateUpdated.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, content: SuiParsedData ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMaxPenaltyRateUpdated(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MaxPenaltyRateUpdated object`); } return MaxPenaltyRateUpdated.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: SuiObjectData ): MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMaxPenaltyRateUpdated(data.bcs.type)) { throw new Error(`object at is not a MaxPenaltyRateUpdated object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return MaxPenaltyRateUpdated.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MaxPenaltyRateUpdated.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: S, id: string ): Promise<MaxPenaltyRateUpdated<ToPhantomTypeArgument<S>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MaxPenaltyRateUpdated object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMaxPenaltyRateUpdated(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MaxPenaltyRateUpdated object`); }

 return MaxPenaltyRateUpdated.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== PenaltyClaimed =============================== */

export function isPenaltyClaimed(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::fountain_core::PenaltyClaimed` + '<'); }

export interface PenaltyClaimedFields<S extends PhantomTypeArgument> { fountainId: ToField<ID>; amount: ToField<"u64"> }

export type PenaltyClaimedReified<S extends PhantomTypeArgument> = Reified< PenaltyClaimed<S>, PenaltyClaimedFields<S> >;

export class PenaltyClaimed<S extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::fountain_core::PenaltyClaimed`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = PenaltyClaimed.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::fountain_core::PenaltyClaimed<${PhantomToTypeStr<S>}>`; readonly $typeArgs: [PhantomToTypeStr<S>]; readonly $isPhantom = PenaltyClaimed.$isPhantom;

 readonly fountainId: ToField<ID>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<S>], fields: PenaltyClaimedFields<S>, ) { this.$fullTypeName = composeSuiType( PenaltyClaimed.$typeName, ...typeArgs ) as `${typeof PKG_V1}::fountain_core::PenaltyClaimed<${PhantomToTypeStr<S>}>`; this.$typeArgs = typeArgs;

 this.fountainId = fields.fountainId;; this.amount = fields.amount; }

 static reified<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PenaltyClaimedReified<ToPhantomTypeArgument<S>> { return { typeName: PenaltyClaimed.$typeName, fullTypeName: composeSuiType( PenaltyClaimed.$typeName, ...[extractType(S)] ) as `${typeof PKG_V1}::fountain_core::PenaltyClaimed<${PhantomToTypeStr<ToPhantomTypeArgument<S>>}>`, typeArgs: [ extractType(S) ] as [PhantomToTypeStr<ToPhantomTypeArgument<S>>], isPhantom: PenaltyClaimed.$isPhantom, reifiedTypeArgs: [S], fromFields: (fields: Record<string, any>) => PenaltyClaimed.fromFields( S, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PenaltyClaimed.fromFieldsWithTypes( S, item, ), fromBcs: (data: Uint8Array) => PenaltyClaimed.fromBcs( S, data, ), bcs: PenaltyClaimed.bcs, fromJSONField: (field: any) => PenaltyClaimed.fromJSONField( S, field, ), fromJSON: (json: Record<string, any>) => PenaltyClaimed.fromJSON( S, json, ), fromSuiParsedData: (content: SuiParsedData) => PenaltyClaimed.fromSuiParsedData( S, content, ), fromSuiObjectData: (content: SuiObjectData) => PenaltyClaimed.fromSuiObjectData( S, content, ), fetch: async (client: SuiClient, id: string) => PenaltyClaimed.fetch( client, S, id, ), new: ( fields: PenaltyClaimedFields<ToPhantomTypeArgument<S>>, ) => { return new PenaltyClaimed( [extractType(S)], fields ) }, kind: "StructClassReified", } }

 static get r() { return PenaltyClaimed.reified }

 static phantom<S extends PhantomReified<PhantomTypeArgument>>( S: S ): PhantomReified<ToTypeStr<PenaltyClaimed<ToPhantomTypeArgument<S>>>> { return phantom(PenaltyClaimed.reified( S )); } static get p() { return PenaltyClaimed.phantom }

 static get bcs() { return bcs.struct("PenaltyClaimed", {

 fountain_id: ID.bcs, amount: bcs.u64()

}) };

 static fromFields<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, fields: Record<string, any> ): PenaltyClaimed<ToPhantomTypeArgument<S>> { return PenaltyClaimed.reified( typeArg, ).new( { fountainId: decodeFromFields(ID.reified(), fields.fountain_id), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, item: FieldsWithTypes ): PenaltyClaimed<ToPhantomTypeArgument<S>> { if (!isPenaltyClaimed(item.type)) { throw new Error("not a PenaltyClaimed type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return PenaltyClaimed.reified( typeArg, ).new( { fountainId: decodeFromFieldsWithTypes(ID.reified(), item.fields.fountain_id), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: Uint8Array ): PenaltyClaimed<ToPhantomTypeArgument<S>> { return PenaltyClaimed.fromFields( typeArg, PenaltyClaimed.bcs.parse(data) ) }

 toJSONField() { return {

 fountainId: this.fountainId,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, field: any ): PenaltyClaimed<ToPhantomTypeArgument<S>> { return PenaltyClaimed.reified( typeArg, ).new( { fountainId: decodeFromJSONField(ID.reified(), field.fountainId), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, json: Record<string, any> ): PenaltyClaimed<ToPhantomTypeArgument<S>> { if (json.$typeName !== PenaltyClaimed.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(PenaltyClaimed.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return PenaltyClaimed.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, content: SuiParsedData ): PenaltyClaimed<ToPhantomTypeArgument<S>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPenaltyClaimed(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PenaltyClaimed object`); } return PenaltyClaimed.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<S extends PhantomReified<PhantomTypeArgument>>( typeArg: S, data: SuiObjectData ): PenaltyClaimed<ToPhantomTypeArgument<S>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPenaltyClaimed(data.bcs.type)) { throw new Error(`object at is not a PenaltyClaimed object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return PenaltyClaimed.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PenaltyClaimed.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<S extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: S, id: string ): Promise<PenaltyClaimed<ToPhantomTypeArgument<S>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PenaltyClaimed object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPenaltyClaimed(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PenaltyClaimed object`); }

 return PenaltyClaimed.fromSuiObjectData( typeArg, res.data ); }

 }
