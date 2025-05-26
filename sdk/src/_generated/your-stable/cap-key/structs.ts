import {
  type PhantomReified,
  type Reified,
  type StructClass,
  type ToField,
  type ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../_framework/reified";
import {
  type FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../_framework/util";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type {
  SuiClient} from "@mysten/sui/client";
import {
  type SuiObjectData,
  type SuiParsedData,
} from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== CapKey =============================== */

export function isCapKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::cap_key::CapKey`;
}

export interface CapKeyFields {
  dummyField: ToField<"bool">;
}

export type CapKeyReified = Reified<CapKey, CapKeyFields>;

export class CapKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::cap_key::CapKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CapKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::cap_key::CapKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = CapKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: CapKeyFields) {
    this.$fullTypeName = composeSuiType(
      CapKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::cap_key::CapKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): CapKeyReified {
    return {
      typeName: CapKey.$typeName,
      fullTypeName: composeSuiType(
        CapKey.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::cap_key::CapKey`,
      typeArgs: [] as [],
      isPhantom: CapKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => CapKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CapKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CapKey.fromBcs(data),
      bcs: CapKey.bcs,
      fromJSONField: (field: any) => CapKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CapKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CapKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CapKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => CapKey.fetch(client, id),
      new: (fields: CapKeyFields) => {
        return new CapKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CapKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CapKey>> {
    return phantom(CapKey.reified());
  }
  static get p() {
    return CapKey.phantom();
  }

  static get bcs() {
    return bcs.struct("CapKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): CapKey {
    return CapKey.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CapKey {
    if (!isCapKey(item.type)) {
      throw new Error("not a CapKey type");
    }

    return CapKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): CapKey {
    return CapKey.fromFields(CapKey.bcs.parse(data));
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

  static fromJSONField(field: any): CapKey {
    return CapKey.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): CapKey {
    if (json.$typeName !== CapKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CapKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CapKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCapKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CapKey object`,
      );
    }
    return CapKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CapKey {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCapKey(data.bcs.type)) {
        throw new Error(`object at is not a CapKey object`);
      }

      return CapKey.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CapKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CapKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CapKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCapKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CapKey object`);
    }

    return CapKey.fromSuiObjectData(res.data);
  }
}
