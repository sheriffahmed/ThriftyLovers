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
            <div className="feed">
                <h1 id="header">{this.props.match.params.user}'s Matches</h1>
                <br />
            <p>{allMatches.map(match =>(
                <div>
                <h1>{match.username}</h1>
                <img src={match.profile_pic_url} style={{maxWidth: '200px' }}/>
                <Link to={`/user/public/${match.username}`} > <button> View {match.first_name}'s Profile </button> </Link>
                <hr />
                </div>
                ))}</p>

                <br />
                <br />
                <br />

                </div>
        )
    }
}

export default Feed