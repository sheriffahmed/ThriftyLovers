import React from 'react'
import {Link} from 'react-router-dom'
import './sparks_lighter.png'

class LandingPage extends React.Component {
    constructor(props){
        super(props);
    }


    // componentDidMount(){
        
    //    document.body.style.background = `#fcfcfc url('${require("./sparks_lighter.png")}')`;
    //     document.body.style.backgroundRepeat = 'no-repeat';
    //     document.body.style.backgroundSize = 'cover';
    //     document.body.style.backgroundPosition = 'center';
        
    // }


    // handleLinkClick = () =>{
    //     document.body.style.background = ''
    //     document.body.style.backgroundRepeat = ''
    //     document.body.style.backgroundSize = ''
    // }
    render(){
        return(
            
            <div className="container" style={{background: `#fcfcfc url('${require("./sparks_lighter.png")}')`, width: '70vw', margin: '0', height: '100vh'}} >        
            <div className="container2" style={{background: `#fcfcfc url('${require("./sparks_lighter.png")}')`, width: '98.8vw', margin: '0', height: '100vh', backgroundPosition: 'center', backgroundSize: 'cover', textAlign: 'center', top: '50vh', verticalAlign: 'middle', lineHeight: 'inherit' }}>
                    
                    
                    
                    
                <h1>Thrifty Lovers</h1>

                <h1>See how it works below:</h1>
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