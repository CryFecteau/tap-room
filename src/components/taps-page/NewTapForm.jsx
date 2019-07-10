import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {v4} from 'uuid';

function NewTapForm(props){
    let _name = null;
    let _style = null;
    let _percent = null;
    function handleNewTapFormSubmission(event){
        event.preventDefault();
        props.onNewTapCreation({name: _name.value, style: _style.value, percent: _percent.value, id:v4(), timeOpen: new Moment()});
        _name.value = '';
        _style.value = '';
        _percent.value = '';
    }
    return (
        <div>
            <form onSubmit={handleNewTapFormSubmission}>
                <input type='text' id='name' placeholder='Beer Name' ref={(input) => {_name = input;}}/>
                <input type='text' id='style' placeholder='Beer Style' ref={(input) => {_style = input;}}/>/>
                <input type='text' id='percent' placeholder='Alcohol Content' ref={(input) => {_percent = input;}}/>/>
                <button type='submit'>Enter</button>
            </form>
        </div>
    );
}
NewTapForm.propTypes = {
    onNewTapCreation: PropTypes.func
};
export default NewTapForm;