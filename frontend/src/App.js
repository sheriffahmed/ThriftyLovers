import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EditUser from './components/EditUser'
import UserProfile from './components/UserProfile'
import UserPublicProfile from './components/UserPublicProfile'
import BudgetPage from './components/BudgetPage'
import LandingPage from './components/LandingPage'
import Registration from './components/Registration'
import Matching from './components/Matching'
import Messages from './components/Messages'
import Feed from './components/Feed'
import Chat from './components/Chat'
import Login from './components/Login'
import Logo_1 from './images/Logo_1.png'
import Logo_2 from './images/Logo_2.png'
import axios from 'axios'


class App extends Component {
  constructor() {
    super();
    this.state = {
      userSession: '',
      loggedInUserName: '',
      userId: '',
      userGender: '',
      userGenderPref: '',
      userBudgetTier: '',
      navUser: '',
      navPassword: '',
      navMessage: '',
      result: '',
      allUsers: ''

    }
    this.handleUserMatch = (user1, userArr) => {
      if (this.state.result) {
        return;
      }
      userArr.forEach(user => {
        if (user1.username !== user.username) {
          console.log(`Not Same user`)
          console.log(`user1 min age: `, user1.pref.minAge, `user age: `, user.age, `user1 max age: `, user1.pref.maxAge)
          if (user1.pref.minAge <= user.age && user1.pref.maxAge >= user.age && user1.pref.genderPref === user.gender) {
            console.log(`in Age Range`)
            user1.pref.eventIds.forEach(el => {
              user.pref.eventIds.forEach(el2 => {
                if (el === el2) {
                  this.setState({
                    result: `${user1.firstName} Matches with ${user.firstName}!`
                  })
                }
              })


            })
          }
        }
        console.log('Nope')
      })

    }
  }

  handleRedirect = () => {
    return <Redirect to={`/user/${this.state.loggedInUserName}/feed`} />;
  }

  handleUserInput = e => {
    this.setState({
      navUser: e.target.value
    })
  }
  handlePasswordInput = e => {
    this.setState({
      navPassword: e.target.value
    })
  }
  handleUserLogout = (click) => {
    console.log(`inside logout.`)
    // axios
    // .get('/users/logout')
    // .then(res =>{
    this.setState({
      userSession: '',
      loggedInUserName: '',
      userId: '',
      userGender: '',
      userGenderPref: '',
      userBudgetTier: '',
      navUser: '',
      navPassword: '',
      navMessage: '',
      result: ''
    });
    console.log(`Login Success`);
    // })
    // .catch(err => {
    //   console.log(`Axios err: `, err)
    //   this.setState({
    //     navMessage: 'Err during logout. Please try again'
    //   })
    // })
  }
  handleNavbarLogin = (e) => {
    console.log(this.state.navUser)
    axios
      .post('/users/login', {
        username: this.state.navUser,
        password: this.state.navPassword

      })
      .then(res => {
        console.log(`res data: `, res.data)
        this.handleLoginSuccess(res.data.data.token, res.data.data.user.username, res.data.data.user.id, res.data.data.user.gender, res.data.data.user.gender_pref, res.data.data.user.budget_tier)
        this.setState({
          navUser: '',
          navPassword: '',
          navMessage: 'Login success'
        })
        return this.handleRedirect();
      })
      .catch(err => {
        console.log(`Axios err: `, err)
        this.setState({
          navUser: '',
          navPassword: '',
          navMessage: 'Err during login. Please try again'
        })
      })
  }


  // handleNavbarSubmit = () =>{
  //   this.setState({
  //     navSubmit: true
  //   })
  // }
  handleLoginSuccess = (sessionID, username, userID, gender, genderpref, budgettier) => {

    this.setState({
      userSession: sessionID,
      loggedInUserName: username,
      userId: userID,
      userGender: gender,
      userGenderPref: genderpref,
      userBudgetTier: budgettier
    })


  }

  componentDidMount() {
    axios
      .get('/users/match')
      .then(arr => {
        console.log(`all users for match: `, arr.data.data)
        console.log(this.state.allUsers)
        if (!this.state.allUsers) {
          this.setState({
            allUsers: arr.data.data
          })
          console.log(`this.state.allUsers: `, this.state.allUsers)
        }

      })
  }
  render() {
    console.log(this.state)
    return (
      //Edit App.css for style; Start
      <div
        className="App"
        style={
          {
            margin: 0
          }
        }
      >
        {/* Navbar Start */}
        <nav
          class="navbar navbar-expand-lg bg-light navbar-light"
          style={
            {
              position: 'fixed',
              zIndex: 2,
              width: '100%',
              top: '0px'
            }
          }
        >
          <Link to='/' >
            <a class="navbar-brand"
                
              href="/"
              style={
                {
                  color: 'red'
                
                }
              }
            >
              <img alt="Brand" src={Logo_2}
                style={
                  {
                    width: "20px",
                    display: "inline"
                  }
                }
              />
              {' '}Thrifty Lovers
           </a>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <Link to={this.state.loggedInUserName ? `/user/${this.state.loggedInUserName}` : '/user/:user'} > <li class="nav-item"><a class="nav-link" href="/user/:user">MY PROFILE</a></li></Link>
              <Link to={this.state.loggedInUserName ? `/user/${this.state.loggedInUserName}/messages` : '/user/:user/messages'} > <li class="nav-item"><a class="nav-link" href="/user/:user/messages">MESSAGES</a></li></Link>
              <Link to='/budget' > <li class="nav-item"><a class="nav-link" href="/budget">EVENTS</a></li></Link>
              <Link to={this.state.loggedInUserName ? `/user/${this.state.loggedInUserName}/feed` : '/user/:user/feed'} > <li class="nav-item"><a class="nav-link" href="/user/:user/Feed">MATCHES</a></li></Link>
              {/* 
              Navbar Login 
              */}
              {this.state.userSession
                ? <form
                  class="form-inline">
                  <div class="input-group">
                    <p class="navbar-brand">
                      Welcome, {this.state.loggedInUserName.substr(0,1).toLocaleUpperCase() + this.state.loggedInUserName.substr(1)}!
                  </p>
                    <div>
                      <label>
                        <button
                          onClick={this.handleUserLogout}
                          type="button"
                          className="btn btm-danger2"
                        >
                          Logout
                      </button>
                      </label>
                    </div>
                  </div>
                </form>
                : <li>
                  {/* Need to Login */}
                  <form class="form-inline my-2 my-lg-0" align="right">
                    <div class="input-group">
                      <label>
                        <input
                          type="text"
                          class="form-control mr-sm-2"
                          value={this.state.navUser}
                          onInput={this.handleUserInput}
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          style={{
                            paddingLeft: "-0px",
                            display: "block"
                          }} />
                      </label>
                    </div>
                    {' '}
                    <div class="input-group">
                      <label>
                        <input
                          type="password"
                          class="form-control mr-sm-2"
                          placeholder="Password"
                          value={this.state.navPassword}
                          onInput={this.handlePasswordInput}
                          aria-label="Password"
                          aria-describedby="basic-addon1"
                          style={{
                            paddingLeft: "-0px",
                            marginLeft: "10px",
                            display: "block"
                          }} />
                      </label>
                      <div>
                        <label>
                          <button type="button" onClick={this.handleNavbarLogin} className="btn btm-danger2" style={{ marginLeft: '10px' }} >
                            Login
                          </button>
                        </label>
                        {this.state.navMessage}
                      </div>
                    </div>
                  </form>
                </li>
              }
            </ul>
          </div>
        </nav>
        <div style={{
    marginTop: '64px'
}} >
          {this.handleRedirect}
          <Switch>

            <Route exact path='/' render={(props) => <LandingPage {...props} />} />
            <Route path='/signup' render={(props) => <Registration {...props} />} />
            <Route path='/user/:user/edit' render={() => this.state.userSession ? <EditUser /> : <Redirect to='/login' />} />
            <Route exact path='/user/:user' render={(props) => this.state.userSession ? <UserProfile user={props.match.params.user} editButton={<Link to={`/user/${this.state.loggedInUserName}/edit`} ></Link>} {...props} /> : <Redirect to='/login' />} />
            <Route exact path='/user/public/:user2' render={(props) => this.state.userSession ? <UserPublicProfile user={props.match.params.user2} {...props} /> : <Redirect to='/login' />} />
            <Route exact path='/user/:user/messages' render={(props) => this.state.userSession ? <Messages
              userId={this.state.userId}
              userGender={this.state.userGender}
              userGenderPref={this.state.userGenderPref}
              userBudgetTier={this.state.userBudgetTier}
              userArr={this.state.allUsers}
              user={this.state.loggedInUserName} {...props} /> : <Redirect to='/login' />} />
            <Route exact path='/user/:user/chat/:user2' render={(props) => this.state.userSession ? <Chat authUser={this.state.loggedInUserName} /> : <Redirect to='/login' />} />
            <Route path='/budget' render={(props) => <BudgetPage UserID={this.state.userId} BudgetTier={this.state.userBudgetTier} {...props} />} />
            <Route path='/match' render={(props) => <Matching
              userId={this.state.userId}
              userGender={this.state.userGender}
              userGenderPref={this.state.userGenderPref}
              userBudgetTier={this.state.userBudgetTier}  {...props} />} />
            <Route exact path='/login' render={props => <Login onLoginSuccess={this.handleLoginSuccess} navUser={this.state.navUser} navPassword={this.state.navPassword} loggedInUser={this.state.loggedInUserName} {...props} />} />
            <Route exact path='/user/:user/feed' render={props => this.state.userSession ? <Feed
              userId={this.state.userId}
              userGender={this.state.userGender}
              userGenderPref={this.state.userGenderPref}
              userBudgetTier={this.state.userBudgetTier} userArr={this.state.allUsers} {...props} /> : <Redirect to='/login' />} />

          </Switch>
        </div>
        {/* -- Footer -- */}

        {/* <div style={{ height: '50px', backgroundColor: '#343a40' }} ></div> */}
      </div>
    );
  }
}

export default App;
