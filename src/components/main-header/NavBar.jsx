import React from 'react';
import { Link } from 'react-router-dom';
import "./HeaderAnNav.css"

function NavBar() {
    return(
        <div className="navPostion">
            <Link to="/">Home</Link>
            <Link to="/taps">Beers on Tap</Link>
            <Link to="/about">About Us</Link>
        </div>
    )
}

export default NavBar;