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
import { String } from "../../0x1/ascii/structs";
import { PKG_V1, PKG_V2 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Deposite =============================== */

export function isDeposite(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::tank_events::Deposite`;
}

export interface DepositeFields {
  tankType: ToField<String>;
  buckAmount: ToField<"u64">;
}

export type DepositeReified = Reified<Deposite, DepositeFields>;

export class Deposite implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank_events::Deposite`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Deposite.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank_events::Deposite`;
  readonly $typeArgs: [];
  readonly $isPhantom = Deposite.$isPhantom;

  readonly tankType: ToField<String>;
  readonly buckAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: DepositeFields) {
    this.$fullTypeName = composeSuiType(
      Deposite.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank_events::Deposite`;
    this.$typeArgs = typeArgs;

    this.tankType = fields.tankType;
    this.buckAmount = fields.buckAmount;
  }

  static reified(): DepositeReified {
    return {
      typeName: Deposite.$typeName,
      fullTypeName: composeSuiType(
        Deposite.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::tank_events::Deposite`,
      typeArgs: [] as [],
      isPhantom: Deposite.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Deposite.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Deposite.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Deposite.fromBcs(data),
      bcs: Deposite.bcs,
      fromJSONField: (field: any) => Deposite.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Deposite.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Deposite.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Deposite.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Deposite.fetch(client, id),
      new: (fields: DepositeFields) => {
        return new Deposite([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Deposite.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Deposite>> {
    return phantom(Deposite.reified());
  }
  static get p() {
    return Deposite.phantom();
  }

  static get bcs() {
    return bcs.struct("Deposite", {
      tank_type: String.bcs,
      buck_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Deposite {
    return Deposite.reified().new({
      tankType: decodeFromFields(String.reified(), fields.tank_type),
      buckAmount: decodeFromFields("u64", fields.buck_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Deposite {
    if (!isDeposite(item.type)) {
      throw new Error("not a Deposite type");
    }

    return Deposite.reified().new({
      tankType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.tank_type,
      ),
      buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount),
    });
  }

  static fromBcs(data: Uint8Array): Deposite {
    return Deposite.fromFields(Deposite.bcs.parse(data));
  }

  toJSONField() {
    return {
      tankType: this.tankType,
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

  static fromJSONField(field: any): Deposite {
    return Deposite.reified().new({
      tankType: decodeFromJSONField(String.reified(), field.tankType),
      buckAmount: decodeFromJSONField("u64", field.buckAmount),
    });
  }

  static fromJSON(json: Record<string, any>): Deposite {
    if (json.$typeName !== Deposite.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Deposite.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Deposite {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDeposite(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Deposite object`,
      );
    }
    return Deposite.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Deposite {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDeposite(data.bcs.type)) {
        throw new Error(`object at is not a Deposite object`);
      }

      return Deposite.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Deposite.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Deposite> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Deposite object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDeposite(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Deposite object`);
    }

    return Deposite.fromSuiObjectData(res.data);
  }
}

/* ============================== Withdraw =============================== */

export function isWithdraw(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::tank_events::Withdraw`;
}

export interface WithdrawFields {
  tankType: ToField<String>;
  buckAmount: ToField<"u64">;
  collateralAmount: ToField<"u64">;
  bktAmount: ToField<"u64">;
}

export type WithdrawReified = Reified<Withdraw, WithdrawFields>;

export class Withdraw implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank_events::Withdraw`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Withdraw.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank_events::Withdraw`;
  readonly $typeArgs: [];
  readonly $isPhantom = Withdraw.$isPhantom;

  readonly tankType: ToField<String>;
  readonly buckAmount: ToField<"u64">;
  readonly collateralAmount: ToField<"u64">;
  readonly bktAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: WithdrawFields) {
    this.$fullTypeName = composeSuiType(
      Withdraw.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank_events::Withdraw`;
    this.$typeArgs = typeArgs;

    this.tankType = fields.tankType;
    this.buckAmount = fields.buckAmount;
    this.collateralAmount = fields.collateralAmount;
    this.bktAmount = fields.bktAmount;
  }

  static reified(): WithdrawReified {
    return {
      typeName: Withdraw.$typeName,
      fullTypeName: composeSuiType(
        Withdraw.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::tank_events::Withdraw`,
      typeArgs: [] as [],
      isPhantom: Withdraw.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Withdraw.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Withdraw.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Withdraw.fromBcs(data),
      bcs: Withdraw.bcs,
      fromJSONField: (field: any) => Withdraw.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Withdraw.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Withdraw.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Withdraw.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Withdraw.fetch(client, id),
      new: (fields: WithdrawFields) => {
        return new Withdraw([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Withdraw.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Withdraw>> {
    return phantom(Withdraw.reified());
  }
  static get p() {
    return Withdraw.phantom();
  }

  static get bcs() {
    return bcs.struct("Withdraw", {
      tank_type: String.bcs,
      buck_amount: bcs.u64(),
      collateral_amount: bcs.u64(),
      bkt_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Withdraw {
    return Withdraw.reified().new({
      tankType: decodeFromFields(String.reified(), fields.tank_type),
      buckAmount: decodeFromFields("u64", fields.buck_amount),
      collateralAmount: decodeFromFields("u64", fields.collateral_amount),
      bktAmount: decodeFromFields("u64", fields.bkt_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Withdraw {
    if (!isWithdraw(item.type)) {
      throw new Error("not a Withdraw type");
    }

    return Withdraw.reified().new({
      tankType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.tank_type,
      ),
      buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount),
      collateralAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.collateral_amount,
      ),
      bktAmount: decodeFromFieldsWithTypes("u64", item.fields.bkt_amount),
    });
  }

  static fromBcs(data: Uint8Array): Withdraw {
    return Withdraw.fromFields(Withdraw.bcs.parse(data));
  }

  toJSONField() {
    return {
      tankType: this.tankType,
      buckAmount: this.buckAmount.toString(),
      collateralAmount: this.collateralAmount.toString(),
      bktAmount: this.bktAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Withdraw {
    return Withdraw.reified().new({
      tankType: decodeFromJSONField(String.reified(), field.tankType),
      buckAmount: decodeFromJSONField("u64", field.buckAmount),
      collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
      bktAmount: decodeFromJSONField("u64", field.bktAmount),
    });
  }

  static fromJSON(json: Record<string, any>): Withdraw {
    if (json.$typeName !== Withdraw.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Withdraw.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Withdraw {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithdraw(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Withdraw object`,
      );
    }
    return Withdraw.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Withdraw {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWithdraw(data.bcs.type)) {
        throw new Error(`object at is not a Withdraw object`);
      }

      return Withdraw.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Withdraw.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Withdraw> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Withdraw object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithdraw(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Withdraw object`);
    }

    return Withdraw.fromSuiObjectData(res.data);
  }
}

/* ============================== Absorb =============================== */

export function isAbsorb(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::tank_events::Absorb`;
}

export interface AbsorbFields {
  tankType: ToField<String>;
  buckAmount: ToField<"u64">;
  collateralAmount: ToField<"u64">;
}

export type AbsorbReified = Reified<Absorb, AbsorbFields>;

export class Absorb implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank_events::Absorb`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Absorb.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank_events::Absorb`;
  readonly $typeArgs: [];
  readonly $isPhantom = Absorb.$isPhantom;

  readonly tankType: ToField<String>;
  readonly buckAmount: ToField<"u64">;
  readonly collateralAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: AbsorbFields) {
    this.$fullTypeName = composeSuiType(
      Absorb.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank_events::Absorb`;
    this.$typeArgs = typeArgs;

    this.tankType = fields.tankType;
    this.buckAmount = fields.buckAmount;
    this.collateralAmount = fields.collateralAmount;
  }

  static reified(): AbsorbReified {
    return {
      typeName: Absorb.$typeName,
      fullTypeName: composeSuiType(
        Absorb.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::tank_events::Absorb`,
      typeArgs: [] as [],
      isPhantom: Absorb.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Absorb.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Absorb.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Absorb.fromBcs(data),
      bcs: Absorb.bcs,
      fromJSONField: (field: any) => Absorb.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Absorb.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Absorb.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Absorb.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Absorb.fetch(client, id),
      new: (fields: AbsorbFields) => {
        return new Absorb([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Absorb.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Absorb>> {
    return phantom(Absorb.reified());
  }
  static get p() {
    return Absorb.phantom();
  }

  static get bcs() {
    return bcs.struct("Absorb", {
      tank_type: String.bcs,
      buck_amount: bcs.u64(),
      collateral_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Absorb {
    return Absorb.reified().new({
      tankType: decodeFromFields(String.reified(), fields.tank_type),
      buckAmount: decodeFromFields("u64", fields.buck_amount),
      collateralAmount: decodeFromFields("u64", fields.collateral_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Absorb {
    if (!isAbsorb(item.type)) {
      throw new Error("not a Absorb type");
    }

    return Absorb.reified().new({
      tankType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.tank_type,
      ),
      buckAmount: decodeFromFieldsWithTypes("u64", item.fields.buck_amount),
      collateralAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.collateral_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Absorb {
    return Absorb.fromFields(Absorb.bcs.parse(data));
  }

  toJSONField() {
    return {
      tankType: this.tankType,
      buckAmount: this.buckAmount.toString(),
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

  static fromJSONField(field: any): Absorb {
    return Absorb.reified().new({
      tankType: decodeFromJSONField(String.reified(), field.tankType),
      buckAmount: decodeFromJSONField("u64", field.buckAmount),
      collateralAmount: decodeFromJSONField("u64", field.collateralAmount),
    });
  }

  static fromJSON(json: Record<string, any>): Absorb {
    if (json.$typeName !== Absorb.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Absorb.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Absorb {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isAbsorb(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Absorb object`,
      );
    }
    return Absorb.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Absorb {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isAbsorb(data.bcs.type)) {
        throw new Error(`object at is not a Absorb object`);
      }

      return Absorb.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Absorb.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Absorb> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Absorb object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isAbsorb(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Absorb object`);
    }

    return Absorb.fromSuiObjectData(res.data);
  }
}

/* ============================== TankUpdate =============================== */

export function isTankUpdate(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V2}::tank_events::TankUpdate`;
}

export interface TankUpdateFields {
  tankType: ToField<String>;
  currentEpoch: ToField<"u64">;
  currentScale: ToField<"u64">;
  currentP: ToField<"u64">;
}

export type TankUpdateReified = Reified<TankUpdate, TankUpdateFields>;

export class TankUpdate implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V2}::tank_events::TankUpdate`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = TankUpdate.$typeName;
  readonly $fullTypeName: `${typeof PKG_V2}::tank_events::TankUpdate`;
  readonly $typeArgs: [];
  readonly $isPhantom = TankUpdate.$isPhantom;

  readonly tankType: ToField<String>;
  readonly currentEpoch: ToField<"u64">;
  readonly currentScale: ToField<"u64">;
  readonly currentP: ToField<"u64">;

  private constructor(typeArgs: [], fields: TankUpdateFields) {
    this.$fullTypeName = composeSuiType(
      TankUpdate.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V2}::tank_events::TankUpdate`;
    this.$typeArgs = typeArgs;

    this.tankType = fields.tankType;
    this.currentEpoch = fields.currentEpoch;
    this.currentScale = fields.currentScale;
    this.currentP = fields.currentP;
  }

  static reified(): TankUpdateReified {
    return {
      typeName: TankUpdate.$typeName,
      fullTypeName: composeSuiType(
        TankUpdate.$typeName,
        ...[],
      ) as `${typeof PKG_V2}::tank_events::TankUpdate`,
      typeArgs: [] as [],
      isPhantom: TankUpdate.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        TankUpdate.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TankUpdate.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => TankUpdate.fromBcs(data),
      bcs: TankUpdate.bcs,
      fromJSONField: (field: any) => TankUpdate.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => TankUpdate.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TankUpdate.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TankUpdate.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        TankUpdate.fetch(client, id),
      new: (fields: TankUpdateFields) => {
        return new TankUpdate([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TankUpdate.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<TankUpdate>> {
    return phantom(TankUpdate.reified());
  }
  static get p() {
    return TankUpdate.phantom();
  }

  static get bcs() {
    return bcs.struct("TankUpdate", {
      tank_type: String.bcs,
      current_epoch: bcs.u64(),
      current_scale: bcs.u64(),
      current_p: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): TankUpdate {
    return TankUpdate.reified().new({
      tankType: decodeFromFields(String.reified(), fields.tank_type),
      currentEpoch: decodeFromFields("u64", fields.current_epoch),
      currentScale: decodeFromFields("u64", fields.current_scale),
      currentP: decodeFromFields("u64", fields.current_p),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): TankUpdate {
    if (!isTankUpdate(item.type)) {
      throw new Error("not a TankUpdate type");
    }

    return TankUpdate.reified().new({
      tankType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.tank_type,
      ),
      currentEpoch: decodeFromFieldsWithTypes("u64", item.fields.current_epoch),
      currentScale: decodeFromFieldsWithTypes("u64", item.fields.current_scale),
      currentP: decodeFromFieldsWithTypes("u64", item.fields.current_p),
    });
  }

  static fromBcs(data: Uint8Array): TankUpdate {
    return TankUpdate.fromFields(TankUpdate.bcs.parse(data));
  }

  toJSONField() {
    return {
      tankType: this.tankType,
      currentEpoch: this.currentEpoch.toString(),
      currentScale: this.currentScale.toString(),
      currentP: this.currentP.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): TankUpdate {
    return TankUpdate.reified().new({
      tankType: decodeFromJSONField(String.reified(), field.tankType),
      currentEpoch: decodeFromJSONField("u64", field.currentEpoch),
      currentScale: decodeFromJSONField("u64", field.currentScale),
      currentP: decodeFromJSONField("u64", field.currentP),
    });
  }

  static fromJSON(json: Record<string, any>): TankUpdate {
    if (json.$typeName !== TankUpdate.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return TankUpdate.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): TankUpdate {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTankUpdate(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TankUpdate object`,
      );
    }
    return TankUpdate.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): TankUpdate {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTankUpdate(data.bcs.type)) {
        throw new Error(`object at is not a TankUpdate object`);
      }

      return TankUpdate.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TankUpdate.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<TankUpdate> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TankUpdate object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTankUpdate(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TankUpdate object`);
    }

    return TankUpdate.fromSuiObjectData(res.data);
  }
}

/* ============================== CollectBKT =============================== */

export function isCollectBKT(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::tank_events::CollectBKT`;
}

export interface CollectBKTFields {
  tankType: ToField<String>;
  bktAmount: ToField<"u64">;
}

export type CollectBKTReified = Reified<CollectBKT, CollectBKTFields>;

export class CollectBKT implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::tank_events::CollectBKT`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CollectBKT.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::tank_events::CollectBKT`;
  readonly $typeArgs: [];
  readonly $isPhantom = CollectBKT.$isPhantom;

  readonly tankType: ToField<String>;
  readonly bktAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: CollectBKTFields) {
    this.$fullTypeName = composeSuiType(
      CollectBKT.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::tank_events::CollectBKT`;
    this.$typeArgs = typeArgs;

    this.tankType = fields.tankType;
    this.bktAmount = fields.bktAmount;
  }

  static reified(): CollectBKTReified {
    return {
      typeName: CollectBKT.$typeName,
      fullTypeName: composeSuiType(
        CollectBKT.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::tank_events::CollectBKT`,
      typeArgs: [] as [],
      isPhantom: CollectBKT.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        CollectBKT.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CollectBKT.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CollectBKT.fromBcs(data),
      bcs: CollectBKT.bcs,
      fromJSONField: (field: any) => CollectBKT.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CollectBKT.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CollectBKT.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CollectBKT.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        CollectBKT.fetch(client, id),
      new: (fields: CollectBKTFields) => {
        return new CollectBKT([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CollectBKT.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CollectBKT>> {
    return phantom(CollectBKT.reified());
  }
  static get p() {
    return CollectBKT.phantom();
  }

  static get bcs() {
    return bcs.struct("CollectBKT", {
      tank_type: String.bcs,
      bkt_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): CollectBKT {
    return CollectBKT.reified().new({
      tankType: decodeFromFields(String.reified(), fields.tank_type),
      bktAmount: decodeFromFields("u64", fields.bkt_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CollectBKT {
    if (!isCollectBKT(item.type)) {
      throw new Error("not a CollectBKT type");
    }

    return CollectBKT.reified().new({
      tankType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.tank_type,
      ),
      bktAmount: decodeFromFieldsWithTypes("u64", item.fields.bkt_amount),
    });
  }

  static fromBcs(data: Uint8Array): CollectBKT {
    return CollectBKT.fromFields(CollectBKT.bcs.parse(data));
  }

  toJSONField() {
    return {
      tankType: this.tankType,
      bktAmount: this.bktAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): CollectBKT {
    return CollectBKT.reified().new({
      tankType: decodeFromJSONField(String.reified(), field.tankType),
      bktAmount: decodeFromJSONField("u64", field.bktAmount),
    });
  }

  static fromJSON(json: Record<string, any>): CollectBKT {
    if (json.$typeName !== CollectBKT.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CollectBKT.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CollectBKT {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCollectBKT(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CollectBKT object`,
      );
    }
    return CollectBKT.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CollectBKT {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCollectBKT(data.bcs.type)) {
        throw new Error(`object at is not a CollectBKT object`);
      }

      return CollectBKT.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CollectBKT.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CollectBKT> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CollectBKT object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCollectBKT(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CollectBKT object`);
    }

    return CollectBKT.fromSuiObjectData(res.data);
  }
}
