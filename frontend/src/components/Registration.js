import React from 'react'
import {Link} from 'react-router-dom'

class Registration extends React.Component {
    constructor(){
        super();
        // Month Array to be mapped in the render in dateOptions function (Line 47):
        this.monthArr = [
            'Month',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        // days Array to be mapped in the render (Line 58):
        this.daysArr = ['Day']
        this.DiMArr = []

        for(let i = 1; i<= 31; i++){
           this.daysArr.push(i)
        }


        this.state={
            // Holding registration inputs in state to tranfer from data into the ddatabase
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
            bMonth: 0,
            bDay: 0,
            bYear: 0,
            bio: '',
            gender: '',
            preferedGender: ''

        }
        // function that will map Month and day arrays as select box options in the render. month select box: line 144; day select box: line 148 
        this.dateOptions = (arr) => { 
            let options = []
            for(let i = 0; i<arr.length;i++){options.push(<option value={`${i}`}>{arr[i]}</option>)}
            return options
        }

        this.yearOptions = () => { 
            let options = []
            for(let i = 1900; i<=2018;i++){options.unshift(<option value={`${i}`}>{i}</option>)}
            return options
        }
            
        
    }


// handler for DiM (Short for Days in Month) Options for the DOB select boxes
    handleDiMOptions = () =>{
        let {bMonth, bDay} = this.state
        let days = ['Day']
        //  thirty/thirtyOne represents months with the corresponding number of days inside that Month to load the correct number of days based off bMonth state
        let thirty = ["9" , "4" , "6" , "11"]
        let thirtyOne = ["1" , "3" , "5" , "7" , "8" , "10", "12"]
        if(bMonth == `0` ){
            days = ['Day']
            days.push('Select a Month First')

        }
        if(bMonth == "2" ){
            days = ['Day']
            for(let h = 1; h<= 29; h++){
                
                
                days.push(h)
            }

        }
        if(thirty.includes(bMonth)){
            days = ['Day']
            for(let j = 1; j<= 30; j++){
                days.push(j)
            }
        } 
        if(thirtyOne.includes(bMonth)){
            days = ['Day']
            for(let k = 1; k<= 31; k++){
                
                days.push(k)
            }
        }
        this.DiMArr = [...days] 
       
    }
     
    handleMonthSelect = e =>{
        this.setState({
            bMonth: e.target.value
        })

        
        
    }

    handleDaySelect = e =>{
        this.setState({
            bDay: e.target.value
        })
    }

    render(){
        let {
            firstName,
            lastName,
            username,
            password,
            confirmPassword,
            bMonth,
            bDay,
            bYear,
            bio,
            gender,
            preferedGender} = this.state
        this.handleDiMOptions();
            
        return(
            <div>
                <h1>Registration</h1>
                <br/>
                <br/>
                First Name: <input value={firstName}  />
                <br/>
                <br/>
                Last Name: <input value={lastName} />
                <br/>
                <br/>
                Date of Birth:  <select onChange={this.handleMonthSelect} >
                    {/* Month dropdown Select list Options:  */}
                    {this.dateOptions(this.monthArr)}

                                </select>
                                <select onChange={this.handleDaySelect} >
                    {this.dateOptions(this.DiMArr)}
                                 
                                </select>
                                <select>
                                    <option>Year</option>
                                    {this.yearOptions()}
                                    
                                
                                </select>
                <br/>
                <br/>
                Username: <input/>
                <br/>
                <br/>
                Password: <input type="password"/>
                <br/>
                <br/>
                Confirm Password: <input type="password"/>
                <br/>
                <br/>
                I'm interested in:  <select>
                                    <option>Gender</option>
                                    <option>Men</option>
                                    <option>Women</option>
                                    <option>Neutral</option>
                                    <option>All Genders</option>
                                    
                                    </select>
                <br/>
                <br/>
                My gender is:       <select>
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Neutral</option>
                                    </select>
                <br/>
                <br/>
                <h3>About Me:</h3>
                <textarea class="messagebox" rows="10" cols="100">
            </textarea>
            <br />
            <br/>
            <button>Submit</button>
            </div>
           
        )
    }
    }
    export default Registration;