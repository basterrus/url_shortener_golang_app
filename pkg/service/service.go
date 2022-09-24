package service

import (
	"url_shortener_golang_app"
	"url_shortener_golang_app/pkg/repository"
)

type Authorization interface {
	CreateUser(user url_shortener_golang_app.User) (int, error)
	GenerateToken(username, password string) (string, error)
	ParseToken(token string) (int, error)
}

type UrlList interface {
	Create(userId int, list url_shortener_golang_app.UrlList) (int, error)
	GetAll(userId int) ([]url_shortener_golang_app.UrlList, error)
	GetById(userId, listId int) (url_shortener_golang_app.UrlList, error)
	Delete(userId, urlId int) error
}

type Service struct {
	Authorization
	UrlList
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(repos.Authorization),
		UrlList:       NewTodoListService(repos.UrlList),
	}
}
