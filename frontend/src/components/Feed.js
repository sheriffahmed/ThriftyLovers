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
            <div class="table-responsive-sm">
                    <table className="table table-hover">
                        {/* <thead>
                        <tr>
                                <th></th>
                                <th>{' '}</th>
                            </tr>
                        </thead> */}
                <br />
                <tbody>
           {allMatches.map(match =>(
                <tr>
                    <td>
                        <h1>{match.username.substr(0,1).toUpperCase() + match.username.substr(1)}</h1> 
                        <img className="matchpics" src={match.profile_pic_url} /> 
                    </td>
                {/* <td style={{paddingTop: '20%'}}> */}
                <td>
                    <br/>
                    <br/>
                    <br/>
                <Link to={`/user/public/${match.username}`} > <button className="signup"> View {match.first_name}'s Profile </button> </Link>
                </td>
                <hr />
                {/* </div> */}
                </tr>
                ))}
                </tbody>
                </table>

                <br />
                <br />
                <br />
                </div>
            </div>
            </div>
        )
    }
}

export default Feed