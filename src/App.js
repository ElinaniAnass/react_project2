import React, { Component } from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './compoents/contact';
import Navbar from './compoents/navbar';
import Index from './compoents/index';
class App extends Component{
  render(){
    return (
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}


export default App;
