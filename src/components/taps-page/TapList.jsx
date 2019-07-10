import React from 'react';
import Taps from './Taps';
import PropTypes from 'prop-types';

function TapList(props){
    return(
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
    );
}
TapList.prototype = {
    tapList: PropTypes.array
};
export default TapList;