import logo from "../assets/logo_512x512.png";
import React from "react";


export default function Main() {
    return (
        <div className="container align-content-center mt-5">
            <img src={logo} alt="logo" width="300"/>
            <h1>Сокращатель ссылок</h1>
            <h5>Для продолжения работы пожалуйста авторизируйтесь</h5>
        </div>
    )
}