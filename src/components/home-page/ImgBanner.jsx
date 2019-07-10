
import React from 'react';
import Drink from '../img/drunkDrink.png';
import Hours from '../img/happyHour.png';
import Enter from '../img/comeIn.png';
import './ImgBanner.css';

function ImgBanner(){
    return(
        <div className='cal-warp'>
            <span id="item1"></span>
            <span id="item2"></span>
            <span id="item3"></span>
            <div className='cal-item item1'>
                <img src={Drink}></img>
                <a className='arrow arrow-prev' href="#item3"></a>
                <a className='arrow arrow-next' href='#item2'></a>
            </div>
            <div className='cal-item item2'>
                <img src={Hours}></img>
                <a className='arrow arrow-prev' href="#item1"></a>
                <a className='arrow arrow-next' href='#item3'></a>
            </div>
            <div className='cal-item item3'>
                <img src={Enter}></img>
                <a className='arrow arrow-prev' href="#item2"></a>
                <a className='arrow arrow-next' href='#item1'></a>
            </div>
        </div>
    )
}

export default ImgBanner;