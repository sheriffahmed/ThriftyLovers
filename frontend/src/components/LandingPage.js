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
                
                <div>
                    <br />
                   
                   </div>
                    {/* <h1>Thrifty Lovers</h1> */}
                    <br />
                    <div className="container3" >
                    <label>I'm a</label>
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
                    </select>
                    {/* <p1>Please choose your level of thriftiness!</p1>
                <br/>
                <Link to='/budget'><button>Free</button></Link> {' '}
                <Link to='/budget'><button>Low</button></Link> {' '}
                <Link to='/budget'><button>Avg</button></Link> */}
                    <br />
                    <br />
                    <Link to='/signup'><button className="signup">Join Thrifty Lovers</button></Link>
                </div>
                    <br />
                <div id="parallax-world-of-ugg">
                    <section>
                        <div class="parallax-one">
                            <h2 id="one">SELECT YOUR BUDGET</h2>
                        </div>
                    </section>

                    <section>
                        <div class="block">
                            <p><span class="first-character sc">M</span>utual understanding of one's economic dating preference is key to matching. There are no secrets here. Transparency is key to building strong and lasting relationships.</p>
                            <p class="line-break margin-top-10"></p>
                            {/* <p class="margin-top-10">The UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p> */}
                        </div>
                    </section>

                    <section>
                        <div class="parallax-two">
                            <h2 id="one">GET YOUR DATE</h2>
                        </div>
                    </section>

                    <section>
                        <div class="block">
                            <p><span class="first-character ny">W</span>ith over a hundred things to do in the city, we are sure to find something that won't break your bank. Who said you can't have fun on a budget?</p>
                            <p class="line-break margin-top-10"></p>
                            {/* <p class="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p> */}
                        </div>
                    </section>

                    <section>
                        <div class="parallax-three">
                            <h2 id="one">MEET YOUR MATCH</h2>
                        </div>
                    </section>

                    <section>
                        <div class="block">
                            <p><span class="first-character atw">T</span>he odds are in your favor. Don't sell yourself short. Become a Thrifty Lover today!</p>
                            <br/>
                            <p class="line-break margin-top-10"></p>
                            {/* <p class="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p> */}
                        </div>
                    </section>
                     <section>
                        <div class="title">
                            <h1>BECAUSE LOVE...IS A BARGAIN</h1>
                        </div>
                    </section>

                </div>
                <div className="container2">
                <Link to='/signup'><button className="signup">Join Thrifty Lovers</button></Link>
                </div>
                <br />
                <br />
            </div>
            </div>
        )
    }
}
export default LandingPage;