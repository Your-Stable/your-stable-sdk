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
import { Balance } from "../../0x2/balance/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== VestingLock =============================== */

export function isVestingLock(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::vesting_lock::VestingLock` + "<");
}

export interface VestingLockFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  vault: ToField<Balance<T>>;
  startTime: ToField<"u64">;
  duration: ToField<"u64">;
  releasedAmount: ToField<"u64">;
}

export type VestingLockReified<T extends PhantomTypeArgument> = Reified<
  VestingLock<T>,
  VestingLockFields<T>
>;

export class VestingLock<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::vesting_lock::VestingLock`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = VestingLock.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::vesting_lock::VestingLock<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = VestingLock.$isPhantom;

  readonly id: ToField<UID>;
  readonly vault: ToField<Balance<T>>;
  readonly startTime: ToField<"u64">;
  readonly duration: ToField<"u64">;
  readonly releasedAmount: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: VestingLockFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      VestingLock.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::vesting_lock::VestingLock<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.vault = fields.vault;
    this.startTime = fields.startTime;
    this.duration = fields.duration;
    this.releasedAmount = fields.releasedAmount;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): VestingLockReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: VestingLock.$typeName,
      fullTypeName: composeSuiType(
        VestingLock.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V1}::vesting_lock::VestingLock<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: VestingLock.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        VestingLock.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        VestingLock.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => VestingLock.fromBcs(T, data),
      bcs: VestingLock.bcs,
      fromJSONField: (field: any) => VestingLock.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => VestingLock.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        VestingLock.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        VestingLock.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        VestingLock.fetch(client, T, id),
      new: (fields: VestingLockFields<ToPhantomTypeArgument<T>>) => {
        return new VestingLock([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VestingLock.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<VestingLock<ToPhantomTypeArgument<T>>>> {
    return phantom(VestingLock.reified(T));
  }
  static get p() {
    return VestingLock.phantom;
  }

  static get bcs() {
    return bcs.struct("VestingLock", {
      id: UID.bcs,
      vault: Balance.bcs,
      start_time: bcs.u64(),
      duration: bcs.u64(),
      released_amount: bcs.u64(),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    return VestingLock.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      vault: decodeFromFields(Balance.reified(typeArg), fields.vault),
      startTime: decodeFromFields("u64", fields.start_time),
      duration: decodeFromFields("u64", fields.duration),
      releasedAmount: decodeFromFields("u64", fields.released_amount),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    if (!isVestingLock(item.type)) {
      throw new Error("not a VestingLock type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return VestingLock.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      vault: decodeFromFieldsWithTypes(
        Balance.reified(typeArg),
        item.fields.vault,
      ),
      startTime: decodeFromFieldsWithTypes("u64", item.fields.start_time),
      duration: decodeFromFieldsWithTypes("u64", item.fields.duration),
      releasedAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.released_amount,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    return VestingLock.fromFields(typeArg, VestingLock.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      vault: this.vault.toJSONField(),
      startTime: this.startTime.toString(),
      duration: this.duration.toString(),
      releasedAmount: this.releasedAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    return VestingLock.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      vault: decodeFromJSONField(Balance.reified(typeArg), field.vault),
      startTime: decodeFromJSONField("u64", field.startTime),
      duration: decodeFromJSONField("u64", field.duration),
      releasedAmount: decodeFromJSONField("u64", field.releasedAmount),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== VestingLock.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(VestingLock.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return VestingLock.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVestingLock(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a VestingLock object`,
      );
    }
    return VestingLock.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): VestingLock<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isVestingLock(data.bcs.type)) {
        throw new Error(`object at is not a VestingLock object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return VestingLock.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VestingLock.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<VestingLock<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching VestingLock object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isVestingLock(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a VestingLock object`);
    }

    return VestingLock.fromSuiObjectData(typeArg, res.data);
  }
}
