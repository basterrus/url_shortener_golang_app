package repository

import (
	"github.com/jmoiron/sqlx"
	"url_shortener_golang_app/models"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GetUser(username, password string) (models.User, error)
}
type UrlList interface {
	Create(userId int, list models.UrlList) (int, error)
	GetAll(userId int) ([]models.UrlList, error)
	GetById(userId, listId int) (models.UrlList, error)
	Delete(userId, urlId int) error
}
type Repository struct {
	Authorization
	UrlList
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		UrlList:       NewUrlListPostgres(db),
	}
}
