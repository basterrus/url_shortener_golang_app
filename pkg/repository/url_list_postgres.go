package repository

import (
	"github.com/jmoiron/sqlx"
	"url_shortener_golang_app"
)

type UrlListPostgres struct {
	db *sqlx.DB
}

func NewUrlListPostgres(db *sqlx.DB) *UrlListPostgres {
	return &UrlListPostgres{db: db}
}

func (r *UrlListPostgres) Create(userId int, list url_shortener_golang_app.UrlList) (int, error) {
	//TODO implement me
	panic("implement me")
}

func (r *UrlListPostgres) GetAll(userId int) ([]url_shortener_golang_app.UrlList, error) {
	//TODO implement me
	panic("implement me")
}

func (r *UrlListPostgres) GetById(userId, listId int) (url_shortener_golang_app.UrlList, error) {
	//TODO implement me
	panic("implement me")
}

func (r *UrlListPostgres) Delete(userId, urlId int) error {
	//TODO implement me
	panic("implement me")
}
