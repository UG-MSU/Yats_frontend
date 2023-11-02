import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "./logo192.png"

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        YATS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className = "mr-auto">
                            <Nav.Link><Link to="/about-us" style={{textDecoration: "none", color: 'white'}}>О нас</Link></Nav.Link>
                            <Nav.Link><Link to="/contests" style={{textDecoration: "none", color: 'white'}}>Контесты</Link></Nav.Link>
                            <Nav.Link><Link to="/bLog" style={{textDecoration: "none", color: 'white'}}>Блог</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
    }
}