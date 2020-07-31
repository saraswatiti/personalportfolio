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
        let prevpostion = document.body.getBoundingClientRect().top;

        setTimeout(() => {
            setPosition(prevpostion);
            if (prevpostion !== position) {
                setShow(prevpostion > position);
            }

        }, 500);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`bg-secondary text-uppercase ${show ? 'sticky' : 'hidden'}`} id="mainNav" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">{titles}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-primary text-white" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#portfolio" className="py-3 px-0 px-lg-3">Portfolio</Nav.Link>
                            <Nav.Link href="#about" className="py-3 px-0 px-lg-3">About</Nav.Link>
                            <Nav.Link href="#contact" className="py-3 px-0 px-lg-3">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default MainHeader