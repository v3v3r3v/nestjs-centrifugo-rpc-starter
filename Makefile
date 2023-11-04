centrifugo-install:
	cd centrifugo && curl -sSLf https://centrifugal.dev/install.sh | sh

centrifugo-local-conifg:
	cp ./configs/centrifugo.dist.json ./configs/centrifugo.local.json 

centrifugo-new-conifg:
	cd configs && ../centrifugo/centrifugo genconfig && mv config.json centrifugo.local.json 

centrifugo-run:
	./centrifugo/centrifugo --config=./configs/centrifugo.local.json

proto-all:
	for file in ./src/proto/*.proto; do \
		protoc -I ./src/proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/proto/gen/nestJs --ts_proto_opt=nestJs=true,addGrpcMetadata=true,addNestjsRestParameter=true $$file; \
		protoc -I ./src/proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/proto/gen/protobufjs $$file; \
	done

centrifugo-token:
	./centrifugo/centrifugo gentoken --config=configs/centrifugo.local.json -u 123346

example-echo-web-client:
	protoc -I ./src/proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./examples/echo-web-client/src echo.proto
	cd examples/echo-web-client && \
	npm install && \
	npm run dev
	