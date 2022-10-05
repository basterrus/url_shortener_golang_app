package handler

import (
	"github.com/gin-gonic/gin"
	"url_shortener_golang_app/pkg/service"
)

type Handler struct {
	services *service.Service
}

func NewHandler(services *service.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.signUp)
		auth.POST("/sign-in", h.signIn)
	}

	api := router.Group("/api", h.userIdentity)
	{
		lists := api.Group("/lists")
		{
			lists.GET("/")
			lists.POST("/", h.create)
			lists.GET("/:id")
			lists.DELETE("/")
		}
	}
	return router
}
