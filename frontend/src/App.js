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
import Login from './components/Login'
import Logo_1 from './images/Logo_1.png'
import Logo_2 from './images/Logo_2.png'


class App extends Component {
  constructor(){
    super();
    this.state = {
      userSession: ''
    }
  }
  handleLoginSuccess = (sessionID) =>{
    console.log(`HEY NOW `, sessionID)
this.setState({
  userSession: sessionID
})

  }
  render() {
    return (
      //Edit App.css for style
      <div className="App" style={{margin: 0}}>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark" style={{backgroundPosition: 'fixed'}} >
          <a class="navbar-brand" href="/" style={{color: 'red'}}>
          <img alt="Brand" src={Logo_2} style={{width: "20px", display: "inline"}}/>
          {' '}Thrifty Lovers
           </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="/user/:user">My Profile</a></li>
              <li class="nav-item"><a class="nav-link" href="/user/:user/messages">Messages</a></li>
              <li class="nav-item"><a class="nav-link" href="/budget">Budget</a></li>
              {this.state.userSession ? <p>Welcome!</p> : <li><form class="form-inline">
                <div class="input-group">
                <label>
                  <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1" 
                  style={{
                    paddingLeft: "-0px",
                    display: "block"
                  }}/>
                  </label>
                </div>
                {' '}
                <div class="input-group">
                  <label>
                    <input 
                    type="password" 
                    class="form-control" 
                    placeholder="Password" 
                    aria-label="Password" 
                    aria-describedby="basic-addon1" 
                    style={{
                      paddingLeft: "-0px",
                      marginLeft: "10px",
                      display: "block"
                    }}/>
                  </label>
                <div>
                  <label>
                    <button type="button" className="btn btn-danger" style={{backgroundColor: 'red', marginLeft: '10px'}} >Login</button>
                  </label>
                </div>
                </div>
              </form></li>}
            </ul>
          </div> 
        </nav>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={Registration} />
            <Route exact path='/user/:user' component={EditUser} />
            <Route path='/budget' component={BudgetPage} />
            <Route path='/match' component={Matching} />
            <Route exact path='/user/:user/messages' component={Messages} />
            <Route exact path='/login' render={props => <Login onLoginSuccess={this.handleLoginSuccess} {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
