import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>this is header page</h2>

            <nav> 
                <Link to='/'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/inventory">Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;