import React from 'react';
import banner from '../img/banner.png';
import logo from '../img/logo.png';
import NavBar from './NavBar';
import './HeaderAnNav.css';

function Header(){
    return (
        <div>
            <div>
                <img className="banner" src={banner}/>
                <img className="logo" src={logo}/>
            </div>
            <NavBar/>
        </div>
    )
}
export default Header;