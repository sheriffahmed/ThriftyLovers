import React from 'react'
import {Link} from 'react-router-dom'
import sparks_lighter from './sparks_lighter.png'

class LandingPage extends React.Component {
    constructor(props){
        super(props);
    }

    handleLinkClick = () =>{
        document.body.style.background = ''
        document.body.style.backgroundRepeat = ''
        document.body.style.backgroundSize = ''
    }
    componentWillMount(){
        
        document.body.style.background = `#fcfcfc url('${require("./sparks_lighter.png")}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        // document.body.style.backgroundPosition = 'center';
        
    }
    render(){
        return(
            
            <div className="container2" style={{background: `#fcfcfc url('${require("./sparks_lighter.png")}')`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-20px' }} >
        
                {/* <img className="couple" src="https://images.unsplash.com/photo-1499200544186-6b1e3ec3b68e?ixlib=rb-0.3.5&s=4016bce234ec5e578252846833c0949f&auto=format&fit=crop&w=1950&q=80"/> */}
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    
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
                <Link onClick={this.handleLinkClick} to='/budget'><button>Free</button></Link> {' '}
                <Link onClick={this.handleLinkClick} to='/budget'><button>Low</button></Link> {' '}
                <Link onClick={this.handleLinkClick} to='/budget'><button>Avg</button></Link>
                    <br/>
                    <br/>
                    <br/>    
                </div>
            </div>
        )
    }
}
export default LandingPage;