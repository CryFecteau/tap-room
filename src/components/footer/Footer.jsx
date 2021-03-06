import React from 'react';
import Facebook from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import YouTube from '../img/youtube.png';
import Logo from '../img/logo.png';
import './Footer.css';

function Footer(){
    return(
        <div className="footerBox">
            <div className="footerFlex">
                <div className="colFoot">
                    <h2>Contact Us</h2>
                    <h3>Location:</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h3>Email:</h3>
                    <p>Lorem@ipsum.</p>
                    <h3>Phone:</h3>
                    <p>(123)456-7890</p>
                </div>
                <div className="colFoot">
                    <h2>Stay Connected</h2>
                    <a href="https://en.wikipedia.org/wiki/Facebook"><img src={Facebook} alt=""/></a>
                    <a href="https://en.wikipedia.org/wiki/Instagram"><img src={Instagram} alt=""/></a>
                    <a href="https://en.wikipedia.org/wiki/YouTube"><img id="youTube" src={YouTube} alt=""/></a>
                </div>
                <div className="colFoot">
                    <img id="logo" src={Logo} alt=""/>
                </div>
            </div>
        </div>
        
    )
}
export default Footer;