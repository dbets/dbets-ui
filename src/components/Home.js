import React, { Component } from 'react';
import Matchups from './Matchups'

class Home extends Component {
  render() {
    return (
      <div id="home">
        <h1>Home</h1>
        <Matchups />
      </div>
    );
  }
}

export default Home;
