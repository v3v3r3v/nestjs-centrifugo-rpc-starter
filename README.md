# Try it

1. Install Centrifugo: https://centrifugal.dev/docs/getting-started/installation

```sh
make centrifugo-install
```

2. Create config for Centrifugo

Generate new config and [setup grpc proxy](https://centrifugal.dev/docs/3/server/proxy#grpc-proxy) (example in [configs/centrifugo.dist.json](configs/centrifugo.dist.json))

```
make centrifugo-new-conifg
```

Or just use [configs/centrifugo.dist.json](configs/centrifugo.dist.json)

```sh
make centrifugo-local-conifg
```

Install dependencies:

```sh
npm install
```

Start nestjs server app

```
npm run start:dev
```

Start example client:

```sh
make example-echo-web-client
```
