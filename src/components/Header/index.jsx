// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import LogoPink from '../../asset/img/Logo_Kasa_Pink.png'
import Navigation from '../../components/Navigation';



const Header = () => {
    // const [set, setup] = useState('hello')
    return (
        <div className='header'>
            <NavLink to="/">
            <img className='logoHeader' src={LogoPink} alt='logo-kasa' />
            </NavLink>
            <Navigation/>
        </div>
    );
};

export default Header;



