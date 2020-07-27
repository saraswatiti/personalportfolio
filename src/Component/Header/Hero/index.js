import React from 'react';
import { FaStar } from "react-icons/fa";

/**
* @author
* @function Hero
**/

const Hero = ({ titles }) => {
    return (
        <div className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={require(`../../../assets/img/avataaars.svg`)} alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">{titles}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <FaStar />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>

            </div>
        </div>
    )

}

export default Hero