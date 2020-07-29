import React from 'react';
import Widget from '../Common/Widget';
import { Container, Row, Col } from 'react-bootstrap';
import WidgetTitle from '../Common/WidgetTitle';
import SocialLink from '../Common/SocialLink';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <div className="footer text-center">
            <Container>
                <Row>
                    <Col lg={4} mb={5} className="mb-lg-0">
                        <Widget>
                            <WidgetTitle widgetTitle="Location" />
                            <p className="lead mb-0">
                                2215 John Daniel Drive
                                <br />
                                Clark, MO 65243
                            </p>
                        </Widget>
                    </Col>
                    <Col lg={4} mb={5} className="mb-lg-0">
                        <Widget>
                            <WidgetTitle widgetTitle="Around the Web" />
                            <SocialLink />
                        </Widget>
                    </Col>
                    <Col lg={4}>
                        <Widget>
                            <WidgetTitle widgetTitle="About Freelancer" />
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://startbootstrap.com">Start Bootstrap</a>
                                .
                            </p>
                        </Widget>
                    </Col>
                </Row>
            </Container>

        </div>

    )

}

export default Footer