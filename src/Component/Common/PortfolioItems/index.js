import React from 'react';
import { FaPlus } from "react-icons/fa";

/**
* @author
* @function PortfoliioItems
**/

const PortfoliioItems = ({ imgesItem }) => {
    return (
        <>
            <div className="portfolio-item mx-auto">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <FaPlus />
                    </div>
                </div>
                <img className="img-fluid" src={require(`../../../assets/img/${imgesItem}`)} alt="imgesItem" />
            </div>
        </>
    )

}

export default PortfoliioItems