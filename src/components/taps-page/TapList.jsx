import React from 'react';
import { Link } from 'react-router-dom';
import Taps from './Taps';
import PropTypes from 'prop-types';
import TapBanner from '../img/tap-room.png';
import Keg from '../img/keg.png';
import './TapsPage.css';


function TapList(props){
    return(
        <div>
            <div className='tapBanner'>
                <img src={TapBanner}/>
            </div>
            <div>
                <Link id="addBtn" to="/createTaps">Add Taps</Link>
            </div>
            <div className="tapCon">
                <div className="colTap">
                    <img src={Keg}/>
                    <h3>Sickly</h3>
                    <p>Style: Brown Pale Ale</p>
                    <p>7%</p>
                    <p>Tapped 3 hours ago</p>
                </div>
                <div className="colTap">
                    <img src={Keg}/>
                    <h3>Reaper</h3>
                    <p>Style: Stout</p>
                    <p>9%</p>
                    <p>Tapped 7 hours ago</p>
                </div>
                <div className="colTap">
                    <img src={Keg}/>
                    <h3>Radioactive</h3>
                    <p>Style: Double IPA</p>
                    <p>8.5%</p>
                    <p>Tapped 1 hour ago</p>
                </div>
            </div>
            
            <div>
                {props.tapList.map((taps)=>
                    <Taps 
                    name={taps.name}
                    style={taps.style}
                    percent={taps.percent} 
                    formattedWaitTime={taps.formattedWaitTime}
                    key={taps.id} />
                )}
            </div>
        </div>
    );
}
TapList.prototype = {
    tapList: PropTypes.array
};
export default TapList;