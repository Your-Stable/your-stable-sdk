import * as reified from "../../../../_framework/reified";
import type {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom
} from "../../../../_framework/reified";
import type {
  FieldsWithTypes} from "../../../../_framework/util";
import {
  composeSuiType,
  compressSuiType,
} from "../../../../_framework/util";
import { Balance, Supply } from "../../0x2/balance/structs";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== BKT =============================== */

export function isBKT(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::bkt::BKT`;
}

export interface BKTFields {
  dummyField: ToField<"bool">;
}

export type BKTReified = Reified<BKT, BKTFields>;

export class BKT implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::bkt::BKT`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BKT.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::bkt::BKT`;
  readonly $typeArgs: [];
  readonly $isPhantom = BKT.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: BKTFields) {
    this.$fullTypeName = composeSuiType(
      BKT.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::bkt::BKT`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): BKTReified {
    return {
      typeName: BKT.$typeName,
      fullTypeName: composeSuiType(
        BKT.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::bkt::BKT`,
      typeArgs: [] as [],
      isPhantom: BKT.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => BKT.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BKT.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BKT.fromBcs(data),
      bcs: BKT.bcs,
      fromJSONField: (field: any) => BKT.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BKT.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BKT.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BKT.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => BKT.fetch(client, id),
      new: (fields: BKTFields) => {
        return new BKT([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BKT.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BKT>> {
    return phantom(BKT.reified());
  }
  static get p() {
    return BKT.phantom();
  }

  static get bcs() {
    return bcs.struct("BKT", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): BKT {
    return BKT.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BKT {
    if (!isBKT(item.type)) {
      throw new Error("not a BKT type");
    }

    return BKT.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): BKT {
    return BKT.fromFields(BKT.bcs.parse(data));
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

  static fromJSONField(field: any): BKT {
    return BKT.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): BKT {
    if (json.$typeName !== BKT.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BKT.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BKT {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBKT(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BKT object`,
      );
    }
    return BKT.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BKT {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBKT(data.bcs.type)) {
        throw new Error(`object at is not a BKT object`);
      }

      return BKT.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BKT.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BKT> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BKT object at id ${id}: ${res.error.code}`,
      );
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isBKT(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a BKT object`);
    }

    return BKT.fromSuiObjectData(res.data);
  }
}

/* ============================== BktTreasury =============================== */

export function isBktTreasury(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::bkt::BktTreasury`;
}

export interface BktTreasuryFields {
  id: ToField<UID>;
  ecoPart: ToField<Balance<ToPhantom<BKT>>>;
  bktSupply: ToField<Supply<ToPhantom<BKT>>>;
}

export type BktTreasuryReified = Reified<BktTreasury, BktTreasuryFields>;

export class BktTreasury implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::bkt::BktTreasury`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BktTreasury.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::bkt::BktTreasury`;
  readonly $typeArgs: [];
  readonly $isPhantom = BktTreasury.$isPhantom;

  readonly id: ToField<UID>;
  readonly ecoPart: ToField<Balance<ToPhantom<BKT>>>;
  readonly bktSupply: ToField<Supply<ToPhantom<BKT>>>;

  private constructor(typeArgs: [], fields: BktTreasuryFields) {
    this.$fullTypeName = composeSuiType(
      BktTreasury.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::bkt::BktTreasury`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.ecoPart = fields.ecoPart;
    this.bktSupply = fields.bktSupply;
  }

  static reified(): BktTreasuryReified {
    return {
      typeName: BktTreasury.$typeName,
      fullTypeName: composeSuiType(
        BktTreasury.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::bkt::BktTreasury`,
      typeArgs: [] as [],
      isPhantom: BktTreasury.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        BktTreasury.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BktTreasury.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BktTreasury.fromBcs(data),
      bcs: BktTreasury.bcs,
      fromJSONField: (field: any) => BktTreasury.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BktTreasury.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BktTreasury.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BktTreasury.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BktTreasury.fetch(client, id),
      new: (fields: BktTreasuryFields) => {
        return new BktTreasury([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BktTreasury.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BktTreasury>> {
    return phantom(BktTreasury.reified());
  }
  static get p() {
    return BktTreasury.phantom();
  }

  static get bcs() {
    return bcs.struct("BktTreasury", {
      id: UID.bcs,
      eco_part: Balance.bcs,
      bkt_supply: Supply.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): BktTreasury {
    return BktTreasury.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      ecoPart: decodeFromFields(
        Balance.reified(reified.phantom(BKT.reified())),
        fields.eco_part,
      ),
      bktSupply: decodeFromFields(
        Supply.reified(reified.phantom(BKT.reified())),
        fields.bkt_supply,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BktTreasury {
    if (!isBktTreasury(item.type)) {
      throw new Error("not a BktTreasury type");
    }

    return BktTreasury.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      ecoPart: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(BKT.reified())),
        item.fields.eco_part,
      ),
      bktSupply: decodeFromFieldsWithTypes(
        Supply.reified(reified.phantom(BKT.reified())),
        item.fields.bkt_supply,
      ),
    });
  }

  static fromBcs(data: Uint8Array): BktTreasury {
    return BktTreasury.fromFields(BktTreasury.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      ecoPart: this.ecoPart.toJSONField(),
      bktSupply: this.bktSupply.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BktTreasury {
    return BktTreasury.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      ecoPart: decodeFromJSONField(
        Balance.reified(reified.phantom(BKT.reified())),
        field.ecoPart,
      ),
      bktSupply: decodeFromJSONField(
        Supply.reified(reified.phantom(BKT.reified())),
        field.bktSupply,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): BktTreasury {
    if (json.$typeName !== BktTreasury.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BktTreasury.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BktTreasury {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBktTreasury(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BktTreasury object`,
      );
    }
    return BktTreasury.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BktTreasury {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBktTreasury(data.bcs.type)) {
        throw new Error(`object at is not a BktTreasury object`);
      }

      return BktTreasury.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BktTreasury.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BktTreasury> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BktTreasury object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBktTreasury(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BktTreasury object`);
    }

    return BktTreasury.fromSuiObjectData(res.data);
  }
}

/* ============================== BktAdminCap =============================== */

export function isBktAdminCap(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::bkt::BktAdminCap`;
}

export interface BktAdminCapFields {
  id: ToField<UID>;
}

export type BktAdminCapReified = Reified<BktAdminCap, BktAdminCapFields>;

export class BktAdminCap implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::bkt::BktAdminCap`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BktAdminCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::bkt::BktAdminCap`;
  readonly $typeArgs: [];
  readonly $isPhantom = BktAdminCap.$isPhantom;

  readonly id: ToField<UID>;

  private constructor(typeArgs: [], fields: BktAdminCapFields) {
    this.$fullTypeName = composeSuiType(
      BktAdminCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::bkt::BktAdminCap`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
  }

  static reified(): BktAdminCapReified {
    return {
      typeName: BktAdminCap.$typeName,
      fullTypeName: composeSuiType(
        BktAdminCap.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::bkt::BktAdminCap`,
      typeArgs: [] as [],
      isPhantom: BktAdminCap.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        BktAdminCap.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BktAdminCap.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BktAdminCap.fromBcs(data),
      bcs: BktAdminCap.bcs,
      fromJSONField: (field: any) => BktAdminCap.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BktAdminCap.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BktAdminCap.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BktAdminCap.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BktAdminCap.fetch(client, id),
      new: (fields: BktAdminCapFields) => {
        return new BktAdminCap([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BktAdminCap.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BktAdminCap>> {
    return phantom(BktAdminCap.reified());
  }
  static get p() {
    return BktAdminCap.phantom();
  }

  static get bcs() {
    return bcs.struct("BktAdminCap", {
      id: UID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): BktAdminCap {
    return BktAdminCap.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BktAdminCap {
    if (!isBktAdminCap(item.type)) {
      throw new Error("not a BktAdminCap type");
    }

    return BktAdminCap.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
    });
  }

  static fromBcs(data: Uint8Array): BktAdminCap {
    return BktAdminCap.fromFields(BktAdminCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BktAdminCap {
    return BktAdminCap.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
    });
  }

  static fromJSON(json: Record<string, any>): BktAdminCap {
    if (json.$typeName !== BktAdminCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BktAdminCap.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BktAdminCap {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBktAdminCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BktAdminCap object`,
      );
    }
    return BktAdminCap.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BktAdminCap {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBktAdminCap(data.bcs.type)) {
        throw new Error(`object at is not a BktAdminCap object`);
      }

      return BktAdminCap.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BktAdminCap.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BktAdminCap> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BktAdminCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBktAdminCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a BktAdminCap object`);
    }

    return BktAdminCap.fromSuiObjectData(res.data);
  }
}
