FROM golang:1.18-buster

WORKDIR /app

COPY . .

RUN chmod +x wait-for-postgres.sh

RUN go mod download

RUN go build -o /app/url_shortener_golang_app ./cmd/api

CMD ["/app/url_shortener_golang_app"]
