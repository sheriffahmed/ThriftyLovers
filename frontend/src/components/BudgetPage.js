import React from 'react'
import { Link } from 'react-router-dom'
import EventBudgetPage from './EventsBudgetPage'
import axios from 'axios'
var XMLParser = require('react-xml-parser');

class BudgetPage extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTier: '',
            tierData: '',
            apiEvents: []            
        }
        this.eventDivLoop = []
    }


    handleTiers = e => {

    }
    componentDidMount() {
        axios({
            method:'get',
            url:'/users/art',
            // responseType:'document'
          })

        .then(obj => obj.data )
            .then(res =>{
                console.log(res)
              

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
    handleObjectLoop = (obj) =>{
        for(let key in obj){
            return <div>
                <h2>{key}</h2>
                {/* <p>{typeof obj[key] !== 'object' ? obj[key] : obj[key][key]}</p> */}
            </div>
        }
    }

    render() {
        let {tierData} = this.state
        return (
            <div>
                <h1>Budget</h1> 
                <p>Please choose your level of thriftiness!</p>
                <button onClick={this.handleTiers}>Free</button> {' '}
                <button onClick={this.handleTiers}>Low</button> {' '}
                <button onClick={this.handleTiers}>Avg</button>
          <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                { tierData ? tierData.map(e =>{
                  return  <div>
                        <h2>{e.Name}</h2>

                        <img src={e.Image[2].$.src} />
                        <h2>Price</h2>
                        <p>{e.Price._}</p>

                        <h2>Summary</h2>
                        <p>{e.Description.length > 100 ? e.Description.substring(0,100) + '...' : e.Description}</p>
                        <h2>Details</h2>
                      Name  {
                          e.Venue.Name
                        }
                        Address  {
                          e.Venue.Address
                        }
                        Entrances
                        {e.Venue.Access}
                    </div>
                } ) : null}
    
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

        
        )
    }
}
export default BudgetPage;