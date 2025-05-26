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
  fieldToJSON,
  phantom,
} from "../../../../_framework/reified";
import type {
  FieldsWithTypes} from "../../../../_framework/util";
import {
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../_framework/util";
import { Option } from "../../0x1/option/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V4 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== STRAP =============================== */

export function isSTRAP(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V4}::strap::STRAP`;
}

export interface STRAPFields {
  dummyField: ToField<"bool">;
}

export type STRAPReified = Reified<STRAP, STRAPFields>;

export class STRAP implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V4}::strap::STRAP`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = STRAP.$typeName;
  readonly $fullTypeName: `${typeof PKG_V4}::strap::STRAP`;
  readonly $typeArgs: [];
  readonly $isPhantom = STRAP.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: STRAPFields) {
    this.$fullTypeName = composeSuiType(
      STRAP.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V4}::strap::STRAP`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): STRAPReified {
    return {
      typeName: STRAP.$typeName,
      fullTypeName: composeSuiType(
        STRAP.$typeName,
        ...[],
      ) as `${typeof PKG_V4}::strap::STRAP`,
      typeArgs: [] as [],
      isPhantom: STRAP.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => STRAP.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        STRAP.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => STRAP.fromBcs(data),
      bcs: STRAP.bcs,
      fromJSONField: (field: any) => STRAP.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => STRAP.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        STRAP.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        STRAP.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => STRAP.fetch(client, id),
      new: (fields: STRAPFields) => {
        return new STRAP([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return STRAP.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<STRAP>> {
    return phantom(STRAP.reified());
  }
  static get p() {
    return STRAP.phantom();
  }

  static get bcs() {
    return bcs.struct("STRAP", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): STRAP {
    return STRAP.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): STRAP {
    if (!isSTRAP(item.type)) {
      throw new Error("not a STRAP type");
    }

    return STRAP.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): STRAP {
    return STRAP.fromFields(STRAP.bcs.parse(data));
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

  static fromJSONField(field: any): STRAP {
    return STRAP.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): STRAP {
    if (json.$typeName !== STRAP.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return STRAP.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): STRAP {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSTRAP(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a STRAP object`,
      );
    }
    return STRAP.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): STRAP {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSTRAP(data.bcs.type)) {
        throw new Error(`object at is not a STRAP object`);
      }

      return STRAP.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return STRAP.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<STRAP> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching STRAP object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSTRAP(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a STRAP object`);
    }

    return STRAP.fromSuiObjectData(res.data);
  }
}

/* ============================== BottleStrap =============================== */

export function isBottleStrap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V4}::strap::BottleStrap` + "<");
}

export interface BottleStrapFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  feeRate: ToField<Option<"u64">>;
}

export type BottleStrapReified<T extends PhantomTypeArgument> = Reified<
  BottleStrap<T>,
  BottleStrapFields<T>
>;

export class BottleStrap<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V4}::strap::BottleStrap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = BottleStrap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V4}::strap::BottleStrap<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = BottleStrap.$isPhantom;

  readonly id: ToField<UID>;
  readonly feeRate: ToField<Option<"u64">>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: BottleStrapFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      BottleStrap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V4}::strap::BottleStrap<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.feeRate = fields.feeRate;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): BottleStrapReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: BottleStrap.$typeName,
      fullTypeName: composeSuiType(
        BottleStrap.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V4}::strap::BottleStrap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: BottleStrap.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        BottleStrap.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BottleStrap.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => BottleStrap.fromBcs(T, data),
      bcs: BottleStrap.bcs,
      fromJSONField: (field: any) => BottleStrap.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => BottleStrap.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BottleStrap.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BottleStrap.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        BottleStrap.fetch(client, T, id),
      new: (fields: BottleStrapFields<ToPhantomTypeArgument<T>>) => {
        return new BottleStrap([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BottleStrap.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<BottleStrap<ToPhantomTypeArgument<T>>>> {
    return phantom(BottleStrap.reified(T));
  }
  static get p() {
    return BottleStrap.phantom;
  }

  static get bcs() {
    return bcs.struct("BottleStrap", {
      id: UID.bcs,
      fee_rate: Option.bcs(bcs.u64()),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    return BottleStrap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      feeRate: decodeFromFields(Option.reified("u64"), fields.fee_rate),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    if (!isBottleStrap(item.type)) {
      throw new Error("not a BottleStrap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return BottleStrap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      feeRate: decodeFromFieldsWithTypes(
        Option.reified("u64"),
        item.fields.fee_rate,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    return BottleStrap.fromFields(typeArg, BottleStrap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      feeRate: fieldToJSON<Option<"u64">>(
        `${Option.$typeName}<u64>`,
        this.feeRate,
      ),
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
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    return BottleStrap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      feeRate: decodeFromJSONField(Option.reified("u64"), field.feeRate),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== BottleStrap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(BottleStrap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return BottleStrap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBottleStrap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BottleStrap object`,
      );
    }
    return BottleStrap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): BottleStrap<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBottleStrap(data.bcs.type)) {
        throw new Error(`object at is not a BottleStrap object`);
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

      return BottleStrap.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BottleStrap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<BottleStrap<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BottleStrap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBottleStrap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BottleStrap object`);
    }

    return BottleStrap.fromSuiObjectData(typeArg, res.data);
  }
}
