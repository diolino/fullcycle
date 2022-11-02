package graph

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import (
	"github.com/diolino/estudos/fc3-graql/internal/database"
)

type Resolver struct{
	CategoryDB *database.Category
	CourseDB *database.Course
}
