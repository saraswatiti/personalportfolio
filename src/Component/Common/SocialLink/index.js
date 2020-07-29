import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";


/**
* @author
* @function SocialLink
**/

const SocialLink = (props) => {
    return (
        <div>
            <Link to="" className="btn btn-outline-light btn-social mx-1">
                <FaFacebookF />
            </Link>
            <Link to="" className="btn btn-outline-light btn-social mx-1">
                <FaTwitter />
            </Link>
            <Link to="" className="btn btn-outline-light btn-social mx-1">
                <FaLinkedinIn />
            </Link>
            <Link to="" className="btn btn-outline-light btn-social mx-1">
                <FaDribbble />
            </Link>
        </div>
    )

}

export default SocialLink