package service

import (
	"math/rand"
	"net/url"
	"url_shortener_golang_app/models"
	"url_shortener_golang_app/pkg/repository"
)

const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

type UrlListService struct {
	repo repository.UrlList
}

func NewTodoListService(repo repository.UrlList) *UrlListService {
	return &UrlListService{repo: repo}
}

func (s *UrlListService) Create(userId int, list models.UrlList) (int, error) {
	return s.repo.Create(userId, list)
}

func (s *UrlListService) GetAll(userId int) ([]models.UrlList, error) {
	return s.repo.GetAll(userId)
}

func (s *UrlListService) GetById(userId, listId int) (models.UrlList, error) {
	return s.repo.GetById(userId, listId)
}

func (s *UrlListService) Delete(userId, listId int) error {
	return s.repo.Delete(userId, listId)
}

func shorting() string {
	b := make([]byte, 5)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(b)
}

func isValidUrl(instance string) bool {
	_, err := url.ParseRequestURI(instance)
	if err != nil {
		return false
	}
	u, err := url.Parse(instance)
	if err != nil || u.Host == "" {
		return false
	}
	return true
}
