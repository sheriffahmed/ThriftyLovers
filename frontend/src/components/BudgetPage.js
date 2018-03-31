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

    render() {
        let {tierData} = this.state
        return (
            <div>
                <h1>Budget</h1>
                <p>Please choose your level of thriftiness!</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={this.handleTiers}>Free</button> {' '}
                <button onClick={this.handleTiers}>Low</button> {' '}
                <button onClick={this.handleTiers}>Avg</button>

                { tierData ? tierData.map(e =>{
                  return  <div>
                        <h2>{e.Name}</h2>

                        <img src={e.Image[2].$.src} />
                        
                        <h2>Details</h2>
                        <p>{e.Description.length > 100 ? e.Description.substring(0,100) + '...' : e.Description}</p>
                    </div>
                } ) : null}
                <p>{`${this.state.tierData}`}</p>
            </div>

        
        )
    }
}
export default BudgetPage;