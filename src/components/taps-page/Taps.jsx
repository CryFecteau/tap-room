import React from 'react';
import PropTypes from 'prop-types';

function Taps(props){
    return(
        <div>
            <div>
                <h3>{props.name}</h3>
                <p>Style: {props.style}</p>
                <p>{props.percent}%</p> 
                <p>Tapped {props.formattedWaitTime} ago</p>
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