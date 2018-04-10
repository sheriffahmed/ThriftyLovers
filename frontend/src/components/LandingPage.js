import React from 'react'
import { Link } from 'react-router-dom'
import Logo_1 from '../images/Logo_1.png'
// import './sparks_lighter.png'
// import '../images/brooklynbridgepicnic.jpg'

class LandingPage extends React.Component {
    constructor(props) {
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
    render() {
        return (
            <div>
             <div id='thriftylogo'>   <img id='thriftyimage' alt="Brand1" src={Logo_1} /> </div>
            <div className="container" >
                        <br/>
                        <h2 className="tag">Date on a Budget</h2>
                        <br/>
                    {/* <label>I'm a</label>
                    {' '}
                    <select id="select">
                        <option>Woman</option>
                        <option>Man</option>
                        <option>Gender Neutral</option>
                    </select>
                    {' '} looking for a {' '}
                    <select id="select">
                        <option>Woman</option> 
                        <option>Man</option>
                        <option>Gender Neutral</option>
                    </select> */
                    /* <p1>Please choose your level of thriftiness!</p1>
                <br/>
                <Link to='/budget'><button>Free</button></Link> {' '}
                <Link to='/budget'><button>Low</button></Link> {' '}
                <Link to='/budget'><button>Avg</button></Link> 
                    <Link to='/signup'><button className="signup2">Join Thrifty Lovers</button></Link>
        </div>*/}
                  

                            {/* <p><span class="first-character sc">T</span>hrifty Lovers solves the hardships of modern dating by creating transparency around personal finances. 
                            Find your partner based on similar passions, interests and financial goals! Thrifty Lovers takes the stress of finances out of dating, leaving room for the romance.</p>
                            <p class="line-break margin-top-10"></p> */}
                 <div id="parallax-world-of-ugg">
                    <section> 
                        <div class="parallax-one">
                            <h2 id="one">SELECT YOUR BUDGET</h2>
                        </div>
                    </section>
                    <p class="line-break margin-top-10"></p>
                    {/* <section>
                        <div class="block">
                            <p><span class="first-character sc">S</span>ign up and select the budget that works best for you
                            and experience the magic of dating without worrying about your finances.</p><br>
                            </br>
                            <p class="line-break margin-top-10"></p>
                        </div>
                    </section> */}

                    <section>
                        <div class="parallax-two">
                            <h2 id="one">MEET YOUR MATCH</h2>
                        </div>
                    </section>
                    <p class="line-break margin-top-10"></p>
                    {/* <section>
                        <div class="block">
                            <p><span class="first-character ny">B</span>rowse events using our tiered budget system and connect with Thrifty Lovers who share your flavor of adventure.</p><br>
                            </br> 
                            {/* <p><span class="first-character sc">B</span>rowsing events is easy using our tiered budget system. You to select events that you love while highlighting possible connections to like-minded Thrifty Lovers who share your flavor of adventure. </p>
                            <p class="line-break margin-top-10"></p>
                        </div>*/}
                    <section>
                        <div class="parallax-three">
                            <h2 id="one">GO ON A DATE</h2>
                        </div>
                    </section>

                    {/* <section>
                        <div class="block">
                            <p><span class="first-character atw">J</span>oin our growing community and become a Thrifty Lover... </p>
{/* //                             <p><span class="first-character atw">T</span>he odds are in your favor. Don't sell yourself short. Become a Thrifty Lover today!</p> */}
                            {/* <br/> */}
                            {/* <br/>
                            <br/>
                            <br/>
                            <p class="line-break margin-top-10"></p>
                        </div>
                    </section> */} 
                    
                     <section>
                        <div class="title">
                            <h1>Join our growing community and become a Thrifty Lover...</h1><br/>
                            <h1 id="slogan">BECAUSE LOVE...IS A BARGAIN</h1>
                        </div>
                    </section>
                </div>
                <div className="container2">
                <Link to='/signup'><button className="signup2">Join Thrifty Lovers</button></Link>
                </div>
                <br />
                <br />
            </div>
            </div>
        )
    }
}
export default LandingPage;