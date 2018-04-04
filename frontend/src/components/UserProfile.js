import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userPic: ''
        }
        
    }
    componentDidMount(){
        axios
        .get('/users/user')
        .then(res =>{
            console.log(`user profile: `,res)
        })
    }
render(){
    return(
        <div>    
            <h1>User Profile</h1>
            <h2><a href="">New Matches: 3</a></h2>
            <img className="mandatory" src="https://vignette.wikia.nocookie.net/warriorcatsrpg/images/1/19/Yellow_tiger_cat.jpg/revision/latest?cb=20110830125714" />
            <img className="mandatory" src="https://pbs.twimg.com/profile_images/378800000560709341/f304187183447a26eb801a3761b8353a.jpeg" />
            <img className="mandatory" src="http://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg" /> 
            <br/>
            <h3>About Me</h3>
            <textarea className="aboutme">I enjoy fine wine, long walks on the beach, and modern art.</textarea>
            <br/>
           {this.props.editButton}
        </div>
    )
}
}
export default UserProfile;