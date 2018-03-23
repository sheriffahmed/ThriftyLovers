import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import request from 'superagent';

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
        this.ageWall = (dateString) => {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age >= 18;
        }
        // console.log('age: ' + this.ageWall("1980/08/10"));

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
            preferredGender: '',
            Message: ''

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
            options.unshift(<option value={0}>{'Year'}</option>)
            return options;
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
    handleYearSelect = e =>{
        this.setState({
            bYear: e.target.value
        })
    }
    handleGenderSelect = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
       
    }

    handleSubmit = () =>{
        const formErr = (selector) =>{
            const isNodelist = (typeof selector.length != 'undefined' &&
            typeof selector.item != 'undefined')
            if(!isNodelist){
                selector.style.border = "2px solid #FF0000";
                return;
            }
            for (let i = 0; i < selector.length; i++) {
                selector[i].style.border = "2px solid #FF0000";
            }
        }
        const fixedErr = (selector) =>{
            const isNodelist = (typeof selector.length != 'undefined' &&
            typeof selector.item != 'undefined')
            if(!isNodelist){
                selector.style.border = "";
                return;
            }
            for (let i = 0; i < selector.length; i++) {
                selector[i].style.border = "";
            }
        }
         let dob = document.getElementsByClassName('dob')
         let fname = document.getElementById('firstName')
         let lname = document.getElementById('lastName')
         let uname = document.getElementById('username')
         let pword = document.getElementById('password')
         let pwordconfirm = document.getElementById('confirmPassword')
         let gen = document.getElementById('gender')
         let genpref = document.getElementById('preferredGender')
         let g = document.getElementsByClassName('g')
         let errs = document.querySelectorAll('input')

         let bio = document.getElementById('bio')
         let {
             firstName,
             lastName,
             username,
             password,
             confirmPassword,
             gender,
             preferredGender
             
         } = this.state;
         
         
         if(!firstName){
            formErr(fname);
        } else{
            fixedErr(fname);
        }
        if(!lastName){
            formErr(lname);
        } else{
            fixedErr(lname);
        }
 
        if(!username){
            formErr(uname);
        } else{fixedErr(uname);
        }
        
       
        if(password !== confirmPassword){
            formErr(pwordconfirm);
            formErr(pword);
            
        } else{ if(!password){
            formErr(pword);
        } else{fixedErr(pword);
        }
        if(!confirmPassword){
            formErr(pwordconfirm);
        } else{fixedErr(pwordconfirm);
        }
        }

        if(!preferredGender){
            formErr(g);
        } else{fixedErr(g);
        }
        if(!gender){
            formErr(g);
        } else{fixedErr(g);
        }
        if(!this.ageWall(`${this.state.bYear}/${this.state.bMonth}/${this.state.bDay}`)){
          
           formErr(dob);

           
        }else{
            fixedErr(dob)
        }

        if(!gender || !preferredGender || !firstName || !lastName || !username || !password || !confirmPassword || confirmPassword !== password || !this.ageWall(`${this.state.bYear}/${this.state.bMonth}/${this.state.bDay}`)  ){

            console.log(`errs detected.`, errs)
            this.setState({
                Message: 'Error: Please complete the boxes in Red'
            })
            return;
        }


        // console.log(`no errs.`, errs)
        // return;
        
        

    

        axios 
        .post('/users/new', {
            
            
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstName,
            lastname:this.state.lastName,
            bio: this.state.bio,
            gender: this.state.gender,
            genderpref: this.state.preferredGender,
            dob: `${this.state.bYear}-${this.state.bMonth}-${this.state.bDay} `
        })
        .then(res =>{
            console.log(res.data)
            this.setState({
                username: '' ,
                password: '' ,
                firstname: '' ,
                lastname: '' ,
                bio: '' ,
                gender: '' ,
                genderpref: '' ,
                dob: '',
                bDay: 0,
                bMonth: 0,
                bYear: 0,
                Message: 'Register success' 
            })
        })
        .catch(err =>{
            console.log(`Axios err: `, err)
            this.setState({
                username: '' ,
                password: '' ,
                confirmPassword: '',
                firstname: '' ,
                lastname: '' ,
                bio: '' ,
                gender: '' ,
                genderpref: '' ,
                dob: '',
                bDay: 0,
                bMonth: 0,
                bYear: 0,
                Message: 'Err Registering user. UserName may be taken by another user' 
            })
        })
    }
    handleFormInput = e =>{
       
        this.setState({
            [e.target.id]: e.target.value
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
            preferredGender} = this.state
        this.handleDiMOptions();

        return(
            <div>
                <h1>Registration</h1>
                <br/>
                <br/>
                First Name: <input id='firstName' onInput={this.handleFormInput}  value={firstName}  />
                <br/>
                <br/>
                Last Name: <input id='lastName' onInput={this.handleFormInput}  value={lastName} />
                <br/>
                <br/>
                Date of Birth:  <select className='dob' onChange={this.handleMonthSelect} value={bMonth} >
                    {/* Month dropdown Select list Options:  */}
                    {this.dateOptions(this.monthArr)}

                                </select>
                                <select className='dob' onChange={this.handleDaySelect} >
                    {this.dateOptions(this.DiMArr)}
                                 
                                </select>
                                <select className='dob' onChange={this.handleYearSelect} value={bYear} >
                                    {/* <option>Year</option> */}
                                    {this.yearOptions()}
                                    
                                
                                </select>
                <br/>
                <br/>
                Username: <input id='username' onInput={this.handleFormInput} value={username} />
                <br/>
                <br/>
                Password: <input id='password' onInput={this.handleFormInput}  type="password" value={password} />
                <br/>
                <br/>
                Confirm Password: <input id='confirmPassword' onInput={this.handleFormInput}  type="password" value={confirmPassword} />
                <br/>
                <br/>
                I'm interested in:  <select id='preferredGender' className='g' onChange={this.handleGenderSelect} value={preferredGender} >
                                    <option value='' >Gender</option>
                                    <option value='M' >Men</option>
                                    <option value='F' >Women</option>
                                    <option value='N' >Neutral</option>
                                    <option value='ALL' >All Genders</option>
                                    
                                    </select>
                <br/>
                <br/>
                My gender is:       <select id="gender" className='g' onChange={this.handleGenderSelect} value={gender} >
                                    <option value='' >Gender</option>
                                    <option value='M' >Male</option>
                                    <option value='F' >Female</option>
                                    <option value='N' >Neutral</option>
                                    </select>
                <br/>
                <br/>
                <h3>About Me:</h3>
                <textarea id='bio' value={bio} onInput={this.handleFormInput} class="messagebox" rows="10" cols="100">
            </textarea>
            <br />
            <p>{this.state.Message}</p>
            <br/>
            <button onClick={this.handleSubmit} >Submit</button>
            <br />
            <br />
            </div>
           
        )
    }
    }
    export default Registration;