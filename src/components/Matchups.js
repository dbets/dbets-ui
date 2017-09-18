import React, {Component} from 'react';

class Matchups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      league: "MLB"
    };
  }

  componentWillMount() {
    var url = "https://api.github.com/users/dBetsPiz";
    var json = require('../data/testdata.json');

    fetch(url).then(d => d.json()).then(d => {
      d = json
      this.setState({gamesData: json})
    })
  }

  clickPick = (game, pick) => {
    console.log(game);
    console.log(pick);
  }

  render() {
    var league;

    if (window.location.hash) {
      league = window.location.hash.substring(1);
    } else {
      league = this.state.league;
    }

    if (!this.state.gamesData) {
      return (
        <div id="left-nav">
          <p>Loading...</p>
        </div>
      )
    } else {
      return (
        <div id="matchups">
          <div id="left-nav">
            <ul className="nav nav-pills nav-stacked affix">
              <li>
                <a href="#NFL">NFL</a>
              </li>
              <li>
                <a href="#NCAAF">NCAAF</a>
              </li>
              <li>
                <a href="#NBA">NBA</a>
              </li>
              <li>
                <a href="#NCAAB">NCAAB</a>
              </li>
              <li>
                <a href="#MLB">MLB</a>
              </li>
              <li>
                <a href="#NHL">NHL</a>
              </li>
            </ul>
          </div>

          <div id="matchups_container">
            <div id="matchup-header">
              <h3>{league}</h3>
              <table id="table-header">
                <tbody>
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
                {console.log(this)}
                {this.state.gamesData.map((game) => {
                  return <tr className="game-row">
                    <table className="games-table">
                      <tr>
                        <td className="colTime" rowSpan="2">{game.MatchTime}</td>
                        <td className="colTeam">{game.AwayTeam}</td>
                        <td className="colSpread">
                          <button onClick={() => this.clickPick(game, "AwaySpread")}>{game.Odds[0].PointSpreadAway}  ({game.Odds[0].PointSpreadAwayLine})</button>
                        </td>
                        <td className="colML">
                          <button>{game.Odds[0].MoneyLineAway}</button>
                        </td>
                        <td className="colTotal">
                          <button>{game.Odds[0].TotalNumber} ({game.Odds[0].OverLine})</button>
                        </td>
                        <td className="colButton" rowSpan="2">
                          <button>All Bets</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="colTeam">{game.HomeTeam}</td>
                        <td className="colSpread">
                          <button>{game.Odds[0].PointSpreadHome}  ({game.Odds[0].PointSpreadHomeLine})</button>
                        </td>
                        <td className="colML">
                          <button>{game.Odds[0].MoneyLineHome}</button>
                        </td>
                        <td className="colTotal">
                          <button>{game.Odds[0].TotalNumber}  ({game.Odds[0].UnderLine})</button>
                        </td>
                      </tr>
                    </table>
                  </tr>

                })
}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Matchups;
