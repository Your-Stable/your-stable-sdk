import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../../../_framework/util";
import {Option} from "../../0x1/option/structs";
import {Balance} from "../../0x2/balance/structs";
import {UID} from "../../0x2/object/structs";
import {Table} from "../../0x2/table/structs";
import {Bottle, BottleTable} from "../bottle/structs";
import {PKG_V1, PKG_V13, PKG_V4} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Bucket =============================== */

export function isBucket(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::bucket::Bucket` + '<'); }

export interface BucketFields<T extends PhantomTypeArgument> { id: ToField<UID>; minCollateralRatio: ToField<"u64">; recoveryModeThreshold: ToField<"u64">; collateralDecimal: ToField<"u8">; maxMintAmount: ToField<Option<"u64">>; collateralVault: ToField<Balance<T>>; bottleTable: ToField<BottleTable>; surplusBottleTable: ToField<Table<"address", ToPhantom<Bottle>>>; mintedBuckAmount: ToField<"u64">; baseFeeRate: ToField<"u64">; latestRedemptionTime: ToField<"u64">; totalFlashLoanAmount: ToField<"u64"> }

export type BucketReified<T extends PhantomTypeArgument> = Reified< Bucket<T>, BucketFields<T> >;

export class Bucket<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket::Bucket`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Bucket.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket::Bucket<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = Bucket.$isPhantom;

 readonly id: ToField<UID>; readonly minCollateralRatio: ToField<"u64">; readonly recoveryModeThreshold: ToField<"u64">; readonly collateralDecimal: ToField<"u8">; readonly maxMintAmount: ToField<Option<"u64">>; readonly collateralVault: ToField<Balance<T>>; readonly bottleTable: ToField<BottleTable>; readonly surplusBottleTable: ToField<Table<"address", ToPhantom<Bottle>>>; readonly mintedBuckAmount: ToField<"u64">; readonly baseFeeRate: ToField<"u64">; readonly latestRedemptionTime: ToField<"u64">; readonly totalFlashLoanAmount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: BucketFields<T>, ) { this.$fullTypeName = composeSuiType( Bucket.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket::Bucket<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.minCollateralRatio = fields.minCollateralRatio;; this.recoveryModeThreshold = fields.recoveryModeThreshold;; this.collateralDecimal = fields.collateralDecimal;; this.maxMintAmount = fields.maxMintAmount;; this.collateralVault = fields.collateralVault;; this.bottleTable = fields.bottleTable;; this.surplusBottleTable = fields.surplusBottleTable;; this.mintedBuckAmount = fields.mintedBuckAmount;; this.baseFeeRate = fields.baseFeeRate;; this.latestRedemptionTime = fields.latestRedemptionTime;; this.totalFlashLoanAmount = fields.totalFlashLoanAmount; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): BucketReified<ToPhantomTypeArgument<T>> { return { typeName: Bucket.$typeName, fullTypeName: composeSuiType( Bucket.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::bucket::Bucket<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: Bucket.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => Bucket.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Bucket.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => Bucket.fromBcs( T, data, ), bcs: Bucket.bcs, fromJSONField: (field: any) => Bucket.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => Bucket.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => Bucket.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => Bucket.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => Bucket.fetch( client, T, id, ), new: ( fields: BucketFields<ToPhantomTypeArgument<T>>, ) => { return new Bucket( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Bucket.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<Bucket<ToPhantomTypeArgument<T>>>> { return phantom(Bucket.reified( T )); } static get p() { return Bucket.phantom }

 static get bcs() { return bcs.struct("Bucket", {

 id: UID.bcs, min_collateral_ratio: bcs.u64(), recovery_mode_threshold: bcs.u64(), collateral_decimal: bcs.u8(), max_mint_amount: Option.bcs(bcs.u64()), collateral_vault: Balance.bcs, bottle_table: BottleTable.bcs, surplus_bottle_table: Table.bcs, minted_buck_amount: bcs.u64(), base_fee_rate: bcs.u64(), latest_redemption_time: bcs.u64(), total_flash_loan_amount: bcs.u64()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): Bucket<ToPhantomTypeArgument<T>> { return Bucket.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), minCollateralRatio: decodeFromFields("u64", fields.min_collateral_ratio), recoveryModeThreshold: decodeFromFields("u64", fields.recovery_mode_threshold), collateralDecimal: decodeFromFields("u8", fields.collateral_decimal), maxMintAmount: decodeFromFields(Option.reified("u64"), fields.max_mint_amount), collateralVault: decodeFromFields(Balance.reified(typeArg), fields.collateral_vault), bottleTable: decodeFromFields(BottleTable.reified(), fields.bottle_table), surplusBottleTable: decodeFromFields(Table.reified(reified.phantom("address"), reified.phantom(Bottle.reified())), fields.surplus_bottle_table), mintedBuckAmount: decodeFromFields("u64", fields.minted_buck_amount), baseFeeRate: decodeFromFields("u64", fields.base_fee_rate), latestRedemptionTime: decodeFromFields("u64", fields.latest_redemption_time), totalFlashLoanAmount: decodeFromFields("u64", fields.total_flash_loan_amount) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): Bucket<ToPhantomTypeArgument<T>> { if (!isBucket(item.type)) { throw new Error("not a Bucket type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Bucket.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), minCollateralRatio: decodeFromFieldsWithTypes("u64", item.fields.min_collateral_ratio), recoveryModeThreshold: decodeFromFieldsWithTypes("u64", item.fields.recovery_mode_threshold), collateralDecimal: decodeFromFieldsWithTypes("u8", item.fields.collateral_decimal), maxMintAmount: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.max_mint_amount), collateralVault: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.collateral_vault), bottleTable: decodeFromFieldsWithTypes(BottleTable.reified(), item.fields.bottle_table), surplusBottleTable: decodeFromFieldsWithTypes(Table.reified(reified.phantom("address"), reified.phantom(Bottle.reified())), item.fields.surplus_bottle_table), mintedBuckAmount: decodeFromFieldsWithTypes("u64", item.fields.minted_buck_amount), baseFeeRate: decodeFromFieldsWithTypes("u64", item.fields.base_fee_rate), latestRedemptionTime: decodeFromFieldsWithTypes("u64", item.fields.latest_redemption_time), totalFlashLoanAmount: decodeFromFieldsWithTypes("u64", item.fields.total_flash_loan_amount) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): Bucket<ToPhantomTypeArgument<T>> { return Bucket.fromFields( typeArg, Bucket.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,minCollateralRatio: this.minCollateralRatio.toString(),recoveryModeThreshold: this.recoveryModeThreshold.toString(),collateralDecimal: this.collateralDecimal,maxMintAmount: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.maxMintAmount),collateralVault: this.collateralVault.toJSONField(),bottleTable: this.bottleTable.toJSONField(),surplusBottleTable: this.surplusBottleTable.toJSONField(),mintedBuckAmount: this.mintedBuckAmount.toString(),baseFeeRate: this.baseFeeRate.toString(),latestRedemptionTime: this.latestRedemptionTime.toString(),totalFlashLoanAmount: this.totalFlashLoanAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): Bucket<ToPhantomTypeArgument<T>> { return Bucket.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), minCollateralRatio: decodeFromJSONField("u64", field.minCollateralRatio), recoveryModeThreshold: decodeFromJSONField("u64", field.recoveryModeThreshold), collateralDecimal: decodeFromJSONField("u8", field.collateralDecimal), maxMintAmount: decodeFromJSONField(Option.reified("u64"), field.maxMintAmount), collateralVault: decodeFromJSONField(Balance.reified(typeArg), field.collateralVault), bottleTable: decodeFromJSONField(BottleTable.reified(), field.bottleTable), surplusBottleTable: decodeFromJSONField(Table.reified(reified.phantom("address"), reified.phantom(Bottle.reified())), field.surplusBottleTable), mintedBuckAmount: decodeFromJSONField("u64", field.mintedBuckAmount), baseFeeRate: decodeFromJSONField("u64", field.baseFeeRate), latestRedemptionTime: decodeFromJSONField("u64", field.latestRedemptionTime), totalFlashLoanAmount: decodeFromJSONField("u64", field.totalFlashLoanAmount) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): Bucket<ToPhantomTypeArgument<T>> { if (json.$typeName !== Bucket.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Bucket.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Bucket.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): Bucket<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBucket(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Bucket object`); } return Bucket.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): Bucket<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBucket(data.bcs.type)) { throw new Error(`object at is not a Bucket object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Bucket.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Bucket.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<Bucket<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Bucket object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBucket(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Bucket object`); }

 return Bucket.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== PendingRecord =============================== */

export function isPendingRecord(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V4}::bucket::PendingRecord`; }

export interface PendingRecordFields { id: ToField<UID>; bucketPendingDebt: ToField<"u64">; bucketPendingCollateral: ToField<"u64"> }

export type PendingRecordReified = Reified< PendingRecord, PendingRecordFields >;

export class PendingRecord implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V4}::bucket::PendingRecord`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = PendingRecord.$typeName; readonly $fullTypeName: `${typeof PKG_V4}::bucket::PendingRecord`; readonly $typeArgs: []; readonly $isPhantom = PendingRecord.$isPhantom;

 readonly id: ToField<UID>; readonly bucketPendingDebt: ToField<"u64">; readonly bucketPendingCollateral: ToField<"u64">

 private constructor(typeArgs: [], fields: PendingRecordFields, ) { this.$fullTypeName = composeSuiType( PendingRecord.$typeName, ...typeArgs ) as `${typeof PKG_V4}::bucket::PendingRecord`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.bucketPendingDebt = fields.bucketPendingDebt;; this.bucketPendingCollateral = fields.bucketPendingCollateral; }

 static reified( ): PendingRecordReified { return { typeName: PendingRecord.$typeName, fullTypeName: composeSuiType( PendingRecord.$typeName, ...[] ) as `${typeof PKG_V4}::bucket::PendingRecord`, typeArgs: [ ] as [], isPhantom: PendingRecord.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PendingRecord.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PendingRecord.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PendingRecord.fromBcs( data, ), bcs: PendingRecord.bcs, fromJSONField: (field: any) => PendingRecord.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PendingRecord.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PendingRecord.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => PendingRecord.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => PendingRecord.fetch( client, id, ), new: ( fields: PendingRecordFields, ) => { return new PendingRecord( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PendingRecord.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PendingRecord>> { return phantom(PendingRecord.reified( )); } static get p() { return PendingRecord.phantom() }

 static get bcs() { return bcs.struct("PendingRecord", {

 id: UID.bcs, bucket_pending_debt: bcs.u64(), bucket_pending_collateral: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): PendingRecord { return PendingRecord.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), bucketPendingDebt: decodeFromFields("u64", fields.bucket_pending_debt), bucketPendingCollateral: decodeFromFields("u64", fields.bucket_pending_collateral) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PendingRecord { if (!isPendingRecord(item.type)) { throw new Error("not a PendingRecord type");

 }

 return PendingRecord.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), bucketPendingDebt: decodeFromFieldsWithTypes("u64", item.fields.bucket_pending_debt), bucketPendingCollateral: decodeFromFieldsWithTypes("u64", item.fields.bucket_pending_collateral) } ) }

 static fromBcs( data: Uint8Array ): PendingRecord { return PendingRecord.fromFields( PendingRecord.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,bucketPendingDebt: this.bucketPendingDebt.toString(),bucketPendingCollateral: this.bucketPendingCollateral.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PendingRecord { return PendingRecord.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), bucketPendingDebt: decodeFromJSONField("u64", field.bucketPendingDebt), bucketPendingCollateral: decodeFromJSONField("u64", field.bucketPendingCollateral) } ) }

 static fromJSON( json: Record<string, any> ): PendingRecord { if (json.$typeName !== PendingRecord.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PendingRecord.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PendingRecord { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPendingRecord(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PendingRecord object`); } return PendingRecord.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): PendingRecord { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isPendingRecord(data.bcs.type)) { throw new Error(`object at is not a PendingRecord object`); }

 return PendingRecord.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return PendingRecord.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<PendingRecord> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PendingRecord object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPendingRecord(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PendingRecord object`); }

 return PendingRecord.fromSuiObjectData( res.data ); }

 }

/* ============================== FlashReceipt =============================== */

export function isFlashReceipt(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::bucket::FlashReceipt` + '<'); }

export interface FlashReceiptFields<T extends PhantomTypeArgument> { amount: ToField<"u64">; fee: ToField<"u64"> }

export type FlashReceiptReified<T extends PhantomTypeArgument> = Reified< FlashReceipt<T>, FlashReceiptFields<T> >;

export class FlashReceipt<T extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::bucket::FlashReceipt`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = FlashReceipt.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::bucket::FlashReceipt<${PhantomToTypeStr<T>}>`; readonly $typeArgs: [PhantomToTypeStr<T>]; readonly $isPhantom = FlashReceipt.$isPhantom;

 readonly amount: ToField<"u64">; readonly fee: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<T>], fields: FlashReceiptFields<T>, ) { this.$fullTypeName = composeSuiType( FlashReceipt.$typeName, ...typeArgs ) as `${typeof PKG_V1}::bucket::FlashReceipt<${PhantomToTypeStr<T>}>`; this.$typeArgs = typeArgs;

 this.amount = fields.amount;; this.fee = fields.fee; }

 static reified<T extends PhantomReified<PhantomTypeArgument>>( T: T ): FlashReceiptReified<ToPhantomTypeArgument<T>> { return { typeName: FlashReceipt.$typeName, fullTypeName: composeSuiType( FlashReceipt.$typeName, ...[extractType(T)] ) as `${typeof PKG_V1}::bucket::FlashReceipt<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`, typeArgs: [ extractType(T) ] as [PhantomToTypeStr<ToPhantomTypeArgument<T>>], isPhantom: FlashReceipt.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields: Record<string, any>) => FlashReceipt.fromFields( T, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => FlashReceipt.fromFieldsWithTypes( T, item, ), fromBcs: (data: Uint8Array) => FlashReceipt.fromBcs( T, data, ), bcs: FlashReceipt.bcs, fromJSONField: (field: any) => FlashReceipt.fromJSONField( T, field, ), fromJSON: (json: Record<string, any>) => FlashReceipt.fromJSON( T, json, ), fromSuiParsedData: (content: SuiParsedData) => FlashReceipt.fromSuiParsedData( T, content, ), fromSuiObjectData: (content: SuiObjectData) => FlashReceipt.fromSuiObjectData( T, content, ), fetch: async (client: SuiClient, id: string) => FlashReceipt.fetch( client, T, id, ), new: ( fields: FlashReceiptFields<ToPhantomTypeArgument<T>>, ) => { return new FlashReceipt( [extractType(T)], fields ) }, kind: "StructClassReified", } }

 static get r() { return FlashReceipt.reified }

 static phantom<T extends PhantomReified<PhantomTypeArgument>>( T: T ): PhantomReified<ToTypeStr<FlashReceipt<ToPhantomTypeArgument<T>>>> { return phantom(FlashReceipt.reified( T )); } static get p() { return FlashReceipt.phantom }

 static get bcs() { return bcs.struct("FlashReceipt", {

 amount: bcs.u64(), fee: bcs.u64()

}) };

 static fromFields<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, fields: Record<string, any> ): FlashReceipt<ToPhantomTypeArgument<T>> { return FlashReceipt.reified( typeArg, ).new( { amount: decodeFromFields("u64", fields.amount), fee: decodeFromFields("u64", fields.fee) } ) }

 static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, item: FieldsWithTypes ): FlashReceipt<ToPhantomTypeArgument<T>> { if (!isFlashReceipt(item.type)) { throw new Error("not a FlashReceipt type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return FlashReceipt.reified( typeArg, ).new( { amount: decodeFromFieldsWithTypes("u64", item.fields.amount), fee: decodeFromFieldsWithTypes("u64", item.fields.fee) } ) }

 static fromBcs<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: Uint8Array ): FlashReceipt<ToPhantomTypeArgument<T>> { return FlashReceipt.fromFields( typeArg, FlashReceipt.bcs.parse(data) ) }

 toJSONField() { return {

 amount: this.amount.toString(),fee: this.fee.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, field: any ): FlashReceipt<ToPhantomTypeArgument<T>> { return FlashReceipt.reified( typeArg, ).new( { amount: decodeFromJSONField("u64", field.amount), fee: decodeFromJSONField("u64", field.fee) } ) }

 static fromJSON<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, json: Record<string, any> ): FlashReceipt<ToPhantomTypeArgument<T>> { if (json.$typeName !== FlashReceipt.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(FlashReceipt.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return FlashReceipt.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, content: SuiParsedData ): FlashReceipt<ToPhantomTypeArgument<T>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isFlashReceipt(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a FlashReceipt object`); } return FlashReceipt.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>( typeArg: T, data: SuiObjectData ): FlashReceipt<ToPhantomTypeArgument<T>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isFlashReceipt(data.bcs.type)) { throw new Error(`object at is not a FlashReceipt object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return FlashReceipt.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return FlashReceipt.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<T extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: T, id: string ): Promise<FlashReceipt<ToPhantomTypeArgument<T>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching FlashReceipt object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isFlashReceipt(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a FlashReceipt object`); }

 return FlashReceipt.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== OutputKey =============================== */

export function isOutputKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V13}::bucket::OutputKey`; }

export interface OutputKeyFields { dummyField: ToField<"bool"> }

export type OutputKeyReified = Reified< OutputKey, OutputKeyFields >;

export class OutputKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V13}::bucket::OutputKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OutputKey.$typeName; readonly $fullTypeName: `${typeof PKG_V13}::bucket::OutputKey`; readonly $typeArgs: []; readonly $isPhantom = OutputKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: OutputKeyFields, ) { this.$fullTypeName = composeSuiType( OutputKey.$typeName, ...typeArgs ) as `${typeof PKG_V13}::bucket::OutputKey`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): OutputKeyReified { return { typeName: OutputKey.$typeName, fullTypeName: composeSuiType( OutputKey.$typeName, ...[] ) as `${typeof PKG_V13}::bucket::OutputKey`, typeArgs: [ ] as [], isPhantom: OutputKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OutputKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OutputKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OutputKey.fromBcs( data, ), bcs: OutputKey.bcs, fromJSONField: (field: any) => OutputKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OutputKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OutputKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OutputKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OutputKey.fetch( client, id, ), new: ( fields: OutputKeyFields, ) => { return new OutputKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OutputKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OutputKey>> { return phantom(OutputKey.reified( )); } static get p() { return OutputKey.phantom() }

 static get bcs() { return bcs.struct("OutputKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): OutputKey { return OutputKey.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OutputKey { if (!isOutputKey(item.type)) { throw new Error("not a OutputKey type");

 }

 return OutputKey.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): OutputKey { return OutputKey.fromFields( OutputKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OutputKey { return OutputKey.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): OutputKey { if (json.$typeName !== OutputKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OutputKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OutputKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOutputKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OutputKey object`); } return OutputKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OutputKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOutputKey(data.bcs.type)) { throw new Error(`object at is not a OutputKey object`); }

 return OutputKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OutputKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OutputKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OutputKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOutputKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OutputKey object`); }

 return OutputKey.fromSuiObjectData( res.data ); }

 }

/* ============================== OutputVolume =============================== */

export function isOutputVolume(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V13}::bucket::OutputVolume`; }

export interface OutputVolumeFields { volume: ToField<"u64"> }

export type OutputVolumeReified = Reified< OutputVolume, OutputVolumeFields >;

export class OutputVolume implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V13}::bucket::OutputVolume`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = OutputVolume.$typeName; readonly $fullTypeName: `${typeof PKG_V13}::bucket::OutputVolume`; readonly $typeArgs: []; readonly $isPhantom = OutputVolume.$isPhantom;

 readonly volume: ToField<"u64">

 private constructor(typeArgs: [], fields: OutputVolumeFields, ) { this.$fullTypeName = composeSuiType( OutputVolume.$typeName, ...typeArgs ) as `${typeof PKG_V13}::bucket::OutputVolume`; this.$typeArgs = typeArgs;

 this.volume = fields.volume; }

 static reified( ): OutputVolumeReified { return { typeName: OutputVolume.$typeName, fullTypeName: composeSuiType( OutputVolume.$typeName, ...[] ) as `${typeof PKG_V13}::bucket::OutputVolume`, typeArgs: [ ] as [], isPhantom: OutputVolume.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => OutputVolume.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => OutputVolume.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => OutputVolume.fromBcs( data, ), bcs: OutputVolume.bcs, fromJSONField: (field: any) => OutputVolume.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => OutputVolume.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => OutputVolume.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => OutputVolume.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => OutputVolume.fetch( client, id, ), new: ( fields: OutputVolumeFields, ) => { return new OutputVolume( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return OutputVolume.reified() }

 static phantom( ): PhantomReified<ToTypeStr<OutputVolume>> { return phantom(OutputVolume.reified( )); } static get p() { return OutputVolume.phantom() }

 static get bcs() { return bcs.struct("OutputVolume", {

 volume: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): OutputVolume { return OutputVolume.reified( ).new( { volume: decodeFromFields("u64", fields.volume) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): OutputVolume { if (!isOutputVolume(item.type)) { throw new Error("not a OutputVolume type");

 }

 return OutputVolume.reified( ).new( { volume: decodeFromFieldsWithTypes("u64", item.fields.volume) } ) }

 static fromBcs( data: Uint8Array ): OutputVolume { return OutputVolume.fromFields( OutputVolume.bcs.parse(data) ) }

 toJSONField() { return {

 volume: this.volume.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): OutputVolume { return OutputVolume.reified( ).new( { volume: decodeFromJSONField("u64", field.volume) } ) }

 static fromJSON( json: Record<string, any> ): OutputVolume { if (json.$typeName !== OutputVolume.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return OutputVolume.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): OutputVolume { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isOutputVolume(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a OutputVolume object`); } return OutputVolume.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): OutputVolume { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isOutputVolume(data.bcs.type)) { throw new Error(`object at is not a OutputVolume object`); }

 return OutputVolume.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return OutputVolume.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<OutputVolume> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching OutputVolume object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isOutputVolume(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a OutputVolume object`); }

 return OutputVolume.fromSuiObjectData( res.data ); }

 }
