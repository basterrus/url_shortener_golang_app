# URL SHORTENER
## Сервис для сокращения ссылок

### Description:
`Сервис предназначен для сокращения длинных ссылок на ресурсы. Пользователь вставляет ссылку в поле на фронтенде, 
нажимает кнопку "Сократить" и в ответ получает короткую ссылку. Фронтенд отправляет запрос на Бэкенд с оригинальной 
ссылкой, обрабатывает ее, сохраняет в базу и возращает ответ фронтенду`

### Dependencies:
* Go 1.19
* Gin
* Sqlx
* Godotenv
* PQ
* Logrus
* Viper