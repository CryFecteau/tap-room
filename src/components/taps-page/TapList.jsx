import React from 'react';
import Taps from './Taps';

var masterTapList = [
    {
        name: "Reaper",
        type: "Stout",
        percent: "8%"
    },
    {
        name: "Brain Tumor",
        type: "Borwn Pale Ale",
        percent: "5%"
    },
    {
        name: "Sickly",
        type: "IPA",
        percent: "6.5%"
    },
]
function TapList(){
    return(
        <div>
            {masterTapList.map((taps, index)=>
                <Taps 
                name={taps.name}
                type={taps.type}
                percent={taps.percent} 
                key={index} />
            )}
        </div>
    );
}

export default TapList;