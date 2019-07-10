import React from 'react';
import PropTypes from 'prop-types';

function EmployeeAuth(props){
    return(
        <div>
            <p>Are you a Zombie or Employee?</p>
            <button onClick={props.onTroubleshootingAuth}>Yes</button>
        </div>
    );
}
EmployeeAuth.protoTypes={
    onTroubleshootingAuth: PropTypes.func
}
export default EmployeeAuth;