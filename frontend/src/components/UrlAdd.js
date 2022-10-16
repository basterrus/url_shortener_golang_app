import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UrlAdd() {
    return (
        <div className="col-4 border border-primary auth_form">
            <Form>
                <Form.Group className="mb-3 " controlId="URL">
                    <Form.Label className="fw-bold">URL адрес</Form.Label>
                    <Form.Control type="longurl" placeholder="Введите URL адрес"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label className="fw-bold">Описание</Form.Label>
                    <Form.Control type="password" placeholder="Описание ссылки"/>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit" className="col-8">
                    Добавить
                </Button>
            </Form>
        </div>
    );
}

export default UrlAdd;
