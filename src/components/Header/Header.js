import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Form, FormControl  } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-developers</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Courses</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />
        </div>
    );
};

export default Header;