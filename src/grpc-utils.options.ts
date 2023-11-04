import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { ECHO_SERVICE_NAME } from './proto/gen/nestjs/echo';
import * as echoServiceTypes from './proto/gen/protobufjs/echo';

const protoFiles = {
  'centrifugal.centrifugo.proxy': 'centrifugal.proto',
  echo: 'echo.proto',
};

export const grpcClientTypes = {
  [ECHO_SERVICE_NAME]: echoServiceTypes,
};

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:5005',
    package: Object.keys(protoFiles),
    protoPath: Object.values(protoFiles).map((file) =>
      join(__dirname, 'proto', file),
    ),
  },
};
