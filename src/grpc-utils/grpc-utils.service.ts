import { Injectable, OnModuleInit } from '@nestjs/common';
import { grpcClientTypes } from '../grpc-utils.options';

@Injectable()
export class GrpcUtilsService implements OnModuleInit {
  private services = {};

  private async loadServices() {
    this.services = grpcClientTypes;
  }

  async onModuleInit() {
    await this.loadServices();
  }

  getAllServiceNames(): string[] {
    return Object.keys(this.services);
  }

  decodeRequest(serviceName: string, methodName: string, data: any) {
    const service = this.services[serviceName];
    if (!service) {
      throw new Error(`Service '${serviceName}' utils not found.`);
    }
    const decoder = service[`${methodName}Request`];

    if (!decoder || typeof decoder.decode !== 'function') {
      throw new Error(`Request decoder for '${methodName}' not found.`);
    }
    return decoder.decode(data);
  }

  encodeResponse(serviceName: string, methodName: string, data: any) {
    const service = this.services[serviceName];
    if (!service) {
      throw new Error(`Service '${serviceName}' utils not found.`);
    }
    const encoder = service[`${methodName}Response`];
    if (!encoder || typeof encoder.encode !== 'function') {
      throw new Error(`Response encoder for '${methodName}' not found.`);
    }
    return encoder.encode(data).finish();
  }
}
