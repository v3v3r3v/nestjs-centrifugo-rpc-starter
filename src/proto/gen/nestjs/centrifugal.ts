/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

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

export const CENTRIFUGAL_CENTRIFUGO_PROXY_PACKAGE_NAME = "centrifugal.centrifugo.proxy";

export interface CentrifugoProxyClient {
  /** Connect to proxy connection authentication and communicate initial state. */

  connect(request: ConnectRequest, metadata: Metadata, ...rest: any): Observable<ConnectResponse>;

  /** Refresh to proxy decision about connection expiration to the app backend. */

  refresh(request: RefreshRequest, metadata: Metadata, ...rest: any): Observable<RefreshResponse>;

  /** Subscribe to proxy subscription attempts to channels. */

  subscribe(request: SubscribeRequest, metadata: Metadata, ...rest: any): Observable<SubscribeResponse>;

  /** Publish to proxy publication attempts to channels. */

  publish(request: PublishRequest, metadata: Metadata, ...rest: any): Observable<PublishResponse>;

  /** RPC to execute custom logic on the backend over request through the real-time connection. */

  rpc(request: RPCRequest, metadata: Metadata, ...rest: any): Observable<RPCResponse>;

  /** SubRefresh to proxy decision about subscription expiration to the app backend. */

  subRefresh(request: SubRefreshRequest, metadata: Metadata, ...rest: any): Observable<SubRefreshResponse>;

  /**
   * SubscribeUnidirectional is an EXPERIMENTAL method which allows handling unidirectional
   * subscription streams. Stream starts with SubscribeRequest similar to Subscribe rpc,
   * then expects StreamSubscribeResponse with SubscribeResponse as first message, and
   * StreamSubscribeResponse with Publication afterwards.
   */

  subscribeUnidirectional(
    request: SubscribeRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<StreamSubscribeResponse>;

  /**
   * SubscribeBidirectional is an EXPERIMENTAL method which allows handling bidirectional
   * subscription streams. Stream receives StreamSubscribeRequest. First StreamSubscribeRequest
   * always contains SubscribeRequest, then StreamSubscribeRequest will contain data published
   * by client. Reverse direction works the same way as in SubscribeUnidirectional.
   */

  subscribeBidirectional(
    request: Observable<StreamSubscribeRequest>,
    metadata: Metadata,
    ...rest: any
  ): Observable<StreamSubscribeResponse>;

  /**
   * NotifyChannelState can be used to receive channel events such as channel "occupied" and "vacated".
   * This is a feature in a preview state and is only available in Centrifugo PRO.
   */

  notifyChannelState(
    request: NotifyChannelStateRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<NotifyChannelStateResponse>;
}

export interface CentrifugoProxyController {
  /** Connect to proxy connection authentication and communicate initial state. */

  connect(
    request: ConnectRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<ConnectResponse> | Observable<ConnectResponse> | ConnectResponse;

  /** Refresh to proxy decision about connection expiration to the app backend. */

  refresh(
    request: RefreshRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<RefreshResponse> | Observable<RefreshResponse> | RefreshResponse;

  /** Subscribe to proxy subscription attempts to channels. */

  subscribe(
    request: SubscribeRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<SubscribeResponse> | Observable<SubscribeResponse> | SubscribeResponse;

  /** Publish to proxy publication attempts to channels. */

  publish(
    request: PublishRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<PublishResponse> | Observable<PublishResponse> | PublishResponse;

  /** RPC to execute custom logic on the backend over request through the real-time connection. */

  rpc(
    request: RPCRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<RPCResponse> | Observable<RPCResponse> | RPCResponse;

  /** SubRefresh to proxy decision about subscription expiration to the app backend. */

  subRefresh(
    request: SubRefreshRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<SubRefreshResponse> | Observable<SubRefreshResponse> | SubRefreshResponse;

  /**
   * SubscribeUnidirectional is an EXPERIMENTAL method which allows handling unidirectional
   * subscription streams. Stream starts with SubscribeRequest similar to Subscribe rpc,
   * then expects StreamSubscribeResponse with SubscribeResponse as first message, and
   * StreamSubscribeResponse with Publication afterwards.
   */

  subscribeUnidirectional(
    request: SubscribeRequest,
    metadata: Metadata,
    ...rest: any
  ): Observable<StreamSubscribeResponse>;

  /**
   * SubscribeBidirectional is an EXPERIMENTAL method which allows handling bidirectional
   * subscription streams. Stream receives StreamSubscribeRequest. First StreamSubscribeRequest
   * always contains SubscribeRequest, then StreamSubscribeRequest will contain data published
   * by client. Reverse direction works the same way as in SubscribeUnidirectional.
   */

  subscribeBidirectional(
    request: Observable<StreamSubscribeRequest>,
    metadata: Metadata,
    ...rest: any
  ): Observable<StreamSubscribeResponse>;

  /**
   * NotifyChannelState can be used to receive channel events such as channel "occupied" and "vacated".
   * This is a feature in a preview state and is only available in Centrifugo PRO.
   */

  notifyChannelState(
    request: NotifyChannelStateRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<NotifyChannelStateResponse> | Observable<NotifyChannelStateResponse> | NotifyChannelStateResponse;
}

export function CentrifugoProxyControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "connect",
      "refresh",
      "subscribe",
      "publish",
      "rpc",
      "subRefresh",
      "subscribeUnidirectional",
      "notifyChannelState",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CentrifugoProxy", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["subscribeBidirectional"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CentrifugoProxy", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CENTRIFUGO_PROXY_SERVICE_NAME = "CentrifugoProxy";
