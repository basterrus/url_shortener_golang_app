import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Header({menuItems, auth, logout}) {

    let login = ''

    if (auth.is_login) {
        login = <Link to='/logout' className="ms-auto text-decoration-none text-white">Выйти</Link>
    } else {
        login = <Link to='/login' className="ms-auto text-decoration-none text-white"
                      onClick={login} >Войти</Link>
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="container">
                    <Navbar.Brand href="#home" className="fw-bold">
                        <img
                            alt="logo"
                            src={logo}
                            width="32"
                            height="32"
                            className="d-inline-block align-top"
                        />{' '}
                        URL SHORTENER
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {menuItems.map((item) => <MenuItem name={item.name} href={item.href}/>)}
                    </Nav>
                    <Nav className="me-auto text-white">
                        {auth.username}
                    </Nav>
                    <Nav>
                        {login}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}


function MenuItem({name, href}) {
    return (
        <li className="nav-item active">
            <Link className="nav-link" to={href}>{name}</Link>
        </li>
    )
}
