import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/ascii/structs";
import {PKG_V1, PKG_V4} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== CollectFee =============================== */

export function isCollectFee(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::well_events::CollectFee`; }

export interface CollectFeeFields { wellType: ToField<String>; feeAmount: ToField<"u64"> }

export type CollectFeeReified = Reified< CollectFee, CollectFeeFields >;

export class CollectFee implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well_events::CollectFee`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CollectFee.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well_events::CollectFee`; readonly $typeArgs: []; readonly $isPhantom = CollectFee.$isPhantom;

 readonly wellType: ToField<String>; readonly feeAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: CollectFeeFields, ) { this.$fullTypeName = composeSuiType( CollectFee.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well_events::CollectFee`; this.$typeArgs = typeArgs;

 this.wellType = fields.wellType;; this.feeAmount = fields.feeAmount; }

 static reified( ): CollectFeeReified { return { typeName: CollectFee.$typeName, fullTypeName: composeSuiType( CollectFee.$typeName, ...[] ) as `${typeof PKG_V1}::well_events::CollectFee`, typeArgs: [ ] as [], isPhantom: CollectFee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CollectFee.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CollectFee.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CollectFee.fromBcs( data, ), bcs: CollectFee.bcs, fromJSONField: (field: any) => CollectFee.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CollectFee.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CollectFee.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CollectFee.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CollectFee.fetch( client, id, ), new: ( fields: CollectFeeFields, ) => { return new CollectFee( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CollectFee.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CollectFee>> { return phantom(CollectFee.reified( )); } static get p() { return CollectFee.phantom() }

 static get bcs() { return bcs.struct("CollectFee", {

 well_type: String.bcs, fee_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): CollectFee { return CollectFee.reified( ).new( { wellType: decodeFromFields(String.reified(), fields.well_type), feeAmount: decodeFromFields("u64", fields.fee_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CollectFee { if (!isCollectFee(item.type)) { throw new Error("not a CollectFee type");

 }

 return CollectFee.reified( ).new( { wellType: decodeFromFieldsWithTypes(String.reified(), item.fields.well_type), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount) } ) }

 static fromBcs( data: Uint8Array ): CollectFee { return CollectFee.fromFields( CollectFee.bcs.parse(data) ) }

 toJSONField() { return {

 wellType: this.wellType,feeAmount: this.feeAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CollectFee { return CollectFee.reified( ).new( { wellType: decodeFromJSONField(String.reified(), field.wellType), feeAmount: decodeFromJSONField("u64", field.feeAmount) } ) }

 static fromJSON( json: Record<string, any> ): CollectFee { if (json.$typeName !== CollectFee.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CollectFee.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CollectFee { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCollectFee(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CollectFee object`); } return CollectFee.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CollectFee { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCollectFee(data.bcs.type)) { throw new Error(`object at is not a CollectFee object`); }

 return CollectFee.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CollectFee.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CollectFee> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CollectFee object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCollectFee(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CollectFee object`); }

 return CollectFee.fromSuiObjectData( res.data ); }

 }

/* ============================== Stake =============================== */

export function isStake(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::well_events::Stake`; }

export interface StakeFields { wellType: ToField<String>; stakeAmount: ToField<"u64">; stakeWeight: ToField<"u64">; lockTime: ToField<"u64"> }

export type StakeReified = Reified< Stake, StakeFields >;

export class Stake implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well_events::Stake`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Stake.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well_events::Stake`; readonly $typeArgs: []; readonly $isPhantom = Stake.$isPhantom;

 readonly wellType: ToField<String>; readonly stakeAmount: ToField<"u64">; readonly stakeWeight: ToField<"u64">; readonly lockTime: ToField<"u64">

 private constructor(typeArgs: [], fields: StakeFields, ) { this.$fullTypeName = composeSuiType( Stake.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well_events::Stake`; this.$typeArgs = typeArgs;

 this.wellType = fields.wellType;; this.stakeAmount = fields.stakeAmount;; this.stakeWeight = fields.stakeWeight;; this.lockTime = fields.lockTime; }

 static reified( ): StakeReified { return { typeName: Stake.$typeName, fullTypeName: composeSuiType( Stake.$typeName, ...[] ) as `${typeof PKG_V1}::well_events::Stake`, typeArgs: [ ] as [], isPhantom: Stake.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Stake.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Stake.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Stake.fromBcs( data, ), bcs: Stake.bcs, fromJSONField: (field: any) => Stake.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Stake.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Stake.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Stake.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Stake.fetch( client, id, ), new: ( fields: StakeFields, ) => { return new Stake( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Stake.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Stake>> { return phantom(Stake.reified( )); } static get p() { return Stake.phantom() }

 static get bcs() { return bcs.struct("Stake", {

 well_type: String.bcs, stake_amount: bcs.u64(), stake_weight: bcs.u64(), lock_time: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Stake { return Stake.reified( ).new( { wellType: decodeFromFields(String.reified(), fields.well_type), stakeAmount: decodeFromFields("u64", fields.stake_amount), stakeWeight: decodeFromFields("u64", fields.stake_weight), lockTime: decodeFromFields("u64", fields.lock_time) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Stake { if (!isStake(item.type)) { throw new Error("not a Stake type");

 }

 return Stake.reified( ).new( { wellType: decodeFromFieldsWithTypes(String.reified(), item.fields.well_type), stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount), stakeWeight: decodeFromFieldsWithTypes("u64", item.fields.stake_weight), lockTime: decodeFromFieldsWithTypes("u64", item.fields.lock_time) } ) }

 static fromBcs( data: Uint8Array ): Stake { return Stake.fromFields( Stake.bcs.parse(data) ) }

 toJSONField() { return {

 wellType: this.wellType,stakeAmount: this.stakeAmount.toString(),stakeWeight: this.stakeWeight.toString(),lockTime: this.lockTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Stake { return Stake.reified( ).new( { wellType: decodeFromJSONField(String.reified(), field.wellType), stakeAmount: decodeFromJSONField("u64", field.stakeAmount), stakeWeight: decodeFromJSONField("u64", field.stakeWeight), lockTime: decodeFromJSONField("u64", field.lockTime) } ) }

 static fromJSON( json: Record<string, any> ): Stake { if (json.$typeName !== Stake.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Stake.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Stake { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStake(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Stake object`); } return Stake.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Stake { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isStake(data.bcs.type)) { throw new Error(`object at is not a Stake object`); }

 return Stake.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Stake.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Stake> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Stake object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStake(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Stake object`); }

 return Stake.fromSuiObjectData( res.data ); }

 }

/* ============================== Unstake =============================== */

export function isUnstake(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::well_events::Unstake`; }

export interface UnstakeFields { wellType: ToField<String>; unstakeAmount: ToField<"u64">; unstakeWeigth: ToField<"u64">; rewardAmount: ToField<"u64"> }

export type UnstakeReified = Reified< Unstake, UnstakeFields >;

export class Unstake implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well_events::Unstake`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Unstake.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well_events::Unstake`; readonly $typeArgs: []; readonly $isPhantom = Unstake.$isPhantom;

 readonly wellType: ToField<String>; readonly unstakeAmount: ToField<"u64">; readonly unstakeWeigth: ToField<"u64">; readonly rewardAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: UnstakeFields, ) { this.$fullTypeName = composeSuiType( Unstake.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well_events::Unstake`; this.$typeArgs = typeArgs;

 this.wellType = fields.wellType;; this.unstakeAmount = fields.unstakeAmount;; this.unstakeWeigth = fields.unstakeWeigth;; this.rewardAmount = fields.rewardAmount; }

 static reified( ): UnstakeReified { return { typeName: Unstake.$typeName, fullTypeName: composeSuiType( Unstake.$typeName, ...[] ) as `${typeof PKG_V1}::well_events::Unstake`, typeArgs: [ ] as [], isPhantom: Unstake.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Unstake.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Unstake.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Unstake.fromBcs( data, ), bcs: Unstake.bcs, fromJSONField: (field: any) => Unstake.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Unstake.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Unstake.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Unstake.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Unstake.fetch( client, id, ), new: ( fields: UnstakeFields, ) => { return new Unstake( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Unstake.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Unstake>> { return phantom(Unstake.reified( )); } static get p() { return Unstake.phantom() }

 static get bcs() { return bcs.struct("Unstake", {

 well_type: String.bcs, unstake_amount: bcs.u64(), unstake_weigth: bcs.u64(), reward_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Unstake { return Unstake.reified( ).new( { wellType: decodeFromFields(String.reified(), fields.well_type), unstakeAmount: decodeFromFields("u64", fields.unstake_amount), unstakeWeigth: decodeFromFields("u64", fields.unstake_weigth), rewardAmount: decodeFromFields("u64", fields.reward_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Unstake { if (!isUnstake(item.type)) { throw new Error("not a Unstake type");

 }

 return Unstake.reified( ).new( { wellType: decodeFromFieldsWithTypes(String.reified(), item.fields.well_type), unstakeAmount: decodeFromFieldsWithTypes("u64", item.fields.unstake_amount), unstakeWeigth: decodeFromFieldsWithTypes("u64", item.fields.unstake_weigth), rewardAmount: decodeFromFieldsWithTypes("u64", item.fields.reward_amount) } ) }

 static fromBcs( data: Uint8Array ): Unstake { return Unstake.fromFields( Unstake.bcs.parse(data) ) }

 toJSONField() { return {

 wellType: this.wellType,unstakeAmount: this.unstakeAmount.toString(),unstakeWeigth: this.unstakeWeigth.toString(),rewardAmount: this.rewardAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Unstake { return Unstake.reified( ).new( { wellType: decodeFromJSONField(String.reified(), field.wellType), unstakeAmount: decodeFromJSONField("u64", field.unstakeAmount), unstakeWeigth: decodeFromJSONField("u64", field.unstakeWeigth), rewardAmount: decodeFromJSONField("u64", field.rewardAmount) } ) }

 static fromJSON( json: Record<string, any> ): Unstake { if (json.$typeName !== Unstake.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Unstake.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Unstake { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnstake(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Unstake object`); } return Unstake.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Unstake { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUnstake(data.bcs.type)) { throw new Error(`object at is not a Unstake object`); }

 return Unstake.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Unstake.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Unstake> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Unstake object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnstake(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Unstake object`); }

 return Unstake.fromSuiObjectData( res.data ); }

 }

/* ============================== Claim =============================== */

export function isClaim(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::well_events::Claim`; }

export interface ClaimFields { wellType: ToField<String>; rewardAmount: ToField<"u64"> }

export type ClaimReified = Reified< Claim, ClaimFields >;

export class Claim implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well_events::Claim`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Claim.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well_events::Claim`; readonly $typeArgs: []; readonly $isPhantom = Claim.$isPhantom;

 readonly wellType: ToField<String>; readonly rewardAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: ClaimFields, ) { this.$fullTypeName = composeSuiType( Claim.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well_events::Claim`; this.$typeArgs = typeArgs;

 this.wellType = fields.wellType;; this.rewardAmount = fields.rewardAmount; }

 static reified( ): ClaimReified { return { typeName: Claim.$typeName, fullTypeName: composeSuiType( Claim.$typeName, ...[] ) as `${typeof PKG_V1}::well_events::Claim`, typeArgs: [ ] as [], isPhantom: Claim.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Claim.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Claim.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Claim.fromBcs( data, ), bcs: Claim.bcs, fromJSONField: (field: any) => Claim.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Claim.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Claim.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Claim.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Claim.fetch( client, id, ), new: ( fields: ClaimFields, ) => { return new Claim( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Claim.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Claim>> { return phantom(Claim.reified( )); } static get p() { return Claim.phantom() }

 static get bcs() { return bcs.struct("Claim", {

 well_type: String.bcs, reward_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Claim { return Claim.reified( ).new( { wellType: decodeFromFields(String.reified(), fields.well_type), rewardAmount: decodeFromFields("u64", fields.reward_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Claim { if (!isClaim(item.type)) { throw new Error("not a Claim type");

 }

 return Claim.reified( ).new( { wellType: decodeFromFieldsWithTypes(String.reified(), item.fields.well_type), rewardAmount: decodeFromFieldsWithTypes("u64", item.fields.reward_amount) } ) }

 static fromBcs( data: Uint8Array ): Claim { return Claim.fromFields( Claim.bcs.parse(data) ) }

 toJSONField() { return {

 wellType: this.wellType,rewardAmount: this.rewardAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Claim { return Claim.reified( ).new( { wellType: decodeFromJSONField(String.reified(), field.wellType), rewardAmount: decodeFromJSONField("u64", field.rewardAmount) } ) }

 static fromJSON( json: Record<string, any> ): Claim { if (json.$typeName !== Claim.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Claim.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Claim { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaim(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Claim object`); } return Claim.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Claim { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaim(data.bcs.type)) { throw new Error(`object at is not a Claim object`); }

 return Claim.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Claim.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Claim> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Claim object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaim(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Claim object`); }

 return Claim.fromSuiObjectData( res.data ); }

 }

/* ============================== Penalty =============================== */

export function isPenalty(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::well_events::Penalty`; }

export interface PenaltyFields { wellType: ToField<String>; penaltyAmount: ToField<"u64"> }

export type PenaltyReified = Reified< Penalty, PenaltyFields >;

export class Penalty implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::well_events::Penalty`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Penalty.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::well_events::Penalty`; readonly $typeArgs: []; readonly $isPhantom = Penalty.$isPhantom;

 readonly wellType: ToField<String>; readonly penaltyAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: PenaltyFields, ) { this.$fullTypeName = composeSuiType( Penalty.$typeName, ...typeArgs ) as `${typeof PKG_V1}::well_events::Penalty`; this.$typeArgs = typeArgs;

 this.wellType = fields.wellType;; this.penaltyAmount = fields.penaltyAmount; }

 static reified( ): PenaltyReified { return { typeName: Penalty.$typeName, fullTypeName: composeSuiType( Penalty.$typeName, ...[] ) as `${typeof PKG_V1}::well_events::Penalty`, typeArgs: [ ] as [], isPhantom: Penalty.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Penalty.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Penalty.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Penalty.fromBcs( data, ), bcs: Penalty.bcs, fromJSONField: (field: any) => Penalty.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Penalty.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Penalty.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Penalty.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Penalty.fetch( client, id, ), new: ( fields: PenaltyFields, ) => { return new Penalty( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Penalty.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Penalty>> { return phantom(Penalty.reified( )); } static get p() { return Penalty.phantom() }

 static get bcs() { return bcs.struct("Penalty", {

 well_type: String.bcs, penalty_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Penalty { return Penalty.reified( ).new( { wellType: decodeFromFields(String.reified(), fields.well_type), penaltyAmount: decodeFromFields("u64", fields.penalty_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Penalty { if (!isPenalty(item.type)) { throw new Error("not a Penalty type");

 }

 return Penalty.reified( ).new( { wellType: decodeFromFieldsWithTypes(String.reified(), item.fields.well_type), penaltyAmount: decodeFromFieldsWithTypes("u64", item.fields.penalty_amount) } ) }

 static fromBcs( data: Uint8Array ): Penalty { return Penalty.fromFields( Penalty.bcs.parse(data) ) }

 toJSONField() { return {

 wellType: this.wellType,penaltyAmount: this.penaltyAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Penalty { return Penalty.reified( ).new( { wellType: decodeFromJSONField(String.reified(), field.wellType), penaltyAmount: decodeFromJSONField("u64", field.penaltyAmount) } ) }

 static fromJSON( json: Record<string, any> ): Penalty { if (json.$typeName !== Penalty.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Penalty.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Penalty { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPenalty(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Penalty object`); } return Penalty.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Penalty { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPenalty(data.bcs.type)) { throw new Error(`object at is not a Penalty object`); }

 return Penalty.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Penalty.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Penalty> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Penalty object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPenalty(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Penalty object`); }

 return Penalty.fromSuiObjectData( res.data ); }

 }

/* ============================== CollectFeeFrom =============================== */

export function isCollectFeeFrom(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V4}::well_events::CollectFeeFrom`; }

export interface CollectFeeFromFields { wellType: ToField<String>; feeAmount: ToField<"u64">; from: ToField<String> }

export type CollectFeeFromReified = Reified< CollectFeeFrom, CollectFeeFromFields >;

export class CollectFeeFrom implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V4}::well_events::CollectFeeFrom`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CollectFeeFrom.$typeName; readonly $fullTypeName: `${typeof PKG_V4}::well_events::CollectFeeFrom`; readonly $typeArgs: []; readonly $isPhantom = CollectFeeFrom.$isPhantom;

 readonly wellType: ToField<String>; readonly feeAmount: ToField<"u64">; readonly from: ToField<String>

 private constructor(typeArgs: [], fields: CollectFeeFromFields, ) { this.$fullTypeName = composeSuiType( CollectFeeFrom.$typeName, ...typeArgs ) as `${typeof PKG_V4}::well_events::CollectFeeFrom`; this.$typeArgs = typeArgs;

 this.wellType = fields.wellType;; this.feeAmount = fields.feeAmount;; this.from = fields.from; }

 static reified( ): CollectFeeFromReified { return { typeName: CollectFeeFrom.$typeName, fullTypeName: composeSuiType( CollectFeeFrom.$typeName, ...[] ) as `${typeof PKG_V4}::well_events::CollectFeeFrom`, typeArgs: [ ] as [], isPhantom: CollectFeeFrom.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CollectFeeFrom.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CollectFeeFrom.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CollectFeeFrom.fromBcs( data, ), bcs: CollectFeeFrom.bcs, fromJSONField: (field: any) => CollectFeeFrom.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CollectFeeFrom.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CollectFeeFrom.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CollectFeeFrom.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CollectFeeFrom.fetch( client, id, ), new: ( fields: CollectFeeFromFields, ) => { return new CollectFeeFrom( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CollectFeeFrom.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CollectFeeFrom>> { return phantom(CollectFeeFrom.reified( )); } static get p() { return CollectFeeFrom.phantom() }

 static get bcs() { return bcs.struct("CollectFeeFrom", {

 well_type: String.bcs, fee_amount: bcs.u64(), from: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): CollectFeeFrom { return CollectFeeFrom.reified( ).new( { wellType: decodeFromFields(String.reified(), fields.well_type), feeAmount: decodeFromFields("u64", fields.fee_amount), from: decodeFromFields(String.reified(), fields.from) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CollectFeeFrom { if (!isCollectFeeFrom(item.type)) { throw new Error("not a CollectFeeFrom type");

 }

 return CollectFeeFrom.reified( ).new( { wellType: decodeFromFieldsWithTypes(String.reified(), item.fields.well_type), feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount), from: decodeFromFieldsWithTypes(String.reified(), item.fields.from) } ) }

 static fromBcs( data: Uint8Array ): CollectFeeFrom { return CollectFeeFrom.fromFields( CollectFeeFrom.bcs.parse(data) ) }

 toJSONField() { return {

 wellType: this.wellType,feeAmount: this.feeAmount.toString(),from: this.from,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CollectFeeFrom { return CollectFeeFrom.reified( ).new( { wellType: decodeFromJSONField(String.reified(), field.wellType), feeAmount: decodeFromJSONField("u64", field.feeAmount), from: decodeFromJSONField(String.reified(), field.from) } ) }

 static fromJSON( json: Record<string, any> ): CollectFeeFrom { if (json.$typeName !== CollectFeeFrom.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CollectFeeFrom.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CollectFeeFrom { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCollectFeeFrom(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CollectFeeFrom object`); } return CollectFeeFrom.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CollectFeeFrom { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCollectFeeFrom(data.bcs.type)) { throw new Error(`object at is not a CollectFeeFrom object`); }

 return CollectFeeFrom.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CollectFeeFrom.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CollectFeeFrom> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CollectFeeFrom object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCollectFeeFrom(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CollectFeeFrom object`); }

 return CollectFeeFrom.fromSuiObjectData( res.data ); }

 }
