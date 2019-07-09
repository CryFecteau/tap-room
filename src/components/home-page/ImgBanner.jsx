import React from 'react';
import './ImgBanner.css';

function ImgBanner(){
    return(
        <div className='cal-warp'>
            <span id="item1"></span>
            <span id="item2"></span>
            <span id="item3"></span>
            <div className='cal-item item1'>
                <a className='arrow arrow-prev' href="#item3"></a>
                <a className='arrow arrow-next' href='#item2'></a>
            </div>
            <div className='cal-item item2'>
                <a className='arrow arrow-prev' href="#item1"></a>
                <a className='arrow arrow-next' href='#item3'></a>
            </div>
            <div className='cal-item item3'>
                <a className='arrow arrow-prev' href="#item2"></a>
                <a className='arrow arrow-next' href='#item1'></a>
            </div>
        </div>
    )
}

export default ImgBanner;