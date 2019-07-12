import React from 'react';
import PropTypes from 'prop-types';
import Keg from '../img/keg.png';
import './TapsPage.css';

function Taps(props){
    return(
        <div>
            <div className="tapCon">
                <div className="colTap">
                    <img src={Keg}/>
                    <h3>{props.name}</h3>
                    <p>Style: {props.style}</p>
                    <p>{props.percent}%</p> 
                    <p>Tapped {props.formattedWaitTime} ago</p>
                </div>
            </div>
        </div>
    );
}
Taps.propType={
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    percent: PropTypes.string,
    formattedWaitTime: PropTypes.string.isRequired
};

export default Taps;