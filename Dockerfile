FROM golang:1.14-buster

RUN go version
ENV GOPATH=/

COPY ./ ./url_shortener_golang_app

# install psql
RUN apt-get update
RUN apt-get -y install postgresql-client

# make wait-for-postgres.sh executable
RUN chmod +x url_shortener_golang_app/wait-for-postgres.sh

# build go app
RUN go mod download
RUN go build -o url_shortener_golang_app ./cmd/api/main.go

CMD ["./url_shortener_golang_app"]
