import React from 'react';
import Hero from './Hero';
import MainHeader from './MainHeader';


/**
* @author
* @function Header
**/

const Header = (props) => {
    const brandName = 'START BOOTSTRAP';
    return (
        <>
            <MainHeader titles={brandName} />
            <Hero titles={brandName} />
        </>
    )

}

export default Header