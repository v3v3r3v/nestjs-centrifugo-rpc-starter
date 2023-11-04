/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "echo";

export interface EchoRequest {
  message: string;
}

export interface EchoResponse {
  message: string;
}

export interface EchoReverseRequest {
  message: string;
}

export interface EchoReverseResponse {
  message: string;
}

function createBaseEchoRequest(): EchoRequest {
  return { message: "" };
}

export const EchoRequest = {
  encode(message: EchoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoRequest {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EchoRequest>, I>>(base?: I): EchoRequest {
    return EchoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EchoRequest>, I>>(object: I): EchoRequest {
    const message = createBaseEchoRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseEchoResponse(): EchoResponse {
  return { message: "" };
}

export const EchoResponse = {
  encode(message: EchoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EchoResponse>, I>>(base?: I): EchoResponse {
    return EchoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EchoResponse>, I>>(object: I): EchoResponse {
    const message = createBaseEchoResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseEchoReverseRequest(): EchoReverseRequest {
  return { message: "" };
}

export const EchoReverseRequest = {
  encode(message: EchoReverseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoReverseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoReverseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoReverseRequest {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: EchoReverseRequest): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EchoReverseRequest>, I>>(base?: I): EchoReverseRequest {
    return EchoReverseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EchoReverseRequest>, I>>(object: I): EchoReverseRequest {
    const message = createBaseEchoReverseRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseEchoReverseResponse(): EchoReverseResponse {
  return { message: "" };
}

export const EchoReverseResponse = {
  encode(message: EchoReverseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoReverseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoReverseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EchoReverseResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: EchoReverseResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EchoReverseResponse>, I>>(base?: I): EchoReverseResponse {
    return EchoReverseResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EchoReverseResponse>, I>>(object: I): EchoReverseResponse {
    const message = createBaseEchoReverseResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface EchoService {
  Echo(request: EchoRequest): Promise<EchoResponse>;
  EchoReverse(request: EchoReverseRequest): Promise<EchoReverseResponse>;
}

export const EchoServiceServiceName = "echo.EchoService";
export class EchoServiceClientImpl implements EchoService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || EchoServiceServiceName;
    this.rpc = rpc;
    this.Echo = this.Echo.bind(this);
    this.EchoReverse = this.EchoReverse.bind(this);
  }
  Echo(request: EchoRequest): Promise<EchoResponse> {
    const data = EchoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Echo", data);
    return promise.then((data) => EchoResponse.decode(_m0.Reader.create(data)));
  }

  EchoReverse(request: EchoReverseRequest): Promise<EchoReverseResponse> {
    const data = EchoReverseRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EchoReverse", data);
    return promise.then((data) => EchoReverseResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
