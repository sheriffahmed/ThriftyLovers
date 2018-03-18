import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EditUser from './components/EditUser'
import BudgetPage from './components/BudgetPage'
import LandingPage from './components/LandingPage'
import Registration from './components/Registration'
import Messages from './components/Messages'


class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render() {
    return (
      //Edit App.css for style
      <div className="App">
        
        //Nav specifically for testing, but can be implimented later. Don't delete
        <nav>
          <Link to='/'> Home </Link> {' '}
          <Link to='/signup'> Signup </Link> {' '}
          <Link to='/budget'> Budget </Link> {' '}
          <Link to='/user/:user'> User </Link> {' '}
          <Link to='/user/:user/messages'> Messages </Link>
        </nav>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/signup' component={Registration} />
          <Route exact path='/user/:user' component={EditUser} />
          <Route path='/budget' component={BudgetPage} />
          <Route exact path='/user/:user/messages' component={Messages} />
       </Switch>
      </div>
    );
  }
}

export default App;
