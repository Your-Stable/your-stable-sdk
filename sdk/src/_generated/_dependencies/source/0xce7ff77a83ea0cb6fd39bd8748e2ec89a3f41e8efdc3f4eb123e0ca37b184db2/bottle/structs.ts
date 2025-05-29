import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {UID} from "../../0x2/object/structs";
import {LinkedTable} from "../../0xdb9a10bb9536ab367b7d1ffa404c1d6c55f009076df1139dc108dd86608bbe/linked-table/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== BottleTable =============================== */

export function isBottleTable(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bottle::BottleTable`; }

export interface BottleTableFields { id: ToField<UID>; table: ToField<LinkedTable<"address", ToPhantom<Bottle>>>; totalStake: ToField<"u64">; totalStakeSnapshot: ToField<"u64">; totalCollateralSnapshot: ToField<"u64">; debtPerUnitStake: ToField<"u128">; rewardPerUnitStake: ToField<"u128">; lastRewardError: ToField<"u128">; lastDebtError: ToField<"u128"> }

export type BottleTableReified = Reified< BottleTable, BottleTableFields >;

export class BottleTable implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bottle::BottleTable`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BottleTable.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bottle::BottleTable`; readonly $typeArgs: []; readonly $isPhantom = BottleTable.$isPhantom;

 readonly id: ToField<UID>; readonly table: ToField<LinkedTable<"address", ToPhantom<Bottle>>>; readonly totalStake: ToField<"u64">; readonly totalStakeSnapshot: ToField<"u64">; readonly totalCollateralSnapshot: ToField<"u64">; readonly debtPerUnitStake: ToField<"u128">; readonly rewardPerUnitStake: ToField<"u128">; readonly lastRewardError: ToField<"u128">; readonly lastDebtError: ToField<"u128">

 private constructor(typeArgs: [], fields: BottleTableFields, ) { this.$fullTypeName = composeSuiType( BottleTable.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bottle::BottleTable`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.table = fields.table;; this.totalStake = fields.totalStake;; this.totalStakeSnapshot = fields.totalStakeSnapshot;; this.totalCollateralSnapshot = fields.totalCollateralSnapshot;; this.debtPerUnitStake = fields.debtPerUnitStake;; this.rewardPerUnitStake = fields.rewardPerUnitStake;; this.lastRewardError = fields.lastRewardError;; this.lastDebtError = fields.lastDebtError; }

 static reified( ): BottleTableReified { return { typeName: BottleTable.$typeName, fullTypeName: composeSuiType( BottleTable.$typeName, ...[] ) as `${typeof PKG_V1}::bottle::BottleTable`, typeArgs: [ ] as [], isPhantom: BottleTable.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BottleTable.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BottleTable.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BottleTable.fromBcs( data, ), bcs: BottleTable.bcs, fromJSONField: (field: any) => BottleTable.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BottleTable.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BottleTable.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BottleTable.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BottleTable.fetch( client, id, ), new: ( fields: BottleTableFields, ) => { return new BottleTable( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BottleTable.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BottleTable>> { return phantom(BottleTable.reified( )); } static get p() { return BottleTable.phantom() }

 static get bcs() { return bcs.struct("BottleTable", {

 id: UID.bcs, table: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })), total_stake: bcs.u64(), total_stake_snapshot: bcs.u64(), total_collateral_snapshot: bcs.u64(), debt_per_unit_stake: bcs.u128(), reward_per_unit_stake: bcs.u128(), last_reward_error: bcs.u128(), last_debt_error: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): BottleTable { return BottleTable.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), table: decodeFromFields(LinkedTable.reified("address", reified.phantom(Bottle.reified())), fields.table), totalStake: decodeFromFields("u64", fields.total_stake), totalStakeSnapshot: decodeFromFields("u64", fields.total_stake_snapshot), totalCollateralSnapshot: decodeFromFields("u64", fields.total_collateral_snapshot), debtPerUnitStake: decodeFromFields("u128", fields.debt_per_unit_stake), rewardPerUnitStake: decodeFromFields("u128", fields.reward_per_unit_stake), lastRewardError: decodeFromFields("u128", fields.last_reward_error), lastDebtError: decodeFromFields("u128", fields.last_debt_error) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BottleTable { if (!isBottleTable(item.type)) { throw new Error("not a BottleTable type");

 }

 return BottleTable.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), table: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom(Bottle.reified())), item.fields.table), totalStake: decodeFromFieldsWithTypes("u64", item.fields.total_stake), totalStakeSnapshot: decodeFromFieldsWithTypes("u64", item.fields.total_stake_snapshot), totalCollateralSnapshot: decodeFromFieldsWithTypes("u64", item.fields.total_collateral_snapshot), debtPerUnitStake: decodeFromFieldsWithTypes("u128", item.fields.debt_per_unit_stake), rewardPerUnitStake: decodeFromFieldsWithTypes("u128", item.fields.reward_per_unit_stake), lastRewardError: decodeFromFieldsWithTypes("u128", item.fields.last_reward_error), lastDebtError: decodeFromFieldsWithTypes("u128", item.fields.last_debt_error) } ) }

 static fromBcs( data: Uint8Array ): BottleTable { return BottleTable.fromFields( BottleTable.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,table: this.table.toJSONField(),totalStake: this.totalStake.toString(),totalStakeSnapshot: this.totalStakeSnapshot.toString(),totalCollateralSnapshot: this.totalCollateralSnapshot.toString(),debtPerUnitStake: this.debtPerUnitStake.toString(),rewardPerUnitStake: this.rewardPerUnitStake.toString(),lastRewardError: this.lastRewardError.toString(),lastDebtError: this.lastDebtError.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BottleTable { return BottleTable.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), table: decodeFromJSONField(LinkedTable.reified("address", reified.phantom(Bottle.reified())), field.table), totalStake: decodeFromJSONField("u64", field.totalStake), totalStakeSnapshot: decodeFromJSONField("u64", field.totalStakeSnapshot), totalCollateralSnapshot: decodeFromJSONField("u64", field.totalCollateralSnapshot), debtPerUnitStake: decodeFromJSONField("u128", field.debtPerUnitStake), rewardPerUnitStake: decodeFromJSONField("u128", field.rewardPerUnitStake), lastRewardError: decodeFromJSONField("u128", field.lastRewardError), lastDebtError: decodeFromJSONField("u128", field.lastDebtError) } ) }

 static fromJSON( json: Record<string, any> ): BottleTable { if (json.$typeName !== BottleTable.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BottleTable.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BottleTable { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBottleTable(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BottleTable object`); } return BottleTable.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BottleTable { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBottleTable(data.bcs.type)) { throw new Error(`object at is not a BottleTable object`); }

 return BottleTable.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BottleTable.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BottleTable> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BottleTable object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBottleTable(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BottleTable object`); }

 return BottleTable.fromSuiObjectData( res.data ); }

 }

/* ============================== Bottle =============================== */

export function isBottle(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::bottle::Bottle`; }

export interface BottleFields { id: ToField<UID>; collateralAmount: ToField<"u64">; buckAmount: ToField<"u64">; stakeAmount: ToField<"u64">; rewardCollSnapshot: ToField<"u128">; rewardDebtSnapshot: ToField<"u128"> }

export type BottleReified = Reified< Bottle, BottleFields >;

export class Bottle implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bottle::Bottle`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Bottle.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bottle::Bottle`; readonly $typeArgs: []; readonly $isPhantom = Bottle.$isPhantom;

 readonly id: ToField<UID>; readonly collateralAmount: ToField<"u64">; readonly buckAmount: ToField<"u64">; readonly stakeAmount: ToField<"u64">; readonly rewardCollSnapshot: ToField<"u128">; readonly rewardDebtSnapshot: ToField<"u128">

 private constructor(typeArgs: [], fields: BottleFields, ) { this.$fullTypeName = composeSuiType( Bottle.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bottle::Bottle`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.collateralAmount = fields.collateralAmount;; this.buckAmount = fields.buckAmount;; this.stakeAmount = fields.stakeAmount;; this.rewardCollSnapshot = fields.rewardCollSnapshot;; this.rewardDebtSnapshot = fields.rewardDebtSnapshot; }

 static reified( ): BottleReified { return { typeName: Bottle.$typeName, fullTypeName: composeSuiType( Bottle.$typeName, ...[] ) as `${typeof PKG_V1}::bottle::Bottle`, typeArgs: [ ] as [], isPhantom: Bottle.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Bottle.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Bottle.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Bottle.fromBcs( data, ), bcs: Bottle.bcs, fromJSONField: (field: any) => Bottle.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Bottle.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Bottle.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Bottle.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Bottle.fetch( client, id, ), new: ( fields: BottleFields, ) => { return new Bottle( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Bottle.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Bottle>> { return phantom(Bottle.reified( )); } static get p() { return Bottle.phantom() }

 static get bcs() { return bcs.struct("Bottle", {

 id: UID.bcs, collateral_amount: bcs.u64(), buck_amount: bcs.u64(), stake_amount: bcs.u64(), reward_coll_snapshot: bcs.u128(), reward_debt_snapshot: bcs.u128()

}) };

 static fromFields( fields: Record<string, any> ): Bottle { return Bottle.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), collateralAmount: decodeFromFields("u64", fields.collateral_amount), buckAmount: decodeFromFields("u64", fields.buck_amount), stakeAmount: decodeFromFields("u64", fields.stake_amount), rewardCollSnapshot: decodeFromFields("u128", fields.reward_coll_snapshot), rewardDebtSnapshot: decodeFromFields("u128", fields.reward_debt_snapshot) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Bottle { if (!isBottle(item.type)) { throw new Error("not a Bottle type");

 }

 return Bottle.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), collateralAmount: decodeFromFieldsWithTypes("u64", item.fields.collateral_amount), buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount), stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount), rewardCollSnapshot: decodeFromFieldsWithTypes("u128", item.fields.reward_coll_snapshot), rewardDebtSnapshot: decodeFromFieldsWithTypes("u128", item.fields.reward_debt_snapshot) } ) }

 static fromBcs( data: Uint8Array ): Bottle { return Bottle.fromFields( Bottle.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,collateralAmount: this.collateralAmount.toString(),buckAmount: this.buckAmount.toString(),stakeAmount: this.stakeAmount.toString(),rewardCollSnapshot: this.rewardCollSnapshot.toString(),rewardDebtSnapshot: this.rewardDebtSnapshot.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Bottle { return Bottle.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), collateralAmount: decodeFromJSONField("u64", field.collateralAmount), buckAmount: decodeFromJSONField("u64", field.buckAmount), stakeAmount: decodeFromJSONField("u64", field.stakeAmount), rewardCollSnapshot: decodeFromJSONField("u128", field.rewardCollSnapshot), rewardDebtSnapshot: decodeFromJSONField("u128", field.rewardDebtSnapshot) } ) }

 static fromJSON( json: Record<string, any> ): Bottle { if (json.$typeName !== Bottle.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Bottle.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Bottle { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBottle(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Bottle object`); } return Bottle.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Bottle { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBottle(data.bcs.type)) { throw new Error(`object at is not a Bottle object`); }

 return Bottle.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Bottle.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Bottle> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Bottle object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBottle(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Bottle object`); }

 return Bottle.fromSuiObjectData( res.data ); }

 }
