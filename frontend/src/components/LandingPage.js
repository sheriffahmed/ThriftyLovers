import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render(){
        return(
            <div>
                <img className="couple" src="https://cdn.shopify.com/s/files/1/0880/2184/files/Tips-for-Hiking-Couples.jpg?3961353968659547229"/>
                <div className="container">
                <h1>Thrifty Lovers</h1>
                    <label>User: </label><input type='input' class='login' />
                    <br/>
                    <br/>
                    <label>Password: </label><input type='password' class='login' />

                    <br/>
                    <br/>
                    <button>Log In</button>
                    <br/>
                    <br/>
                    Not a user yet? {' '}
                    <Link to='/signup'><button> Register </button></Link>
                </div>
            </div>
        )
    }
}
export default LandingPage;