import React from 'react';
import LogoWhite from '../../asset/img/Logo_Kasa_White.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='logoFooter' src={LogoWhite} alt='logo-kasa' />
            <span><h1>© 2020 Kasa. All rights reserved</h1></span>
        </div>
    );
};

export default Footer;