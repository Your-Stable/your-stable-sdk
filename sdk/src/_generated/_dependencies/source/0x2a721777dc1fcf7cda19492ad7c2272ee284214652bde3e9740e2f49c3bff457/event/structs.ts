import type {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr} from "../../../../_framework/reified";
import {
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../../_framework/reified";
import type {
  FieldsWithTypes} from "../../../../_framework/util";
import {
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== DepositEvent =============================== */

export function isDepositEvent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::event::DepositEvent` + "<");
}

export interface DepositEventFields<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> {
  amount: ToField<"u64">;
  stMinted: ToField<"u64">;
}

export type DepositEventReified<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> = Reified<DepositEvent<T, ST>, DepositEventFields<T, ST>>;

export class DepositEvent<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::event::DepositEvent`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = DepositEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::event::DepositEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>];
  readonly $isPhantom = DepositEvent.$isPhantom;

  readonly amount: ToField<"u64">;
  readonly stMinted: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>],
    fields: DepositEventFields<T, ST>,
  ) {
    this.$fullTypeName = composeSuiType(
      DepositEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::event::DepositEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
    this.$typeArgs = typeArgs;

    this.amount = fields.amount;
    this.stMinted = fields.stMinted;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): DepositEventReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return {
      typeName: DepositEvent.$typeName,
      fullTypeName: composeSuiType(
        DepositEvent.$typeName,
        ...[extractType(T), extractType(ST)],
      ) as `${typeof PKG_V1}::event::DepositEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<ST>>}>`,
      typeArgs: [extractType(T), extractType(ST)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<ST>>,
      ],
      isPhantom: DepositEvent.$isPhantom,
      reifiedTypeArgs: [T, ST],
      fromFields: (fields: Record<string, any>) =>
        DepositEvent.fromFields([T, ST], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DepositEvent.fromFieldsWithTypes([T, ST], item),
      fromBcs: (data: Uint8Array) => DepositEvent.fromBcs([T, ST], data),
      bcs: DepositEvent.bcs,
      fromJSONField: (field: any) => DepositEvent.fromJSONField([T, ST], field),
      fromJSON: (json: Record<string, any>) =>
        DepositEvent.fromJSON([T, ST], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DepositEvent.fromSuiParsedData([T, ST], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DepositEvent.fromSuiObjectData([T, ST], content),
      fetch: async (client: SuiClient, id: string) =>
        DepositEvent.fetch(client, [T, ST], id),
      new: (
        fields: DepositEventFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<ST>
        >,
      ) => {
        return new DepositEvent([extractType(T), extractType(ST)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DepositEvent.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): PhantomReified<
    ToTypeStr<DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>>
  > {
    return phantom(DepositEvent.reified(T, ST));
  }
  static get p() {
    return DepositEvent.phantom;
  }

  static get bcs() {
    return bcs.struct("DepositEvent", {
      amount: bcs.u64(),
      st_minted: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    fields: Record<string, any>,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return DepositEvent.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromFields("u64", fields.amount),
      stMinted: decodeFromFields("u64", fields.st_minted),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    item: FieldsWithTypes,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (!isDepositEvent(item.type)) {
      throw new Error("not a DepositEvent type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return DepositEvent.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
      stMinted: decodeFromFieldsWithTypes("u64", item.fields.st_minted),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: Uint8Array,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return DepositEvent.fromFields(typeArgs, DepositEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      amount: this.amount.toString(),
      stMinted: this.stMinted.toString(),
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
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    field: any,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return DepositEvent.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromJSONField("u64", field.amount),
      stMinted: decodeFromJSONField("u64", field.stMinted),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    json: Record<string, any>,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (json.$typeName !== DepositEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(DepositEvent.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return DepositEvent.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    content: SuiParsedData,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDepositEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DepositEvent object`,
      );
    }
    return DepositEvent.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: SuiObjectData,
  ): DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isDepositEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a DepositEvent object`);
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

      return DepositEvent.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DepositEvent.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, ST],
    id: string,
  ): Promise<
    DepositEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DepositEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDepositEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a DepositEvent object`);
    }

    return DepositEvent.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== WithdrawEvent =============================== */

export function isWithdrawEvent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::event::WithdrawEvent` + "<");
}

export interface WithdrawEventFields<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> {
  amount: ToField<"u64">;
  stBurned: ToField<"u64">;
}

export type WithdrawEventReified<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> = Reified<WithdrawEvent<T, ST>, WithdrawEventFields<T, ST>>;

export class WithdrawEvent<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::event::WithdrawEvent`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = WithdrawEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::event::WithdrawEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>];
  readonly $isPhantom = WithdrawEvent.$isPhantom;

  readonly amount: ToField<"u64">;
  readonly stBurned: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>],
    fields: WithdrawEventFields<T, ST>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithdrawEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::event::WithdrawEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
    this.$typeArgs = typeArgs;

    this.amount = fields.amount;
    this.stBurned = fields.stBurned;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): WithdrawEventReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return {
      typeName: WithdrawEvent.$typeName,
      fullTypeName: composeSuiType(
        WithdrawEvent.$typeName,
        ...[extractType(T), extractType(ST)],
      ) as `${typeof PKG_V1}::event::WithdrawEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<ST>>}>`,
      typeArgs: [extractType(T), extractType(ST)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<ST>>,
      ],
      isPhantom: WithdrawEvent.$isPhantom,
      reifiedTypeArgs: [T, ST],
      fromFields: (fields: Record<string, any>) =>
        WithdrawEvent.fromFields([T, ST], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithdrawEvent.fromFieldsWithTypes([T, ST], item),
      fromBcs: (data: Uint8Array) => WithdrawEvent.fromBcs([T, ST], data),
      bcs: WithdrawEvent.bcs,
      fromJSONField: (field: any) =>
        WithdrawEvent.fromJSONField([T, ST], field),
      fromJSON: (json: Record<string, any>) =>
        WithdrawEvent.fromJSON([T, ST], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithdrawEvent.fromSuiParsedData([T, ST], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithdrawEvent.fromSuiObjectData([T, ST], content),
      fetch: async (client: SuiClient, id: string) =>
        WithdrawEvent.fetch(client, [T, ST], id),
      new: (
        fields: WithdrawEventFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<ST>
        >,
      ) => {
        return new WithdrawEvent([extractType(T), extractType(ST)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithdrawEvent.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): PhantomReified<
    ToTypeStr<
      WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
    >
  > {
    return phantom(WithdrawEvent.reified(T, ST));
  }
  static get p() {
    return WithdrawEvent.phantom;
  }

  static get bcs() {
    return bcs.struct("WithdrawEvent", {
      amount: bcs.u64(),
      st_burned: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    fields: Record<string, any>,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return WithdrawEvent.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromFields("u64", fields.amount),
      stBurned: decodeFromFields("u64", fields.st_burned),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    item: FieldsWithTypes,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (!isWithdrawEvent(item.type)) {
      throw new Error("not a WithdrawEvent type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return WithdrawEvent.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
      stBurned: decodeFromFieldsWithTypes("u64", item.fields.st_burned),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: Uint8Array,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return WithdrawEvent.fromFields(typeArgs, WithdrawEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      amount: this.amount.toString(),
      stBurned: this.stBurned.toString(),
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
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    field: any,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return WithdrawEvent.reified(typeArgs[0], typeArgs[1]).new({
      amount: decodeFromJSONField("u64", field.amount),
      stBurned: decodeFromJSONField("u64", field.stBurned),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    json: Record<string, any>,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (json.$typeName !== WithdrawEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WithdrawEvent.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return WithdrawEvent.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    content: SuiParsedData,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithdrawEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WithdrawEvent object`,
      );
    }
    return WithdrawEvent.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: SuiObjectData,
  ): WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isWithdrawEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a WithdrawEvent object`);
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

      return WithdrawEvent.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithdrawEvent.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, ST],
    id: string,
  ): Promise<
    WithdrawEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WithdrawEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithdrawEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WithdrawEvent object`);
    }

    return WithdrawEvent.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== StrategyProfitEvent =============================== */

export function isStrategyProfitEvent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::event::StrategyProfitEvent` + "<");
}

export interface StrategyProfitEventFields<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> {
  strategyId: ToField<ID>;
  profit: ToField<"u64">;
  feeAmtSt: ToField<"u64">;
}

export type StrategyProfitEventReified<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> = Reified<StrategyProfitEvent<T, ST>, StrategyProfitEventFields<T, ST>>;

export class StrategyProfitEvent<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::event::StrategyProfitEvent`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = StrategyProfitEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::event::StrategyProfitEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>];
  readonly $isPhantom = StrategyProfitEvent.$isPhantom;

  readonly strategyId: ToField<ID>;
  readonly profit: ToField<"u64">;
  readonly feeAmtSt: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>],
    fields: StrategyProfitEventFields<T, ST>,
  ) {
    this.$fullTypeName = composeSuiType(
      StrategyProfitEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::event::StrategyProfitEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
    this.$typeArgs = typeArgs;

    this.strategyId = fields.strategyId;
    this.profit = fields.profit;
    this.feeAmtSt = fields.feeAmtSt;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): StrategyProfitEventReified<
    ToPhantomTypeArgument<T>,
    ToPhantomTypeArgument<ST>
  > {
    return {
      typeName: StrategyProfitEvent.$typeName,
      fullTypeName: composeSuiType(
        StrategyProfitEvent.$typeName,
        ...[extractType(T), extractType(ST)],
      ) as `${typeof PKG_V1}::event::StrategyProfitEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<ST>>}>`,
      typeArgs: [extractType(T), extractType(ST)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<ST>>,
      ],
      isPhantom: StrategyProfitEvent.$isPhantom,
      reifiedTypeArgs: [T, ST],
      fromFields: (fields: Record<string, any>) =>
        StrategyProfitEvent.fromFields([T, ST], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StrategyProfitEvent.fromFieldsWithTypes([T, ST], item),
      fromBcs: (data: Uint8Array) => StrategyProfitEvent.fromBcs([T, ST], data),
      bcs: StrategyProfitEvent.bcs,
      fromJSONField: (field: any) =>
        StrategyProfitEvent.fromJSONField([T, ST], field),
      fromJSON: (json: Record<string, any>) =>
        StrategyProfitEvent.fromJSON([T, ST], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StrategyProfitEvent.fromSuiParsedData([T, ST], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StrategyProfitEvent.fromSuiObjectData([T, ST], content),
      fetch: async (client: SuiClient, id: string) =>
        StrategyProfitEvent.fetch(client, [T, ST], id),
      new: (
        fields: StrategyProfitEventFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<ST>
        >,
      ) => {
        return new StrategyProfitEvent(
          [extractType(T), extractType(ST)],
          fields,
        );
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StrategyProfitEvent.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): PhantomReified<
    ToTypeStr<
      StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
    >
  > {
    return phantom(StrategyProfitEvent.reified(T, ST));
  }
  static get p() {
    return StrategyProfitEvent.phantom;
  }

  static get bcs() {
    return bcs.struct("StrategyProfitEvent", {
      strategy_id: ID.bcs,
      profit: bcs.u64(),
      fee_amt_st: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    fields: Record<string, any>,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return StrategyProfitEvent.reified(typeArgs[0], typeArgs[1]).new({
      strategyId: decodeFromFields(ID.reified(), fields.strategy_id),
      profit: decodeFromFields("u64", fields.profit),
      feeAmtSt: decodeFromFields("u64", fields.fee_amt_st),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    item: FieldsWithTypes,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (!isStrategyProfitEvent(item.type)) {
      throw new Error("not a StrategyProfitEvent type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return StrategyProfitEvent.reified(typeArgs[0], typeArgs[1]).new({
      strategyId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.strategy_id,
      ),
      profit: decodeFromFieldsWithTypes("u64", item.fields.profit),
      feeAmtSt: decodeFromFieldsWithTypes("u64", item.fields.fee_amt_st),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: Uint8Array,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return StrategyProfitEvent.fromFields(
      typeArgs,
      StrategyProfitEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      strategyId: this.strategyId,
      profit: this.profit.toString(),
      feeAmtSt: this.feeAmtSt.toString(),
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
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    field: any,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return StrategyProfitEvent.reified(typeArgs[0], typeArgs[1]).new({
      strategyId: decodeFromJSONField(ID.reified(), field.strategyId),
      profit: decodeFromJSONField("u64", field.profit),
      feeAmtSt: decodeFromJSONField("u64", field.feeAmtSt),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    json: Record<string, any>,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (json.$typeName !== StrategyProfitEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(
        StrategyProfitEvent.$typeName,
        ...typeArgs.map(extractType),
      ),
      json.$typeArgs,
      typeArgs,
    );

    return StrategyProfitEvent.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    content: SuiParsedData,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStrategyProfitEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StrategyProfitEvent object`,
      );
    }
    return StrategyProfitEvent.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: SuiObjectData,
  ): StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isStrategyProfitEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a StrategyProfitEvent object`);
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

      return StrategyProfitEvent.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StrategyProfitEvent.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, ST],
    id: string,
  ): Promise<
    StrategyProfitEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StrategyProfitEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStrategyProfitEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a StrategyProfitEvent object`);
    }

    return StrategyProfitEvent.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== StrategyLossEvent =============================== */

export function isStrategyLossEvent(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::event::StrategyLossEvent` + "<");
}

export interface StrategyLossEventFields<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> {
  strategyId: ToField<ID>;
  toWithdraw: ToField<"u64">;
  withdrawn: ToField<"u64">;
}

export type StrategyLossEventReified<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> = Reified<StrategyLossEvent<T, ST>, StrategyLossEventFields<T, ST>>;

export class StrategyLossEvent<
  T extends PhantomTypeArgument,
  ST extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::event::StrategyLossEvent`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = StrategyLossEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::event::StrategyLossEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>];
  readonly $isPhantom = StrategyLossEvent.$isPhantom;

  readonly strategyId: ToField<ID>;
  readonly toWithdraw: ToField<"u64">;
  readonly withdrawn: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<ST>],
    fields: StrategyLossEventFields<T, ST>,
  ) {
    this.$fullTypeName = composeSuiType(
      StrategyLossEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::event::StrategyLossEvent<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<ST>}>`;
    this.$typeArgs = typeArgs;

    this.strategyId = fields.strategyId;
    this.toWithdraw = fields.toWithdraw;
    this.withdrawn = fields.withdrawn;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): StrategyLossEventReified<
    ToPhantomTypeArgument<T>,
    ToPhantomTypeArgument<ST>
  > {
    return {
      typeName: StrategyLossEvent.$typeName,
      fullTypeName: composeSuiType(
        StrategyLossEvent.$typeName,
        ...[extractType(T), extractType(ST)],
      ) as `${typeof PKG_V1}::event::StrategyLossEvent<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<ST>>}>`,
      typeArgs: [extractType(T), extractType(ST)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<ST>>,
      ],
      isPhantom: StrategyLossEvent.$isPhantom,
      reifiedTypeArgs: [T, ST],
      fromFields: (fields: Record<string, any>) =>
        StrategyLossEvent.fromFields([T, ST], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StrategyLossEvent.fromFieldsWithTypes([T, ST], item),
      fromBcs: (data: Uint8Array) => StrategyLossEvent.fromBcs([T, ST], data),
      bcs: StrategyLossEvent.bcs,
      fromJSONField: (field: any) =>
        StrategyLossEvent.fromJSONField([T, ST], field),
      fromJSON: (json: Record<string, any>) =>
        StrategyLossEvent.fromJSON([T, ST], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StrategyLossEvent.fromSuiParsedData([T, ST], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StrategyLossEvent.fromSuiObjectData([T, ST], content),
      fetch: async (client: SuiClient, id: string) =>
        StrategyLossEvent.fetch(client, [T, ST], id),
      new: (
        fields: StrategyLossEventFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<ST>
        >,
      ) => {
        return new StrategyLossEvent([extractType(T), extractType(ST)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StrategyLossEvent.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    ST: ST,
  ): PhantomReified<
    ToTypeStr<
      StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
    >
  > {
    return phantom(StrategyLossEvent.reified(T, ST));
  }
  static get p() {
    return StrategyLossEvent.phantom;
  }

  static get bcs() {
    return bcs.struct("StrategyLossEvent", {
      strategy_id: ID.bcs,
      to_withdraw: bcs.u64(),
      withdrawn: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    fields: Record<string, any>,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return StrategyLossEvent.reified(typeArgs[0], typeArgs[1]).new({
      strategyId: decodeFromFields(ID.reified(), fields.strategy_id),
      toWithdraw: decodeFromFields("u64", fields.to_withdraw),
      withdrawn: decodeFromFields("u64", fields.withdrawn),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    item: FieldsWithTypes,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (!isStrategyLossEvent(item.type)) {
      throw new Error("not a StrategyLossEvent type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return StrategyLossEvent.reified(typeArgs[0], typeArgs[1]).new({
      strategyId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.strategy_id,
      ),
      toWithdraw: decodeFromFieldsWithTypes("u64", item.fields.to_withdraw),
      withdrawn: decodeFromFieldsWithTypes("u64", item.fields.withdrawn),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: Uint8Array,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return StrategyLossEvent.fromFields(
      typeArgs,
      StrategyLossEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      strategyId: this.strategyId,
      toWithdraw: this.toWithdraw.toString(),
      withdrawn: this.withdrawn.toString(),
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
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    field: any,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    return StrategyLossEvent.reified(typeArgs[0], typeArgs[1]).new({
      strategyId: decodeFromJSONField(ID.reified(), field.strategyId),
      toWithdraw: decodeFromJSONField("u64", field.toWithdraw),
      withdrawn: decodeFromJSONField("u64", field.withdrawn),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    json: Record<string, any>,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (json.$typeName !== StrategyLossEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(StrategyLossEvent.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return StrategyLossEvent.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    content: SuiParsedData,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStrategyLossEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StrategyLossEvent object`,
      );
    }
    return StrategyLossEvent.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, ST],
    data: SuiObjectData,
  ): StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isStrategyLossEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a StrategyLossEvent object`);
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

      return StrategyLossEvent.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StrategyLossEvent.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    ST extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, ST],
    id: string,
  ): Promise<
    StrategyLossEvent<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<ST>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StrategyLossEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStrategyLossEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a StrategyLossEvent object`);
    }

    return StrategyLossEvent.fromSuiObjectData(typeArgs, res.data);
  }
}
