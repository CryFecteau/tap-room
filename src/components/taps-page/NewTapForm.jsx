import React from 'react';

function NewTapForm(){
    return (
        <div>
            <form>
                <input type='text' id='name' placeholder='Beer Name'/>
                <input type='text' id='type' placeholder='Beer Type'/>
                <input type='text' id='percent' placeholder='Alcohol Percent'/>
                <button type='submit'>Enter</button>
            </form>
        </div>
    );
}

export default NewTapForm;