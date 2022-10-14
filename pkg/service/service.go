package service

import (
	"url_shortener_golang_app/models"
	"url_shortener_golang_app/pkg/repository"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GenerateToken(username, password string) (string, error)
	ParseToken(token string) (int, error)
}

type UrlList interface {
	Create(userId int, list models.UrlList) (int, error)
	GetAll(userId int) ([]models.UrlList, error)
	GetById(userId, listId int) (models.UrlList, error)
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
