import React from 'react';
import Header from './main-header/Header';
import Info from './home-page/Info';
import Taps from './taps-page/Taps';
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
        <Route path="/taps" component={Taps}/>
        <Route path="/about" component={AboutUs}/>
      </Router> 
      <Footer/>
    </div>
  );
}

export default App;
