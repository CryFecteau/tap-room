import React from 'react';
import './Info.css';
import Hand from '../img/hand.png';
import Beer from '../img/beer.png';
import Open from '../img/open.png';

function Info(){
    return(
        <div className="flexCon">
            <div className="col">
                <hr/>
                <h3>Our Hours</h3>
                <img src={Open}/>
                <ul>
                    <li>Monday 10am - 11pm</li>
                    <li>Tuesday 10am - 11pm</li>
                    <li>Wednesday 10am - 11pm</li>
                    <li>Thursday 10am - 12am</li>
                    <li>Friday 10am - 1am</li>
                    <li>Saturday 10am - 2am</li>
                    <li>Sunday 12pm - 9pm</li>
                </ul>
            </div>
            <div className="col">
                <hr/>
                <h3>Hungery?</h3>
                <img src={Hand}/>
                <p>Our chefs use the freshest ingerdients to make new dishes each day, come on in and see whats on new on our menu.</p>
            </div>
            <div className="col">
                <hr/>
                <h3>Take The Fun Home</h3>
                <img src={Beer}/>
                <p>Why not share your experience and take our exclusive custom bottles home or to your next event.</p>
            </div>

        </div>
    )
}

export default Info;