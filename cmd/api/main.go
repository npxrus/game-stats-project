package main

import (
	"log"
	"net/http"

	"github.com/npxrus/game-stats-project/internal/api"
)

func main() {
	port := ":8080"

	router := api.NewRouter()

	log.Printf("API server starting on %s", port)
	if err := http.ListenAndServe(port, router); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
