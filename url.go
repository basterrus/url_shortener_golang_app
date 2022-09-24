package url_shortener_golang_app

type Url struct {
	Id          int    `json:"-" db:"id"`
	LongUrl     string `json:"longurl" db:"id" binding:"required"`
	ShortUrl    string `json:"shorturl" db:"shorturl" binding:"required"`
	Description string `json:"description" db:"description"`
}

type UserList struct {
	Id     int
	UserId int
	ListId int
}