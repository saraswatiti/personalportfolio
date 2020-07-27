import React from 'react';
import { FaStar } from "react-icons/fa";
/**
* @author
* @function SectionTitle
**/

const SectionTitle = ({ heading }) => {
    return (
        <>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                {heading}
            </h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                    <FaStar />
                </div>
                <div className="divider-custom-line"></div>
            </div>
        </>
    )

}

export default SectionTitle