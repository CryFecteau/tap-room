import React from 'react';
import './Info.css';
import Hand from '../img/hand.png';
import Beer from '../img/beer.png';
import Open from '../img/open.png';

function Info(){
    return(
        <div className="flexCon">
            <div>
                <p>Our Hours</p>
                
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
                <div>
                    <p>Hungery?</p>
                </div>
        </div>
    )
}

export default Info;