package graph


				// This file will be automatically regenerated based on the schema, any resolver implementations
				// will be copied through when generating and any unknown code will be moved to the end.

import (
"context"
"fmt"
_ "io"
_ "strconv"
_ "time"
_ "sync"
_"errors"
_ "bytes"
_ "github.com/vektah/gqlparser/v2"
_ "github.com/vektah/gqlparser/v2/ast"
_ "github.com/99designs/gqlgen/graphql"
_ "github.com/99designs/gqlgen/graphql/introspection"
"github.com/diolino/estudos/fc3-graql/graph/generated"
"github.com/diolino/estudos/fc3-graql/graph/model")

type categoryResolver struct { *Resolver }
type courseResolver struct { *Resolver }
type mutationResolver struct { *Resolver }
type queryResolver struct { *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
//retorna os cursos de uma Categoria
func (r *categoryResolver) Courses(ctx context.Context, obj *model.Category) ([]*model.Course, error) {
		courses, err := r.CourseDB.FindByCategoryId(obj.ID)
	if err != nil {
		return nil, err
	}
	
var coursesModel []*model.Course
for _, course := range courses {
		coursesModel = append(coursesModel, &model.Course{
			ID:          course.ID,
			Name:        course.Name,
			Description: &course.Description, //Por que tem que ter &???
			//Category: course.Category.,
		})
	}
	return coursesModel, nil
	}

// Category is the resolver for the category field. - Pega a Categoria de m curso
	func (r *courseResolver) Category(ctx context.Context, obj *model.Course) (*model.Category, error) {
		category, err := r.CategoryDB.FindByCourseId(obj.ID)
		if err != nil {
			return nil, err
		}
		
		return &model.Category{
			ID:          category.ID,
			Name:        category.Name,
			Description: &category.Description, //Por que tem que ter &???		
		}, nil
	}

// CreateCategory is the resolver for the createCategory field.
	func (r *mutationResolver) CreateCategory(ctx context.Context, input model.NewCategory) (*model.Category, error) {
		category, err := r.CategoryDB.Create(input.Name, input.Description)
	if err != nil {
		return nil, err
	}
	return &model.Category{
		ID:          category.ID,
		Name:        category.Name,
		Description: &category.Description, //Por que tem que ter &???
	}, nil
	}

// CreateCourse is the resolver for the createCourse field.
	func (r *mutationResolver) CreateCourse(ctx context.Context, input model.NewCourse) (*model.Course, error) {
		course, err := r.CourseDB.Create(input.Name, input.Description, input.CategoryID)
	if err != nil {
		return nil, err
	}
	return &model.Course{
		ID:          course.ID,
		Name:        course.Name,
		Description: &course.Description, //Por que tem que ter &???
		//CategoryID: course.categoryID,
	}, nil
	}

// CreateChapter is the resolver for the createChapter field.
	func (r *mutationResolver) CreateChapter(ctx context.Context, input model.NewChapter) (*model.Chapter, error) {
		panic(fmt.Errorf("not implemented: CreateChapter - createChapter"))
	}

// Categories is the resolver for the categories field.
	func (r *queryResolver) Categories(ctx context.Context) ([]*model.Category, error) {
		categories, err := r.CategoryDB.FindAll()
		if err != nil {
			return nil, err
		}
	
		
var categoriesModel []*model.Category
for _, category := range categories {
			categoriesModel = append(categoriesModel, &model.Category{
				ID:          category.ID,
				Name:        category.Name,
				Description: &category.Description, //Por que tem que ter &???
			})
		}
		return categoriesModel, nil
	}

// Courses is the resolver for the courses field.
	func (r *queryResolver) Courses(ctx context.Context) ([]*model.Course, error) {
		courses, err := r.CourseDB.FindAll()
	if err != nil {
		return nil, err
	}
	

var coursesModel []*model.Course
for _, course := range courses {
		coursesModel = append(coursesModel, &model.Course{
			ID:          course.ID,
			Name:        course.Name,
			Description: &course.Description, //Por que tem que ter &???
			//Category: course.Category.,
		})
	}
	return coursesModel, nil
	}

// Chapters is the resolver for the chapters field.
	func (r *queryResolver) Chapters(ctx context.Context) ([]*model.Chapter, error) {
		panic(fmt.Errorf("not implemented: Chapters - chapters"))
	}



// Category returns generated.CategoryResolver implementation.
	func (r *Resolver) Category() generated.CategoryResolver { return &categoryResolver{r} }
// Course returns generated.CourseResolver implementation.
	func (r *Resolver) Course() generated.CourseResolver { return &courseResolver{r} }
// Mutation returns generated.MutationResolver implementation.
	func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }
// Query returns generated.QueryResolver implementation.
	func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

