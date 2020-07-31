import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
/**
* @author
* @function MainHeader 
**/

const MainHeader = ({ titles }) => {
    const [show, setShow] = useState(true);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handle);
        handle();
        return () => {
            window.removeEventListener('scroll', handle);
        }

    }, [position]);

    const handle = () => {
        const prevpostion = document.body.getBoundingClientRect().top;
        setPosition(prevpostion);
        setShow(prevpostion > position);
        console.log(prevpostion);
        console.log(position);
        console.log(show);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`bg-secondary text-uppercase ${show ? 'sticky' : 'hidden'}`} id="mainNav" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">{titles}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-primary text-white" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default MainHeader