FROM golang:1.12-alpine AS build_base

# Diretório base no container
WORKDIR /app

# Copiando os módulos Go
COPY ./go-hello-world/go.* .

# Instalação dos módulos GO
#RUN go mod download

# copiando os códigos GO
COPY ./go-hello-world/*.go .

# Build da aplicação go
RUN go build -o hello

# Imagem menor (1MB)
FROM scratch
WORKDIR /app
COPY --from=build_base /app/hello .

# Executando binário gerado pelo go build
CMD ["./hello"]

