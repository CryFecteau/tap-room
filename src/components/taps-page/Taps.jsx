import React from 'react';
import PropTypes from 'prop-types';

function Taps(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.percent} {props.style}</p>
            <p>{props.formattedWaitTime} ago</p>
        </div>
    );
}
// GET BEER STYLE TO DISPLAY!
Taps.propType={
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    percent: PropTypes.string,
    formattedWaitTime: PropTypes.string.isRequired
};

export default Taps;