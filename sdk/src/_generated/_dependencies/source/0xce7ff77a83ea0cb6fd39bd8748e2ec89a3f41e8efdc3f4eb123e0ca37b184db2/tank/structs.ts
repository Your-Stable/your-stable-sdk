import * as reified from "../../../../_framework/reified";
import type {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom
} from "../../../../_framework/reified";
import type {
  FieldsWithTypes} from "../../../../_framework/util";
import {
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../_framework/util";
import { Balance } from "../../0x2/balance/structs";
import { UID } from "../../0x2/object/structs";
import { Table } from "../../0x2/table/structs";
import { BKT } from "../bkt/structs";
import { PKG_V1, PKG_V14 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Tank =============================== */

export function isTank(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::tank::Tank` + "<");
}

export interface TankFields<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> {
  id: ToField<UID>;
  reserve: ToField<Balance<BUCK>>;
  collateralPool: ToField<Balance<T>>;
  currentP: ToField<"u64">;
  currentEpoch: ToField<"u64">;
  epochScaleSumMap: ToField<Table<ToPhantom<EpochAndScale>, "u64">>;
  currentScale: ToField<"u64">;
  bktPool: ToField<Balance<ToPhantom<BKT>>>;
  epochScaleGainMap: ToField<Table<ToPhantom<EpochAndScale>, "u64">>;
  totalFlashLoanAmount: ToField<"u64">;
}

export type TankReified<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> = Reified<Tank<BUCK, T>, TankFields<BUCK, T>>;

export class Tank<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank::Tank`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = Tank.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank::Tank<${PhantomToTypeStr<BUCK>}, ${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<BUCK>, PhantomToTypeStr<T>];
  readonly $isPhantom = Tank.$isPhantom;

  readonly id: ToField<UID>;
  readonly reserve: ToField<Balance<BUCK>>;
  readonly collateralPool: ToField<Balance<T>>;
  readonly currentP: ToField<"u64">;
  readonly currentEpoch: ToField<"u64">;
  readonly epochScaleSumMap: ToField<Table<ToPhantom<EpochAndScale>, "u64">>;
  readonly currentScale: ToField<"u64">;
  readonly bktPool: ToField<Balance<ToPhantom<BKT>>>;
  readonly epochScaleGainMap: ToField<Table<ToPhantom<EpochAndScale>, "u64">>;
  readonly totalFlashLoanAmount: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<BUCK>, PhantomToTypeStr<T>],
    fields: TankFields<BUCK, T>,
  ) {
    this.$fullTypeName = composeSuiType(
      Tank.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank::Tank<${PhantomToTypeStr<BUCK>}, ${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.reserve = fields.reserve;
    this.collateralPool = fields.collateralPool;
    this.currentP = fields.currentP;
    this.currentEpoch = fields.currentEpoch;
    this.epochScaleSumMap = fields.epochScaleSumMap;
    this.currentScale = fields.currentScale;
    this.bktPool = fields.bktPool;
    this.epochScaleGainMap = fields.epochScaleGainMap;
    this.totalFlashLoanAmount = fields.totalFlashLoanAmount;
  }

  static reified<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    BUCK: BUCK,
    T: T,
  ): TankReified<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return {
      typeName: Tank.$typeName,
      fullTypeName: composeSuiType(
        Tank.$typeName,
        ...[extractType(BUCK), extractType(T)],
      ) as `${typeof PKG_V1}::tank::Tank<${PhantomToTypeStr<ToPhantomTypeArgument<BUCK>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(BUCK), extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<BUCK>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: Tank.$isPhantom,
      reifiedTypeArgs: [BUCK, T],
      fromFields: (fields: Record<string, any>) =>
        Tank.fromFields([BUCK, T], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Tank.fromFieldsWithTypes([BUCK, T], item),
      fromBcs: (data: Uint8Array) => Tank.fromBcs([BUCK, T], data),
      bcs: Tank.bcs,
      fromJSONField: (field: any) => Tank.fromJSONField([BUCK, T], field),
      fromJSON: (json: Record<string, any>) => Tank.fromJSON([BUCK, T], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Tank.fromSuiParsedData([BUCK, T], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Tank.fromSuiObjectData([BUCK, T], content),
      fetch: async (client: SuiClient, id: string) =>
        Tank.fetch(client, [BUCK, T], id),
      new: (
        fields: TankFields<
          ToPhantomTypeArgument<BUCK>,
          ToPhantomTypeArgument<T>
        >,
      ) => {
        return new Tank([extractType(BUCK), extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Tank.reified;
  }

  static phantom<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    BUCK: BUCK,
    T: T,
  ): PhantomReified<
    ToTypeStr<Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>>>
  > {
    return phantom(Tank.reified(BUCK, T));
  }
  static get p() {
    return Tank.phantom;
  }

  static get bcs() {
    return bcs.struct("Tank", {
      id: UID.bcs,
      reserve: Balance.bcs,
      collateral_pool: Balance.bcs,
      current_p: bcs.u64(),
      current_epoch: bcs.u64(),
      epoch_scale_sum_map: Table.bcs,
      current_scale: bcs.u64(),
      bkt_pool: Balance.bcs,
      epoch_scale_gain_map: Table.bcs,
      total_flash_loan_amount: bcs.u64(),
    });
  }

  static fromFields<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    fields: Record<string, any>,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return Tank.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFields(UID.reified(), fields.id),
      reserve: decodeFromFields(Balance.reified(typeArgs[0]), fields.reserve),
      collateralPool: decodeFromFields(
        Balance.reified(typeArgs[1]),
        fields.collateral_pool,
      ),
      currentP: decodeFromFields("u64", fields.current_p),
      currentEpoch: decodeFromFields("u64", fields.current_epoch),
      epochScaleSumMap: decodeFromFields(
        Table.reified(
          reified.phantom(EpochAndScale.reified()),
          reified.phantom("u64"),
        ),
        fields.epoch_scale_sum_map,
      ),
      currentScale: decodeFromFields("u64", fields.current_scale),
      bktPool: decodeFromFields(
        Balance.reified(reified.phantom(BKT.reified())),
        fields.bkt_pool,
      ),
      epochScaleGainMap: decodeFromFields(
        Table.reified(
          reified.phantom(EpochAndScale.reified()),
          reified.phantom("u64"),
        ),
        fields.epoch_scale_gain_map,
      ),
      totalFlashLoanAmount: decodeFromFields(
        "u64",
        fields.total_flash_loan_amount,
      ),
    });
  }

  static fromFieldsWithTypes<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    item: FieldsWithTypes,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (!isTank(item.type)) {
      throw new Error("not a Tank type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Tank.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      reserve: decodeFromFieldsWithTypes(
        Balance.reified(typeArgs[0]),
        item.fields.reserve,
      ),
      collateralPool: decodeFromFieldsWithTypes(
        Balance.reified(typeArgs[1]),
        item.fields.collateral_pool,
      ),
      currentP: decodeFromFieldsWithTypes("u64", item.fields.current_p),
      currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
      epochScaleSumMap: decodeFromFieldsWithTypes(
        Table.reified(
          reified.phantom(EpochAndScale.reified()),
          reified.phantom("u64"),
        ),
        item.fields.epoch_scale_sum_map,
      ),
      currentScale: decodeFromFieldsWithTypes("u64", item.fields.current_scale),
      bktPool: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(BKT.reified())),
        item.fields.bkt_pool,
      ),
      epochScaleGainMap: decodeFromFieldsWithTypes(
        Table.reified(
          reified.phantom(EpochAndScale.reified()),
          reified.phantom("u64"),
        ),
        item.fields.epoch_scale_gain_map,
      ),
      totalFlashLoanAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.total_flash_loan_amount,
      ),
    });
  }

  static fromBcs<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    data: Uint8Array,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return Tank.fromFields(typeArgs, Tank.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      reserve: this.reserve.toJSONField(),
      collateralPool: this.collateralPool.toJSONField(),
      currentP: this.currentP.toString(),
      currentEpoch: this.currentEpoch.toString(),
      epochScaleSumMap: this.epochScaleSumMap.toJSONField(),
      currentScale: this.currentScale.toString(),
      bktPool: this.bktPool.toJSONField(),
      epochScaleGainMap: this.epochScaleGainMap.toJSONField(),
      totalFlashLoanAmount: this.totalFlashLoanAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    field: any,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return Tank.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      reserve: decodeFromJSONField(Balance.reified(typeArgs[0]), field.reserve),
      collateralPool: decodeFromJSONField(
        Balance.reified(typeArgs[1]),
        field.collateralPool,
      ),
      currentP: decodeFromJSONField("u64", field.currentP),
      currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
      epochScaleSumMap: decodeFromJSONField(
        Table.reified(
          reified.phantom(EpochAndScale.reified()),
          reified.phantom("u64"),
        ),
        field.epochScaleSumMap,
      ),
      currentScale: decodeFromJSONField("u64", field.currentScale),
      bktPool: decodeFromJSONField(
        Balance.reified(reified.phantom(BKT.reified())),
        field.bktPool,
      ),
      epochScaleGainMap: decodeFromJSONField(
        Table.reified(
          reified.phantom(EpochAndScale.reified()),
          reified.phantom("u64"),
        ),
        field.epochScaleGainMap,
      ),
      totalFlashLoanAmount: decodeFromJSONField(
        "u64",
        field.totalFlashLoanAmount,
      ),
    });
  }

  static fromJSON<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    json: Record<string, any>,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (json.$typeName !== Tank.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Tank.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return Tank.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    content: SuiParsedData,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTank(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Tank object`,
      );
    }
    return Tank.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    data: SuiObjectData,
  ): Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTank(data.bcs.type)) {
        throw new Error(`object at is not a Tank object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      for (let i = 0; i < 2; i++) {
        const gotTypeArg = compressSuiType(gotTypeArgs[i]);
        const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
        if (gotTypeArg !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
          );
        }
      }

      return Tank.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Tank.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [BUCK, T],
    id: string,
  ): Promise<Tank<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Tank object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTank(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Tank object`);
    }

    return Tank.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== ContributorToken =============================== */

export function isContributorToken(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::tank::ContributorToken` + "<");
}

export interface ContributorTokenFields<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> {
  id: ToField<UID>;
  depositAmount: ToField<"u64">;
  startP: ToField<"u64">;
  startS: ToField<"u64">;
  startG: ToField<"u64">;
  startEpoch: ToField<"u64">;
  startScale: ToField<"u64">;
  ctxEpoch: ToField<"u64">;
}

export type ContributorTokenReified<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> = Reified<ContributorToken<BUCK, T>, ContributorTokenFields<BUCK, T>>;

export class ContributorToken<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank::ContributorToken`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = ContributorToken.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank::ContributorToken<${PhantomToTypeStr<BUCK>}, ${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<BUCK>, PhantomToTypeStr<T>];
  readonly $isPhantom = ContributorToken.$isPhantom;

  readonly id: ToField<UID>;
  readonly depositAmount: ToField<"u64">;
  readonly startP: ToField<"u64">;
  readonly startS: ToField<"u64">;
  readonly startG: ToField<"u64">;
  readonly startEpoch: ToField<"u64">;
  readonly startScale: ToField<"u64">;
  readonly ctxEpoch: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<BUCK>, PhantomToTypeStr<T>],
    fields: ContributorTokenFields<BUCK, T>,
  ) {
    this.$fullTypeName = composeSuiType(
      ContributorToken.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank::ContributorToken<${PhantomToTypeStr<BUCK>}, ${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.depositAmount = fields.depositAmount;
    this.startP = fields.startP;
    this.startS = fields.startS;
    this.startG = fields.startG;
    this.startEpoch = fields.startEpoch;
    this.startScale = fields.startScale;
    this.ctxEpoch = fields.ctxEpoch;
  }

  static reified<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    BUCK: BUCK,
    T: T,
  ): ContributorTokenReified<
    ToPhantomTypeArgument<BUCK>,
    ToPhantomTypeArgument<T>
  > {
    return {
      typeName: ContributorToken.$typeName,
      fullTypeName: composeSuiType(
        ContributorToken.$typeName,
        ...[extractType(BUCK), extractType(T)],
      ) as `${typeof PKG_V1}::tank::ContributorToken<${PhantomToTypeStr<ToPhantomTypeArgument<BUCK>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(BUCK), extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<BUCK>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: ContributorToken.$isPhantom,
      reifiedTypeArgs: [BUCK, T],
      fromFields: (fields: Record<string, any>) =>
        ContributorToken.fromFields([BUCK, T], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ContributorToken.fromFieldsWithTypes([BUCK, T], item),
      fromBcs: (data: Uint8Array) => ContributorToken.fromBcs([BUCK, T], data),
      bcs: ContributorToken.bcs,
      fromJSONField: (field: any) =>
        ContributorToken.fromJSONField([BUCK, T], field),
      fromJSON: (json: Record<string, any>) =>
        ContributorToken.fromJSON([BUCK, T], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ContributorToken.fromSuiParsedData([BUCK, T], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ContributorToken.fromSuiObjectData([BUCK, T], content),
      fetch: async (client: SuiClient, id: string) =>
        ContributorToken.fetch(client, [BUCK, T], id),
      new: (
        fields: ContributorTokenFields<
          ToPhantomTypeArgument<BUCK>,
          ToPhantomTypeArgument<T>
        >,
      ) => {
        return new ContributorToken(
          [extractType(BUCK), extractType(T)],
          fields,
        );
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ContributorToken.reified;
  }

  static phantom<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    BUCK: BUCK,
    T: T,
  ): PhantomReified<
    ToTypeStr<
      ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>>
    >
  > {
    return phantom(ContributorToken.reified(BUCK, T));
  }
  static get p() {
    return ContributorToken.phantom;
  }

  static get bcs() {
    return bcs.struct("ContributorToken", {
      id: UID.bcs,
      deposit_amount: bcs.u64(),
      start_p: bcs.u64(),
      start_s: bcs.u64(),
      start_g: bcs.u64(),
      start_epoch: bcs.u64(),
      start_scale: bcs.u64(),
      ctx_epoch: bcs.u64(),
    });
  }

  static fromFields<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    fields: Record<string, any>,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return ContributorToken.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFields(UID.reified(), fields.id),
      depositAmount: decodeFromFields("u64", fields.deposit_amount),
      startP: decodeFromFields("u64", fields.start_p),
      startS: decodeFromFields("u64", fields.start_s),
      startG: decodeFromFields("u64", fields.start_g),
      startEpoch: decodeFromFields("u64", fields.start_epoch),
      startScale: decodeFromFields("u64", fields.start_scale),
      ctxEpoch: decodeFromFields("u64", fields.ctx_epoch),
    });
  }

  static fromFieldsWithTypes<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    item: FieldsWithTypes,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (!isContributorToken(item.type)) {
      throw new Error("not a ContributorToken type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return ContributorToken.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      depositAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.deposit_amount,
      ),
      startP: decodeFromFieldsWithTypes("u64", item.fields.start_p),
      startS: decodeFromFieldsWithTypes("u64", item.fields.start_s),
      startG: decodeFromFieldsWithTypes("u64", item.fields.start_g),
      startEpoch: decodeFromFieldsWithTypes("u64", item.fields.start_epoch),
      startScale: decodeFromFieldsWithTypes("u64", item.fields.start_scale),
      ctxEpoch: decodeFromFieldsWithTypes("u64", item.fields.ctx_epoch),
    });
  }

  static fromBcs<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    data: Uint8Array,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return ContributorToken.fromFields(
      typeArgs,
      ContributorToken.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      depositAmount: this.depositAmount.toString(),
      startP: this.startP.toString(),
      startS: this.startS.toString(),
      startG: this.startG.toString(),
      startEpoch: this.startEpoch.toString(),
      startScale: this.startScale.toString(),
      ctxEpoch: this.ctxEpoch.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    field: any,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return ContributorToken.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      depositAmount: decodeFromJSONField("u64", field.depositAmount),
      startP: decodeFromJSONField("u64", field.startP),
      startS: decodeFromJSONField("u64", field.startS),
      startG: decodeFromJSONField("u64", field.startG),
      startEpoch: decodeFromJSONField("u64", field.startEpoch),
      startScale: decodeFromJSONField("u64", field.startScale),
      ctxEpoch: decodeFromJSONField("u64", field.ctxEpoch),
    });
  }

  static fromJSON<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    json: Record<string, any>,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (json.$typeName !== ContributorToken.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ContributorToken.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return ContributorToken.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    content: SuiParsedData,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isContributorToken(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ContributorToken object`,
      );
    }
    return ContributorToken.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    data: SuiObjectData,
  ): ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isContributorToken(data.bcs.type)
      ) {
        throw new Error(`object at is not a ContributorToken object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      for (let i = 0; i < 2; i++) {
        const gotTypeArg = compressSuiType(gotTypeArgs[i]);
        const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
        if (gotTypeArg !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
          );
        }
      }

      return ContributorToken.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ContributorToken.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [BUCK, T],
    id: string,
  ): Promise<
    ContributorToken<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ContributorToken object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isContributorToken(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ContributorToken object`);
    }

    return ContributorToken.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== FlashReceipt =============================== */

export function isFlashReceipt(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::tank::FlashReceipt` + "<");
}

export interface FlashReceiptFields<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> {
  amount: ToField<"u64">;
  fee: ToField<"u64">;
}

export type FlashReceiptReified<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> = Reified<FlashReceipt<BUCK, T>, FlashReceiptFields<BUCK, T>>;

export class FlashReceipt<
  BUCK extends PhantomTypeArgument,
  T extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank::FlashReceipt`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = FlashReceipt.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank::FlashReceipt<${PhantomToTypeStr<BUCK>}, ${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<BUCK>, PhantomToTypeStr<T>];
  readonly $isPhantom = FlashReceipt.$isPhantom;

  readonly amount: ToField<"u64">;
  readonly fee: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<BUCK>, PhantomToTypeStr<T>],
    fields: FlashReceiptFields<BUCK, T>,
  ) {
    this.$fullTypeName = composeSuiType(
      FlashReceipt.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank::FlashReceipt<${PhantomToTypeStr<BUCK>}, ${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.amount = fields.amount;
    this.fee = fields.fee;
  }

  static reified<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    BUCK: BUCK,
    T: T,
  ): FlashReceiptReified<
    ToPhantomTypeArgument<BUCK>,
    ToPhantomTypeArgument<T>
  > {
    return {
      typeName: FlashReceipt.$typeName,
      fullTypeName: composeSuiType(
        FlashReceipt.$typeName,
        ...[extractType(BUCK), extractType(T)],
      ) as `${typeof PKG_V1}::tank::FlashReceipt<${PhantomToTypeStr<ToPhantomTypeArgument<BUCK>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(BUCK), extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<BUCK>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: FlashReceipt.$isPhantom,
      reifiedTypeArgs: [BUCK, T],
      fromFields: (fields: Record<string, any>) =>
        FlashReceipt.fromFields([BUCK, T], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FlashReceipt.fromFieldsWithTypes([BUCK, T], item),
      fromBcs: (data: Uint8Array) => FlashReceipt.fromBcs([BUCK, T], data),
      bcs: FlashReceipt.bcs,
      fromJSONField: (field: any) =>
        FlashReceipt.fromJSONField([BUCK, T], field),
      fromJSON: (json: Record<string, any>) =>
        FlashReceipt.fromJSON([BUCK, T], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FlashReceipt.fromSuiParsedData([BUCK, T], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FlashReceipt.fromSuiObjectData([BUCK, T], content),
      fetch: async (client: SuiClient, id: string) =>
        FlashReceipt.fetch(client, [BUCK, T], id),
      new: (
        fields: FlashReceiptFields<
          ToPhantomTypeArgument<BUCK>,
          ToPhantomTypeArgument<T>
        >,
      ) => {
        return new FlashReceipt([extractType(BUCK), extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FlashReceipt.reified;
  }

  static phantom<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    BUCK: BUCK,
    T: T,
  ): PhantomReified<
    ToTypeStr<
      FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>>
    >
  > {
    return phantom(FlashReceipt.reified(BUCK, T));
  }
  static get p() {
    return FlashReceipt.phantom;
  }

  static get bcs() {
    return bcs.struct("FlashReceipt", {
      amount: bcs.u64(),
      fee: bcs.u64(),
    });
  }

  static fromFields<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    fields: Record<string, any>,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return FlashReceipt.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromFields("u64", fields.amount),
      fee: decodeFromFields("u64", fields.fee),
    });
  }

  static fromFieldsWithTypes<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    item: FieldsWithTypes,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (!isFlashReceipt(item.type)) {
      throw new Error("not a FlashReceipt type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return FlashReceipt.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
      fee: decodeFromFieldsWithTypes("u64", item.fields.fee),
    });
  }

  static fromBcs<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    data: Uint8Array,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return FlashReceipt.fromFields(typeArgs, FlashReceipt.bcs.parse(data));
  }

  toJSONField() {
    return {
      amount: this.amount.toString(),
      fee: this.fee.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    field: any,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    return FlashReceipt.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromJSONField("u64", field.amount),
      fee: decodeFromJSONField("u64", field.fee),
    });
  }

  static fromJSON<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    json: Record<string, any>,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (json.$typeName !== FlashReceipt.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(FlashReceipt.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return FlashReceipt.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    content: SuiParsedData,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFlashReceipt(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FlashReceipt object`,
      );
    }
    return FlashReceipt.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [BUCK, T],
    data: SuiObjectData,
  ): FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isFlashReceipt(data.bcs.type)
      ) {
        throw new Error(`object at is not a FlashReceipt object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      for (let i = 0; i < 2; i++) {
        const gotTypeArg = compressSuiType(gotTypeArgs[i]);
        const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
        if (gotTypeArg !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
          );
        }
      }

      return FlashReceipt.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FlashReceipt.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    BUCK extends PhantomReified<PhantomTypeArgument>,
    T extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [BUCK, T],
    id: string,
  ): Promise<
    FlashReceipt<ToPhantomTypeArgument<BUCK>, ToPhantomTypeArgument<T>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching FlashReceipt object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isFlashReceipt(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a FlashReceipt object`);
    }

    return FlashReceipt.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== EpochAndScale =============================== */

export function isEpochAndScale(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::tank::EpochAndScale`;
}

export interface EpochAndScaleFields {
  epoch: ToField<"u64">;
  scale: ToField<"u64">;
}

export type EpochAndScaleReified = Reified<EpochAndScale, EpochAndScaleFields>;

export class EpochAndScale implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank::EpochAndScale`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = EpochAndScale.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank::EpochAndScale`;
  readonly $typeArgs: [];
  readonly $isPhantom = EpochAndScale.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly scale: ToField<"u64">;

  private constructor(typeArgs: [], fields: EpochAndScaleFields) {
    this.$fullTypeName = composeSuiType(
      EpochAndScale.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank::EpochAndScale`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.scale = fields.scale;
  }

  static reified(): EpochAndScaleReified {
    return {
      typeName: EpochAndScale.$typeName,
      fullTypeName: composeSuiType(
        EpochAndScale.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::tank::EpochAndScale`,
      typeArgs: [] as [],
      isPhantom: EpochAndScale.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        EpochAndScale.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        EpochAndScale.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => EpochAndScale.fromBcs(data),
      bcs: EpochAndScale.bcs,
      fromJSONField: (field: any) => EpochAndScale.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => EpochAndScale.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        EpochAndScale.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        EpochAndScale.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        EpochAndScale.fetch(client, id),
      new: (fields: EpochAndScaleFields) => {
        return new EpochAndScale([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return EpochAndScale.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<EpochAndScale>> {
    return phantom(EpochAndScale.reified());
  }
  static get p() {
    return EpochAndScale.phantom();
  }

  static get bcs() {
    return bcs.struct("EpochAndScale", {
      epoch: bcs.u64(),
      scale: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): EpochAndScale {
    return EpochAndScale.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      scale: decodeFromFields("u64", fields.scale),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): EpochAndScale {
    if (!isEpochAndScale(item.type)) {
      throw new Error("not a EpochAndScale type");
    }

    return EpochAndScale.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      scale: decodeFromFieldsWithTypes("u64", item.fields.scale),
    });
  }

  static fromBcs(data: Uint8Array): EpochAndScale {
    return EpochAndScale.fromFields(EpochAndScale.bcs.parse(data));
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      scale: this.scale.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): EpochAndScale {
    return EpochAndScale.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      scale: decodeFromJSONField("u64", field.scale),
    });
  }

  static fromJSON(json: Record<string, any>): EpochAndScale {
    if (json.$typeName !== EpochAndScale.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return EpochAndScale.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): EpochAndScale {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEpochAndScale(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a EpochAndScale object`,
      );
    }
    return EpochAndScale.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): EpochAndScale {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isEpochAndScale(data.bcs.type)
      ) {
        throw new Error(`object at is not a EpochAndScale object`);
      }

      return EpochAndScale.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return EpochAndScale.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<EpochAndScale> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching EpochAndScale object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isEpochAndScale(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a EpochAndScale object`);
    }

    return EpochAndScale.fromSuiObjectData(res.data);
  }
}

/* ============================== DigestKey =============================== */

export function isDigestKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V14}::tank::DigestKey`;
}

export interface DigestKeyFields {
  dummyField: ToField<"bool">;
}

export type DigestKeyReified = Reified<DigestKey, DigestKeyFields>;

export class DigestKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V14}::tank::DigestKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = DigestKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V14}::tank::DigestKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = DigestKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: DigestKeyFields) {
    this.$fullTypeName = composeSuiType(
      DigestKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V14}::tank::DigestKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): DigestKeyReified {
    return {
      typeName: DigestKey.$typeName,
      fullTypeName: composeSuiType(
        DigestKey.$typeName,
        ...[],
      ) as `${typeof PKG_V14}::tank::DigestKey`,
      typeArgs: [] as [],
      isPhantom: DigestKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => DigestKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DigestKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => DigestKey.fromBcs(data),
      bcs: DigestKey.bcs,
      fromJSONField: (field: any) => DigestKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => DigestKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DigestKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DigestKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        DigestKey.fetch(client, id),
      new: (fields: DigestKeyFields) => {
        return new DigestKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DigestKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<DigestKey>> {
    return phantom(DigestKey.reified());
  }
  static get p() {
    return DigestKey.phantom();
  }

  static get bcs() {
    return bcs.struct("DigestKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): DigestKey {
    return DigestKey.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): DigestKey {
    if (!isDigestKey(item.type)) {
      throw new Error("not a DigestKey type");
    }

    return DigestKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): DigestKey {
    return DigestKey.fromFields(DigestKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): DigestKey {
    return DigestKey.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): DigestKey {
    if (json.$typeName !== DigestKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return DigestKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): DigestKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDigestKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DigestKey object`,
      );
    }
    return DigestKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): DigestKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDigestKey(data.bcs.type)) {
        throw new Error(`object at is not a DigestKey object`);
      }

      return DigestKey.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DigestKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<DigestKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DigestKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDigestKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DigestKey object`);
    }

    return DigestKey.fromSuiObjectData(res.data);
  }
}

/* ============================== TANK =============================== */

export function isTANK(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::tank::TANK`;
}

export interface TANKFields {
  dummyField: ToField<"bool">;
}

export type TANKReified = Reified<TANK, TANKFields>;

export class TANK implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank::TANK`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = TANK.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank::TANK`;
  readonly $typeArgs: [];
  readonly $isPhantom = TANK.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: TANKFields) {
    this.$fullTypeName = composeSuiType(
      TANK.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank::TANK`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): TANKReified {
    return {
      typeName: TANK.$typeName,
      fullTypeName: composeSuiType(
        TANK.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::tank::TANK`,
      typeArgs: [] as [],
      isPhantom: TANK.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => TANK.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TANK.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => TANK.fromBcs(data),
      bcs: TANK.bcs,
      fromJSONField: (field: any) => TANK.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => TANK.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TANK.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TANK.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => TANK.fetch(client, id),
      new: (fields: TANKFields) => {
        return new TANK([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TANK.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<TANK>> {
    return phantom(TANK.reified());
  }
  static get p() {
    return TANK.phantom();
  }

  static get bcs() {
    return bcs.struct("TANK", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): TANK {
    return TANK.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): TANK {
    if (!isTANK(item.type)) {
      throw new Error("not a TANK type");
    }

    return TANK.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): TANK {
    return TANK.fromFields(TANK.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): TANK {
    return TANK.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): TANK {
    if (json.$typeName !== TANK.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return TANK.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): TANK {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTANK(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TANK object`,
      );
    }
    return TANK.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): TANK {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTANK(data.bcs.type)) {
        throw new Error(`object at is not a TANK object`);
      }

      return TANK.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TANK.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<TANK> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TANK object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTANK(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TANK object`);
    }

    return TANK.fromSuiObjectData(res.data);
  }
}
