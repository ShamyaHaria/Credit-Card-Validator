FROM golang:1.23.5

workdir /app

COPY . .

RUN go mod tidy && go build -o main .

EXPOSE 8080

CMD ["./main"]