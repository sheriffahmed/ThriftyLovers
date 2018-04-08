import React from 'react';
import dummy from './DummySingle';
import dummy2 from './DummyAll';



class Matching extends React.Component {

    state = {
        allUsers: [],
        allMatches: []
    }
   

    handleUserMatch = () =>{ 
        const loggedInUser = {
            userId: this.props.userId,
            userGender: this.props.userGender,
            userGenderPref: this.props.userGenderPref, 
            userBudgetTier: this.props.userBudgetTier
         }
     return dummy2.filter(user =>{
        return user.userId !== loggedInUser.userId && user.gender === loggedInUser.userGenderPref && user.userGenderPref === loggedInUser.gender
        // return user.userId !== loggedInUser.userId
     })

//     userArr.forEach(user =>{
        
        
//         if(user1.username !== user.username){
//             console.log(`Not Same user`)
        
//             if(user1.genderPref === user.gender){
//                 user1.eventIds.forEach(el =>{
//                     user.eventIds.forEach(el2 =>{
//                         if(el === el2){
//                             this.setState({
//                                 result: `${user1.firstName} Matches with ${user.firstName}!`
//                         })
//                     }
//                 })

                
//             })
//         }
//     }
//     console.log('Nope')
// }
// )
    
    }

    render() {
         let allMatches = this.handleUserMatch( dummy2)
console.log(`all matches: `,allMatches)         

        return (
            <div>
                <h1>Matching</h1>
            <p>{dummy.firstName} {' '} {dummy.lastName}</p>

           Matches:
        <br />
            <p>{allMatches.map(match =>(
                <h1>{match.firstName}</h1>
                ))}</p>

            </div>
        )
    }
}
export default Matching;