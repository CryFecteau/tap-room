import React from 'react';
import Taps from './Taps';
import PropTypes from 'prop-types';

// var masterTapList = [
//     {
//         name: "Reaper",
//         type: "Stout",
//         percent: "8%"
//     },
//     {
//         name: "Brain Tumor",
//         type: "Borwn Pale Ale",
//         percent: "5%"
//     },
//     {
//         name: "Sickly",
//         type: "IPA",
//         percent: "6.5%"
//     },
// ]
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