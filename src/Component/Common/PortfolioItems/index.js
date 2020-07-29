import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import PortfolioModal from '../PortfolioModal';

/**
* @author
* @function PortfoliioItems
**/

const PortfoliioItems = ({ imgesItem, Title, textColor }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="portfolio-item mx-auto" onClick={handleShow}>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <FaPlus size="3em" />
                    </div>
                </div>
                <img className="img-fluid" src={require(`../../../assets/img/${imgesItem}`)} alt="imgesItem" />
            </div>
            <PortfolioModal Title={Title} textColor={textColor} handleClose={handleClose} show={show} imgesItem={imgesItem} />
        </>
    )

}

export default PortfoliioItems