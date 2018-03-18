import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render(){
        return(
            <div>
                <h1>Home/Landing</h1>
                
                <div>
                
                    <label>Login: </label><input type='input' class='login' />
                    <br/>
                    <br/>
                    <label>Password: </label><input type='password' class='login' />

                    <br/>
                    <br/>
                    <button>Log In</button>
                    <br/>
                    <br/>
                    Don't have a user? {' '}
                    <Link to='/signup'><button> Register </button></Link>

                
                </div>
            </div>
        )
    }
    }
    export default LandingPage;