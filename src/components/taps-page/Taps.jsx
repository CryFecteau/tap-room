import React from 'react';
import PropTypes from 'prop-types';

function Taps(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.type}</p>
            <p>{props.percent}</p>
        </div>
    );
}
Taps.propType={
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    percent: PropTypes.string
};

export default Taps;