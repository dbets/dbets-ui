import React, { Component } from 'react';

class Matchups extends Component {
  render() {
    return (
      <div id="matchups">
        <div id="left-nav">
        <ul className="nav nav-pills nav-stacked affix">
            <li><a href="#NFL">NFL</a></li>
            <li><a href="#NCAAF">NCAAF</a></li>
            <li><a href="#NBA">NBA</a></li>
            <li><a href="#NCAAB">NCAAB</a></li>
            <li><a href="#MLB">MLB</a></li>
            <li><a href="#NHL">NHL</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Matchups;
