import { Controller, Inject } from '@nestjs/common';
import {
  CENTRIFUGO_PROXY_SERVICE_NAME,
  RPCRequest,
  RPCResponse,
} from './centrifugal';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { GrpcUtilsService } from 'src/grpc-utils/grpc-utils.service';

@Controller('centrifugal')
export class CentrifugalController {
  private serviceLocator = new Map<string, any>();

  constructor(
    @Inject('GRPC_CLIENT') private readonly grpcClient: ClientGrpc,
    private readonly grpcUtils: GrpcUtilsService,
  ) {}

  onModuleInit() {
    this.grpcUtils.getAllServiceNames().forEach((serviceName) => {
      this.serviceLocator.set(
        serviceName,
        this.grpcClient.getService(serviceName),
      );
    });
  }

  @GrpcMethod(CENTRIFUGO_PROXY_SERVICE_NAME)
  async RPC(
    data: RPCRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<RPCResponse> {
    const [serviceName, methodName] = data.method.split(':');
    const serviceClient = this.serviceLocator.get(serviceName);

    if (!serviceClient) {
      throw new Error(`Service '${serviceName}' not found.`);
    }

    const decodedRequest = this.grpcUtils.decodeRequest(
      serviceName,
      methodName,
      data.data,
    );

    const resultData =
      await serviceClient[methodName](decodedRequest).toPromise();

    const encodedResponse = this.grpcUtils.encodeResponse(
      serviceName,
      methodName,
      resultData,
    );

    return {
      result: {
        data: encodedResponse,
        b64data: '',
      },
      error: undefined,
      disconnect: undefined,
    };
  }
}
