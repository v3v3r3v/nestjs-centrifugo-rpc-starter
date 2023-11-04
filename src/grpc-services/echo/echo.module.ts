import { Module } from '@nestjs/common';
import { EchoController } from './echo.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../../grpc-utils.options';
import { ECHO_SERVICE_NAME } from 'src/proto/gen/nestjs/echo';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ECHO_SERVICE_NAME,
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [EchoController],
})
export class EchoModule {}
