import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/Nav'
import Home from './components/Home'
import Matchups from './components/Matchups'
import WagerBoard from './components/WagerBoard'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">dBets</a>
          </div>
            <ul className="nav navbar-nav">
              <li><NavLink activeClassName="activeNav" to="/matchups">Matchups</NavLink></li>
              <li><NavLink activeClassName="activeNav" to="/wagerboard">WagerBoard</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink activeClassName="activeNav" to="/account">My Account</NavLink></li>
            </ul>
        </div>
      </nav>

        <Route exact path="/" component={Home}/>
        <Route exact path="/matchups" component={Matchups}/>
        <Route exact path="/wagerboard" component={WagerBoard}/>
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
