import type {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr} from "../../../../_framework/reified";
import {
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../_framework/reified";
import type {
  FieldsWithTypes} from "../../../../_framework/util";
import {
  composeSuiType,
  compressSuiType,
} from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { PKG_V4 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== InterestTable =============================== */

export function isInterestTable(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V4}::interest::InterestTable`;
}

export interface InterestTableFields {
  id: ToField<UID>;
  interestRate: ToField<"u256">;
  activeInterestIndex: ToField<"u256">;
  lastActiveIndexUpdate: ToField<"u64">;
  interestPayable: ToField<"u256">;
}

export type InterestTableReified = Reified<InterestTable, InterestTableFields>;

export class InterestTable implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V4}::interest::InterestTable`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = InterestTable.$typeName;
  readonly $fullTypeName: `${typeof PKG_V4}::interest::InterestTable`;
  readonly $typeArgs: [];
  readonly $isPhantom = InterestTable.$isPhantom;

  readonly id: ToField<UID>;
  readonly interestRate: ToField<"u256">;
  readonly activeInterestIndex: ToField<"u256">;
  readonly lastActiveIndexUpdate: ToField<"u64">;
  readonly interestPayable: ToField<"u256">;

  private constructor(typeArgs: [], fields: InterestTableFields) {
    this.$fullTypeName = composeSuiType(
      InterestTable.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V4}::interest::InterestTable`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.interestRate = fields.interestRate;
    this.activeInterestIndex = fields.activeInterestIndex;
    this.lastActiveIndexUpdate = fields.lastActiveIndexUpdate;
    this.interestPayable = fields.interestPayable;
  }

  static reified(): InterestTableReified {
    return {
      typeName: InterestTable.$typeName,
      fullTypeName: composeSuiType(
        InterestTable.$typeName,
        ...[],
      ) as `${typeof PKG_V4}::interest::InterestTable`,
      typeArgs: [] as [],
      isPhantom: InterestTable.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        InterestTable.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        InterestTable.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => InterestTable.fromBcs(data),
      bcs: InterestTable.bcs,
      fromJSONField: (field: any) => InterestTable.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => InterestTable.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        InterestTable.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        InterestTable.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        InterestTable.fetch(client, id),
      new: (fields: InterestTableFields) => {
        return new InterestTable([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return InterestTable.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<InterestTable>> {
    return phantom(InterestTable.reified());
  }
  static get p() {
    return InterestTable.phantom();
  }

  static get bcs() {
    return bcs.struct("InterestTable", {
      id: UID.bcs,
      interest_rate: bcs.u256(),
      active_interest_index: bcs.u256(),
      last_active_index_update: bcs.u64(),
      interest_payable: bcs.u256(),
    });
  }

  static fromFields(fields: Record<string, any>): InterestTable {
    return InterestTable.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      interestRate: decodeFromFields("u256", fields.interest_rate),
      activeInterestIndex: decodeFromFields(
        "u256",
        fields.active_interest_index,
      ),
      lastActiveIndexUpdate: decodeFromFields(
        "u64",
        fields.last_active_index_update,
      ),
      interestPayable: decodeFromFields("u256", fields.interest_payable),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): InterestTable {
    if (!isInterestTable(item.type)) {
      throw new Error("not a InterestTable type");
    }

    return InterestTable.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      interestRate: decodeFromFieldsWithTypes(
        "u256",
        item.fields.interest_rate,
      ),
      activeInterestIndex: decodeFromFieldsWithTypes(
        "u256",
        item.fields.active_interest_index,
      ),
      lastActiveIndexUpdate: decodeFromFieldsWithTypes(
        "u64",
        item.fields.last_active_index_update,
      ),
      interestPayable: decodeFromFieldsWithTypes(
        "u256",
        item.fields.interest_payable,
      ),
    });
  }

  static fromBcs(data: Uint8Array): InterestTable {
    return InterestTable.fromFields(InterestTable.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      interestRate: this.interestRate.toString(),
      activeInterestIndex: this.activeInterestIndex.toString(),
      lastActiveIndexUpdate: this.lastActiveIndexUpdate.toString(),
      interestPayable: this.interestPayable.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): InterestTable {
    return InterestTable.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      interestRate: decodeFromJSONField("u256", field.interestRate),
      activeInterestIndex: decodeFromJSONField(
        "u256",
        field.activeInterestIndex,
      ),
      lastActiveIndexUpdate: decodeFromJSONField(
        "u64",
        field.lastActiveIndexUpdate,
      ),
      interestPayable: decodeFromJSONField("u256", field.interestPayable),
    });
  }

  static fromJSON(json: Record<string, any>): InterestTable {
    if (json.$typeName !== InterestTable.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return InterestTable.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): InterestTable {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isInterestTable(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a InterestTable object`,
      );
    }
    return InterestTable.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): InterestTable {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isInterestTable(data.bcs.type)
      ) {
        throw new Error(`object at is not a InterestTable object`);
      }

      return InterestTable.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return InterestTable.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<InterestTable> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching InterestTable object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isInterestTable(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a InterestTable object`);
    }

    return InterestTable.fromSuiObjectData(res.data);
  }
}

/* ============================== BottleInterestIndex =============================== */

export function isBottleInterestIndex(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V4}::interest::BottleInterestIndex`;
}

export interface BottleInterestIndexFields {
  id: ToField<UID>;
  activeInterestIndex: ToField<"u256">;
}

export type BottleInterestIndexReified = Reified<
  BottleInterestIndex,
  BottleInterestIndexFields
>;

export class BottleInterestIndex implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V4}::interest::BottleInterestIndex`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BottleInterestIndex.$typeName;
  readonly $fullTypeName: `${typeof PKG_V4}::interest::BottleInterestIndex`;
  readonly $typeArgs: [];
  readonly $isPhantom = BottleInterestIndex.$isPhantom;

  readonly id: ToField<UID>;
  readonly activeInterestIndex: ToField<"u256">;

  private constructor(typeArgs: [], fields: BottleInterestIndexFields) {
    this.$fullTypeName = composeSuiType(
      BottleInterestIndex.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V4}::interest::BottleInterestIndex`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.activeInterestIndex = fields.activeInterestIndex;
  }

  static reified(): BottleInterestIndexReified {
    return {
      typeName: BottleInterestIndex.$typeName,
      fullTypeName: composeSuiType(
        BottleInterestIndex.$typeName,
        ...[],
      ) as `${typeof PKG_V4}::interest::BottleInterestIndex`,
      typeArgs: [] as [],
      isPhantom: BottleInterestIndex.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        BottleInterestIndex.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BottleInterestIndex.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BottleInterestIndex.fromBcs(data),
      bcs: BottleInterestIndex.bcs,
      fromJSONField: (field: any) => BottleInterestIndex.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        BottleInterestIndex.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BottleInterestIndex.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BottleInterestIndex.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BottleInterestIndex.fetch(client, id),
      new: (fields: BottleInterestIndexFields) => {
        return new BottleInterestIndex([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BottleInterestIndex.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BottleInterestIndex>> {
    return phantom(BottleInterestIndex.reified());
  }
  static get p() {
    return BottleInterestIndex.phantom();
  }

  static get bcs() {
    return bcs.struct("BottleInterestIndex", {
      id: UID.bcs,
      active_interest_index: bcs.u256(),
    });
  }

  static fromFields(fields: Record<string, any>): BottleInterestIndex {
    return BottleInterestIndex.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      activeInterestIndex: decodeFromFields(
        "u256",
        fields.active_interest_index,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BottleInterestIndex {
    if (!isBottleInterestIndex(item.type)) {
      throw new Error("not a BottleInterestIndex type");
    }

    return BottleInterestIndex.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      activeInterestIndex: decodeFromFieldsWithTypes(
        "u256",
        item.fields.active_interest_index,
      ),
    });
  }

  static fromBcs(data: Uint8Array): BottleInterestIndex {
    return BottleInterestIndex.fromFields(BottleInterestIndex.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      activeInterestIndex: this.activeInterestIndex.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BottleInterestIndex {
    return BottleInterestIndex.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      activeInterestIndex: decodeFromJSONField(
        "u256",
        field.activeInterestIndex,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): BottleInterestIndex {
    if (json.$typeName !== BottleInterestIndex.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BottleInterestIndex.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BottleInterestIndex {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBottleInterestIndex(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BottleInterestIndex object`,
      );
    }
    return BottleInterestIndex.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BottleInterestIndex {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isBottleInterestIndex(data.bcs.type)
      ) {
        throw new Error(`object at is not a BottleInterestIndex object`);
      }

      return BottleInterestIndex.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BottleInterestIndex.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<BottleInterestIndex> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BottleInterestIndex object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBottleInterestIndex(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BottleInterestIndex object`);
    }

    return BottleInterestIndex.fromSuiObjectData(res.data);
  }
}
