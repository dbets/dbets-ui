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

        <div id="matchups_container">
          <div id="matchup-header">

            <table id="table-header">
              <tbody>
                <tr>
                  <th colSpan="6">NFL</th>
                </tr>
                <tr>
                  <th>Time</th>
                  <th>Team</th>
                  <th>Spread</th>
                  <th>Money Line</th>
                  <th>Total</th>
                </tr>
              </tbody>
            </table>
          </div>

          <table>
            <thead className="date-row">Sept 10, 2017</thead>
            <tbody>

              <tr className="game-row">
                <table className="games-table">
                  <tr>
                    <td className="colTime" rowSpan="2">7:00PM</td>
                    <td className="colTeam" >Away</td>
                    <td className="colSpread" >
                      <button>+3</button>
                    </td>
                    <td className="colML" >
                      <button>+125</button>
                    </td>
                    <td className="colTotal" >
                      <button>51</button>
                    </td>
                    <td className="colButton" rowSpan="2"><button>All Bets</button></td>
                  </tr>
                  <tr>
                    <td className="colTeam" >Home</td>
                    <td className="colSpread" >
                      <button>+3</button>
                    </td>
                    <td className="colML" >
                      <button>+125</button>
                    </td>
                    <td className="colTotal" >
                      <button>51</button>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr className="game-row">
                <table className="games-table">
                  <tr>
                    <td className="colTime" rowSpan="2">7:00PM</td>
                    <td className="colTeam" >Away</td>
                    <td className="colSpread" >
                      <button>+3</button>
                    </td>
                    <td className="colML" >
                      <button>+125</button>
                    </td>
                    <td className="colTotal" >
                      <button>51</button>
                    </td>
                    <td className="colButton" rowSpan="2"><button>All Bets</button></td>
                  </tr>
                  <tr>
                    <td className="colTeam" >Home</td>
                    <td className="colSpread" >
                      <button>+3</button>
                    </td>
                    <td className="colML" >
                      <button>+125</button>
                    </td>
                    <td className="colTotal" >
                      <button>51</button>
                    </td>
                  </tr>
                </table>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Matchups;
