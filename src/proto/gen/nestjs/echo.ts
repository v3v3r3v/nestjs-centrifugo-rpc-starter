/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

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

export const ECHO_PACKAGE_NAME = "echo";

export interface EchoServiceClient {
  echo(request: EchoRequest, metadata: Metadata, ...rest: any): Observable<EchoResponse>;

  echoReverse(request: EchoReverseRequest, metadata: Metadata, ...rest: any): Observable<EchoReverseResponse>;
}

export interface EchoServiceController {
  echo(
    request: EchoRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<EchoResponse> | Observable<EchoResponse> | EchoResponse;

  echoReverse(
    request: EchoReverseRequest,
    metadata: Metadata,
    ...rest: any
  ): Promise<EchoReverseResponse> | Observable<EchoReverseResponse> | EchoReverseResponse;
}

export function EchoServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["echo", "echoReverse"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("EchoService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("EchoService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ECHO_SERVICE_NAME = "EchoService";
