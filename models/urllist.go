package models

type UrlList struct {
	Id          int    `json:"id" db:"id"`
	LongUrl     string `json:"longurl" db:"long_url" binding:"required"`
	ShortUrl    string `json:"shorturl" db:"short_url"`
	Description string `json:"description" db:"description"`
}

type UserList struct {
	Id     int
	UserId int
	UrlId  int
}
