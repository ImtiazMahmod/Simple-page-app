import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders Review</a>
                    <a href="/inventory">Manage Inventory Here</a>
                </nav>
               <div className="input-container">
               <input type="text" placeholder="type what your searh" />
               </div>
            </div>
        </div>
    );
};

export default Header;