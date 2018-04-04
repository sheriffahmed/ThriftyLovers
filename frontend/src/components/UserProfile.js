import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            userPic: '', 
            firstName: '',
            lastName: '',
            age: '',
            bio: '',
            gender: '',
            gender_pref: '',
            budgetTier: ''

        }
        this.getAge = (dateString) => {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    }
    componentDidMount(){
        axios
        .post('/users/user', {username: this.props.user})
        .then(res =>{
            console.log(`user profile: `,res.data.data[0])
            let profile = res.data.data[0]
            this.setState({
                username: profile.username,
                userPic: profile.profile_pic_url ,
                firstName: profile.first_name,
                lastName: profile.last_name,
                age: this.getAge(profile.dob),
                bio: profile.bio,
                gender: profile.gender,
                gender_pref: profile.gender_pref,
                budgetTier: profile.budget_tier
            })
            console.log(`state: `, this.state) 
        })
       
    }
render(){
    let {
        username,
        userPic,
        firstName,
        lastName,
        age,
        bio,
        gender,
        gender_pref,
        budgetTier 
    } = this.state
    return(
        <div>    
            <h1>{username}'s Profile</h1>
            {/* <h2><a href="">New Matches: 3</a></h2> */}
            <img className='mandatory' src={userPic} />
            <br/>
            <br/>
            
            First Name: {' '} {firstName}
            <br/>
            <br/>
            
            Last Name: {' '} {lastName}
            <br/>
            <br/>
            Age: {' '} {age}
            <br/>
            <br/>
            Budget Tier: {' '} {budgetTier}
            <br/>
            <br/>
            
            {/* <img className="mandatory" src="https://vignette.wikia.nocookie.net/warriorcatsrpg/images/1/19/Yellow_tiger_cat.jpg/revision/latest?cb=20110830125714" />
            <img className="mandatory" src="https://pbs.twimg.com/profile_images/378800000560709341/f304187183447a26eb801a3761b8353a.jpeg" />
            <img className="mandatory" src="http://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg" />  */}
            <br/>
            <h3>About Me</h3>
            {/* <textarea className="aboutme">I enjoy fine wine, long walks on the beach, and modern art.</textarea> */}
            <p className="aboutme">{bio}</p>
            <br/>
            <br/>
            <br/>
            
           {this.props.editButton}
        </div>
    )
}
}
export default UserProfile;