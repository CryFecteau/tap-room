import React from 'react';
import EmployeeAuth from './EmployeeAuth';
import NewTapForm from './NewTapForm';
import PropTypes from 'prop-types';

class NewTapControl extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingAuth = this.handleTroubleshootingAuth.bind(this);
  }
handleTroubleshootingAuth(){
    this.setState({formVisibleOnPage: true});
}
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTapForm onNewTapCreation={this.props.onNewTapCreation}/>;
    } else {
      currentlyVisibleContent = <EmployeeAuth onTroubleshootingAuth={this.handleTroubleshootingAuth}/>;
    }
    return (
      <div>
          {currentlyVisibleContent}
      </div>
    );
  }
}
NewTapControl.propTypes = {
    onNewTapCreation: PropTypes.func
};
export default NewTapControl;