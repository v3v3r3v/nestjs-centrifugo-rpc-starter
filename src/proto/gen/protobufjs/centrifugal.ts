/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import Long = require("long");

export const protobufPackage = "centrifugal.centrifugo.proxy";

export interface Disconnect {
  code: number;
  reason: string;
}

export interface Error {
  code: number;
  message: string;
  temporary: boolean;
}

export interface ConnectRequest {
  client: string;
  transport: string;
  protocol: string;
  encoding: string;
  data: Uint8Array;
  b64data: string;
  name: string;
  version: string;
  channels: string[];
}

export interface SubscribeOptions {
  expireAt: number;
  info: Uint8Array;
  b64info: string;
  data: Uint8Array;
  b64data: string;
  override: SubscribeOptionOverride | undefined;
}

export interface ConnectResult {
  user: string;
  expireAt: number;
  info: Uint8Array;
  b64info: string;
  data: Uint8Array;
  b64data: string;
  channels: string[];
  subs: { [key: string]: SubscribeOptions };
  meta: Uint8Array;
  caps: ChannelsCapability[];
}

export interface ConnectResult_SubsEntry {
  key: string;
  value: SubscribeOptions | undefined;
}

export interface ChannelsCapability {
  channels: string[];
  allow: string[];
  match: string;
}

export interface ConnectResponse {
  result: ConnectResult | undefined;
  error: Error | undefined;
  disconnect: Disconnect | undefined;
}

export interface RefreshRequest {
  client: string;
  transport: string;
  protocol: string;
  encoding: string;
  user: string;
  meta: Uint8Array;
}

export interface RefreshResult {
  expired: boolean;
  expireAt: number;
  info: Uint8Array;
  b64info: string;
  meta: Uint8Array;
  caps: ChannelsCapability[];
}

export interface RefreshResponse {
  result: RefreshResult | undefined;
  error: Error | undefined;
  disconnect: Disconnect | undefined;
}

export interface SubscribeRequest {
  client: string;
  transport: string;
  protocol: string;
  encoding: string;
  user: string;
  channel: string;
  token: string;
  meta: Uint8Array;
  data: Uint8Array;
  b64data: string;
}

export interface BoolValue {
  value: boolean;
}

export interface Int32Value {
  value: number;
}

export interface SubscribeOptionOverride {
  presence: BoolValue | undefined;
  joinLeave: BoolValue | undefined;
  forceRecovery: BoolValue | undefined;
  forcePositioning: BoolValue | undefined;
  forcePushJoinLeave: BoolValue | undefined;
}

export interface SubscribeResult {
  expireAt: number;
  info: Uint8Array;
  b64info: string;
  data: Uint8Array;
  b64data: string;
  override: SubscribeOptionOverride | undefined;
  allow: string[];
}

export interface SubscribeResponse {
  result: SubscribeResult | undefined;
  error: Error | undefined;
  disconnect: Disconnect | undefined;
}

export interface PublishRequest {
  client: string;
  transport: string;
  protocol: string;
  encoding: string;
  user: string;
  channel: string;
  data: Uint8Array;
  b64data: string;
  meta: Uint8Array;
}

export interface PublishResult {
  data: Uint8Array;
  b64data: string;
  skipHistory: boolean;
}

export interface PublishResponse {
  result: PublishResult | undefined;
  error: Error | undefined;
  disconnect: Disconnect | undefined;
}

export interface RPCRequest {
  client: string;
  transport: string;
  protocol: string;
  encoding: string;
  user: string;
  method: string;
  data: Uint8Array;
  b64data: string;
  meta: Uint8Array;
}

export interface RPCResult {
  data: Uint8Array;
  b64data: string;
}

export interface RPCResponse {
  result: RPCResult | undefined;
  error: Error | undefined;
  disconnect: Disconnect | undefined;
}

export interface SubRefreshRequest {
  client: string;
  transport: string;
  protocol: string;
  encoding: string;
  user: string;
  channel: string;
  meta: Uint8Array;
}

export interface SubRefreshResult {
  expired: boolean;
  expireAt: number;
  info: Uint8Array;
  b64info: string;
}

export interface SubRefreshResponse {
  result: SubRefreshResult | undefined;
  error: Error | undefined;
  disconnect: Disconnect | undefined;
}

/**
 * Publication is an event to be sent to a client.
 * We intentionally make it use the same Protobuf numbers for fields as our client protocol
 * Publication - for now only for consistency.
 */
export interface Publication {
  data: Uint8Array;
  tags: { [key: string]: string };
}

export interface Publication_TagsEntry {
  key: string;
  value: string;
}

export interface StreamSubscribeRequest {
  /**
   * Centrifugo always sends this within the first message upon user subscription request.
   * It's always not set in the following StreamRequest messages from Centrifugo.
   */
  subscribeRequest:
    | SubscribeRequest
    | undefined;
  /**
   * Publication may be set when client publishes to the on-demand stream. If you are using
   * bidirectional stream then Centrifugo assumes publications from client-side are allowed.
   */
  publication: Publication | undefined;
}

export interface StreamSubscribeResponse {
  /** SubscribeResponse may optionally be set in the first message from backend to Centrifugo. */
  subscribeResponse:
    | SubscribeResponse
    | undefined;
  /** Publication goes to client. Can't be set in the first message from backend to Centrifugo. */
  publication: Publication | undefined;
}

export interface NotifyChannelStateRequest {
  events: ChannelEvent[];
}

export interface ChannelEvent {
  timeMs: number;
  channel: string;
  /** "occupied" | "vacated" | could be more in the future. Not using enums for better JSON interop. */
  type: string;
}

export interface NotifyChannelStateResponse {
  result: NotifyChannelStateResult | undefined;
  error: Error | undefined;
}

export interface NotifyChannelStateResult {
}

function createBaseDisconnect(): Disconnect {
  return { code: 0, reason: "" };
}

export const Disconnect = {
  encode(message: Disconnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Disconnect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Disconnect {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: Disconnect): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Disconnect>, I>>(base?: I): Disconnect {
    return Disconnect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Disconnect>, I>>(object: I): Disconnect {
    const message = createBaseDisconnect();
    message.code = object.code ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseError(): Error {
  return { code: 0, message: "", temporary: false };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.temporary === true) {
      writer.uint32(24).bool(message.temporary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.temporary = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      temporary: isSet(object.temporary) ? globalThis.Boolean(object.temporary) : false,
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.temporary === true) {
      obj.temporary = message.temporary;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.temporary = object.temporary ?? false;
    return message;
  },
};

function createBaseConnectRequest(): ConnectRequest {
  return {
    client: "",
    transport: "",
    protocol: "",
    encoding: "",
    data: new Uint8Array(0),
    b64data: "",
    name: "",
    version: "",
    channels: [],
  };
}

export const ConnectRequest = {
  encode(message: ConnectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== "") {
      writer.uint32(10).string(message.client);
    }
    if (message.transport !== "") {
      writer.uint32(18).string(message.transport);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.data.length !== 0) {
      writer.uint32(82).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(90).string(message.b64data);
    }
    if (message.name !== "") {
      writer.uint32(98).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(106).string(message.version);
    }
    for (const v of message.channels) {
      writer.uint32(114).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.name = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.version = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.channels.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectRequest {
    return {
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      transport: isSet(object.transport) ? globalThis.String(object.transport) : "",
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      channels: globalThis.Array.isArray(object?.channels) ? object.channels.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: ConnectRequest): unknown {
    const obj: any = {};
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.transport !== "") {
      obj.transport = message.transport;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.channels?.length) {
      obj.channels = message.channels;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectRequest>, I>>(base?: I): ConnectRequest {
    return ConnectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectRequest>, I>>(object: I): ConnectRequest {
    const message = createBaseConnectRequest();
    message.client = object.client ?? "";
    message.transport = object.transport ?? "";
    message.protocol = object.protocol ?? "";
    message.encoding = object.encoding ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubscribeOptions(): SubscribeOptions {
  return {
    expireAt: 0,
    info: new Uint8Array(0),
    b64info: "",
    data: new Uint8Array(0),
    b64data: "",
    override: undefined,
  };
}

export const SubscribeOptions = {
  encode(message: SubscribeOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expireAt !== 0) {
      writer.uint32(8).int64(message.expireAt);
    }
    if (message.info.length !== 0) {
      writer.uint32(18).bytes(message.info);
    }
    if (message.b64info !== "") {
      writer.uint32(26).string(message.b64info);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(42).string(message.b64data);
    }
    if (message.override !== undefined) {
      SubscribeOptionOverride.encode(message.override, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.expireAt = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.info = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.b64info = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.override = SubscribeOptionOverride.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeOptions {
    return {
      expireAt: isSet(object.expireAt) ? globalThis.Number(object.expireAt) : 0,
      info: isSet(object.info) ? bytesFromBase64(object.info) : new Uint8Array(0),
      b64info: isSet(object.b64info) ? globalThis.String(object.b64info) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      override: isSet(object.override) ? SubscribeOptionOverride.fromJSON(object.override) : undefined,
    };
  },

  toJSON(message: SubscribeOptions): unknown {
    const obj: any = {};
    if (message.expireAt !== 0) {
      obj.expireAt = Math.round(message.expireAt);
    }
    if (message.info.length !== 0) {
      obj.info = base64FromBytes(message.info);
    }
    if (message.b64info !== "") {
      obj.b64info = message.b64info;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.override !== undefined) {
      obj.override = SubscribeOptionOverride.toJSON(message.override);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeOptions>, I>>(base?: I): SubscribeOptions {
    return SubscribeOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeOptions>, I>>(object: I): SubscribeOptions {
    const message = createBaseSubscribeOptions();
    message.expireAt = object.expireAt ?? 0;
    message.info = object.info ?? new Uint8Array(0);
    message.b64info = object.b64info ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.override = (object.override !== undefined && object.override !== null)
      ? SubscribeOptionOverride.fromPartial(object.override)
      : undefined;
    return message;
  },
};

function createBaseConnectResult(): ConnectResult {
  return {
    user: "",
    expireAt: 0,
    info: new Uint8Array(0),
    b64info: "",
    data: new Uint8Array(0),
    b64data: "",
    channels: [],
    subs: {},
    meta: new Uint8Array(0),
    caps: [],
  };
}

export const ConnectResult = {
  encode(message: ConnectResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.expireAt !== 0) {
      writer.uint32(16).int64(message.expireAt);
    }
    if (message.info.length !== 0) {
      writer.uint32(26).bytes(message.info);
    }
    if (message.b64info !== "") {
      writer.uint32(34).string(message.b64info);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(50).string(message.b64data);
    }
    for (const v of message.channels) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.subs).forEach(([key, value]) => {
      ConnectResult_SubsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.meta.length !== 0) {
      writer.uint32(74).bytes(message.meta);
    }
    for (const v of message.caps) {
      ChannelsCapability.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expireAt = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.info = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.b64info = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.channels.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = ConnectResult_SubsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.subs[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.meta = reader.bytes();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.caps.push(ChannelsCapability.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectResult {
    return {
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      expireAt: isSet(object.expireAt) ? globalThis.Number(object.expireAt) : 0,
      info: isSet(object.info) ? bytesFromBase64(object.info) : new Uint8Array(0),
      b64info: isSet(object.b64info) ? globalThis.String(object.b64info) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      channels: globalThis.Array.isArray(object?.channels) ? object.channels.map((e: any) => globalThis.String(e)) : [],
      subs: isObject(object.subs)
        ? Object.entries(object.subs).reduce<{ [key: string]: SubscribeOptions }>((acc, [key, value]) => {
          acc[key] = SubscribeOptions.fromJSON(value);
          return acc;
        }, {})
        : {},
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
      caps: globalThis.Array.isArray(object?.caps) ? object.caps.map((e: any) => ChannelsCapability.fromJSON(e)) : [],
    };
  },

  toJSON(message: ConnectResult): unknown {
    const obj: any = {};
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.expireAt !== 0) {
      obj.expireAt = Math.round(message.expireAt);
    }
    if (message.info.length !== 0) {
      obj.info = base64FromBytes(message.info);
    }
    if (message.b64info !== "") {
      obj.b64info = message.b64info;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.channels?.length) {
      obj.channels = message.channels;
    }
    if (message.subs) {
      const entries = Object.entries(message.subs);
      if (entries.length > 0) {
        obj.subs = {};
        entries.forEach(([k, v]) => {
          obj.subs[k] = SubscribeOptions.toJSON(v);
        });
      }
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    if (message.caps?.length) {
      obj.caps = message.caps.map((e) => ChannelsCapability.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectResult>, I>>(base?: I): ConnectResult {
    return ConnectResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectResult>, I>>(object: I): ConnectResult {
    const message = createBaseConnectResult();
    message.user = object.user ?? "";
    message.expireAt = object.expireAt ?? 0;
    message.info = object.info ?? new Uint8Array(0);
    message.b64info = object.b64info ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.channels = object.channels?.map((e) => e) || [];
    message.subs = Object.entries(object.subs ?? {}).reduce<{ [key: string]: SubscribeOptions }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = SubscribeOptions.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.meta = object.meta ?? new Uint8Array(0);
    message.caps = object.caps?.map((e) => ChannelsCapability.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConnectResult_SubsEntry(): ConnectResult_SubsEntry {
  return { key: "", value: undefined };
}

export const ConnectResult_SubsEntry = {
  encode(message: ConnectResult_SubsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SubscribeOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectResult_SubsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectResult_SubsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = SubscribeOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectResult_SubsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? SubscribeOptions.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ConnectResult_SubsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = SubscribeOptions.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectResult_SubsEntry>, I>>(base?: I): ConnectResult_SubsEntry {
    return ConnectResult_SubsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectResult_SubsEntry>, I>>(object: I): ConnectResult_SubsEntry {
    const message = createBaseConnectResult_SubsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? SubscribeOptions.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseChannelsCapability(): ChannelsCapability {
  return { channels: [], allow: [], match: "" };
}

export const ChannelsCapability = {
  encode(message: ChannelsCapability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.allow) {
      writer.uint32(18).string(v!);
    }
    if (message.match !== "") {
      writer.uint32(26).string(message.match);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelsCapability {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelsCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channels.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allow.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.match = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelsCapability {
    return {
      channels: globalThis.Array.isArray(object?.channels) ? object.channels.map((e: any) => globalThis.String(e)) : [],
      allow: globalThis.Array.isArray(object?.allow) ? object.allow.map((e: any) => globalThis.String(e)) : [],
      match: isSet(object.match) ? globalThis.String(object.match) : "",
    };
  },

  toJSON(message: ChannelsCapability): unknown {
    const obj: any = {};
    if (message.channels?.length) {
      obj.channels = message.channels;
    }
    if (message.allow?.length) {
      obj.allow = message.allow;
    }
    if (message.match !== "") {
      obj.match = message.match;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelsCapability>, I>>(base?: I): ChannelsCapability {
    return ChannelsCapability.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelsCapability>, I>>(object: I): ChannelsCapability {
    const message = createBaseChannelsCapability();
    message.channels = object.channels?.map((e) => e) || [];
    message.allow = object.allow?.map((e) => e) || [];
    message.match = object.match ?? "";
    return message;
  },
};

function createBaseConnectResponse(): ConnectResponse {
  return { result: undefined, error: undefined, disconnect: undefined };
}

export const ConnectResponse = {
  encode(message: ConnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      ConnectResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.disconnect !== undefined) {
      Disconnect.encode(message.disconnect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = ConnectResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disconnect = Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConnectResponse {
    return {
      result: isSet(object.result) ? ConnectResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      disconnect: isSet(object.disconnect) ? Disconnect.fromJSON(object.disconnect) : undefined,
    };
  },

  toJSON(message: ConnectResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = ConnectResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.disconnect !== undefined) {
      obj.disconnect = Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConnectResponse>, I>>(base?: I): ConnectResponse {
    return ConnectResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConnectResponse>, I>>(object: I): ConnectResponse {
    const message = createBaseConnectResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? ConnectResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.disconnect = (object.disconnect !== undefined && object.disconnect !== null)
      ? Disconnect.fromPartial(object.disconnect)
      : undefined;
    return message;
  },
};

function createBaseRefreshRequest(): RefreshRequest {
  return { client: "", transport: "", protocol: "", encoding: "", user: "", meta: new Uint8Array(0) };
}

export const RefreshRequest = {
  encode(message: RefreshRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== "") {
      writer.uint32(10).string(message.client);
    }
    if (message.transport !== "") {
      writer.uint32(18).string(message.transport);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.user !== "") {
      writer.uint32(82).string(message.user);
    }
    if (message.meta.length !== 0) {
      writer.uint32(90).bytes(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.user = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.meta = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RefreshRequest {
    return {
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      transport: isSet(object.transport) ? globalThis.String(object.transport) : "",
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
    };
  },

  toJSON(message: RefreshRequest): unknown {
    const obj: any = {};
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.transport !== "") {
      obj.transport = message.transport;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshRequest>, I>>(base?: I): RefreshRequest {
    return RefreshRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshRequest>, I>>(object: I): RefreshRequest {
    const message = createBaseRefreshRequest();
    message.client = object.client ?? "";
    message.transport = object.transport ?? "";
    message.protocol = object.protocol ?? "";
    message.encoding = object.encoding ?? "";
    message.user = object.user ?? "";
    message.meta = object.meta ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRefreshResult(): RefreshResult {
  return { expired: false, expireAt: 0, info: new Uint8Array(0), b64info: "", meta: new Uint8Array(0), caps: [] };
}

export const RefreshResult = {
  encode(message: RefreshResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expired === true) {
      writer.uint32(8).bool(message.expired);
    }
    if (message.expireAt !== 0) {
      writer.uint32(16).int64(message.expireAt);
    }
    if (message.info.length !== 0) {
      writer.uint32(26).bytes(message.info);
    }
    if (message.b64info !== "") {
      writer.uint32(34).string(message.b64info);
    }
    if (message.meta.length !== 0) {
      writer.uint32(42).bytes(message.meta);
    }
    for (const v of message.caps) {
      ChannelsCapability.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.expired = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expireAt = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.info = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.b64info = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.meta = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.caps.push(ChannelsCapability.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RefreshResult {
    return {
      expired: isSet(object.expired) ? globalThis.Boolean(object.expired) : false,
      expireAt: isSet(object.expireAt) ? globalThis.Number(object.expireAt) : 0,
      info: isSet(object.info) ? bytesFromBase64(object.info) : new Uint8Array(0),
      b64info: isSet(object.b64info) ? globalThis.String(object.b64info) : "",
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
      caps: globalThis.Array.isArray(object?.caps) ? object.caps.map((e: any) => ChannelsCapability.fromJSON(e)) : [],
    };
  },

  toJSON(message: RefreshResult): unknown {
    const obj: any = {};
    if (message.expired === true) {
      obj.expired = message.expired;
    }
    if (message.expireAt !== 0) {
      obj.expireAt = Math.round(message.expireAt);
    }
    if (message.info.length !== 0) {
      obj.info = base64FromBytes(message.info);
    }
    if (message.b64info !== "") {
      obj.b64info = message.b64info;
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    if (message.caps?.length) {
      obj.caps = message.caps.map((e) => ChannelsCapability.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshResult>, I>>(base?: I): RefreshResult {
    return RefreshResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshResult>, I>>(object: I): RefreshResult {
    const message = createBaseRefreshResult();
    message.expired = object.expired ?? false;
    message.expireAt = object.expireAt ?? 0;
    message.info = object.info ?? new Uint8Array(0);
    message.b64info = object.b64info ?? "";
    message.meta = object.meta ?? new Uint8Array(0);
    message.caps = object.caps?.map((e) => ChannelsCapability.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRefreshResponse(): RefreshResponse {
  return { result: undefined, error: undefined, disconnect: undefined };
}

export const RefreshResponse = {
  encode(message: RefreshResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      RefreshResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.disconnect !== undefined) {
      Disconnect.encode(message.disconnect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = RefreshResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disconnect = Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RefreshResponse {
    return {
      result: isSet(object.result) ? RefreshResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      disconnect: isSet(object.disconnect) ? Disconnect.fromJSON(object.disconnect) : undefined,
    };
  },

  toJSON(message: RefreshResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = RefreshResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.disconnect !== undefined) {
      obj.disconnect = Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshResponse>, I>>(base?: I): RefreshResponse {
    return RefreshResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshResponse>, I>>(object: I): RefreshResponse {
    const message = createBaseRefreshResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? RefreshResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.disconnect = (object.disconnect !== undefined && object.disconnect !== null)
      ? Disconnect.fromPartial(object.disconnect)
      : undefined;
    return message;
  },
};

function createBaseSubscribeRequest(): SubscribeRequest {
  return {
    client: "",
    transport: "",
    protocol: "",
    encoding: "",
    user: "",
    channel: "",
    token: "",
    meta: new Uint8Array(0),
    data: new Uint8Array(0),
    b64data: "",
  };
}

export const SubscribeRequest = {
  encode(message: SubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== "") {
      writer.uint32(10).string(message.client);
    }
    if (message.transport !== "") {
      writer.uint32(18).string(message.transport);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.user !== "") {
      writer.uint32(82).string(message.user);
    }
    if (message.channel !== "") {
      writer.uint32(90).string(message.channel);
    }
    if (message.token !== "") {
      writer.uint32(98).string(message.token);
    }
    if (message.meta.length !== 0) {
      writer.uint32(106).bytes(message.meta);
    }
    if (message.data.length !== 0) {
      writer.uint32(114).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(122).string(message.b64data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.user = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.token = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.meta = reader.bytes();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.b64data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest {
    return {
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      transport: isSet(object.transport) ? globalThis.String(object.transport) : "",
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
    };
  },

  toJSON(message: SubscribeRequest): unknown {
    const obj: any = {};
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.transport !== "") {
      obj.transport = message.transport;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest>, I>>(base?: I): SubscribeRequest {
    return SubscribeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeRequest>, I>>(object: I): SubscribeRequest {
    const message = createBaseSubscribeRequest();
    message.client = object.client ?? "";
    message.transport = object.transport ?? "";
    message.protocol = object.protocol ?? "";
    message.encoding = object.encoding ?? "";
    message.user = object.user ?? "";
    message.channel = object.channel ?? "";
    message.token = object.token ?? "";
    message.meta = object.meta ?? new Uint8Array(0);
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    return message;
  },
};

function createBaseBoolValue(): BoolValue {
  return { value: false };
}

export const BoolValue = {
  encode(message: BoolValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoolValue {
    return { value: isSet(object.value) ? globalThis.Boolean(object.value) : false };
  },

  toJSON(message: BoolValue): unknown {
    const obj: any = {};
    if (message.value === true) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BoolValue>, I>>(base?: I): BoolValue {
    return BoolValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BoolValue>, I>>(object: I): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseInt32Value(): Int32Value {
  return { value: 0 };
}

export const Int32Value = {
  encode(message: Int32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Int32Value {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: Int32Value): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Int32Value>, I>>(base?: I): Int32Value {
    return Int32Value.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Int32Value>, I>>(object: I): Int32Value {
    const message = createBaseInt32Value();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSubscribeOptionOverride(): SubscribeOptionOverride {
  return {
    presence: undefined,
    joinLeave: undefined,
    forceRecovery: undefined,
    forcePositioning: undefined,
    forcePushJoinLeave: undefined,
  };
}

export const SubscribeOptionOverride = {
  encode(message: SubscribeOptionOverride, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.presence !== undefined) {
      BoolValue.encode(message.presence, writer.uint32(10).fork()).ldelim();
    }
    if (message.joinLeave !== undefined) {
      BoolValue.encode(message.joinLeave, writer.uint32(18).fork()).ldelim();
    }
    if (message.forceRecovery !== undefined) {
      BoolValue.encode(message.forceRecovery, writer.uint32(26).fork()).ldelim();
    }
    if (message.forcePositioning !== undefined) {
      BoolValue.encode(message.forcePositioning, writer.uint32(34).fork()).ldelim();
    }
    if (message.forcePushJoinLeave !== undefined) {
      BoolValue.encode(message.forcePushJoinLeave, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOptionOverride {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOptionOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presence = BoolValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.joinLeave = BoolValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.forceRecovery = BoolValue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.forcePositioning = BoolValue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.forcePushJoinLeave = BoolValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeOptionOverride {
    return {
      presence: isSet(object.presence) ? BoolValue.fromJSON(object.presence) : undefined,
      joinLeave: isSet(object.joinLeave) ? BoolValue.fromJSON(object.joinLeave) : undefined,
      forceRecovery: isSet(object.forceRecovery) ? BoolValue.fromJSON(object.forceRecovery) : undefined,
      forcePositioning: isSet(object.forcePositioning) ? BoolValue.fromJSON(object.forcePositioning) : undefined,
      forcePushJoinLeave: isSet(object.forcePushJoinLeave) ? BoolValue.fromJSON(object.forcePushJoinLeave) : undefined,
    };
  },

  toJSON(message: SubscribeOptionOverride): unknown {
    const obj: any = {};
    if (message.presence !== undefined) {
      obj.presence = BoolValue.toJSON(message.presence);
    }
    if (message.joinLeave !== undefined) {
      obj.joinLeave = BoolValue.toJSON(message.joinLeave);
    }
    if (message.forceRecovery !== undefined) {
      obj.forceRecovery = BoolValue.toJSON(message.forceRecovery);
    }
    if (message.forcePositioning !== undefined) {
      obj.forcePositioning = BoolValue.toJSON(message.forcePositioning);
    }
    if (message.forcePushJoinLeave !== undefined) {
      obj.forcePushJoinLeave = BoolValue.toJSON(message.forcePushJoinLeave);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeOptionOverride>, I>>(base?: I): SubscribeOptionOverride {
    return SubscribeOptionOverride.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeOptionOverride>, I>>(object: I): SubscribeOptionOverride {
    const message = createBaseSubscribeOptionOverride();
    message.presence = (object.presence !== undefined && object.presence !== null)
      ? BoolValue.fromPartial(object.presence)
      : undefined;
    message.joinLeave = (object.joinLeave !== undefined && object.joinLeave !== null)
      ? BoolValue.fromPartial(object.joinLeave)
      : undefined;
    message.forceRecovery = (object.forceRecovery !== undefined && object.forceRecovery !== null)
      ? BoolValue.fromPartial(object.forceRecovery)
      : undefined;
    message.forcePositioning = (object.forcePositioning !== undefined && object.forcePositioning !== null)
      ? BoolValue.fromPartial(object.forcePositioning)
      : undefined;
    message.forcePushJoinLeave = (object.forcePushJoinLeave !== undefined && object.forcePushJoinLeave !== null)
      ? BoolValue.fromPartial(object.forcePushJoinLeave)
      : undefined;
    return message;
  },
};

function createBaseSubscribeResult(): SubscribeResult {
  return {
    expireAt: 0,
    info: new Uint8Array(0),
    b64info: "",
    data: new Uint8Array(0),
    b64data: "",
    override: undefined,
    allow: [],
  };
}

export const SubscribeResult = {
  encode(message: SubscribeResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expireAt !== 0) {
      writer.uint32(8).int64(message.expireAt);
    }
    if (message.info.length !== 0) {
      writer.uint32(18).bytes(message.info);
    }
    if (message.b64info !== "") {
      writer.uint32(26).string(message.b64info);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(42).string(message.b64data);
    }
    if (message.override !== undefined) {
      SubscribeOptionOverride.encode(message.override, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.allow) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.expireAt = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.info = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.b64info = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.override = SubscribeOptionOverride.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.allow.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeResult {
    return {
      expireAt: isSet(object.expireAt) ? globalThis.Number(object.expireAt) : 0,
      info: isSet(object.info) ? bytesFromBase64(object.info) : new Uint8Array(0),
      b64info: isSet(object.b64info) ? globalThis.String(object.b64info) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      override: isSet(object.override) ? SubscribeOptionOverride.fromJSON(object.override) : undefined,
      allow: globalThis.Array.isArray(object?.allow) ? object.allow.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: SubscribeResult): unknown {
    const obj: any = {};
    if (message.expireAt !== 0) {
      obj.expireAt = Math.round(message.expireAt);
    }
    if (message.info.length !== 0) {
      obj.info = base64FromBytes(message.info);
    }
    if (message.b64info !== "") {
      obj.b64info = message.b64info;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.override !== undefined) {
      obj.override = SubscribeOptionOverride.toJSON(message.override);
    }
    if (message.allow?.length) {
      obj.allow = message.allow;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResult>, I>>(base?: I): SubscribeResult {
    return SubscribeResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeResult>, I>>(object: I): SubscribeResult {
    const message = createBaseSubscribeResult();
    message.expireAt = object.expireAt ?? 0;
    message.info = object.info ?? new Uint8Array(0);
    message.b64info = object.b64info ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.override = (object.override !== undefined && object.override !== null)
      ? SubscribeOptionOverride.fromPartial(object.override)
      : undefined;
    message.allow = object.allow?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubscribeResponse(): SubscribeResponse {
  return { result: undefined, error: undefined, disconnect: undefined };
}

export const SubscribeResponse = {
  encode(message: SubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      SubscribeResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.disconnect !== undefined) {
      Disconnect.encode(message.disconnect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = SubscribeResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disconnect = Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeResponse {
    return {
      result: isSet(object.result) ? SubscribeResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      disconnect: isSet(object.disconnect) ? Disconnect.fromJSON(object.disconnect) : undefined,
    };
  },

  toJSON(message: SubscribeResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = SubscribeResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.disconnect !== undefined) {
      obj.disconnect = Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse>, I>>(base?: I): SubscribeResponse {
    return SubscribeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeResponse>, I>>(object: I): SubscribeResponse {
    const message = createBaseSubscribeResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? SubscribeResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.disconnect = (object.disconnect !== undefined && object.disconnect !== null)
      ? Disconnect.fromPartial(object.disconnect)
      : undefined;
    return message;
  },
};

function createBasePublishRequest(): PublishRequest {
  return {
    client: "",
    transport: "",
    protocol: "",
    encoding: "",
    user: "",
    channel: "",
    data: new Uint8Array(0),
    b64data: "",
    meta: new Uint8Array(0),
  };
}

export const PublishRequest = {
  encode(message: PublishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== "") {
      writer.uint32(10).string(message.client);
    }
    if (message.transport !== "") {
      writer.uint32(18).string(message.transport);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.user !== "") {
      writer.uint32(82).string(message.user);
    }
    if (message.channel !== "") {
      writer.uint32(90).string(message.channel);
    }
    if (message.data.length !== 0) {
      writer.uint32(98).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(106).string(message.b64data);
    }
    if (message.meta.length !== 0) {
      writer.uint32(114).bytes(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.user = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.meta = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishRequest {
    return {
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      transport: isSet(object.transport) ? globalThis.String(object.transport) : "",
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
    };
  },

  toJSON(message: PublishRequest): unknown {
    const obj: any = {};
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.transport !== "") {
      obj.transport = message.transport;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishRequest>, I>>(base?: I): PublishRequest {
    return PublishRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishRequest>, I>>(object: I): PublishRequest {
    const message = createBasePublishRequest();
    message.client = object.client ?? "";
    message.transport = object.transport ?? "";
    message.protocol = object.protocol ?? "";
    message.encoding = object.encoding ?? "";
    message.user = object.user ?? "";
    message.channel = object.channel ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.meta = object.meta ?? new Uint8Array(0);
    return message;
  },
};

function createBasePublishResult(): PublishResult {
  return { data: new Uint8Array(0), b64data: "", skipHistory: false };
}

export const PublishResult = {
  encode(message: PublishResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(18).string(message.b64data);
    }
    if (message.skipHistory === true) {
      writer.uint32(24).bool(message.skipHistory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.skipHistory = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishResult {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      skipHistory: isSet(object.skipHistory) ? globalThis.Boolean(object.skipHistory) : false,
    };
  },

  toJSON(message: PublishResult): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.skipHistory === true) {
      obj.skipHistory = message.skipHistory;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishResult>, I>>(base?: I): PublishResult {
    return PublishResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishResult>, I>>(object: I): PublishResult {
    const message = createBasePublishResult();
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.skipHistory = object.skipHistory ?? false;
    return message;
  },
};

function createBasePublishResponse(): PublishResponse {
  return { result: undefined, error: undefined, disconnect: undefined };
}

export const PublishResponse = {
  encode(message: PublishResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      PublishResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.disconnect !== undefined) {
      Disconnect.encode(message.disconnect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = PublishResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disconnect = Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishResponse {
    return {
      result: isSet(object.result) ? PublishResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      disconnect: isSet(object.disconnect) ? Disconnect.fromJSON(object.disconnect) : undefined,
    };
  },

  toJSON(message: PublishResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = PublishResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.disconnect !== undefined) {
      obj.disconnect = Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishResponse>, I>>(base?: I): PublishResponse {
    return PublishResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishResponse>, I>>(object: I): PublishResponse {
    const message = createBasePublishResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? PublishResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.disconnect = (object.disconnect !== undefined && object.disconnect !== null)
      ? Disconnect.fromPartial(object.disconnect)
      : undefined;
    return message;
  },
};

function createBaseRPCRequest(): RPCRequest {
  return {
    client: "",
    transport: "",
    protocol: "",
    encoding: "",
    user: "",
    method: "",
    data: new Uint8Array(0),
    b64data: "",
    meta: new Uint8Array(0),
  };
}

export const RPCRequest = {
  encode(message: RPCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== "") {
      writer.uint32(10).string(message.client);
    }
    if (message.transport !== "") {
      writer.uint32(18).string(message.transport);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.user !== "") {
      writer.uint32(82).string(message.user);
    }
    if (message.method !== "") {
      writer.uint32(90).string(message.method);
    }
    if (message.data.length !== 0) {
      writer.uint32(98).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(106).string(message.b64data);
    }
    if (message.meta.length !== 0) {
      writer.uint32(114).bytes(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RPCRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRPCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.user = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.method = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.b64data = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.meta = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RPCRequest {
    return {
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      transport: isSet(object.transport) ? globalThis.String(object.transport) : "",
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
    };
  },

  toJSON(message: RPCRequest): unknown {
    const obj: any = {};
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.transport !== "") {
      obj.transport = message.transport;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RPCRequest>, I>>(base?: I): RPCRequest {
    return RPCRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RPCRequest>, I>>(object: I): RPCRequest {
    const message = createBaseRPCRequest();
    message.client = object.client ?? "";
    message.transport = object.transport ?? "";
    message.protocol = object.protocol ?? "";
    message.encoding = object.encoding ?? "";
    message.user = object.user ?? "";
    message.method = object.method ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    message.meta = object.meta ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRPCResult(): RPCResult {
  return { data: new Uint8Array(0), b64data: "" };
}

export const RPCResult = {
  encode(message: RPCResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.b64data !== "") {
      writer.uint32(18).string(message.b64data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RPCResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRPCResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.b64data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RPCResult {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      b64data: isSet(object.b64data) ? globalThis.String(object.b64data) : "",
    };
  },

  toJSON(message: RPCResult): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.b64data !== "") {
      obj.b64data = message.b64data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RPCResult>, I>>(base?: I): RPCResult {
    return RPCResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RPCResult>, I>>(object: I): RPCResult {
    const message = createBaseRPCResult();
    message.data = object.data ?? new Uint8Array(0);
    message.b64data = object.b64data ?? "";
    return message;
  },
};

function createBaseRPCResponse(): RPCResponse {
  return { result: undefined, error: undefined, disconnect: undefined };
}

export const RPCResponse = {
  encode(message: RPCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      RPCResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.disconnect !== undefined) {
      Disconnect.encode(message.disconnect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RPCResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRPCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = RPCResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disconnect = Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RPCResponse {
    return {
      result: isSet(object.result) ? RPCResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      disconnect: isSet(object.disconnect) ? Disconnect.fromJSON(object.disconnect) : undefined,
    };
  },

  toJSON(message: RPCResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = RPCResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.disconnect !== undefined) {
      obj.disconnect = Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RPCResponse>, I>>(base?: I): RPCResponse {
    return RPCResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RPCResponse>, I>>(object: I): RPCResponse {
    const message = createBaseRPCResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? RPCResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.disconnect = (object.disconnect !== undefined && object.disconnect !== null)
      ? Disconnect.fromPartial(object.disconnect)
      : undefined;
    return message;
  },
};

function createBaseSubRefreshRequest(): SubRefreshRequest {
  return { client: "", transport: "", protocol: "", encoding: "", user: "", channel: "", meta: new Uint8Array(0) };
}

export const SubRefreshRequest = {
  encode(message: SubRefreshRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== "") {
      writer.uint32(10).string(message.client);
    }
    if (message.transport !== "") {
      writer.uint32(18).string(message.transport);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.user !== "") {
      writer.uint32(82).string(message.user);
    }
    if (message.channel !== "") {
      writer.uint32(90).string(message.channel);
    }
    if (message.meta.length !== 0) {
      writer.uint32(98).bytes(message.meta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubRefreshRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubRefreshRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.client = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.user = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.meta = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubRefreshRequest {
    return {
      client: isSet(object.client) ? globalThis.String(object.client) : "",
      transport: isSet(object.transport) ? globalThis.String(object.transport) : "",
      protocol: isSet(object.protocol) ? globalThis.String(object.protocol) : "",
      encoding: isSet(object.encoding) ? globalThis.String(object.encoding) : "",
      user: isSet(object.user) ? globalThis.String(object.user) : "",
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      meta: isSet(object.meta) ? bytesFromBase64(object.meta) : new Uint8Array(0),
    };
  },

  toJSON(message: SubRefreshRequest): unknown {
    const obj: any = {};
    if (message.client !== "") {
      obj.client = message.client;
    }
    if (message.transport !== "") {
      obj.transport = message.transport;
    }
    if (message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.encoding !== "") {
      obj.encoding = message.encoding;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.meta.length !== 0) {
      obj.meta = base64FromBytes(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubRefreshRequest>, I>>(base?: I): SubRefreshRequest {
    return SubRefreshRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubRefreshRequest>, I>>(object: I): SubRefreshRequest {
    const message = createBaseSubRefreshRequest();
    message.client = object.client ?? "";
    message.transport = object.transport ?? "";
    message.protocol = object.protocol ?? "";
    message.encoding = object.encoding ?? "";
    message.user = object.user ?? "";
    message.channel = object.channel ?? "";
    message.meta = object.meta ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSubRefreshResult(): SubRefreshResult {
  return { expired: false, expireAt: 0, info: new Uint8Array(0), b64info: "" };
}

export const SubRefreshResult = {
  encode(message: SubRefreshResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expired === true) {
      writer.uint32(8).bool(message.expired);
    }
    if (message.expireAt !== 0) {
      writer.uint32(16).int64(message.expireAt);
    }
    if (message.info.length !== 0) {
      writer.uint32(26).bytes(message.info);
    }
    if (message.b64info !== "") {
      writer.uint32(34).string(message.b64info);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubRefreshResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubRefreshResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.expired = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.expireAt = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.info = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.b64info = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubRefreshResult {
    return {
      expired: isSet(object.expired) ? globalThis.Boolean(object.expired) : false,
      expireAt: isSet(object.expireAt) ? globalThis.Number(object.expireAt) : 0,
      info: isSet(object.info) ? bytesFromBase64(object.info) : new Uint8Array(0),
      b64info: isSet(object.b64info) ? globalThis.String(object.b64info) : "",
    };
  },

  toJSON(message: SubRefreshResult): unknown {
    const obj: any = {};
    if (message.expired === true) {
      obj.expired = message.expired;
    }
    if (message.expireAt !== 0) {
      obj.expireAt = Math.round(message.expireAt);
    }
    if (message.info.length !== 0) {
      obj.info = base64FromBytes(message.info);
    }
    if (message.b64info !== "") {
      obj.b64info = message.b64info;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubRefreshResult>, I>>(base?: I): SubRefreshResult {
    return SubRefreshResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubRefreshResult>, I>>(object: I): SubRefreshResult {
    const message = createBaseSubRefreshResult();
    message.expired = object.expired ?? false;
    message.expireAt = object.expireAt ?? 0;
    message.info = object.info ?? new Uint8Array(0);
    message.b64info = object.b64info ?? "";
    return message;
  },
};

function createBaseSubRefreshResponse(): SubRefreshResponse {
  return { result: undefined, error: undefined, disconnect: undefined };
}

export const SubRefreshResponse = {
  encode(message: SubRefreshResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      SubRefreshResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.disconnect !== undefined) {
      Disconnect.encode(message.disconnect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubRefreshResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubRefreshResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = SubRefreshResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disconnect = Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubRefreshResponse {
    return {
      result: isSet(object.result) ? SubRefreshResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      disconnect: isSet(object.disconnect) ? Disconnect.fromJSON(object.disconnect) : undefined,
    };
  },

  toJSON(message: SubRefreshResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = SubRefreshResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    if (message.disconnect !== undefined) {
      obj.disconnect = Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubRefreshResponse>, I>>(base?: I): SubRefreshResponse {
    return SubRefreshResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubRefreshResponse>, I>>(object: I): SubRefreshResponse {
    const message = createBaseSubRefreshResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? SubRefreshResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.disconnect = (object.disconnect !== undefined && object.disconnect !== null)
      ? Disconnect.fromPartial(object.disconnect)
      : undefined;
    return message;
  },
};

function createBasePublication(): Publication {
  return { data: new Uint8Array(0), tags: {} };
}

export const Publication = {
  encode(message: Publication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    Object.entries(message.tags).forEach(([key, value]) => {
      Publication_TagsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Publication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Publication_TagsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.tags[entry7.key] = entry7.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Publication {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      tags: isObject(object.tags)
        ? Object.entries(object.tags).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Publication): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.tags) {
      const entries = Object.entries(message.tags);
      if (entries.length > 0) {
        obj.tags = {};
        entries.forEach(([k, v]) => {
          obj.tags[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Publication>, I>>(base?: I): Publication {
    return Publication.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Publication>, I>>(object: I): Publication {
    const message = createBasePublication();
    message.data = object.data ?? new Uint8Array(0);
    message.tags = Object.entries(object.tags ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePublication_TagsEntry(): Publication_TagsEntry {
  return { key: "", value: "" };
}

export const Publication_TagsEntry = {
  encode(message: Publication_TagsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Publication_TagsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublication_TagsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Publication_TagsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Publication_TagsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Publication_TagsEntry>, I>>(base?: I): Publication_TagsEntry {
    return Publication_TagsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Publication_TagsEntry>, I>>(object: I): Publication_TagsEntry {
    const message = createBasePublication_TagsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseStreamSubscribeRequest(): StreamSubscribeRequest {
  return { subscribeRequest: undefined, publication: undefined };
}

export const StreamSubscribeRequest = {
  encode(message: StreamSubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeRequest !== undefined) {
      SubscribeRequest.encode(message.subscribeRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.publication !== undefined) {
      Publication.encode(message.publication, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscribeRequest = SubscribeRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publication = Publication.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamSubscribeRequest {
    return {
      subscribeRequest: isSet(object.subscribeRequest) ? SubscribeRequest.fromJSON(object.subscribeRequest) : undefined,
      publication: isSet(object.publication) ? Publication.fromJSON(object.publication) : undefined,
    };
  },

  toJSON(message: StreamSubscribeRequest): unknown {
    const obj: any = {};
    if (message.subscribeRequest !== undefined) {
      obj.subscribeRequest = SubscribeRequest.toJSON(message.subscribeRequest);
    }
    if (message.publication !== undefined) {
      obj.publication = Publication.toJSON(message.publication);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamSubscribeRequest>, I>>(base?: I): StreamSubscribeRequest {
    return StreamSubscribeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamSubscribeRequest>, I>>(object: I): StreamSubscribeRequest {
    const message = createBaseStreamSubscribeRequest();
    message.subscribeRequest = (object.subscribeRequest !== undefined && object.subscribeRequest !== null)
      ? SubscribeRequest.fromPartial(object.subscribeRequest)
      : undefined;
    message.publication = (object.publication !== undefined && object.publication !== null)
      ? Publication.fromPartial(object.publication)
      : undefined;
    return message;
  },
};

function createBaseStreamSubscribeResponse(): StreamSubscribeResponse {
  return { subscribeResponse: undefined, publication: undefined };
}

export const StreamSubscribeResponse = {
  encode(message: StreamSubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeResponse !== undefined) {
      SubscribeResponse.encode(message.subscribeResponse, writer.uint32(10).fork()).ldelim();
    }
    if (message.publication !== undefined) {
      Publication.encode(message.publication, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscribeResponse = SubscribeResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publication = Publication.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamSubscribeResponse {
    return {
      subscribeResponse: isSet(object.subscribeResponse)
        ? SubscribeResponse.fromJSON(object.subscribeResponse)
        : undefined,
      publication: isSet(object.publication) ? Publication.fromJSON(object.publication) : undefined,
    };
  },

  toJSON(message: StreamSubscribeResponse): unknown {
    const obj: any = {};
    if (message.subscribeResponse !== undefined) {
      obj.subscribeResponse = SubscribeResponse.toJSON(message.subscribeResponse);
    }
    if (message.publication !== undefined) {
      obj.publication = Publication.toJSON(message.publication);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StreamSubscribeResponse>, I>>(base?: I): StreamSubscribeResponse {
    return StreamSubscribeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StreamSubscribeResponse>, I>>(object: I): StreamSubscribeResponse {
    const message = createBaseStreamSubscribeResponse();
    message.subscribeResponse = (object.subscribeResponse !== undefined && object.subscribeResponse !== null)
      ? SubscribeResponse.fromPartial(object.subscribeResponse)
      : undefined;
    message.publication = (object.publication !== undefined && object.publication !== null)
      ? Publication.fromPartial(object.publication)
      : undefined;
    return message;
  },
};

function createBaseNotifyChannelStateRequest(): NotifyChannelStateRequest {
  return { events: [] };
}

export const NotifyChannelStateRequest = {
  encode(message: NotifyChannelStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      ChannelEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotifyChannelStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyChannelStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.events.push(ChannelEvent.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotifyChannelStateRequest {
    return {
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => ChannelEvent.fromJSON(e)) : [],
    };
  },

  toJSON(message: NotifyChannelStateRequest): unknown {
    const obj: any = {};
    if (message.events?.length) {
      obj.events = message.events.map((e) => ChannelEvent.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotifyChannelStateRequest>, I>>(base?: I): NotifyChannelStateRequest {
    return NotifyChannelStateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotifyChannelStateRequest>, I>>(object: I): NotifyChannelStateRequest {
    const message = createBaseNotifyChannelStateRequest();
    message.events = object.events?.map((e) => ChannelEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChannelEvent(): ChannelEvent {
  return { timeMs: 0, channel: "", type: "" };
}

export const ChannelEvent = {
  encode(message: ChannelEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeMs !== 0) {
      writer.uint32(8).int64(message.timeMs);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timeMs = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelEvent {
    return {
      timeMs: isSet(object.timeMs) ? globalThis.Number(object.timeMs) : 0,
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: ChannelEvent): unknown {
    const obj: any = {};
    if (message.timeMs !== 0) {
      obj.timeMs = Math.round(message.timeMs);
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelEvent>, I>>(base?: I): ChannelEvent {
    return ChannelEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelEvent>, I>>(object: I): ChannelEvent {
    const message = createBaseChannelEvent();
    message.timeMs = object.timeMs ?? 0;
    message.channel = object.channel ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseNotifyChannelStateResponse(): NotifyChannelStateResponse {
  return { result: undefined, error: undefined };
}

export const NotifyChannelStateResponse = {
  encode(message: NotifyChannelStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      NotifyChannelStateResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotifyChannelStateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyChannelStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = NotifyChannelStateResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotifyChannelStateResponse {
    return {
      result: isSet(object.result) ? NotifyChannelStateResult.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: NotifyChannelStateResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = NotifyChannelStateResult.toJSON(message.result);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotifyChannelStateResponse>, I>>(base?: I): NotifyChannelStateResponse {
    return NotifyChannelStateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotifyChannelStateResponse>, I>>(object: I): NotifyChannelStateResponse {
    const message = createBaseNotifyChannelStateResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? NotifyChannelStateResult.fromPartial(object.result)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseNotifyChannelStateResult(): NotifyChannelStateResult {
  return {};
}

export const NotifyChannelStateResult = {
  encode(_: NotifyChannelStateResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotifyChannelStateResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyChannelStateResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NotifyChannelStateResult {
    return {};
  },

  toJSON(_: NotifyChannelStateResult): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NotifyChannelStateResult>, I>>(base?: I): NotifyChannelStateResult {
    return NotifyChannelStateResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotifyChannelStateResult>, I>>(_: I): NotifyChannelStateResult {
    const message = createBaseNotifyChannelStateResult();
    return message;
  },
};

export interface CentrifugoProxy {
  /** Connect to proxy connection authentication and communicate initial state. */
  Connect(request: ConnectRequest): Promise<ConnectResponse>;
  /** Refresh to proxy decision about connection expiration to the app backend. */
  Refresh(request: RefreshRequest): Promise<RefreshResponse>;
  /** Subscribe to proxy subscription attempts to channels. */
  Subscribe(request: SubscribeRequest): Promise<SubscribeResponse>;
  /** Publish to proxy publication attempts to channels. */
  Publish(request: PublishRequest): Promise<PublishResponse>;
  /** RPC to execute custom logic on the backend over request through the real-time connection. */
  RPC(request: RPCRequest): Promise<RPCResponse>;
  /** SubRefresh to proxy decision about subscription expiration to the app backend. */
  SubRefresh(request: SubRefreshRequest): Promise<SubRefreshResponse>;
  /**
   * SubscribeUnidirectional is an EXPERIMENTAL method which allows handling unidirectional
   * subscription streams. Stream starts with SubscribeRequest similar to Subscribe rpc,
   * then expects StreamSubscribeResponse with SubscribeResponse as first message, and
   * StreamSubscribeResponse with Publication afterwards.
   */
  SubscribeUnidirectional(request: SubscribeRequest): Observable<StreamSubscribeResponse>;
  /**
   * SubscribeBidirectional is an EXPERIMENTAL method which allows handling bidirectional
   * subscription streams. Stream receives StreamSubscribeRequest. First StreamSubscribeRequest
   * always contains SubscribeRequest, then StreamSubscribeRequest will contain data published
   * by client. Reverse direction works the same way as in SubscribeUnidirectional.
   */
  SubscribeBidirectional(request: Observable<StreamSubscribeRequest>): Observable<StreamSubscribeResponse>;
  /**
   * NotifyChannelState can be used to receive channel events such as channel "occupied" and "vacated".
   * This is a feature in a preview state and is only available in Centrifugo PRO.
   */
  NotifyChannelState(request: NotifyChannelStateRequest): Promise<NotifyChannelStateResponse>;
}

export const CentrifugoProxyServiceName = "centrifugal.centrifugo.proxy.CentrifugoProxy";
export class CentrifugoProxyClientImpl implements CentrifugoProxy {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || CentrifugoProxyServiceName;
    this.rpc = rpc;
    this.Connect = this.Connect.bind(this);
    this.Refresh = this.Refresh.bind(this);
    this.Subscribe = this.Subscribe.bind(this);
    this.Publish = this.Publish.bind(this);
    this.RPC = this.RPC.bind(this);
    this.SubRefresh = this.SubRefresh.bind(this);
    this.SubscribeUnidirectional = this.SubscribeUnidirectional.bind(this);
    this.SubscribeBidirectional = this.SubscribeBidirectional.bind(this);
    this.NotifyChannelState = this.NotifyChannelState.bind(this);
  }
  Connect(request: ConnectRequest): Promise<ConnectResponse> {
    const data = ConnectRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Connect", data);
    return promise.then((data) => ConnectResponse.decode(_m0.Reader.create(data)));
  }

  Refresh(request: RefreshRequest): Promise<RefreshResponse> {
    const data = RefreshRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Refresh", data);
    return promise.then((data) => RefreshResponse.decode(_m0.Reader.create(data)));
  }

  Subscribe(request: SubscribeRequest): Promise<SubscribeResponse> {
    const data = SubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Subscribe", data);
    return promise.then((data) => SubscribeResponse.decode(_m0.Reader.create(data)));
  }

  Publish(request: PublishRequest): Promise<PublishResponse> {
    const data = PublishRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Publish", data);
    return promise.then((data) => PublishResponse.decode(_m0.Reader.create(data)));
  }

  RPC(request: RPCRequest): Promise<RPCResponse> {
    const data = RPCRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RPC", data);
    return promise.then((data) => RPCResponse.decode(_m0.Reader.create(data)));
  }

  SubRefresh(request: SubRefreshRequest): Promise<SubRefreshResponse> {
    const data = SubRefreshRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubRefresh", data);
    return promise.then((data) => SubRefreshResponse.decode(_m0.Reader.create(data)));
  }

  SubscribeUnidirectional(request: SubscribeRequest): Observable<StreamSubscribeResponse> {
    const data = SubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "SubscribeUnidirectional", data);
    return result.pipe(map((data) => StreamSubscribeResponse.decode(_m0.Reader.create(data))));
  }

  SubscribeBidirectional(request: Observable<StreamSubscribeRequest>): Observable<StreamSubscribeResponse> {
    const data = request.pipe(map((request) => StreamSubscribeRequest.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "SubscribeBidirectional", data);
    return result.pipe(map((data) => StreamSubscribeResponse.decode(_m0.Reader.create(data))));
  }

  NotifyChannelState(request: NotifyChannelStateRequest): Promise<NotifyChannelStateResponse> {
    const data = NotifyChannelStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyChannelState", data);
    return promise.then((data) => NotifyChannelStateResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
