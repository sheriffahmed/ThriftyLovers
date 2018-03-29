import React from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            
            <div className="container">
        
            <div className="container2">
                    
                    
                    
                    
                <h1>Thrifty Lovers</h1>

                <h1>See how this Thrift Lovers work Below:</h1>
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
                <Link to='/budget'><button>Free</button></Link> {' '}
                <Link to='/budget'><button>Low</button></Link> {' '}
                <Link to='/budget'><button>Avg</button></Link>
                    <br/>
                    <br/>
                    <br/>    
                </div>
            </div>
        )
    }
}
export default LandingPage;