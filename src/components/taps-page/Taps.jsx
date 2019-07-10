import React from 'react';
import PropTypes from 'prop-types';

function Taps(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.percent} {props.style}</p>
        </div>
    );
}
Taps.propType={
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    percent: PropTypes.string
};

export default Taps;