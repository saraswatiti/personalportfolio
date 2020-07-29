import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'
import PortfolioItems from '../../Common/PortfolioItems'


/**
* @author
* @function Portfolio
**/

const Portfolio = (props) => {
    return (
        <section className='page-section portfolio' id="portfolio">
            <Container>
                <SectionTitle heading='Portfolio' textColor="text-secondary" />
                <Row>
                    <Col lg="4" md='6' className="mb-5">
                        <PortfolioItems imgesItem='cabin.png' Title="Log Cabin" textColor="text-secondary" />
                    </Col>
                    <Col lg="4" md='6' className="mb-5">
                        <PortfolioItems imgesItem='cake.png' Title="Tasty Cake" textColor="text-secondary" />
                    </Col>
                    <Col lg="4" md='6' className="mb-5">
                        <PortfolioItems imgesItem='circus.png' Title="Circus Tent" textColor="text-secondary" />
                    </Col>
                    <Col lg="4" md='6' className="mb-5">
                        <PortfolioItems imgesItem='game.png' Title="Controller" textColor="text-secondary" />
                    </Col>
                    <Col lg="4" md='6' className="mb-5">
                        <PortfolioItems imgesItem='safe.png' Title="Locked Safe" textColor="text-secondary" />
                    </Col>
                    <Col lg="4" md='6' className="mb-5">
                        <PortfolioItems imgesItem='submarine.png' Title="Submarine" textColor="text-secondary" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Portfolio