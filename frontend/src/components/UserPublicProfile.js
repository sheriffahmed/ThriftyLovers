import React from 'react'
import {Link} from 'react-router-dom'
// component should be recieving props; taking username, user picture and user Bio from database
//  to display on webpage;
class  UserPublicProfile extends React.Component{
    constructor(props){
        super(props);
        const {username, profilePic, userBio} = this.props
    }


    render(){
        return(
          <div>
    <h1>{username}</h1>
    {profilePic}
<p>{userBio}</p>
<Link to='/user/:user/messages'>Back</Link>
    </div>  
        )
    }
} 
    

