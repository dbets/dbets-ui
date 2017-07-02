import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './components/Nav'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        Hello
      </div>
    );
  }
}

export default App;
