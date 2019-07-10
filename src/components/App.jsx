import React from 'react';
import Header from './main-header/Header';
import Info from './home-page/Info';
import TapList from './taps-page/TapList';
import AboutUs from './about-us/AboutUs';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      
      <Router>
        <Header/>
        <Route exact path="/" component={Info}/>
        <Route path="/tapList" component={TapList}/>
        <Route path="/about" component={AboutUs}/>
      </Router> 
      <Footer/>
    </div>
  );
}

export default App;
