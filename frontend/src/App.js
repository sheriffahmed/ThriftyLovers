import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EditUser from './components/EditUser'
import BudgetPage from './components/BudgetPage'
import LandingPage from './components/LandingPage'
import Registration from './components/Registration'
import Matching from './components/Matching'
import Messages from './components/Messages'
import Logo_1 from './images/Logo_1.png'
import Logo_2 from './images/Logo_2.png'

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render() {
    return (
      //Edit App.css for style
      <div className="App" style={{margin: 0}}>
        <div style={{padding: 0 + 'auto'}}>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header" >
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="/" style={{color: 'red'}}>
                <img alt="Brand" src={Logo_2} style={{width: "17px", display: "inline"}}/>
                {' '}
                Thrifty Lovers
                </a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li><a href="/user/:user"><span className="glyphicon glyphicon-tags"></span> My Profile</a></li>
                  <li><a href="/user/:user/messages"><span className="glyphicon glyphicon-comment"></span> Messages</a></li>
                  <li><a href="/budget"><span className="glyphicon glyphicon-btc"></span> Budget</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/signup' component={Registration} />
            <Route exact path='/user/:user' component={EditUser} />
            <Route path='/budget' component={BudgetPage} />
            <Route path='/match' component={Matching} />
            <Route exact path='/user/:user/messages' component={Messages} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
