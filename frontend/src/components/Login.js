import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login</h1>
                <br/>
                <br/>
                <input type='text' placeholder='username' value=''/>
                <br/>
                <br/>
                <input type='password' placeholder='password' value=''/>
                <br/>
                <br/>
                <button type='submit'>Submit</button>
            </div>
        )
    }
}

export default Login;