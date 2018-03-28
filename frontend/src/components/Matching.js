import React from 'react';
import dummy from './DummySingle';
import dummy2 from './DummyAll';



class Matching extends React.Component {
    constructor() {
        super();
        this.state = {
            user1: '',
            users: [],
            result: ''
        }
    }
    handleUserMatch = (user1,userArr) =>{
        if(this.state.result){
           return; 
        }
    userArr.forEach(user =>{
        if(user1.username !== user.username){
            console.log(`Not Same user`)
            console.log(`user1 min age: `, user1.pref.minAge, `user age: `, user.age, `user1 max age: `, user1.pref.maxAge)
            if(user1.pref.minAge <= user.age && user1.pref.maxAge >= user.age && user1.pref.genderPref === user.gender){
                console.log(`in Age Range`)
                user1.pref.eventIds.forEach(el =>{
                    user.pref.eventIds.forEach(el2 =>{
                        if(el === el2){
                            this.setState({
                                result: `${user1.firstName} Matches with ${user.firstName}!`
                        })
                    }
                })

                
            })
        }
    }
    console.log('Nope')
})
    
    }
    render() {
        

        return (
            <div>
                <h1>Matching</h1>
            <p>{dummy.firstName} {' '} {dummy.lastName}</p>
           {this.handleUserMatch(dummy, dummy2)}
            <p>{this.state.result}</p>
            </div>
        )
    }
}
export default Matching;