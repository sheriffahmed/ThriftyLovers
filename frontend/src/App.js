import React, { Component } from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EditUser from './components/EditUser'
import UserProfile from './components/UserProfile'
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
      userSession: '',
      loggedInUserName: '',
      userId: ''
    }
  }
  handleLoginSuccess = (sessionID, username, userID) =>{
    console.log(`HEY NOW `, sessionID)
this.setState({
  userSession: sessionID,
  loggedInUserName: username,
  userId: userID
})

  }
  render() {
    return (
      //Edit App.css for style
      <div className="App" style={{margin: 0}}>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark" style={{backgroundPosition: 'fixed'}} >
          <Link to='/' > <a class="navbar-brand" href="/" style={{color: 'red'}}> 
          <img alt="Brand" src={Logo_2} style={{width: "20px", display: "inline"}}/>
          {' '}Thrifty Lovers
           </a></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <Link to={this.state.loggedInUserName ? `/user/${this.state.loggedInUserName}`: '/user/:user'} > <li class="nav-item"><a class="nav-link" href="/user/:user">My Profile</a></li></Link>
              <Link to={this.state.loggedInUserName ? `/user/${this.state.loggedInUserName}/messages`: '/user/:user/messages'} > <li class="nav-item"><a class="nav-link" href="/user/:user/messages">Messages</a></li></Link>
              <Link to='/budget' > <li class="nav-item"><a class="nav-link" href="/budget">Budget</a></li></Link>
              {this.state.userSession ? <form class="form-inline"> <div class="input-group"> <p class="navbar-brand">Welcome, {this.state.loggedInUserName}!</p> <div>
                  <label>
                    <button type="button" className="btn btn-danger" style={{backgroundColor: 'red', marginLeft: '10px'}} >Logout</button>
                  </label>
                </div> </div> </form> : <li>
                <form class="form-inline">
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
            {(console.log(`Session State: `, this.state.userSession))}
            <Route exact path='/' render={(props)=> <LandingPage {...props} /> } />
            <Route path='/signup' render={(props)=> <Registration {...props} /> } />
            <Route  path='/user/:user/edit' render={()=> this.state.userSession ? <EditUser /> : <Redirect to='/login' /> } />
            <Route exact path='/user/:user' render={(props)=> this.state.userSession ? <UserProfile user={props.match.params.user} editButton={<Link to={`/user/${this.state.loggedInUserName}/edit`} ></Link>} {...props}  /> : <Redirect to='/login' /> } />            
            <Route exact path='/user/:user/messages' render={()=> this.state.userSession ? <Messages /> : <Redirect to='/login' /> } />
            <Route path='/budget' render={(props)=> <BudgetPage {...props} /> } />
            <Route path='/match' render={(props)=> <Matching {...props} /> } />
            <Route exact path='/login' render={props => <Login onLoginSuccess={this.handleLoginSuccess} {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
