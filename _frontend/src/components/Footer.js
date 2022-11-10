import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">

            <Container>
                <Nav className="me-auto ">
                    <Nav.Link href="#">Павел_Недошивин@baster_2022г.</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer;