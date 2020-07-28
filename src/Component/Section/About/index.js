import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../../Common/SectionTitle';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

/**
* @author
* @function About
**/

const About = (props) => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <Container>
                <SectionTitle heading='About' textColor='text-white' dividerColor='divider-light' />
                <Row>
                    <Col lg={4} className="ml-auto">
                        <p className="lead">
                            Freelancer is a free bootstrap theme
                            created by Start Bootstrap.
                            The download includes the complete
                            source files including HTML, CSS, and
                            JavaScript as well as optional SASS
                            stylesheets for easy customization.
                        </p>
                    </Col>
                    <Col lg={4} className="mr-auto">
                        <p className="lead">
                            You can create your own custom avatar for the masthead,
                            change the icon in the dividers, and add
                            your email address to the contact form
                            to make it fully functional!
                        </p>
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <Link to='https://startbootstrap.com/themes/freelancer/' className="btn btn-xl btn-outline-light">
                        <FaDownload className="mr-2" />
                        Free Download!
                    </Link>
                </div>
            </Container>
        </section>
    )

}

export default About