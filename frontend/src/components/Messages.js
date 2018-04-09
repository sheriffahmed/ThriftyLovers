import React from 'react'
import { Link } from 'react-router-dom'
import Chat from './Chat'
import axios from 'axios';



class Messages extends React.Component {
    handleUserMatch = () => {
        const arr = this.props.userArr;
        console.log(`arr `, arr)
        const loggedInUser = {
            userId: this.props.userId,
            userGender: this.props.userGender,
            userGenderPref: this.props.userGenderPref,
            userBudgetTier: this.props.userBudgetTier
        }
        console.log(`loggedInUser: `, loggedInUser)
        return arr.filter(user => {
            return user.id !== loggedInUser.userId && user.gender === loggedInUser.userGenderPref && user.gender_pref === loggedInUser.userGender && user.budget_tier === loggedInUser.userBudgetTier
            // return user.userId !== loggedInUser.userId
        })
    }
    render() {
        let allMatches = this.handleUserMatch()
        return (
            <div className="messages">
                <h1 id="header2">Chat With Your Thrifter Here!</h1>
            <div className="messages2">
            <div class="table-responsive-sm">
                    <table className="table table-hover">
                        {/* <thead>
                            <tr>
                                <th><h3>Matches</h3></th>
                                <th><h3>Messages</h3></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {allMatches ? allMatches.map(msg => (
                                <tr>
                                    <td><h1>{msg.first_name}</h1>
                                        <img className="matchpics" src={msg.profile_pic_url} />
                                    </td>
                                    <td>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <Link to={`/user/${this.props.user}/chat/${msg.username}`}><button className="signup">Message</button></Link>
                                        <br />
                                    </td>
                                </tr>
                            )) :<td><p>No Messages.</p></td>}
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                </div>
            </div>
        )
    }
}
export default Messages;