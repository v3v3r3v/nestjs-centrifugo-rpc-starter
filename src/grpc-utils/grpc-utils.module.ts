import { Global, Module } from '@nestjs/common';
import { GrpcUtilsService } from './grpc-utils.service';

@Global()
@Module({
  providers: [GrpcUtilsService],
  exports: [GrpcUtilsService],
})
export class GrpcUtilsModule {}
