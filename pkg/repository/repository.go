package repository

import (
	"github.com/jmoiron/sqlx"
	"url_shortener_golang_app"
)

type Authorization interface {
	CreateUser(user url_shortener_golang_app.User) (int, error)
	GetUser(username, password string) (url_shortener_golang_app.User, error)
}
type UrlList interface {
	Create(userId int, list url_shortener_golang_app.UrlList) (int, error)
	GetAll(userId int) ([]url_shortener_golang_app.UrlList, error)
	GetById(userId, listId int) (url_shortener_golang_app.UrlList, error)
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
