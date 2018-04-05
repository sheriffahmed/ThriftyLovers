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
            <div>
                <h1>Chat With Your Thrifter Here!</h1>
                <div class="table-responsive-sm">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Matches</th>
                                {/* <th>Event</th> */}
                                <th>Messages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allMatches ? allMatches.map(msg => (
                                <tr>
                                    <td>{msg.first_name}
                                        <br />
                                        <img className="users" src={msg.profile_pic_url} />
                                    </td>
                                    {/* <td>Walking in the Park</td> */}
                                    <td>
                                        <br />
                                        <Link to={`/user/${this.props.user}/chat/${msg.username}`}>Message</Link>
                                        <br />
                                    </td>
                                </tr>
                            )) : <td><p>No Messages.</p></td>}

                        </tbody>
                    </table>
                </div>
                <br />
                <br />
            </div>
        )
    }
}
export default Messages;