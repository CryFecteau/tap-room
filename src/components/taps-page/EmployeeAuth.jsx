import React from 'react';
import PropTypes from 'prop-types';
import Face from '../img/drunkHead.png';
import './TapsPage.css';

function EmployeeAuth(props){
    function Deined(){
        alert("Non-Zombies or Employees are not allowed access to this page")
    }
    return(
        <div className="emCon">
            <div id="box">
                <div className="colEm">
                    <p>Are you a Zombie or Employee?</p>
                    <button onClick={props.onTroubleshootingAuth}>Yes</button>
                    <button onClick={Deined}>No</button>
                </div>
            </div>
            <div className="colEm">
                <img src={Face}/>
            </div>
        </div>
        
    );
}
EmployeeAuth.protoTypes={
    onTroubleshootingAuth: PropTypes.func
}
export default EmployeeAuth;