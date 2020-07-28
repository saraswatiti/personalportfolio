import React from 'react';
import { FaStar } from "react-icons/fa";
/**
* @author
* @function SectionTitle
**/

const SectionTitle = ({ heading, textColor, dividerColor }) => {
    return (
        <>
            <h2 className={`page-section-heading text-center text-uppercase mb-0 ${textColor}`}>
                {heading}
            </h2>
            {dividerColor ? (
                <div className={`divider-custom ${dividerColor}`}>
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <FaStar />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
            ) : (
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <FaStar />
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                )}

        </>
    )

}

export default SectionTitle