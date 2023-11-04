import { Module } from '@nestjs/common';
import { CentrifugalModule } from './centrifugal/centrifugal.module';
import { EchoModule } from './grpc-services/echo/echo.module';

@Module({
  imports: [CentrifugalModule, EchoModule],
})
export class AppModule {}
