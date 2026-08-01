.PHONY: build-api build-cli run-api run-cli clean

build-api:
	go build -o bin/api ./cmd/api

build-cli:
	npm run build

run-api:
	go run ./cmd/api

run-cli:
	npm run start

clean:
	rm -rf bin/ dist/