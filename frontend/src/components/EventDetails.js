import React from 'react'
import {Link} from 'react-router-dom'

class EventDetails extends React.Component {
    render(){
        return(
            <div>
                <h1>Event Details</h1>
                <h5>Not a user yet?</h5> 
                <Link to='/signup'><button> Register </button></Link>
            </div>
        )
    }
}
export default EventDetails;