package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"url_shortener_golang_app/models"
)

type UrlListPostgres struct {
	db *sqlx.DB
}

func NewUrlListPostgres(db *sqlx.DB) *UrlListPostgres {
	return &UrlListPostgres{db: db}
}

func (r *UrlListPostgres) Create(userId int, list models.UrlList) (int, error) {
	tx, err := r.db.Begin()
	if err != nil {
		return 0, nil
	}
	var id int
	createListQuery := fmt.Sprintf("INSERT INTO %s (longurl, shorturl, description) VALUES ($1, $2, $3) RETURNING id", urlList)
	row := tx.QueryRow(createListQuery, list.LongUrl, list.ShortUrl, list.Description)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return 0, err
	}
	createUsersListQuery := fmt.Sprintf("INSERT INTO %s (user_id, list_id) VALUES ($1, $2)", users)
	_, err = tx.Exec(createUsersListQuery, userId, id)
	if err != nil {
		tx.Rollback()
		return 0, err
	}
	return id, tx.Commit()
}

func (r *UrlListPostgres) GetAll(userId int) ([]models.UrlList, error) {
	//TODO implement me
	panic("implement me")
}

func (r *UrlListPostgres) GetById(userId, listId int) (models.UrlList, error) {
	//TODO implement me
	panic("implement me")
}

func (r *UrlListPostgres) Delete(userId, urlId int) error {
	//TODO implement me
	panic("implement me")
}
