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
import { PKG_V12 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import type { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Output =============================== */

export function isOutput(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V12}::pipe_events::Output` + "<");
}

export interface OutputFields<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> {
  volume: ToField<"u64">;
}

export type OutputReified<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> = Reified<Output<T, R>, OutputFields<T, R>>;

export class Output<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V12}::pipe_events::Output`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = Output.$typeName;
  readonly $fullTypeName: `${typeof PKG_V12}::pipe_events::Output<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>];
  readonly $isPhantom = Output.$isPhantom;

  readonly volume: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>],
    fields: OutputFields<T, R>,
  ) {
    this.$fullTypeName = composeSuiType(
      Output.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V12}::pipe_events::Output<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.volume = fields.volume;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): OutputReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return {
      typeName: Output.$typeName,
      fullTypeName: composeSuiType(
        Output.$typeName,
        ...[extractType(T), extractType(R)],
      ) as `${typeof PKG_V12}::pipe_events::Output<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(T), extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: Output.$isPhantom,
      reifiedTypeArgs: [T, R],
      fromFields: (fields: Record<string, any>) =>
        Output.fromFields([T, R], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Output.fromFieldsWithTypes([T, R], item),
      fromBcs: (data: Uint8Array) => Output.fromBcs([T, R], data),
      bcs: Output.bcs,
      fromJSONField: (field: any) => Output.fromJSONField([T, R], field),
      fromJSON: (json: Record<string, any>) => Output.fromJSON([T, R], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Output.fromSuiParsedData([T, R], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Output.fromSuiObjectData([T, R], content),
      fetch: async (client: SuiClient, id: string) =>
        Output.fetch(client, [T, R], id),
      new: (
        fields: OutputFields<
          ToPhantomTypeArgument<T>,
          ToPhantomTypeArgument<R>
        >,
      ) => {
        return new Output([extractType(T), extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Output.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PhantomReified<
    ToTypeStr<Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>>
  > {
    return phantom(Output.reified(T, R));
  }
  static get p() {
    return Output.phantom;
  }

  static get bcs() {
    return bcs.struct("Output", {
      volume: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    fields: Record<string, any>,
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Output.reified(typeArgs[0], typeArgs[1]).new({
      volume: decodeFromFields("u64", fields.volume),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    item: FieldsWithTypes,
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (!isOutput(item.type)) {
      throw new Error("not a Output type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Output.reified(typeArgs[0], typeArgs[1]).new({
      volume: decodeFromFieldsWithTypes("u64", item.fields.volume),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: Uint8Array,
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Output.fromFields(typeArgs, Output.bcs.parse(data));
  }

  toJSONField() {
    return {
      volume: this.volume.toString(),
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
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Output.reified(typeArgs[0], typeArgs[1]).new({
      volume: decodeFromJSONField("u64", field.volume),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    json: Record<string, any>,
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (json.$typeName !== Output.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Output.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return Output.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    content: SuiParsedData,
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isOutput(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Output object`,
      );
    }
    return Output.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: SuiObjectData,
  ): Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isOutput(data.bcs.type)) {
        throw new Error(`object at is not a Output object`);
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

      return Output.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Output.fromSuiParsedData(typeArgs, data.content);
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
  ): Promise<Output<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Output object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isOutput(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Output object`);
    }

    return Output.fromSuiObjectData(typeArgs, res.data);
  }
}

/* ============================== Input =============================== */

export function isInput(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V12}::pipe_events::Input` + "<");
}

export interface InputFields<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> {
  volume: ToField<"u64">;
}

export type InputReified<
  T extends PhantomTypeArgument,
  R extends PhantomTypeArgument,
> = Reified<Input<T, R>, InputFields<T, R>>;

export class Input<T extends PhantomTypeArgument, R extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V12}::pipe_events::Input`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = Input.$typeName;
  readonly $fullTypeName: `${typeof PKG_V12}::pipe_events::Input<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>];
  readonly $isPhantom = Input.$isPhantom;

  readonly volume: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>, PhantomToTypeStr<R>],
    fields: InputFields<T, R>,
  ) {
    this.$fullTypeName = composeSuiType(
      Input.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V12}::pipe_events::Input<${PhantomToTypeStr<T>}, ${PhantomToTypeStr<R>}>`;
    this.$typeArgs = typeArgs;

    this.volume = fields.volume;
  }

  static reified<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): InputReified<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return {
      typeName: Input.$typeName,
      fullTypeName: composeSuiType(
        Input.$typeName,
        ...[extractType(T), extractType(R)],
      ) as `${typeof PKG_V12}::pipe_events::Input<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<R>>}>`,
      typeArgs: [extractType(T), extractType(R)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
        PhantomToTypeStr<ToPhantomTypeArgument<R>>,
      ],
      isPhantom: Input.$isPhantom,
      reifiedTypeArgs: [T, R],
      fromFields: (fields: Record<string, any>) =>
        Input.fromFields([T, R], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Input.fromFieldsWithTypes([T, R], item),
      fromBcs: (data: Uint8Array) => Input.fromBcs([T, R], data),
      bcs: Input.bcs,
      fromJSONField: (field: any) => Input.fromJSONField([T, R], field),
      fromJSON: (json: Record<string, any>) => Input.fromJSON([T, R], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Input.fromSuiParsedData([T, R], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Input.fromSuiObjectData([T, R], content),
      fetch: async (client: SuiClient, id: string) =>
        Input.fetch(client, [T, R], id),
      new: (
        fields: InputFields<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>,
      ) => {
        return new Input([extractType(T), extractType(R)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Input.reified;
  }

  static phantom<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    T: T,
    R: R,
  ): PhantomReified<
    ToTypeStr<Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>>
  > {
    return phantom(Input.reified(T, R));
  }
  static get p() {
    return Input.phantom;
  }

  static get bcs() {
    return bcs.struct("Input", {
      volume: bcs.u64(),
    });
  }

  static fromFields<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    fields: Record<string, any>,
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Input.reified(typeArgs[0], typeArgs[1]).new({
      volume: decodeFromFields("u64", fields.volume),
    });
  }

  static fromFieldsWithTypes<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    item: FieldsWithTypes,
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (!isInput(item.type)) {
      throw new Error("not a Input type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Input.reified(typeArgs[0], typeArgs[1]).new({
      volume: decodeFromFieldsWithTypes("u64", item.fields.volume),
    });
  }

  static fromBcs<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: Uint8Array,
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Input.fromFields(typeArgs, Input.bcs.parse(data));
  }

  toJSONField() {
    return {
      volume: this.volume.toString(),
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
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    return Input.reified(typeArgs[0], typeArgs[1]).new({
      volume: decodeFromJSONField("u64", field.volume),
    });
  }

  static fromJSON<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    json: Record<string, any>,
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (json.$typeName !== Input.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Input.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return Input.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    content: SuiParsedData,
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isInput(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Input object`,
      );
    }
    return Input.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T extends PhantomReified<PhantomTypeArgument>,
    R extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T, R],
    data: SuiObjectData,
  ): Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isInput(data.bcs.type)) {
        throw new Error(`object at is not a Input object`);
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

      return Input.fromBcs(typeArgs, fromB64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Input.fromSuiParsedData(typeArgs, data.content);
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
  ): Promise<Input<ToPhantomTypeArgument<T>, ToPhantomTypeArgument<R>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Input object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isInput(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Input object`);
    }

    return Input.fromSuiObjectData(typeArgs, res.data);
  }
}
