import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EditUser from './components/EditUser'
import BudgetPage from './components/BudgetPage'
import LandingPage from './components/LandingPage'
import Registration from './components/Registration'
import Messages from './components/Messages'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render() {
    return (
      //Edit App.css for style
      <div className="App">

        {/*Nav specifically for testing, but can be implimented later. Dont delete*/}
        
        {/* <nav className="navbar navbar-default">
          <Link to='/'> Home </Link> {' '}
          <Link to='/signup'> Signup </Link> {' '}
          <Link to='/budget'> Budget </Link> {' '}
          <Link to='/user/:user'> User </Link> {' '}
          <Link to='/user/:user/messages'> Messages </Link>
        </nav> */}
        <div style={{padding: 0 + 'auto'}}>
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
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
          <Route exact path='/user/:user/messages' component={Messages} />
       </Switch>
       </div>
      </div>
    );
  }
}

export default App;
