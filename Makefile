build:
	docker-compose build url_shortener_golang_app

run:
	docker-compose up url_shortener_golang_app

test:
	go test -v ./...

migrate:
	migrate -path ./migrations -database 'postgres://postgres:Qwer1234@0.0.0.0:5432/url_shortener?sslmode=disable' up

swag:
	swag init -g cmd/api/main.go