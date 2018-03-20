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
        <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
        {/*Nav specifically for testing, but can be implimented later. Dont delete*/}
        
        {/* <nav className="navbar navbar-default">
          <Link to='/'> Home </Link> {' '}
          <Link to='/signup'> Signup </Link> {' '}
          <Link to='/budget'> Budget </Link> {' '}
          <Link to='/user/:user'> User </Link> {' '}
          <Link to='/user/:user/messages'> Messages </Link>
        </nav> */}
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
