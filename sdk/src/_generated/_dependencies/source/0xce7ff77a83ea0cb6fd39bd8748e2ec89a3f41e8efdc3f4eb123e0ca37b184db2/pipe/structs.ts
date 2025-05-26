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
import { PKG_V12 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== PipeType =============================== */

export function isPipeType(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V12}::pipe::PipeType` + "<");
}

export interface PipeTypeFields<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> {
  dummyField: ToField<"bool">;
}

export type PipeTypeReified<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> = Reified<PipeType<T, R>, PipeTypeFields<T, R>>;

export class PipeType<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V12}::pipe::PipeType`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = PipeType.$typeName;
  readonly $fullTypeName: `${typeof PKG_V12}::pipe::PipeType<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>];
  readonly $isPhantom = PipeType.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>],
    fields: PipeTypeFields<T, R>,
  ) {
    this.$fullTypeName = composeSuiType(
      PipeType.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V12}::pipe::PipeType<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PipeTypeReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return {
      typeName: PipeType.$typeName,
      fullTypeName: composeSuiType(
        PipeType.$typeName,
        ...[extractType(T), extractType(R)],
      ) as `${typeof PKG_V12}::pipe::PipeType<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(T), extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: PipeType.$isPhantom,
      reifiedTypeArgs: [T, R],
      fromFields: (fields: Record<string, any>) =>
        PipeType.fromFields([T, R], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PipeType.fromFieldsWithTypes([T, R], item),
      fromBcs: (data: Uint8Array) => PipeType.fromBcs([T, R], data),
      bcs: PipeType.bcs,
      fromJSONField: (field: any) => PipeType.fromJSONField([T, R], field),
      fromJSON: (json: Record<string, any>) => PipeType.fromJSON([T, R], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PipeType.fromSuiParsedData([T, R], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PipeType.fromSuiObjectData([T, R], content),
      fetch: async (client: SuiClient, id: string) =>
        PipeType.fetch(client, [T, R], id),
      new: (
        fields: PipeTypeFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<R>
        >,
      ) => {
        return new PipeType([extractType(T), extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PipeType.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PhantomReified<
    ToTypeStr<PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>>
  > {
    return phantom(PipeType.reified(T, R));
  }
  static get p() {
    return PipeType.phantom;
  }

  static get bcs() {
    return bcs.struct("PipeType", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    fields: Record<string, any>,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return PipeType.reified(typeArgs[0], typeArgs[1]).new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    item: FieldsWithTypes,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (!isPipeType(item.type)) {
      throw new Error("not a PipeType type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return PipeType.reified(typeArgs[0], typeArgs[1]).new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: Uint8Array,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return PipeType.fromFields(typeArgs, PipeType.bcs.parse(data));
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

  static fromJSONField<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    field: any,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return PipeType.reified(typeArgs[0], typeArgs[1]).new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    json: Record<string, any>,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (json.$typeName !== PipeType.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(PipeType.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return PipeType.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    content: SuiParsedData,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPipeType(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PipeType object`,
      );
    }
    return PipeType.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: SuiObjectData,
  ): PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPipeType(data.bcs.type)) {
        throw new Error(`object at is not a PipeType object`);
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

      return PipeType.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PipeType.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, R],
    id: string,
  ): Promise<PipeType<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PipeType object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPipeType(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PipeType object`);
    }

    return PipeType.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== Pipe =============================== */

export function isPipe(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V12}::pipe::Pipe` + "<");
}

export interface PipeFields<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> {
  id: ToField<UID>;
  outputVolume: ToField<"u64">;
}

export type PipeReified<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> = Reified<Pipe<T, R>, PipeFields<T, R>>;

export class Pipe<T extends PhantomTypeArgument, R extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V12}::pipe::Pipe`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = Pipe.$typeName;
  readonly $fullTypeName: `${typeof PKG_V12}::pipe::Pipe<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>];
  readonly $isPhantom = Pipe.$isPhantom;

  readonly id: ToField<UID>;
  readonly outputVolume: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>],
    fields: PipeFields<T, R>,
  ) {
    this.$fullTypeName = composeSuiType(
      Pipe.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V12}::pipe::Pipe<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.outputVolume = fields.outputVolume;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PipeReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return {
      typeName: Pipe.$typeName,
      fullTypeName: composeSuiType(
        Pipe.$typeName,
        ...[extractType(T), extractType(R)],
      ) as `${typeof PKG_V12}::pipe::Pipe<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(T), extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: Pipe.$isPhantom,
      reifiedTypeArgs: [T, R],
      fromFields: (fields: Record<string, any>) =>
        Pipe.fromFields([T, R], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Pipe.fromFieldsWithTypes([T, R], item),
      fromBcs: (data: Uint8Array) => Pipe.fromBcs([T, R], data),
      bcs: Pipe.bcs,
      fromJSONField: (field: any) => Pipe.fromJSONField([T, R], field),
      fromJSON: (json: Record<string, any>) => Pipe.fromJSON([T, R], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Pipe.fromSuiParsedData([T, R], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Pipe.fromSuiObjectData([T, R], content),
      fetch: async (client: SuiClient, id: string) =>
        Pipe.fetch(client, [T, R], id),
      new: (
        fields: PipeFields<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>,
      ) => {
        return new Pipe([extractType(T), extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Pipe.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PhantomReified<
    ToTypeStr<Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>>
  > {
    return phantom(Pipe.reified(T, R));
  }
  static get p() {
    return Pipe.phantom;
  }

  static get bcs() {
    return bcs.struct("Pipe", {
      id: UID.bcs,
      output_volume: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    fields: Record<string, any>,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Pipe.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFields(UID.reified(), fields.id),
      outputVolume: decodeFromFields("u64", fields.output_volume),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    item: FieldsWithTypes,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (!isPipe(item.type)) {
      throw new Error("not a Pipe type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Pipe.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      outputVolume: decodeFromFieldsWithTypes("u64", item.fields.output_volume),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: Uint8Array,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Pipe.fromFields(typeArgs, Pipe.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      outputVolume: this.outputVolume.toString(),
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
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    field: any,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Pipe.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      outputVolume: decodeFromJSONField("u64", field.outputVolume),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    json: Record<string, any>,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (json.$typeName !== Pipe.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Pipe.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return Pipe.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    content: SuiParsedData,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPipe(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Pipe object`,
      );
    }
    return Pipe.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: SuiObjectData,
  ): Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPipe(data.bcs.type)) {
        throw new Error(`object at is not a Pipe object`);
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

      return Pipe.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Pipe.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, R],
    id: string,
  ): Promise<Pipe<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Pipe object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPipe(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Pipe object`);
    }

    return Pipe.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== OutputCarrier =============================== */

export function isOutputCarrier(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V12}::pipe::OutputCarrier` + "<");
}

export interface OutputCarrierFields<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> {
  content: ToField<Balance<T>>;
}

export type OutputCarrierReified<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> = Reified<OutputCarrier<T, R>, OutputCarrierFields<T, R>>;

export class OutputCarrier<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V12}::pipe::OutputCarrier`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = OutputCarrier.$typeName;
  readonly $fullTypeName: `${typeof PKG_V12}::pipe::OutputCarrier<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>];
  readonly $isPhantom = OutputCarrier.$isPhantom;

  readonly content: ToField<Balance<T>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>],
    fields: OutputCarrierFields<T, R>,
  ) {
    this.$fullTypeName = composeSuiType(
      OutputCarrier.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V12}::pipe::OutputCarrier<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.content = fields.content;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): OutputCarrierReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return {
      typeName: OutputCarrier.$typeName,
      fullTypeName: composeSuiType(
        OutputCarrier.$typeName,
        ...[extractType(T), extractType(R)],
      ) as `${typeof PKG_V12}::pipe::OutputCarrier<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(T), extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: OutputCarrier.$isPhantom,
      reifiedTypeArgs: [T, R],
      fromFields: (fields: Record<string, any>) =>
        OutputCarrier.fromFields([T, R], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        OutputCarrier.fromFieldsWithTypes([T, R], item),
      fromBcs: (data: Uint8Array) => OutputCarrier.fromBcs([T, R], data),
      bcs: OutputCarrier.bcs,
      fromJSONField: (field: any) => OutputCarrier.fromJSONField([T, R], field),
      fromJSON: (json: Record<string, any>) =>
        OutputCarrier.fromJSON([T, R], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        OutputCarrier.fromSuiParsedData([T, R], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        OutputCarrier.fromSuiObjectData([T, R], content),
      fetch: async (client: SuiClient, id: string) =>
        OutputCarrier.fetch(client, [T, R], id),
      new: (
        fields: OutputCarrierFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<R>
        >,
      ) => {
        return new OutputCarrier([extractType(T), extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return OutputCarrier.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PhantomReified<
    ToTypeStr<OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>>
  > {
    return phantom(OutputCarrier.reified(T, R));
  }
  static get p() {
    return OutputCarrier.phantom;
  }

  static get bcs() {
    return bcs.struct("OutputCarrier", {
      content: Balance.bcs,
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    fields: Record<string, any>,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return OutputCarrier.reified(typeArgs[0], typeArgs[1]).new({
      content: decodeFromFields(Balance.reified(typeArgs[0]), fields.content),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    item: FieldsWithTypes,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (!isOutputCarrier(item.type)) {
      throw new Error("not a OutputCarrier type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return OutputCarrier.reified(typeArgs[0], typeArgs[1]).new({
      content: decodeFromFieldsWithTypes(
        Balance.reified(typeArgs[0]),
        item.fields.content,
      ),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: Uint8Array,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return OutputCarrier.fromFields(typeArgs, OutputCarrier.bcs.parse(data));
  }

  toJSONField() {
    return {
      content: this.content.toJSONField(),
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
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    field: any,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return OutputCarrier.reified(typeArgs[0], typeArgs[1]).new({
      content: decodeFromJSONField(Balance.reified(typeArgs[0]), field.content),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    json: Record<string, any>,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (json.$typeName !== OutputCarrier.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(OutputCarrier.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return OutputCarrier.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    content: SuiParsedData,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isOutputCarrier(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a OutputCarrier object`,
      );
    }
    return OutputCarrier.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: SuiObjectData,
  ): OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isOutputCarrier(data.bcs.type)
      ) {
        throw new Error(`object at is not a OutputCarrier object`);
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

      return OutputCarrier.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return OutputCarrier.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, R],
    id: string,
  ): Promise<
    OutputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching OutputCarrier object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isOutputCarrier(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a OutputCarrier object`);
    }

    return OutputCarrier.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== InputCarrier =============================== */

export function isInputCarrier(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V12}::pipe::InputCarrier` + "<");
}

export interface InputCarrierFields<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> {
  content: ToField<Balance<T>>;
}

export type InputCarrierReified<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> = Reified<InputCarrier<T, R>, InputCarrierFields<T, R>>;

export class InputCarrier<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V12}::pipe::InputCarrier`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = InputCarrier.$typeName;
  readonly $fullTypeName: `${typeof PKG_V12}::pipe::InputCarrier<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>];
  readonly $isPhantom = InputCarrier.$isPhantom;

  readonly content: ToField<Balance<T>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>],
    fields: InputCarrierFields<T, R>,
  ) {
    this.$fullTypeName = composeSuiType(
      InputCarrier.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V12}::pipe::InputCarrier<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.content = fields.content;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): InputCarrierReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return {
      typeName: InputCarrier.$typeName,
      fullTypeName: composeSuiType(
        InputCarrier.$typeName,
        ...[extractType(T), extractType(R)],
      ) as `${typeof PKG_V12}::pipe::InputCarrier<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(T), extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: InputCarrier.$isPhantom,
      reifiedTypeArgs: [T, R],
      fromFields: (fields: Record<string, any>) =>
        InputCarrier.fromFields([T, R], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        InputCarrier.fromFieldsWithTypes([T, R], item),
      fromBcs: (data: Uint8Array) => InputCarrier.fromBcs([T, R], data),
      bcs: InputCarrier.bcs,
      fromJSONField: (field: any) => InputCarrier.fromJSONField([T, R], field),
      fromJSON: (json: Record<string, any>) =>
        InputCarrier.fromJSON([T, R], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        InputCarrier.fromSuiParsedData([T, R], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        InputCarrier.fromSuiObjectData([T, R], content),
      fetch: async (client: SuiClient, id: string) =>
        InputCarrier.fetch(client, [T, R], id),
      new: (
        fields: InputCarrierFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<R>
        >,
      ) => {
        return new InputCarrier([extractType(T), extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return InputCarrier.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PhantomReified<
    ToTypeStr<InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>>
  > {
    return phantom(InputCarrier.reified(T, R));
  }
  static get p() {
    return InputCarrier.phantom;
  }

  static get bcs() {
    return bcs.struct("InputCarrier", {
      content: Balance.bcs,
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    fields: Record<string, any>,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return InputCarrier.reified(typeArgs[0], typeArgs[1]).new({
      content: decodeFromFields(Balance.reified(typeArgs[0]), fields.content),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    item: FieldsWithTypes,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (!isInputCarrier(item.type)) {
      throw new Error("not a InputCarrier type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return InputCarrier.reified(typeArgs[0], typeArgs[1]).new({
      content: decodeFromFieldsWithTypes(
        Balance.reified(typeArgs[0]),
        item.fields.content,
      ),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: Uint8Array,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return InputCarrier.fromFields(typeArgs, InputCarrier.bcs.parse(data));
  }

  toJSONField() {
    return {
      content: this.content.toJSONField(),
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
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    field: any,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return InputCarrier.reified(typeArgs[0], typeArgs[1]).new({
      content: decodeFromJSONField(Balance.reified(typeArgs[0]), field.content),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    json: Record<string, any>,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (json.$typeName !== InputCarrier.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(InputCarrier.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return InputCarrier.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    content: SuiParsedData,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isInputCarrier(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a InputCarrier object`,
      );
    }
    return InputCarrier.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: SuiObjectData,
  ): InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isInputCarrier(data.bcs.type)
      ) {
        throw new Error(`object at is not a InputCarrier object`);
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

      return InputCarrier.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return InputCarrier.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T, R],
    id: string,
  ): Promise<InputCarrier<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching InputCarrier object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isInputCarrier(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a InputCarrier object`);
    }

    return InputCarrier.fromSuiObjectData(typeArgs, res.data);
  }
}
