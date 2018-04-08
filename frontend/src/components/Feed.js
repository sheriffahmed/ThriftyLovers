import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state= {}
    }

    handleUserMatch = () =>{ 
        const arr = this.props.userArr;
        console.log(`arr `,arr)
        const loggedInUser = {
            userId: this.props.userId,
            userGender: this.props.userGender,
            userGenderPref: this.props.userGenderPref,
            userBudgetTier: this.props.userBudgetTier
         }
         console.log(`loggedInUser: `, loggedInUser)
     return arr.filter(user =>{
        return user.id !== loggedInUser.userId && user.gender === loggedInUser.userGenderPref && user.gender_pref === loggedInUser.userGender && user.budget_tier === loggedInUser.userBudgetTier
        // return user.userId !== loggedInUser.userId
     })
    }

    render(){

        let allMatches = this.handleUserMatch()
        return(
            <div>
            <h1 id="header2">{this.props.match.params.user.substr(0,1).toUpperCase() + this.props.match.params.user.substr(1)}'s Matches</h1>
            <div className="feed">  
                <br />
            <p>{allMatches.map(match =>(
                <div>
                <h1>{match.username}</h1> 
                <img className="mandatory" src={match.profile_pic_url} />
                <Link to={`/user/public/${match.username}`} > <button className="signup"> View {match.first_name}'s Profile </button> </Link>
                <hr />
                </div>
                ))}</p>

                <br />
                <br />
                <br />
                </div>
            </div>
        )
    }
}

export default Feed