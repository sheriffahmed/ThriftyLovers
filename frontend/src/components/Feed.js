import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state= {}
    }

    componentDidMount(){
        axios
        .get('/users/match')
        .then(res =>{
            console.log('user match repsonse: ',res.data.data)
        })
        
    }
    render(){
        return(
            <div>
                <h1>Your Matches</h1>

                </div>
        )
    }
}

export default Feed