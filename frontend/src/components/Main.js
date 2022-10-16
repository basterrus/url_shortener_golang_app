import logo from "../assets/logo_512x512.png";
import React from "react";


export default function Main() {
    return (
        <div className="container align-content-center mt-5">
            <img src={logo} alt="logo" width="300"/>
            <h1>Сокращатель ссылок</h1>
            <h5>Для продолжения работы пожалуйста авторизируйтесь</h5>
            <br/>
            <p>Сервис предназначен для конвертации Веб ссылок в короткий и более читаемый формат</p>
            <p>Для просмотра списка уже существующих ссылок перейдите на страницу <span className="fw-bold">Список ссылок</span>
            </p>
            <p>Для добавления новых ссылок перейдите на страницу <span className="fw-bold">Добавить ссылку</span></p>
        </div>
    )
}