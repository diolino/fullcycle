
package main

import (
	"log"
	"net"
	"google.golang.org/grpc"
	"github.com/diolino/fullcycle/tree/main/mod03-Comunicacao-entre-sistemas/grpc/novo/services"
	"github.com/diolino/fullcycle/tree/main/mod03-Comunicacao-entre-sistemas/grpc/novo/pb"
	"google.golang.org/grpc/reflection"
)

func main() {
	lis, err := net.Listen ("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Could not connect: %v", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterUserServiceServer(grpcServer, services.NewUserService());
	reflection.Register(grpcServer);
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Could not serve: %v", err)
	}
}