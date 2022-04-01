import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
        </div>
    );
};

export default Navigation;