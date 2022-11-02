//go:build tools
// +build tools

package tools
// _ significa que não vai precisar no build da aplicação
import (
	_ "github.com/99designs/gqlgen"
	_ "github.com/99designs/gqlgen/graphql/introspection"
)
