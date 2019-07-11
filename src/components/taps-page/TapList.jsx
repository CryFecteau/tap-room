import React from 'react';
import Taps from './Taps';
import PropTypes from 'prop-types';
import TapBanner from '../img/tap-room.png';
import './TapsPage.css';


function TapList(props){
    return(
        <div>
            <div className='tapBanner'>
                <img src={TapBanner}/>
            </div>
            <div>
                <a href='/createTaps'>Add Taps</a>
            </div>
            <div className="taps">
                {props.tapList.map((taps)=>
                    <Taps 
                    name={taps.name}
                    style={taps.style}
                    percent={taps.percent} 
                    formattedWaitTime={taps.formattedWaitTime}
                    key={taps.id} />
                )}
                <div>
                
                </div>
            </div>
        </div>
    );
}
TapList.prototype = {
    tapList: PropTypes.array
};
export default TapList;