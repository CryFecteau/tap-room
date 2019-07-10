import React from 'react';
import Header from './main-header/Header';
import Info from './home-page/Info';
import TapList from './taps-page/TapList';
import AboutUs from './about-us/AboutUs';
import Footer from './footer/Footer';
import NewTap from './taps-page/NewTapControl';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewTapToList = this.handleAddingNewTapToList.bind(this);
  }
  handleAddingNewTapToList(newTap){
    var newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({masterTapList: newMasterTapList});
  }
  render(){
    return (
      <div>
        <Router>
          <Header/>
          <Route exact path="/" component={Info}/>
          <Route path="/tapList" render={()=><TapList tapList={this.state.masterTapList} />} />
          <Route path="/about" component={AboutUs}/>
          <Route path="/createTaps" render={()=><NewTap onNewTapCreation={this.handleAddingNewTapToList}/>}/>
        </Router> 
        <Footer/>
      </div>
    );
  }
}
  

export default App;
