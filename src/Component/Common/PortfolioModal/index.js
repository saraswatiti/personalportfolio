import React from 'react';
import { Button, Modal, ModalDialog, Container, Row, Col, ModalBody } from 'react-bootstrap';
import { FaRegWindowClose } from "react-icons/fa";
import SectionTitle from '../SectionTitle';

/**
* @author
* @function PortfolioModal
**/

const PortfolioModal = ({ handleClose, show, imgesItem, Title, textColor }) => {

    return (
        <Modal show={show} className="portfolio-modal" dialogClassName="modal-xl">
            <button className="close" type="button">
                <span>
                    <FaRegWindowClose onClick={handleClose} />
                </span>
            </button>
            <ModalBody className="text-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <SectionTitle heading={Title} textColor={textColor} />
                            <img className="img-fluid rounded mb-5" src={require(`../../../assets/img/${imgesItem}`)} alt="" />
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Mollitia neque assumenda ipsam nihil,
                                molestias magnam, recusandae quos quis
                                inventore quisquam velit asperiores, vitae?
                                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                                </p>
                            <Button onClick={handleClose}>
                                <FaRegWindowClose className="mr-2" />
                                    Close Window
                                </Button>
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
        </Modal>
    )

}

export default PortfolioModal