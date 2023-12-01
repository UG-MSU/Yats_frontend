import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'
import '../Styles/Poisk.css'


export default class Poisk extends Component {
    render() {
        return (
            <>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <input
                            type="text"
                            placeholder="Введите запрос..."
                            className="Form-Poisk"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant ="dark">Поиск</Button>
                    </Col>
                </Row>
            </Form>    
            </>
        )
    }
}