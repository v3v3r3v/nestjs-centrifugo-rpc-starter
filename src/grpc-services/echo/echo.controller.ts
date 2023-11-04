import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import {
  ECHO_SERVICE_NAME,
  EchoRequest,
  EchoResponse,
  EchoReverseRequest,
  EchoReverseResponse,
  EchoServiceController,
} from 'src/proto/gen/nestjs/echo';
import { Observable } from 'rxjs';

@Controller('echo')
export class EchoController implements EchoServiceController {
  @GrpcMethod(ECHO_SERVICE_NAME, 'EchoReverse')
  echoReverse(
    request: EchoReverseRequest,
    metadata: Metadata,
    ...rest: any
  ):
    | EchoReverseResponse
    | Observable<EchoReverseResponse>
    | Promise<EchoReverseResponse> {
    return {
      message: request.message.split('').reverse().join(''),
    };
  }
  @GrpcMethod(ECHO_SERVICE_NAME, 'Echo')
  echo(
    request: EchoRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): EchoResponse {
    return {
      message: request.message,
    };
  }
}
