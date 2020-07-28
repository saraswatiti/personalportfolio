import React from 'react'
import Widget from '../Common/Widget'
import { Container, Row, Col } from 'react-bootstrap'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <div className="footer text-center">
            <Container>
                <Row>
                    <Col lg={4} mb={5}>
                        <Widget />
                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default Footer