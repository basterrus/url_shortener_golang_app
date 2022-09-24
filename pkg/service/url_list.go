package service

import (
	"url_shortener_golang_app"
	"url_shortener_golang_app/pkg/repository"
)

type UrlListService struct {
	repo repository.UrlList
}

func NewTodoListService(repo repository.UrlList) *UrlListService {
	return &UrlListService{repo: repo}
}

func (s *UrlListService) Create(userId int, list url_shortener_golang_app.UrlList) (int, error) {
	return s.repo.Create(userId, list)
}

func (s *UrlListService) GetAll(userId int) ([]url_shortener_golang_app.UrlList, error) {
	return s.repo.GetAll(userId)
}

func (s *UrlListService) GetById(userId, listId int) (url_shortener_golang_app.UrlList, error) {
	return s.repo.GetById(userId, listId)
}

func (s *UrlListService) Delete(userId, listId int) error {
	return s.repo.Delete(userId, listId)
}
