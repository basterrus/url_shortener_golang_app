package repository

import (
	"fmt"
	"github.com/basterrus/url_shortener_golang_app/models"
	"github.com/jmoiron/sqlx"
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
	createListQuery := fmt.Sprintf("INSERT INTO %s (long_url, short_url, description) VALUES ($1, $2, $3) RETURNING id", urlList)
	row := tx.QueryRow(createListQuery, list.LongUrl, list.ShortUrl, list.Description)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return 0, err
	}
	createUsersListQuery := fmt.Sprintf("INSERT INTO %s (user_id, url_id) VALUES ($1, $2)", usersList)
	_, err = tx.Exec(createUsersListQuery, userId, id)
	if err != nil {
		tx.Rollback()
		return 0, err
	}
	return id, tx.Commit()
}

func (r *UrlListPostgres) GetAll(userId int) ([]models.UrlList, error) {
	var lists []models.UrlList

	query := fmt.Sprintf(`SELECT tl.id, tl.long_url, tl.short_url, tl.description FROM %s tl 
                                                        INNER JOIN %s ul on tl.id = ul.url_id WHERE ul.user_id = $1`,
		urlList, usersList)
	err := r.db.Select(&lists, query, userId)
	return lists, err
}

func (r *UrlListPostgres) GetById(userId, listId int) (models.UrlList, error) {
	var list models.UrlList

	query := fmt.Sprintf(`SELECT tl.id, tl.long_url, tl.short_url, tl.description FROM %s tl 
                                                        INNER JOIN %s ul on tl.id = ul.url_id WHERE ul.user_id = $1 AND ul.url_id = $2`,
		urlList, usersList)
	err := r.db.Get(&list, query, userId, listId)
	return list, err
}

func (r *UrlListPostgres) Delete(userId, urlId int) error {
	query := fmt.Sprintf("DELETE FROM %s tl USING %s ul WHERE tl.id = ul.url_id AND ul.user_id=$1 AND ul.url_id=$2",
		urlList, usersList)
	_, err := r.db.Exec(query, userId, urlId)
	return err
}
