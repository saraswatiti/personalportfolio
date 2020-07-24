import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
/**
* @author
* @function MainHeader 
**/

const MainHeader = (props) => {
    const [show, setShow] = useState(true);
    const [position, setPosition] = useState(0);
    useEffect(() => {
        handle();
        window.addEventListener('scroll', handle);
        return () => {
            window.removeEventListener('scroll', handle);
        }
    }, [position])
    const handle = () => {
        setPosition(document.body.getBoundingClientRect().top);
        setShow(document.body.getBoundingClientRect().top > position)

    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg bg-secondary text-uppercase {show ? 'sticky' : 'hidden'}" id="mainNav">
                <Container>
                    <Navbar.Brand href="#home">Bootstrap</Navbar.Brand>
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