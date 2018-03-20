import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    render(){
        return(
            <div>
                <img className="couple" src="https://cdn.shopify.com/s/files/1/0880/2184/files/Tips-for-Hiking-Couples.jpg?3961353968659547229"/>
                <div className="container">
                <h1>Thrifty Lovers</h1>
                <label>I'm a </label>
                <select>
                        <option>Straight</option>
                        <option>Gay</option>
                        <option>Bisexual</option>
                        <option>Other</option>
                </select>
                {' '} 
                <select>
                        <option>Woman</option>
                        <option>Man</option>
                        <option>Gender Neutral</option>
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
                    <button>Let's Go</button>
                    <br/>
                    <br/>    
                </div>
            </div>
        )
    }
}
export default LandingPage;