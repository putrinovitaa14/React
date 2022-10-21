import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComp1 = (props) => {


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">P.Hafsha</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Produk</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComp1;