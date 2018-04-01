import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            Message: ''
        }
    }

    handleLoginSubmit = (e) =>{
e.preventDefault();
        const formErr = (selector) => {
            const isNodelist = (typeof selector.length != 'undefined' &&
                typeof selector.item != 'undefined')
            if (!isNodelist) {
                selector.style.border = "2px solid #FF0000";
                return;
            }
            for (let i = 0; i < selector.length; i++) {
                selector[i].style.border = "2px solid #FF0000";
            }
        }
        const fixedErr = (selector) => {
            const isNodelist = (typeof selector.length != 'undefined' &&
                typeof selector.item != 'undefined')
            if (!isNodelist) {
                selector.style.border = "";
                return;
            }
            for (let i = 0; i < selector.length; i++) {
                selector[i].style.border = "";
            }
        }
        let uname = document.getElementById('username')
        let pword = document.getElementById('password')
        
        let {
           username,
           password,
           Message
        } = this.state;
        if (!username) {
            formErr(uname);
        } else {
            fixedErr(uname);
        }
        if (!password) {
            formErr(pword);
        } else {
            fixedErr(pword);
        }

        axios
        .post('/users/login', {
            username: this.state.username,
            password: this.state.password,

        })
        .then(res => {
            console.log(res.data)
            this.props.onLoginSuccess(res.data.data.token, res.data.data.user.username, res.data.data.user.id)
            this.setState({
                username: '',
                password: '',
                Message: 'Login success'
            })

        })
        .catch(err => {
            console.log(`Axios err: `, err)
            this.setState({
                username: '',
                password: '',
                Message: 'Err during login. Please try again'
            })
        })
}

handleFormInput = e => {
    
            this.setState({
                [e.target.id]: e.target.value
            })
        }

    render(){
        let {
            username,
            password,
        Message } = this.state
        return(
            <div>
                <h1>Login</h1>
                <br/>
                <br/>
                <form onSubmit={this.handleLoginSubmit} >
                <input id='username' onInput={this.handleFormInput} type='text' placeholder='username' value={username}/>
                <br/>
                <br/>
                <input id='password' onInput={this.handleFormInput} type='password' placeholder='password' value={password}/>
             
                <br/>
                <br/>
                <p>{this.state.Message}</p>
                <br/>
                <br/>
                <button onClick={this.handleLoginSubmit} type='submit'>Submit</button> 
                  </form>
                <br />
                <br />
                <br />
                
                <h2>Don't have an account? Signup now!</h2>
                <Link to='/signup' > <button>Sign Up</button> </Link>

                {this.state.Message === 'Login success' ? <Redirect to="/budget"/> : null }
            </div>
        )
    }
}

export default Login;