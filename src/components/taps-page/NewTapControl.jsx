import React from 'react';

class NewTapControl extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>New form control</p>
      </div>
    );
  }
}

export default NewTapControl;