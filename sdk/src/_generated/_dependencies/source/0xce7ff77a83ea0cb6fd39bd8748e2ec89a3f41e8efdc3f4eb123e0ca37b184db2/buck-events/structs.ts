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
import { String } from "../../0x1/ascii/structs";
import { Option } from "../../0x1/option/structs";
import { ID } from "../../0x2/object/structs";
import { PKG_V1, PKG_V14, PKG_V3 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== BuckMinted =============================== */

export function isBuckMinted(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::buck_events::BuckMinted`;
}

export interface BuckMintedFields {
  collateralType: ToField<String>;
  buckAmount: ToField<"u64">;
}

export type BuckMintedReified = Reified<BuckMinted, BuckMintedFields>;

export class BuckMinted implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::buck_events::BuckMinted`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BuckMinted.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::buck_events::BuckMinted`;
  readonly $typeArgs: [];
  readonly $isPhantom = BuckMinted.$isPhantom;

  readonly collateralType: ToField<String>;
  readonly buckAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: BuckMintedFields) {
    this.$fullTypeName = composeSuiType(
      BuckMinted.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::buck_events::BuckMinted`;
    this.$typeArgs = typeArgs;

    this.collateralType = fields.collateralType;
    this.buckAmount = fields.buckAmount;
  }

  static reified(): BuckMintedReified {
    return {
      typeName: BuckMinted.$typeName,
      fullTypeName: composeSuiType(
        BuckMinted.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::buck_events::BuckMinted`,
      typeArgs: [] as [],
      isPhantom: BuckMinted.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        BuckMinted.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BuckMinted.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BuckMinted.fromBcs(data),
      bcs: BuckMinted.bcs,
      fromJSONField: (field: any) => BuckMinted.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BuckMinted.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BuckMinted.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BuckMinted.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BuckMinted.fetch(client, id),
      new: (fields: BuckMintedFields) => {
        return new BuckMinted([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BuckMinted.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BuckMinted>> {
    return phantom(BuckMinted.reified());
  }
  static get p() {
    return BuckMinted.phantom();
  }

  static get bcs() {
    return bcs.struct("BuckMinted", {
      collateral_type: String.bcs,
      buck_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): BuckMinted {
    return BuckMinted.reified().new({
      collateralType: decodeFromFields(
        String.reified(),
        fields.collateral_type,
      ),
      buckAmount: decodeFromFields("u64", fields.buck_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BuckMinted {
    if (!isBuckMinted(item.type)) {
      throw new Error("not a BuckMinted type");
    }

    return BuckMinted.reified().new({
      collateralType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.collateral_type,
      ),
      buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount),
    });
  }

  static fromBcs(data: Uint8Array): BuckMinted {
    return BuckMinted.fromFields(BuckMinted.bcs.parse(data));
  }

  toJSONField() {
    return {
      collateralType: this.collateralType,
      buckAmount: this.buckAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BuckMinted {
    return BuckMinted.reified().new({
      collateralType: decodeFromJSONField(
        String.reified(),
        field.collateralType,
      ),
      buckAmount: decodeFromJSONField("u64", field.buckAmount),
    });
  }

  static fromJSON(json: Record<string, any>): BuckMinted {
    if (json.$typeName !== BuckMinted.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BuckMinted.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BuckMinted {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBuckMinted(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BuckMinted object`,
      );
    }
    return BuckMinted.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BuckMinted {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBuckMinted(data.bcs.type)) {
        throw new Error(`object at is not a BuckMinted object`);
      }

      return BuckMinted.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BuckMinted.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BuckMinted> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BuckMinted object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBuckMinted(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BuckMinted object`);
    }

    return BuckMinted.fromSuiObjectData(res.data);
  }
}

/* ============================== BuckBurnt =============================== */

export function isBuckBurnt(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::buck_events::BuckBurnt`;
}

export interface BuckBurntFields {
  collateralType: ToField<String>;
  buckAmount: ToField<"u64">;
}

export type BuckBurntReified = Reified<BuckBurnt, BuckBurntFields>;

export class BuckBurnt implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::buck_events::BuckBurnt`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BuckBurnt.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::buck_events::BuckBurnt`;
  readonly $typeArgs: [];
  readonly $isPhantom = BuckBurnt.$isPhantom;

  readonly collateralType: ToField<String>;
  readonly buckAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: BuckBurntFields) {
    this.$fullTypeName = composeSuiType(
      BuckBurnt.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::buck_events::BuckBurnt`;
    this.$typeArgs = typeArgs;

    this.collateralType = fields.collateralType;
    this.buckAmount = fields.buckAmount;
  }

  static reified(): BuckBurntReified {
    return {
      typeName: BuckBurnt.$typeName,
      fullTypeName: composeSuiType(
        BuckBurnt.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::buck_events::BuckBurnt`,
      typeArgs: [] as [],
      isPhantom: BuckBurnt.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => BuckBurnt.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BuckBurnt.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BuckBurnt.fromBcs(data),
      bcs: BuckBurnt.bcs,
      fromJSONField: (field: any) => BuckBurnt.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BuckBurnt.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BuckBurnt.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BuckBurnt.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BuckBurnt.fetch(client, id),
      new: (fields: BuckBurntFields) => {
        return new BuckBurnt([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BuckBurnt.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BuckBurnt>> {
    return phantom(BuckBurnt.reified());
  }
  static get p() {
    return BuckBurnt.phantom();
  }

  static get bcs() {
    return bcs.struct("BuckBurnt", {
      collateral_type: String.bcs,
      buck_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): BuckBurnt {
    return BuckBurnt.reified().new({
      collateralType: decodeFromFields(
        String.reified(),
        fields.collateral_type,
      ),
      buckAmount: decodeFromFields("u64", fields.buck_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BuckBurnt {
    if (!isBuckBurnt(item.type)) {
      throw new Error("not a BuckBurnt type");
    }

    return BuckBurnt.reified().new({
      collateralType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.collateral_type,
      ),
      buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount),
    });
  }

  static fromBcs(data: Uint8Array): BuckBurnt {
    return BuckBurnt.fromFields(BuckBurnt.bcs.parse(data));
  }

  toJSONField() {
    return {
      collateralType: this.collateralType,
      buckAmount: this.buckAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BuckBurnt {
    return BuckBurnt.reified().new({
      collateralType: decodeFromJSONField(
        String.reified(),
        field.collateralType,
      ),
      buckAmount: decodeFromJSONField("u64", field.buckAmount),
    });
  }

  static fromJSON(json: Record<string, any>): BuckBurnt {
    if (json.$typeName !== BuckBurnt.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BuckBurnt.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BuckBurnt {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBuckBurnt(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BuckBurnt object`,
      );
    }
    return BuckBurnt.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BuckBurnt {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBuckBurnt(data.bcs.type)) {
        throw new Error(`object at is not a BuckBurnt object`);
      }

      return BuckBurnt.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BuckBurnt.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BuckBurnt> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BuckBurnt object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBuckBurnt(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BuckBurnt object`);
    }

    return BuckBurnt.fromSuiObjectData(res.data);
  }
}

/* ============================== CollateralIncreased =============================== */

export function isCollateralIncreased(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::buck_events::CollateralIncreased`;
}

export interface CollateralIncreasedFields {
  collateralType: ToField<String>;
  collateralAmount: ToField<"u64">;
}

export type CollateralIncreasedReified = Reified<
  CollateralIncreased,
  CollateralIncreasedFields
>;

export class CollateralIncreased implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::buck_events::CollateralIncreased`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CollateralIncreased.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::buck_events::CollateralIncreased`;
  readonly $typeArgs: [];
  readonly $isPhantom = CollateralIncreased.$isPhantom;

  readonly collateralType: ToField<String>;
  readonly collateralAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: CollateralIncreasedFields) {
    this.$fullTypeName = composeSuiType(
      CollateralIncreased.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::buck_events::CollateralIncreased`;
    this.$typeArgs = typeArgs;

    this.collateralType = fields.collateralType;
    this.collateralAmount = fields.collateralAmount;
  }

  static reified(): CollateralIncreasedReified {
    return {
      typeName: CollateralIncreased.$typeName,
      fullTypeName: composeSuiType(
        CollateralIncreased.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::buck_events::CollateralIncreased`,
      typeArgs: [] as [],
      isPhantom: CollateralIncreased.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        CollateralIncreased.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CollateralIncreased.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollateralIncreased.fromBcs(data),
      bcs: CollateralIncreased.bcs,
      fromJSONField: (field: any) => CollateralIncreased.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        CollateralIncreased.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CollateralIncreased.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CollateralIncreased.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        CollateralIncreased.fetch(client, id),
      new: (fields: CollateralIncreasedFields) => {
        return new CollateralIncreased([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CollateralIncreased.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CollateralIncreased>> {
    return phantom(CollateralIncreased.reified());
  }
  static get p() {
    return CollateralIncreased.phantom();
  }

  static get bcs() {
    return bcs.struct("CollateralIncreased", {
      collateral_type: String.bcs,
      collateral_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): CollateralIncreased {
    return CollateralIncreased.reified().new({
      collateralType: decodeFromFields(
        String.reified(),
        fields.collateral_type,
      ),
      collateralAmount: decodeFromFields("u64", fields.collateral_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollateralIncreased {
    if (!isCollateralIncreased(item.type)) {
      throw new Error("not a CollateralIncreased type");
    }

    return CollateralIncreased.reified().new({
      collateralType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.collateral_type,
      ),
      collateralAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.collateral_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): CollateralIncreased {
    return CollateralIncreased.fromFields(CollateralIncreased.bcs.parse(data));
  }

  toJSONField() {
    return {
      collateralType: this.collateralType,
      collateralAmount: this.collateralAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): CollateralIncreased {
    return CollateralIncreased.reified().new({
      collateralType: decodeFromJSONField(
        String.reified(),
        field.collateralType,
      ),
      collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
    });
  }

  static fromJSON(json: Record<string, any>): CollateralIncreased {
    if (json.$typeName !== CollateralIncreased.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CollateralIncreased.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CollateralIncreased {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCollateralIncreased(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CollateralIncreased object`,
      );
    }
    return CollateralIncreased.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CollateralIncreased {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCollateralIncreased(data.bcs.type)
      ) {
        throw new Error(`object at is not a CollateralIncreased object`);
      }

      return CollateralIncreased.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CollateralIncreased.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<CollateralIncreased> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CollateralIncreased object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCollateralIncreased(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CollateralIncreased object`);
    }

    return CollateralIncreased.fromSuiObjectData(res.data);
  }
}

/* ============================== CollateralDecreased =============================== */

export function isCollateralDecreased(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::buck_events::CollateralDecreased`;
}

export interface CollateralDecreasedFields {
  collateralType: ToField<String>;
  collateralAmount: ToField<"u64">;
}

export type CollateralDecreasedReified = Reified<
  CollateralDecreased,
  CollateralDecreasedFields
>;

export class CollateralDecreased implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::buck_events::CollateralDecreased`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CollateralDecreased.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::buck_events::CollateralDecreased`;
  readonly $typeArgs: [];
  readonly $isPhantom = CollateralDecreased.$isPhantom;

  readonly collateralType: ToField<String>;
  readonly collateralAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: CollateralDecreasedFields) {
    this.$fullTypeName = composeSuiType(
      CollateralDecreased.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::buck_events::CollateralDecreased`;
    this.$typeArgs = typeArgs;

    this.collateralType = fields.collateralType;
    this.collateralAmount = fields.collateralAmount;
  }

  static reified(): CollateralDecreasedReified {
    return {
      typeName: CollateralDecreased.$typeName,
      fullTypeName: composeSuiType(
        CollateralDecreased.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::buck_events::CollateralDecreased`,
      typeArgs: [] as [],
      isPhantom: CollateralDecreased.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        CollateralDecreased.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CollateralDecreased.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollateralDecreased.fromBcs(data),
      bcs: CollateralDecreased.bcs,
      fromJSONField: (field: any) => CollateralDecreased.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        CollateralDecreased.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CollateralDecreased.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CollateralDecreased.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        CollateralDecreased.fetch(client, id),
      new: (fields: CollateralDecreasedFields) => {
        return new CollateralDecreased([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CollateralDecreased.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CollateralDecreased>> {
    return phantom(CollateralDecreased.reified());
  }
  static get p() {
    return CollateralDecreased.phantom();
  }

  static get bcs() {
    return bcs.struct("CollateralDecreased", {
      collateral_type: String.bcs,
      collateral_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): CollateralDecreased {
    return CollateralDecreased.reified().new({
      collateralType: decodeFromFields(
        String.reified(),
        fields.collateral_type,
      ),
      collateralAmount: decodeFromFields("u64", fields.collateral_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollateralDecreased {
    if (!isCollateralDecreased(item.type)) {
      throw new Error("not a CollateralDecreased type");
    }

    return CollateralDecreased.reified().new({
      collateralType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.collateral_type,
      ),
      collateralAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.collateral_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): CollateralDecreased {
    return CollateralDecreased.fromFields(CollateralDecreased.bcs.parse(data));
  }

  toJSONField() {
    return {
      collateralType: this.collateralType,
      collateralAmount: this.collateralAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): CollateralDecreased {
    return CollateralDecreased.reified().new({
      collateralType: decodeFromJSONField(
        String.reified(),
        field.collateralType,
      ),
      collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
    });
  }

  static fromJSON(json: Record<string, any>): CollateralDecreased {
    if (json.$typeName !== CollateralDecreased.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CollateralDecreased.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CollateralDecreased {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCollateralDecreased(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CollateralDecreased object`,
      );
    }
    return CollateralDecreased.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CollateralDecreased {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCollateralDecreased(data.bcs.type)
      ) {
        throw new Error(`object at is not a CollateralDecreased object`);
      }

      return CollateralDecreased.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CollateralDecreased.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<CollateralDecreased> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CollateralDecreased object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCollateralDecreased(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CollateralDecreased object`);
    }

    return CollateralDecreased.fromSuiObjectData(res.data);
  }
}

/* ============================== FlashLoan =============================== */

export function isFlashLoan(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::buck_events::FlashLoan`;
}

export interface FlashLoanFields {
  coinType: ToField<String>;
  amount: ToField<"u64">;
}

export type FlashLoanReified = Reified<FlashLoan, FlashLoanFields>;

export class FlashLoan implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::buck_events::FlashLoan`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FlashLoan.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::buck_events::FlashLoan`;
  readonly $typeArgs: [];
  readonly $isPhantom = FlashLoan.$isPhantom;

  readonly coinType: ToField<String>;
  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: FlashLoanFields) {
    this.$fullTypeName = composeSuiType(
      FlashLoan.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::buck_events::FlashLoan`;
    this.$typeArgs = typeArgs;

    this.coinType = fields.coinType;
    this.amount = fields.amount;
  }

  static reified(): FlashLoanReified {
    return {
      typeName: FlashLoan.$typeName,
      fullTypeName: composeSuiType(
        FlashLoan.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::buck_events::FlashLoan`,
      typeArgs: [] as [],
      isPhantom: FlashLoan.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FlashLoan.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FlashLoan.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FlashLoan.fromBcs(data),
      bcs: FlashLoan.bcs,
      fromJSONField: (field: any) => FlashLoan.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FlashLoan.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FlashLoan.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FlashLoan.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        FlashLoan.fetch(client, id),
      new: (fields: FlashLoanFields) => {
        return new FlashLoan([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FlashLoan.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FlashLoan>> {
    return phantom(FlashLoan.reified());
  }
  static get p() {
    return FlashLoan.phantom();
  }

  static get bcs() {
    return bcs.struct("FlashLoan", {
      coin_type: String.bcs,
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): FlashLoan {
    return FlashLoan.reified().new({
      coinType: decodeFromFields(String.reified(), fields.coin_type),
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FlashLoan {
    if (!isFlashLoan(item.type)) {
      throw new Error("not a FlashLoan type");
    }

    return FlashLoan.reified().new({
      coinType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.coin_type,
      ),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): FlashLoan {
    return FlashLoan.fromFields(FlashLoan.bcs.parse(data));
  }

  toJSONField() {
    return {
      coinType: this.coinType,
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): FlashLoan {
    return FlashLoan.reified().new({
      coinType: decodeFromJSONField(String.reified(), field.coinType),
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): FlashLoan {
    if (json.$typeName !== FlashLoan.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FlashLoan.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FlashLoan {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFlashLoan(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FlashLoan object`,
      );
    }
    return FlashLoan.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FlashLoan {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFlashLoan(data.bcs.type)) {
        throw new Error(`object at is not a FlashLoan object`);
      }

      return FlashLoan.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FlashLoan.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FlashLoan> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching FlashLoan object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isFlashLoan(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a FlashLoan object`);
    }

    return FlashLoan.fromSuiObjectData(res.data);
  }
}

/* ============================== FlashMint =============================== */

export function isFlashMint(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V3}::buck_events::FlashMint`;
}

export interface FlashMintFields {
  configId: ToField<ID>;
  mintAmount: ToField<"u64">;
  feeAmount: ToField<"u64">;
}

export type FlashMintReified = Reified<FlashMint, FlashMintFields>;

export class FlashMint implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V3}::buck_events::FlashMint`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FlashMint.$typeName;
  readonly $fullTypeName: `${typeof PKG_V3}::buck_events::FlashMint`;
  readonly $typeArgs: [];
  readonly $isPhantom = FlashMint.$isPhantom;

  readonly configId: ToField<ID>;
  readonly mintAmount: ToField<"u64">;
  readonly feeAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: FlashMintFields) {
    this.$fullTypeName = composeSuiType(
      FlashMint.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V3}::buck_events::FlashMint`;
    this.$typeArgs = typeArgs;

    this.configId = fields.configId;
    this.mintAmount = fields.mintAmount;
    this.feeAmount = fields.feeAmount;
  }

  static reified(): FlashMintReified {
    return {
      typeName: FlashMint.$typeName,
      fullTypeName: composeSuiType(
        FlashMint.$typeName,
        ...[],
      ) as `${typeof PKG_V3}::buck_events::FlashMint`,
      typeArgs: [] as [],
      isPhantom: FlashMint.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FlashMint.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FlashMint.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FlashMint.fromBcs(data),
      bcs: FlashMint.bcs,
      fromJSONField: (field: any) => FlashMint.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FlashMint.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FlashMint.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FlashMint.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        FlashMint.fetch(client, id),
      new: (fields: FlashMintFields) => {
        return new FlashMint([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FlashMint.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FlashMint>> {
    return phantom(FlashMint.reified());
  }
  static get p() {
    return FlashMint.phantom();
  }

  static get bcs() {
    return bcs.struct("FlashMint", {
      config_id: ID.bcs,
      mint_amount: bcs.u64(),
      fee_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): FlashMint {
    return FlashMint.reified().new({
      configId: decodeFromFields(ID.reified(), fields.config_id),
      mintAmount: decodeFromFields("u64", fields.mint_amount),
      feeAmount: decodeFromFields("u64", fields.fee_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FlashMint {
    if (!isFlashMint(item.type)) {
      throw new Error("not a FlashMint type");
    }

    return FlashMint.reified().new({
      configId: decodeFromFieldsWithTypes(ID.reified(), item.fields.config_id),
      mintAmount: decodeFromFieldsWithTypes("u64", item.fields.mint_amount),
      feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
    });
  }

  static fromBcs(data: Uint8Array): FlashMint {
    return FlashMint.fromFields(FlashMint.bcs.parse(data));
  }

  toJSONField() {
    return {
      configId: this.configId,
      mintAmount: this.mintAmount.toString(),
      feeAmount: this.feeAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): FlashMint {
    return FlashMint.reified().new({
      configId: decodeFromJSONField(ID.reified(), field.configId),
      mintAmount: decodeFromJSONField("u64", field.mintAmount),
      feeAmount: decodeFromJSONField("u64", field.feeAmount),
    });
  }

  static fromJSON(json: Record<string, any>): FlashMint {
    if (json.$typeName !== FlashMint.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FlashMint.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FlashMint {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFlashMint(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FlashMint object`,
      );
    }
    return FlashMint.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FlashMint {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFlashMint(data.bcs.type)) {
        throw new Error(`object at is not a FlashMint object`);
      }

      return FlashMint.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FlashMint.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FlashMint> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching FlashMint object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isFlashMint(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a FlashMint object`);
    }

    return FlashMint.fromSuiObjectData(res.data);
  }
}

/* ============================== ParamUpdated =============================== */

export function isParamUpdated(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V3}::buck_events::ParamUpdated` + "<");
}

export interface ParamUpdatedFields<ComponentType extends PhantomTypeArgument> {
  paramName: ToField<String>;
  newValue: ToField<"u64">;
}

export type ParamUpdatedReified<ComponentType extends PhantomTypeArgument> =
  Reified<ParamUpdated<ComponentType>, ParamUpdatedFields<ComponentType>>;

export class ParamUpdated<ComponentType extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V3}::buck_events::ParamUpdated`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ParamUpdated.$typeName;
  readonly $fullTypeName: `${typeof PKG_V3}::buck_events::ParamUpdated<${PhantomToTypeStr<ComponentType>}>`;
  readonly $typeArgs: [PhantomToTypeStr<ComponentType>];
  readonly $isPhantom = ParamUpdated.$isPhantom;

  readonly paramName: ToField<String>;
  readonly newValue: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<ComponentType>],
    fields: ParamUpdatedFields<ComponentType>,
  ) {
    this.$fullTypeName = composeSuiType(
      ParamUpdated.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V3}::buck_events::ParamUpdated<${PhantomToTypeStr<ComponentType>}>`;
    this.$typeArgs = typeArgs;

    this.paramName = fields.paramName;
    this.newValue = fields.newValue;
  }

  static reified<ComponentType extends PhantomReified<PhantomTypeArgument>>(
    ComponentType: ComponentType,
  ): ParamUpdatedReified<ToPhantomTypeArgument<ComponentType>> {
    return {
      typeName: ParamUpdated.$typeName,
      fullTypeName: composeSuiType(
        ParamUpdated.$typeName,
        ...[extractType(ComponentType)],
      ) as `${typeof PKG_V3}::buck_events::ParamUpdated<${PhantomToTypeStr<ToPhantomTypeArgument<ComponentType>>}>`,
      typeArgs: [extractType(ComponentType)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<ComponentType>>,
      ],
      isPhantom: ParamUpdated.$isPhantom,
      reifiedTypeArgs: [ComponentType],
      fromFields: (fields: Record<string, any>) =>
        ParamUpdated.fromFields(ComponentType, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ParamUpdated.fromFieldsWithTypes(ComponentType, item),
      fromBcs: (data: Uint8Array) => ParamUpdated.fromBcs(ComponentType, data),
      bcs: ParamUpdated.bcs,
      fromJSONField: (field: any) =>
        ParamUpdated.fromJSONField(ComponentType, field),
      fromJSON: (json: Record<string, any>) =>
        ParamUpdated.fromJSON(ComponentType, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ParamUpdated.fromSuiParsedData(ComponentType, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ParamUpdated.fromSuiObjectData(ComponentType, content),
      fetch: async (client: SuiClient, id: string) =>
        ParamUpdated.fetch(client, ComponentType, id),
      new: (
        fields: ParamUpdatedFields<ToPhantomTypeArgument<ComponentType>>,
      ) => {
        return new ParamUpdated([extractType(ComponentType)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ParamUpdated.reified;
  }

  static phantom<ComponentType extends PhantomReified<PhantomTypeArgument>>(
    ComponentType: ComponentType,
  ): PhantomReified<
    ToTypeStr<ParamUpdated<ToPhantomTypeArgument<ComponentType>>>
  > {
    return phantom(ParamUpdated.reified(ComponentType));
  }
  static get p() {
    return ParamUpdated.phantom;
  }

  static get bcs() {
    return bcs.struct("ParamUpdated", {
      param_name: String.bcs,
      new_value: bcs.u64(),
    });
  }

  static fromFields<ComponentType extends PhantomReified<PhantomTypeArgument>>(
    typeArg: ComponentType,
    fields: Record<string, any>,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    return ParamUpdated.reified(typeArg).new({
      paramName: decodeFromFields(String.reified(), fields.param_name),
      newValue: decodeFromFields("u64", fields.new_value),
    });
  }

  static fromFieldsWithTypes<
    ComponentType extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArg: ComponentType,
    item: FieldsWithTypes,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    if (!isParamUpdated(item.type)) {
      throw new Error("not a ParamUpdated type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ParamUpdated.reified(typeArg).new({
      paramName: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.param_name,
      ),
      newValue: decodeFromFieldsWithTypes("u64", item.fields.new_value),
    });
  }

  static fromBcs<ComponentType extends PhantomReified<PhantomTypeArgument>>(
    typeArg: ComponentType,
    data: Uint8Array,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    return ParamUpdated.fromFields(typeArg, ParamUpdated.bcs.parse(data));
  }

  toJSONField() {
    return {
      paramName: this.paramName,
      newValue: this.newValue.toString(),
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
    ComponentType extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArg: ComponentType,
    field: any,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    return ParamUpdated.reified(typeArg).new({
      paramName: decodeFromJSONField(String.reified(), field.paramName),
      newValue: decodeFromJSONField("u64", field.newValue),
    });
  }

  static fromJSON<ComponentType extends PhantomReified<PhantomTypeArgument>>(
    typeArg: ComponentType,
    json: Record<string, any>,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    if (json.$typeName !== ParamUpdated.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ParamUpdated.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ParamUpdated.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<
    ComponentType extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArg: ComponentType,
    content: SuiParsedData,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isParamUpdated(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ParamUpdated object`,
      );
    }
    return ParamUpdated.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<
    ComponentType extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArg: ComponentType,
    data: SuiObjectData,
  ): ParamUpdated<ToPhantomTypeArgument<ComponentType>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isParamUpdated(data.bcs.type)
      ) {
        throw new Error(`object at is not a ParamUpdated object`);
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

      return ParamUpdated.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ParamUpdated.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<ComponentType extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: ComponentType,
    id: string,
  ): Promise<ParamUpdated<ToPhantomTypeArgument<ComponentType>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ParamUpdated object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isParamUpdated(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ParamUpdated object`);
    }

    return ParamUpdated.fromSuiObjectData(typeArg, res.data);
  }
}

/* ============================== Liquidation =============================== */

export function isLiquidation(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V14}::buck_events::Liquidation` + "<");
}

export interface LiquidationFields<T extends PhantomTypeArgument> {
  priceN: ToField<"u64">;
  priceM: ToField<"u64">;
  collAmount: ToField<"u64">;
  debtAmount: ToField<"u64">;
  tcr: ToField<Option<"u64">>;
  debtor: ToField<"address">;
}

export type LiquidationReified<T extends PhantomTypeArgument> = Reified<
  Liquidation<T>,
  LiquidationFields<T>
>;

export class Liquidation<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V14}::buck_events::Liquidation`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Liquidation.$typeName;
  readonly $fullTypeName: `${typeof PKG_V14}::buck_events::Liquidation<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = Liquidation.$isPhantom;

  readonly priceN: ToField<"u64">;
  readonly priceM: ToField<"u64">;
  readonly collAmount: ToField<"u64">;
  readonly debtAmount: ToField<"u64">;
  readonly tcr: ToField<Option<"u64">>;
  readonly debtor: ToField<"address">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: LiquidationFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      Liquidation.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V14}::buck_events::Liquidation<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.priceN = fields.priceN;
    this.priceM = fields.priceM;
    this.collAmount = fields.collAmount;
    this.debtAmount = fields.debtAmount;
    this.tcr = fields.tcr;
    this.debtor = fields.debtor;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): LiquidationReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: Liquidation.$typeName,
      fullTypeName: composeSuiType(
        Liquidation.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V14}::buck_events::Liquidation<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: Liquidation.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        Liquidation.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Liquidation.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Liquidation.fromBcs(T, data),
      bcs: Liquidation.bcs,
      fromJSONField: (field: any) => Liquidation.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Liquidation.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Liquidation.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Liquidation.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        Liquidation.fetch(client, T, id),
      new: (fields: LiquidationFields<ToPhantomTypeArgument<T>>) => {
        return new Liquidation([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Liquidation.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<Liquidation<ToPhantomTypeArgument<T>>>> {
    return phantom(Liquidation.reified(T));
  }
  static get p() {
    return Liquidation.phantom;
  }

  static get bcs() {
    return bcs.struct("Liquidation", {
      price_n: bcs.u64(),
      price_m: bcs.u64(),
      coll_amount: bcs.u64(),
      debt_amount: bcs.u64(),
      tcr: Option.bcs(bcs.u64()),
      debtor: bcs
        .bytes(32)
        .transform({
          input: (val: string) => fromHEX(val),
          output: (val: Uint8Array) => toHEX(val),
        }),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Liquidation<ToPhantomTypeArgument<T>> {
    return Liquidation.reified(typeArg).new({
      priceN: decodeFromFields("u64", fields.price_n),
      priceM: decodeFromFields("u64", fields.price_m),
      collAmount: decodeFromFields("u64", fields.coll_amount),
      debtAmount: decodeFromFields("u64", fields.debt_amount),
      tcr: decodeFromFields(Option.reified("u64"), fields.tcr),
      debtor: decodeFromFields("address", fields.debtor),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Liquidation<ToPhantomTypeArgument<T>> {
    if (!isLiquidation(item.type)) {
      throw new Error("not a Liquidation type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Liquidation.reified(typeArg).new({
      priceN: decodeFromFieldsWithTypes("u64", item.fields.price_n),
      priceM: decodeFromFieldsWithTypes("u64", item.fields.price_m),
      collAmount: decodeFromFieldsWithTypes("u64", item.fields.coll_amount),
      debtAmount: decodeFromFieldsWithTypes("u64", item.fields.debt_amount),
      tcr: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.tcr),
      debtor: decodeFromFieldsWithTypes("address", item.fields.debtor),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): Liquidation<ToPhantomTypeArgument<T>> {
    return Liquidation.fromFields(typeArg, Liquidation.bcs.parse(data));
  }

  toJSONField() {
    return {
      priceN: this.priceN.toString(),
      priceM: this.priceM.toString(),
      collAmount: this.collAmount.toString(),
      debtAmount: this.debtAmount.toString(),
      tcr: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.tcr),
      debtor: this.debtor,
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
  ): Liquidation<ToPhantomTypeArgument<T>> {
    return Liquidation.reified(typeArg).new({
      priceN: decodeFromJSONField("u64", field.priceN),
      priceM: decodeFromJSONField("u64", field.priceM),
      collAmount: decodeFromJSONField("u64", field.collAmount),
      debtAmount: decodeFromJSONField("u64", field.debtAmount),
      tcr: decodeFromJSONField(Option.reified("u64"), field.tcr),
      debtor: decodeFromJSONField("address", field.debtor),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): Liquidation<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== Liquidation.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Liquidation.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Liquidation.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): Liquidation<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLiquidation(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Liquidation object`,
      );
    }
    return Liquidation.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): Liquidation<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isLiquidation(data.bcs.type)) {
        throw new Error(`object at is not a Liquidation object`);
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

      return Liquidation.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Liquidation.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Liquidation<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Liquidation object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLiquidation(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Liquidation object`);
    }

    return Liquidation.fromSuiObjectData(typeArg, res.data);
  }
}
