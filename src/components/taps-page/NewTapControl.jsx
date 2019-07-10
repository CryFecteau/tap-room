import React from 'react';

class NewTapControl extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('set to:' + this.state.formVisibleOnPage);
}
  render(){
    return (
      <div>
        <strong onClick={this.handleClick}>Click This</strong>
      </div>
    );
  }
}

export default NewTapControl;