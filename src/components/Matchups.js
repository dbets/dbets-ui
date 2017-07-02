import React, { Component } from 'react';

class Matchups extends Component {
  render() {
    return (
      <div id="matchups">
        <div id="left-nav">
          <ul>
            <li>NFL</li>
            <li>NCAAF</li>
            <li>MLB</li>
            <li>NBA</li>
            <li>NHL</li>
          </ul>
        </div>

        <div id="matchups-container">
          <p>matchups</p>
        </div>
      </div>
    );
  }
}

export default Matchups;
