import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


class LandingPage extends React.Component {
    render(){
        return(
            
            <div className="container2">
        
                {/* <img className="couple" src="https://images.unsplash.com/photo-1499200544186-6b1e3ec3b68e?ixlib=rb-0.3.5&s=4016bce234ec5e578252846833c0949f&auto=format&fit=crop&w=1950&q=80"/> */}
                <div className="container">
                <h1>Thrifty Lovers</h1>
                <label>I'm a</label>
                {' '}
                <select>
                        <option>Woman</option>
                        <option>Man</option>
                        <option>Gender Neutral</option>
                </select>
                {' '} looking for a {' '} 
                <select>
                        <option>Woman</option>
                        <option>Man</option>
                        <option>Gender Neutral</option>
                        <option>Any</option>
                        
                    </select>
                <br/>
                <br/>
                <p1>Please choose your level of thriftiness!</p1>
                <br/>
                <button>Free</button> {' '}
                <button>Low</button> {' '}
                <button>Avg</button>
                    <br/>
                    <br/>
                    <br/>    
                </div>
            </div>
        )
    }
}
export default LandingPage;