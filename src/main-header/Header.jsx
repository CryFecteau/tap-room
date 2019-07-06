import React from 'react';
import './HeaderAnNav.css';
import banner from '../img/banner.png';
import logo from '../img/logo.png';

function Header(){
    return (
        <div>
            <img className="banner" src={banner}/>
            <img className="logo" src={logo}/>
        </div>
    )
}
export default Header;