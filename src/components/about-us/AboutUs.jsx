import React from 'react';
import Work from '../img/work.png';
import Head from '../img/zombie.png';
import Bit from '../img/zombit.png';
import './AboutUs.css';

function AboutUs(){
    return(
        <div className='contain'>
                <div className='row'>
                    <div className='column'>
                        <h3>Founded in the 17th century, we have been striving to share our love for beer(not brains) with the world.</h3>
                    </div>
                    <div>
                        <img id='work' src={Work}/>
                    </div>
                </div>
            
            <div className='row'>
                <div>
                    <img id='head' src={Head}/>
                </div>
                    <div className='column'>
                        <h3>Our founder and head zombie has been with the company from the beginning, fine tunning all our recipes.</h3>
                    </div>
                </div>
            
            <div className='row'>
                <div className='column'>
                    <h3>For the being to today, we want to show that zombies are more then what you may think.</h3>
                </div> 
                <div>
                    <img id='bit' src={Bit}/>
                </div>
            </div> 
        </div>
    );
}

export default AboutUs;