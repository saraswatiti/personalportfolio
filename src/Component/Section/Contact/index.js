import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'
import ContactForm from '../../ContactForm'

/**
* @author
* @function Contact
**/

const Contact = (props) => {
    return (
        <section className="page-section" id="contact">
            <Container>
                <SectionTitle heading="Contact Me" textColor="text-secondary" />
                <Row>
                    <Col lg='8' className='mx-auto'>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Contact