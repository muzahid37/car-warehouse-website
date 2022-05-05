import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav> 
                <Link to='/'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">Sing Up</Link>
            </nav>
        </div>
    );
};

export default Header;