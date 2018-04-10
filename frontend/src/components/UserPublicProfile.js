import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

// component should be recieving props; taking username, user picture and user Bio from database
//  to display on webpage;
class  UserPublicProfile extends React.Component{
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
        // const {username, profilePic, userBio} = this.props
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
        console.log(this.props.match.params.user)
        axios
        .post('/users/user', {username: this.props.match.params.user2})
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
                <h1 id="header2">{firstName}'s Profile</h1> 
            <div className="public">
            <br/>
            <img className="matchpics" src={userPic} />
            <br/>
            <br/>
                <br/>
                <br/>
                <div className='publicbg'>
                    <section id='profile'>
                <h3>{firstName} {' '} {lastName}</h3>
                <br/>
                <br/>
                Age: {' '} {age}
                <br/>
                <br/>
                Budget Tier: {' '} {budgetTier}
                <br/>
                <br/>
                <h3>About Me</h3>
                <p className="aboutme">{bio}</p>
                <br/>
                <br/>
                <br/>
                </section>
                </div>
                </div>  
           )   </div>
        )}
}

export default UserPublicProfile;
    

