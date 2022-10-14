package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"url_shortener_golang_app/models"
)

func (h *Handler) create(c *gin.Context) {
	userId, err := getUserId(c)
	if err != nil {
		return
	}

	var input models.UrlList
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	_, err := h.

	id, err := h.services.UrlList.Create(userId, input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})

}
