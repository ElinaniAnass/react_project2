import React, { Component } from 'react';

import About from './../about';
import Footer from './../footer';
import Home from './../home';
import PortFolio from './../portfolio';
import Profile from './../profile';
import SocialMedia from './../socialMedia';
import Work from './../work';
class Index extends Component{
  render(){
    return (
      <div >
        <Home />
        <Work />
        <PortFolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}


export default Index;
