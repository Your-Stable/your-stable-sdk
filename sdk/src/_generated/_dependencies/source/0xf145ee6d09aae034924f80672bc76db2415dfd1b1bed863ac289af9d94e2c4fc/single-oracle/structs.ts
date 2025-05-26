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
import { ID, UID } from "../../0x2/object/structs";
import { PKG_V1, PKG_V3 } from "../index";
import { PriceInfo } from "../price-aggregator/structs";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== ParsePriceEvent =============================== */

export function isParsePriceEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::single_oracle::ParsePriceEvent`;
}

export interface ParsePriceEventFields {
  coinType: ToField<String>;
  sourceId: ToField<"u8">;
  priceInfo: ToField<Option<PriceInfo>>;
}

export type ParsePriceEventReified = Reified<
  ParsePriceEvent,
  ParsePriceEventFields
>;

export class ParsePriceEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::single_oracle::ParsePriceEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ParsePriceEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::single_oracle::ParsePriceEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ParsePriceEvent.$isPhantom;

  readonly coinType: ToField<String>;
  readonly sourceId: ToField<"u8">;
  readonly priceInfo: ToField<Option<PriceInfo>>;

  private constructor(typeArgs: [], fields: ParsePriceEventFields) {
    this.$fullTypeName = composeSuiType(
      ParsePriceEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::single_oracle::ParsePriceEvent`;
    this.$typeArgs = typeArgs;

    this.coinType = fields.coinType;
    this.sourceId = fields.sourceId;
    this.priceInfo = fields.priceInfo;
  }

  static reified(): ParsePriceEventReified {
    return {
      typeName: ParsePriceEvent.$typeName,
      fullTypeName: composeSuiType(
        ParsePriceEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::single_oracle::ParsePriceEvent`,
      typeArgs: [] as [],
      isPhantom: ParsePriceEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ParsePriceEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ParsePriceEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ParsePriceEvent.fromBcs(data),
      bcs: ParsePriceEvent.bcs,
      fromJSONField: (field: any) => ParsePriceEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ParsePriceEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ParsePriceEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ParsePriceEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ParsePriceEvent.fetch(client, id),
      new: (fields: ParsePriceEventFields) => {
        return new ParsePriceEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ParsePriceEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ParsePriceEvent>> {
    return phantom(ParsePriceEvent.reified());
  }
  static get p() {
    return ParsePriceEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ParsePriceEvent", {
      coin_type: String.bcs,
      source_id: bcs.u8(),
      price_info: Option.bcs(PriceInfo.bcs),
    });
  }

  static fromFields(fields: Record<string, any>): ParsePriceEvent {
    return ParsePriceEvent.reified().new({
      coinType: decodeFromFields(String.reified(), fields.coin_type),
      sourceId: decodeFromFields("u8", fields.source_id),
      priceInfo: decodeFromFields(
        Option.reified(PriceInfo.reified()),
        fields.price_info,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ParsePriceEvent {
    if (!isParsePriceEvent(item.type)) {
      throw new Error("not a ParsePriceEvent type");
    }

    return ParsePriceEvent.reified().new({
      coinType: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.coin_type,
      ),
      sourceId: decodeFromFieldsWithTypes("u8", item.fields.source_id),
      priceInfo: decodeFromFieldsWithTypes(
        Option.reified(PriceInfo.reified()),
        item.fields.price_info,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ParsePriceEvent {
    return ParsePriceEvent.fromFields(ParsePriceEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      coinType: this.coinType,
      sourceId: this.sourceId,
      priceInfo: fieldToJSON<Option<PriceInfo>>(
        `${Option.$typeName}<${PriceInfo.$typeName}>`,
        this.priceInfo,
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

  static fromJSONField(field: any): ParsePriceEvent {
    return ParsePriceEvent.reified().new({
      coinType: decodeFromJSONField(String.reified(), field.coinType),
      sourceId: decodeFromJSONField("u8", field.sourceId),
      priceInfo: decodeFromJSONField(
        Option.reified(PriceInfo.reified()),
        field.priceInfo,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): ParsePriceEvent {
    if (json.$typeName !== ParsePriceEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ParsePriceEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ParsePriceEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isParsePriceEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ParsePriceEvent object`,
      );
    }
    return ParsePriceEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ParsePriceEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isParsePriceEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a ParsePriceEvent object`);
      }

      return ParsePriceEvent.fromBcs(fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ParsePriceEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ParsePriceEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ParsePriceEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isParsePriceEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ParsePriceEvent object`);
    }

    return ParsePriceEvent.fromSuiObjectData(res.data);
  }
}

/* ============================== SingleOracle =============================== */

export function isSingleOracle(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::single_oracle::SingleOracle` + "<");
}

export interface SingleOracleFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  price: ToField<"u64">;
  precisionDecimal: ToField<"u8">;
  precision: ToField<"u64">;
  toleranceMs: ToField<"u64">;
  threshold: ToField<"u64">;
  latestUpdateMs: ToField<"u64">;
  switchboardConfig: ToField<Option<ID>>;
  pythConfig: ToField<Option<ID>>;
  supraConfig: ToField<Option<"u32">>;
}

export type SingleOracleReified<T extends PhantomTypeArgument> = Reified<
  SingleOracle<T>,
  SingleOracleFields<T>
>;

export class SingleOracle<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::single_oracle::SingleOracle`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = SingleOracle.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::single_oracle::SingleOracle<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = SingleOracle.$isPhantom;

  readonly id: ToField<UID>;
  readonly price: ToField<"u64">;
  readonly precisionDecimal: ToField<"u8">;
  readonly precision: ToField<"u64">;
  readonly toleranceMs: ToField<"u64">;
  readonly threshold: ToField<"u64">;
  readonly latestUpdateMs: ToField<"u64">;
  readonly switchboardConfig: ToField<Option<ID>>;
  readonly pythConfig: ToField<Option<ID>>;
  readonly supraConfig: ToField<Option<"u32">>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: SingleOracleFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      SingleOracle.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::single_oracle::SingleOracle<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.price = fields.price;
    this.precisionDecimal = fields.precisionDecimal;
    this.precision = fields.precision;
    this.toleranceMs = fields.toleranceMs;
    this.threshold = fields.threshold;
    this.latestUpdateMs = fields.latestUpdateMs;
    this.switchboardConfig = fields.switchboardConfig;
    this.pythConfig = fields.pythConfig;
    this.supraConfig = fields.supraConfig;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): SingleOracleReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: SingleOracle.$typeName,
      fullTypeName: composeSuiType(
        SingleOracle.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V1}::single_oracle::SingleOracle<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: SingleOracle.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        SingleOracle.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        SingleOracle.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => SingleOracle.fromBcs(T, data),
      bcs: SingleOracle.bcs,
      fromJSONField: (field: any) => SingleOracle.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => SingleOracle.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        SingleOracle.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        SingleOracle.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        SingleOracle.fetch(client, T, id),
      new: (fields: SingleOracleFields<ToPhantomTypeArgument<T>>) => {
        return new SingleOracle([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SingleOracle.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<SingleOracle<ToPhantomTypeArgument<T>>>> {
    return phantom(SingleOracle.reified(T));
  }
  static get p() {
    return SingleOracle.phantom;
  }

  static get bcs() {
    return bcs.struct("SingleOracle", {
      id: UID.bcs,
      price: bcs.u64(),
      precision_decimal: bcs.u8(),
      precision: bcs.u64(),
      tolerance_ms: bcs.u64(),
      threshold: bcs.u64(),
      latest_update_ms: bcs.u64(),
      switchboard_config: Option.bcs(ID.bcs),
      pyth_config: Option.bcs(ID.bcs),
      supra_config: Option.bcs(bcs.u32()),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    return SingleOracle.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      price: decodeFromFields("u64", fields.price),
      precisionDecimal: decodeFromFields("u8", fields.precision_decimal),
      precision: decodeFromFields("u64", fields.precision),
      toleranceMs: decodeFromFields("u64", fields.tolerance_ms),
      threshold: decodeFromFields("u64", fields.threshold),
      latestUpdateMs: decodeFromFields("u64", fields.latest_update_ms),
      switchboardConfig: decodeFromFields(
        Option.reified(ID.reified()),
        fields.switchboard_config,
      ),
      pythConfig: decodeFromFields(
        Option.reified(ID.reified()),
        fields.pyth_config,
      ),
      supraConfig: decodeFromFields(Option.reified("u32"), fields.supra_config),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    if (!isSingleOracle(item.type)) {
      throw new Error("not a SingleOracle type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return SingleOracle.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      price: decodeFromFieldsWithTypes("u64", item.fields.price),
      precisionDecimal: decodeFromFieldsWithTypes(
        "u8",
        item.fields.precision_decimal,
      ),
      precision: decodeFromFieldsWithTypes("u64", item.fields.precision),
      toleranceMs: decodeFromFieldsWithTypes("u64", item.fields.tolerance_ms),
      threshold: decodeFromFieldsWithTypes("u64", item.fields.threshold),
      latestUpdateMs: decodeFromFieldsWithTypes(
        "u64",
        item.fields.latest_update_ms,
      ),
      switchboardConfig: decodeFromFieldsWithTypes(
        Option.reified(ID.reified()),
        item.fields.switchboard_config,
      ),
      pythConfig: decodeFromFieldsWithTypes(
        Option.reified(ID.reified()),
        item.fields.pyth_config,
      ),
      supraConfig: decodeFromFieldsWithTypes(
        Option.reified("u32"),
        item.fields.supra_config,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    return SingleOracle.fromFields(typeArg, SingleOracle.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      price: this.price.toString(),
      precisionDecimal: this.precisionDecimal,
      precision: this.precision.toString(),
      toleranceMs: this.toleranceMs.toString(),
      threshold: this.threshold.toString(),
      latestUpdateMs: this.latestUpdateMs.toString(),
      switchboardConfig: fieldToJSON<Option<ID>>(
        `${Option.$typeName}<${ID.$typeName}>`,
        this.switchboardConfig,
      ),
      pythConfig: fieldToJSON<Option<ID>>(
        `${Option.$typeName}<${ID.$typeName}>`,
        this.pythConfig,
      ),
      supraConfig: fieldToJSON<Option<"u32">>(
        `${Option.$typeName}<u32>`,
        this.supraConfig,
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
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    return SingleOracle.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      price: decodeFromJSONField("u64", field.price),
      precisionDecimal: decodeFromJSONField("u8", field.precisionDecimal),
      precision: decodeFromJSONField("u64", field.precision),
      toleranceMs: decodeFromJSONField("u64", field.toleranceMs),
      threshold: decodeFromJSONField("u64", field.threshold),
      latestUpdateMs: decodeFromJSONField("u64", field.latestUpdateMs),
      switchboardConfig: decodeFromJSONField(
        Option.reified(ID.reified()),
        field.switchboardConfig,
      ),
      pythConfig: decodeFromJSONField(
        Option.reified(ID.reified()),
        field.pythConfig,
      ),
      supraConfig: decodeFromJSONField(
        Option.reified("u32"),
        field.supraConfig,
      ),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== SingleOracle.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(SingleOracle.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return SingleOracle.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSingleOracle(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a SingleOracle object`,
      );
    }
    return SingleOracle.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): SingleOracle<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isSingleOracle(data.bcs.type)
      ) {
        throw new Error(`object at is not a SingleOracle object`);
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

      return SingleOracle.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SingleOracle.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<SingleOracle<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching SingleOracle object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSingleOracle(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a SingleOracle object`);
    }

    return SingleOracle.fromSuiObjectData(typeArg, res.data);
  }
}

/* ============================== PriceCollector =============================== */

export function isPriceCollector(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::single_oracle::PriceCollector` + "<");
}

export interface PriceCollectorFields<T extends PhantomTypeArgument> {
  switchboardResult: ToField<Option<PriceInfo>>;
  pythResult: ToField<Option<PriceInfo>>;
  supraResult: ToField<Option<PriceInfo>>;
}

export type PriceCollectorReified<T extends PhantomTypeArgument> = Reified<
  PriceCollector<T>,
  PriceCollectorFields<T>
>;

export class PriceCollector<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::single_oracle::PriceCollector`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = PriceCollector.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::single_oracle::PriceCollector<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = PriceCollector.$isPhantom;

  readonly switchboardResult: ToField<Option<PriceInfo>>;
  readonly pythResult: ToField<Option<PriceInfo>>;
  readonly supraResult: ToField<Option<PriceInfo>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: PriceCollectorFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      PriceCollector.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::single_oracle::PriceCollector<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.switchboardResult = fields.switchboardResult;
    this.pythResult = fields.pythResult;
    this.supraResult = fields.supraResult;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PriceCollectorReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: PriceCollector.$typeName,
      fullTypeName: composeSuiType(
        PriceCollector.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V1}::single_oracle::PriceCollector<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: PriceCollector.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        PriceCollector.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PriceCollector.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => PriceCollector.fromBcs(T, data),
      bcs: PriceCollector.bcs,
      fromJSONField: (field: any) => PriceCollector.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => PriceCollector.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PriceCollector.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PriceCollector.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        PriceCollector.fetch(client, T, id),
      new: (fields: PriceCollectorFields<ToPhantomTypeArgument<T>>) => {
        return new PriceCollector([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PriceCollector.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<PriceCollector<ToPhantomTypeArgument<T>>>> {
    return phantom(PriceCollector.reified(T));
  }
  static get p() {
    return PriceCollector.phantom;
  }

  static get bcs() {
    return bcs.struct("PriceCollector", {
      switchboard_result: Option.bcs(PriceInfo.bcs),
      pyth_result: Option.bcs(PriceInfo.bcs),
      supra_result: Option.bcs(PriceInfo.bcs),
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    return PriceCollector.reified(typeArg).new({
      switchboardResult: decodeFromFields(
        Option.reified(PriceInfo.reified()),
        fields.switchboard_result,
      ),
      pythResult: decodeFromFields(
        Option.reified(PriceInfo.reified()),
        fields.pyth_result,
      ),
      supraResult: decodeFromFields(
        Option.reified(PriceInfo.reified()),
        fields.supra_result,
      ),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    if (!isPriceCollector(item.type)) {
      throw new Error("not a PriceCollector type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return PriceCollector.reified(typeArg).new({
      switchboardResult: decodeFromFieldsWithTypes(
        Option.reified(PriceInfo.reified()),
        item.fields.switchboard_result,
      ),
      pythResult: decodeFromFieldsWithTypes(
        Option.reified(PriceInfo.reified()),
        item.fields.pyth_result,
      ),
      supraResult: decodeFromFieldsWithTypes(
        Option.reified(PriceInfo.reified()),
        item.fields.supra_result,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    return PriceCollector.fromFields(typeArg, PriceCollector.bcs.parse(data));
  }

  toJSONField() {
    return {
      switchboardResult: fieldToJSON<Option<PriceInfo>>(
        `${Option.$typeName}<${PriceInfo.$typeName}>`,
        this.switchboardResult,
      ),
      pythResult: fieldToJSON<Option<PriceInfo>>(
        `${Option.$typeName}<${PriceInfo.$typeName}>`,
        this.pythResult,
      ),
      supraResult: fieldToJSON<Option<PriceInfo>>(
        `${Option.$typeName}<${PriceInfo.$typeName}>`,
        this.supraResult,
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
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    return PriceCollector.reified(typeArg).new({
      switchboardResult: decodeFromJSONField(
        Option.reified(PriceInfo.reified()),
        field.switchboardResult,
      ),
      pythResult: decodeFromJSONField(
        Option.reified(PriceInfo.reified()),
        field.pythResult,
      ),
      supraResult: decodeFromJSONField(
        Option.reified(PriceInfo.reified()),
        field.supraResult,
      ),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== PriceCollector.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(PriceCollector.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return PriceCollector.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPriceCollector(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PriceCollector object`,
      );
    }
    return PriceCollector.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): PriceCollector<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPriceCollector(data.bcs.type)
      ) {
        throw new Error(`object at is not a PriceCollector object`);
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

      return PriceCollector.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PriceCollector.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<PriceCollector<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PriceCollector object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPriceCollector(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PriceCollector object`);
    }

    return PriceCollector.fromSuiObjectData(typeArg, res.data);
  }
}

/* ============================== WhitelistRule =============================== */

export function isWhitelistRule(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V3}::single_oracle::WhitelistRule` + "<");
}

export interface WhitelistRuleFields<R extends PhantomTypeArgument> {
  dummyField: ToField<"bool">;
}

export type WhitelistRuleReified<R extends PhantomTypeArgument> = Reified<
  WhitelistRule<R>,
  WhitelistRuleFields<R>
>;

export class WhitelistRule<R extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V3}::single_oracle::WhitelistRule`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = WhitelistRule.$typeName;
  readonly $fullTypeName: `${typeof PKG_V3}::single_oracle::WhitelistRule<${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<R>];
  readonly $isPhantom = WhitelistRule.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<R>],
    fields: WhitelistRuleFields<R>,
  ) {
    this.$fullTypeName = composeSuiType(
      WhitelistRule.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V3}::single_oracle::WhitelistRule<${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified<R extends PhantomReified<PhantomTypeArgument>>(
    R: R,
  ): WhitelistRuleReified<ToPhantomTypeArgument<R>> {
    return {
      typeName: WhitelistRule.$typeName,
      fullTypeName: composeSuiType(
        WhitelistRule.$typeName,
        ...[extractType(R)],
      ) as `${typeof PKG_V3}::single_oracle::WhitelistRule<${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: WhitelistRule.$isPhantom,
      reifiedTypeArgs: [R],
      fromFields: (fields: Record<string, any>) =>
        WhitelistRule.fromFields(R, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WhitelistRule.fromFieldsWithTypes(R, item),
      fromBcs: (data: Uint8Array) => WhitelistRule.fromBcs(R, data),
      bcs: WhitelistRule.bcs,
      fromJSONField: (field: any) => WhitelistRule.fromJSONField(R, field),
      fromJSON: (json: Record<string, any>) => WhitelistRule.fromJSON(R, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WhitelistRule.fromSuiParsedData(R, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WhitelistRule.fromSuiObjectData(R, content),
      fetch: async (client: SuiClient, id: string) =>
        WhitelistRule.fetch(client, R, id),
      new: (fields: WhitelistRuleFields<ToPhantomTypeArgument<R>>) => {
        return new WhitelistRule([extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WhitelistRule.reified;
  }

  static phantom<R extends PhantomReified<PhantomTypeArgument>>(
    R: R,
  ): PhantomReified<ToTypeStr<WhitelistRule<ToPhantomTypeArgument<R>>>> {
    return phantom(WhitelistRule.reified(R));
  }
  static get p() {
    return WhitelistRule.phantom;
  }

  static get bcs() {
    return bcs.struct("WhitelistRule", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    fields: Record<string, any>,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    return WhitelistRule.reified(typeArg).new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    item: FieldsWithTypes,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    if (!isWhitelistRule(item.type)) {
      throw new Error("not a WhitelistRule type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return WhitelistRule.reified(typeArg).new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    data: Uint8Array,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    return WhitelistRule.fromFields(typeArg, WhitelistRule.bcs.parse(data));
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

  static fromJSONField<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    field: any,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    return WhitelistRule.reified(typeArg).new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    json: Record<string, any>,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    if (json.$typeName !== WhitelistRule.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WhitelistRule.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return WhitelistRule.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    content: SuiParsedData,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWhitelistRule(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WhitelistRule object`,
      );
    }
    return WhitelistRule.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<R extends PhantomReified<PhantomTypeArgument>>(
    typeArg: R,
    data: SuiObjectData,
  ): WhitelistRule<ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isWhitelistRule(data.bcs.type)
      ) {
        throw new Error(`object at is not a WhitelistRule object`);
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

      return WhitelistRule.fromBcs(typeArg, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WhitelistRule.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<R extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: R,
    id: string,
  ): Promise<WhitelistRule<ToPhantomTypeArgument<R>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WhitelistRule object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWhitelistRule(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WhitelistRule object`);
    }

    return WhitelistRule.fromSuiObjectData(typeArg, res.data);
  }
}
