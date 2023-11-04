import { Module } from '@nestjs/common';
import { CentrifugalController } from './centrifugal.controller';
import { grpcClientOptions } from '../grpc-utils.options';
import { ClientsModule } from '@nestjs/microservices';
import { GrpcUtilsModule } from 'src/grpc-utils/grpc-utils.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_CLIENT',
        ...grpcClientOptions,
      },
    ]),
    GrpcUtilsModule,
  ],
  controllers: [CentrifugalController],
})
export class CentrifugalModule {}
