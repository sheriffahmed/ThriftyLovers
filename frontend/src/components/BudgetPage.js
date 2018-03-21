import React from 'react'
import {Link} from 'react-router-dom'
import EventBudgetPage from './EventsBudgetPage'

class BudgetPage extends React.Component {
    constructor(){
        super();
        this.state = {
            currentTier : ''
        }
    }
    handleTiers = e =>{

    }
    render(){
        return(
            <div>
                <h1>Budget</h1>
                <p1>Please choose your level of thriftiness!</p1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.handleTiers}>Free</button> {' '}
                <button onClick={this.handleTiers}>Low</button> {' '}
                <button onClick={this.handleTiers}>Avg</button>
            </div>
        )
    }
    }
    export default BudgetPage;