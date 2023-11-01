import React, { Component } from 'react'
import { Navbar, Nav, Container, Form, Button, Row, Col } from 'react-bootstrap'

<Form inline>
      <Row>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    placeholder="Введите запрос..."
                    className="mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button variant ="outline-info">Поиск</Button>
            </Col>
      </Row>
</Form>