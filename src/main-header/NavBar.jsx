import React from 'react';
import "./HeaderAnNav.css"

function NavBar() {
    return(
        <div className="navPostion">
            <a href="/">Home</a>
            <a href="/menu">Beers on Tap</a>
            <a href="/about">About Us</a>
        </div>
    )
}

export default NavBar;