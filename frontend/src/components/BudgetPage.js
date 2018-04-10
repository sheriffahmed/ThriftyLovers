import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import EventBudgetPage from './EventsBudgetPage'
import axios from 'axios'
var XMLParser = require('react-xml-parser');

class BudgetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTier: '',
            tierData: '',
            apiEvents: [],
            noUserId: false,
            modal: ''
        }
        this.eventDivLoop = []
    }

    handleChosenEvent = (e) => {
        // console.log(`Button CLicked.`, this.props.UserID)
        if (!this.props.UserID) {
            this.setState({
                noUserId: true
            })
            // this.props.handleRedirect();
            return;
        }
        if (this.state.noUserId) {
            this.setState({
                noUserId: false
            })
        }

        if (e.target.id !== '' || !e.target.id) {

        }
        console.log(`userid`, this.props.UserID, `eventid :`, e.target.id)
        axios
            .post('/users/event', {
                userid: this.props.UserID,
                eventid: e.target.id
            })
            .then(res => {
                this.setState({
                    modal: 'success'
                })
                document.querySelector('#clickModal').click()
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    modal: 'error'
                })
                document.querySelector('#clickModal').click();
            })

    }

    handleTiers = e => {

    }
    componentDidMount() {
        axios({
            method: 'get',
            url: '/users/art',
            // responseType:'document'
        })

            .then(obj => obj.data)
            .then(res => {
                console.log(res)
                console.log(this.props.BudgetTier)


                this.setState({
                    tierData: res.Events.Event
                })
            })
        // var myHeaders = new Headers({
        //     'Content-Type': 'text/xml'
        // });
        // myHeaders.append('Content-Type', 'text/xml');
        //     fetch('http://www.nyartbeat.com/list/event_searchNear?latitude=40.719130&longitude=-73.980000', {
        //         method: 'GET',
        //     mode: 'cors',
        //     headers: myHeaders.get('Content-Type')
        // } ).then(response =>{
        //     console.log(response)
        // })
        // let request = new XMLHttpRequest()
        //    request.open('GET','http://www.nyartbeat.com/list/event_searchNear?latitude=40.719130&longitude=-73.980000', true);
        //   request.onreadystatechange = function () {
        //     if(request.readyState == request.DONE){
        //       let resData = JSON.parse(request.responseText);
        //       console.log(request.responseText);
        //   }
        // }
        //   console.log(request.readyState)
        //   console.log(request.status)
    }
    handleObjectLoop = (obj) => { 
        for (let key in obj) {
            return <div>
                <h2>{key}</h2>
                {/* <p>{typeof obj[key] !== 'object' ? obj[key] : obj[key][key]}</p> */}
            </div>
        }
    }

    render() {
        let { tierData } = this.state 
        return (
            <div>
            <h1 id="header2">Events</h1>
            <div className="events">
                {/* <p>Please choose your level of thriftiness!</p> */}
                {/* <button onClick={this.handleTiers}>Free</button> {' '}
                <button onClick={this.handleTiers}>Low</button> {' '}
                <button onClick={this.handleTiers}>Avg</button> */}
                {this.state.noUserId ? <Redirect to='/login' /> : null}
                {<button id='clickModal' type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" hidden={true} >
                    Open modal
  </button>}

                <div>
                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                    <h4 class="modal-title"> {this.state.modal === 'success' ? 'Success!' : `Error`}</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                    {this.state.modal === 'success' ? 'Event preference has successfully been saved.' : 'Event could not be saved..'}
                                </div>

                                {/* <!-- Modal footer --> */}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {tierData ? tierData.map((e, index) => {
                    console.log('price:', e.Price._)
                    console.log('budget tier:', this.props.BudgetTier)
                    return e.Price._ === "Free" && this.props.BudgetTier === 'Free'&& index !== 0
                        ?  <div className='table-responsive' >
                            <table className='table table-hover' >
                                <tbody>
                                    <tr>
                                {/* <hr /> */}
                                {/* <button id={e.$.id} onClick={this.handleChosenEvent} >Make a Preferred Event</button> */}
                                <h2>{e.Name}</h2>

                                <img className="matchpics" src={e.Image[2].$.src} />
                                <h2>Details</h2>
                                Name:{' '}
                                {
                                    e.Venue.Name
                                }
                                <br />
                                Address:{' '}
                                {
                                    e.Venue.Address
                                }
                                <br />
                                Entrances:{' '}

                                {e.Venue.Access}
                                <br />
                                Price:{' '}
                                {e.Price._}

                                <a data-toggle="collapse" data-target={`#summaryText${index}`}>
                                <br/>
                                <h2 className="signup" >Summary</h2> </a>
                                {/* <div id={`summaryText${index}`} class='collapse'><p  >{e.Description.length > 100 ? e.Description.substring(0, 100) + '...' : e.Description}</p> </div> */}
                                <div id={`summaryText${index}`} class='collapse'><p  >{e.Description}</p> </div>
                                </tr>
                                </tbody>
                                </table>

                                <hr />
                            </div>

                        : e.Price._ !== 'Free' && this.props.BudgetTier !== 'Free'
                            ? <div>
                                <hr />
                                {/* <button id={e.$.id} onClick={this.handleChosenEvent} >Make a Preferred Event</button> */}
                                <h2>{e.Name}</h2>

                                <img id="matchpics" src={e.Image[2].$.src} />
                                <h2>Details</h2>
                                Name:{' '}
                                {
                                    e.Venue.Name
                                }
                                <br />
                                Address:{' '}
                                {
                                    e.Venue.Address
                                }
                                <br />
                                Entrances:{' '}

                                {e.Venue.Access}
                                <br />
                                Price:{' '}
                                {e.Price._}

                                <a data-toggle="collapse" data-target={`#summaryText${index}`}> 
                                <br />
                                <br />
                                <h2 className="signup">Summary</h2> </a>
                                {/* <p id='summaryText' class='collapse' >{e.Description.length > 100 ? e.Description.substring(0, 100) + '...' : e.Description}</p> */}
                                
                                
                                <p id={`summaryText${index}`} class='collapse' >{e.Description}</p>
                                

                                <hr />
                            </div> : null

                }) : null}

                {/* Access
:
"Corner of 61st St. Subway: N/R/W to 5th Ave., 4/5/6 to 59th St./Lexington Ave. or F to Lexington Ave./63rd St."
Address
:
"667 Madison Ave., 24 Fl., New York, NY 10065"
Area
:
{_: "Upper East Side", $: {…}}
ClosingHour
:
"05:00:00"
DaysClosed
:
{$: {…}}
Fax
:
"212-813-9876"
Name
:
"Bernard Goldberg Fine Arts, LLC"
OpeningHour
:
"09:00:00"
Phone
:
"212-813-9797"
ScheduleDetails
:
"sundays openinghour 11:00, sundays closinghour 17:00"
ScheduleNote
:
""
Type
:
"Gallery" */}
            </div>
            </div>


        )
    }
}
export default BudgetPage;