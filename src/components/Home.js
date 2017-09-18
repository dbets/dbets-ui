import React, { Component } from 'react';
import Matchups from './Matchups'

class Home extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <h1>Home</h1>
    );
  }
}

export default Home;
