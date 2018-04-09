import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import request from 'superagent';
import cloudData from '../imageCloudUrls'
// Image Upload Cloud API Url and upload style preset Variables  (Line 332)
console.log(`cloud: `, )
const CLOUDINARY_UPLOAD_PRESET = cloudData.cloudPreset;
const CLOUDINARY_UPLOAD_URL = cloudData.cloudUploadUrl;


class Registration extends React.Component {
    constructor() {
        super();
        // Month Array to be mapped in the render via this.dateOptions function (rendered on Line 419):
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
        // days Array to be mapped in the render via this.dateOptions function (Line 58):
        this.daysArr = ['Day']
        // DiM (AKA Days in Month) used in handleDiMOptions (Line 90) to hold days in a Selected Month. Rendered on Line 424 
        this.DiMArr = []
        // ageWall determines if someone is 18 or older based on the date 
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


        this.state = {
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
            budgetTier: '',
            Message: '',
            // UploadFile holds image data from dropbox for image Cloud && uploadedFileCloudinaryUrl holds the url where the image is stored in cloud
            uploadedFileCloudinaryUrl: '',
            uploadedFile: null,
            // Registration Submit button is disabled when uploading an image
            hidebutton: false

        }
        // function that will map Month and day arrays as select box options in the render. month select box: line 144; day select box: line 148 
        this.dateOptions = (arr) => {
            let options = []
            for (let i = 0; i < arr.length; i++) { options.push(<option key={`dates${i}`} value={`${i}`}>{arr[i]}</option>) }
            return options
        }

        this.yearOptions = () => {
            let options = []
            for (let i = 1900; i <= 2018; i++) { options.unshift(<option key={`${i}`} value={`${i}`}>{i}</option>) }
            options.unshift(<option key='intial Year state' value={0}>{'Year'}</option>)
            return options;
        }


    }


    // handler for DiM (Short for Days in Month) Array. renders Options for the DOB day select box
    handleDiMOptions = () => {
        let { bMonth } = this.state
        let days = ['Day']
        //  thirty/thirtyOne represents months with the corresponding number of days inside that Month to load the correct number of days based off bMonth state
        let thirty = ["9", "4", "6", "11"]
        let thirtyOne = ["1", "3", "5", "7", "8", "10", "12"]
        if (bMonth == `0`) {
            days = ['Day']
            days.push('Select a Month First')

        }
        if (bMonth == "2") {
            days = ['Day']
            for (let h = 1; h <= 29; h++) {


                days.push(h)
            }

        }
        if (thirty.includes(bMonth)) {
            days = ['Day']
            for (let j = 1; j <= 30; j++) {
                days.push(j)
            }
        }
        if (thirtyOne.includes(bMonth)) {
            days = ['Day']
            for (let k = 1; k <= 31; k++) {

                days.push(k)
            }
        }
        this.DiMArr = [...days]

    }
    //  Lines 125-150 Holds select box and input box data in state
    handleMonthSelect = e => {
        this.setState({
            bMonth: e.target.value
        })
    }
    handleDaySelect = e => {
        this.setState({
            bDay: e.target.value
        })
    }
    handleYearSelect = e => {
        this.setState({
            bYear: e.target.value
        })
    }
    handleGenderSelect = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleFormInput = e => {

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const formErr = (selector) => {
            const isNodelist = (typeof selector.length != 'undefined' &&
                typeof selector.item != 'undefined')
            if (!isNodelist) {
                selector.style.border = "2px solid #FF0000";
                return;
            }
            for (let i = 0; i < selector.length; i++) {
                selector[i].style.border = "2px solid #FF0000";
            }
        }
        const fixedErr = (selector) => {
            const isNodelist = (typeof selector.length != 'undefined' &&
                typeof selector.item != 'undefined')
            if (!isNodelist) {
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
        let b = document.getElementsByClassName('b')

        let errs = document.querySelectorAll('input')

        let bio = document.getElementById('bio')
        let {
             firstName,
            lastName,
            username,
            password,
            confirmPassword,
            gender,
            preferredGender,
            budgetTier,
            uploadedFile,
            uploadedFileCloudinaryUrl

         } = this.state;


        if (!firstName) {
            formErr(fname);
        } else {
            fixedErr(fname);
        }
        if (!lastName) {
            formErr(lname);
        } else {
            fixedErr(lname);
        }

        if (!username) {
            formErr(uname);
        } else {
            fixedErr(uname);
        }


        if (password !== confirmPassword) {
            formErr(pwordconfirm);
            formErr(pword);

        } else {
            if (!password) {
                formErr(pword);
            } else {
                fixedErr(pword);
            }
            if (!confirmPassword) {
                formErr(pwordconfirm);
            } else {
                fixedErr(pwordconfirm);
            }
        }

        if (!preferredGender) {
            formErr(g);
        } else {
            fixedErr(g);
        }
        if (!gender) {
            formErr(g);
        } else {
            fixedErr(g);
        }

        if (!budgetTier) {
            formErr(b);
        } else {
            fixedErr(b);
        }

        if (!this.ageWall(`${this.state.bYear}/${this.state.bMonth}/${this.state.bDay}`)) {

            formErr(dob);


        } else {
            fixedErr(dob)
        }

        if (!gender || !preferredGender || !budgetTier || !firstName || !lastName || !username || !password || !confirmPassword || confirmPassword !== password || !this.ageWall(`${this.state.bYear}/${this.state.bMonth}/${this.state.bDay}`)) {

            console.log(`errs detected.`, errs)
            this.setState({
                Message: 'Error: Please complete the boxes in Red'
            })
            return;
        }


        // console.log(`no errs.`, errs)
        // return;

        // this.handleImageUpload(uploadedFile);

        // console.log(`after cloud upload, cloud state: `, this.state.uploadedFileCloudinaryUrl)

        axios.post('/users/new', {
            username: this.state.username,
            password: this.state.password,
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            bio: this.state.bio,
            gender: this.state.gender,
            genderpref: this.state.preferredGender,
            budgettier: this.state.budgetTier,
            dob: `${this.state.bYear}-${this.state.bMonth}-${this.state.bDay} `,
            profilepicurl: this.state.uploadedFileCloudinaryUrl
        })
            .then((res) => {
                return this.setState({
                    username: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: '',
                    bio: '',
                    gender: '',
                    preferredGender: '',
                    budgetTier: '',
                    dob: '',
                    bDay: 0,
                    bMonth: 0,
                    bYear: 0,
                    uploadedFile: null,
                    uploadedFileCloudinaryUrl: '',
                    Message: 'Register success'
                })
            })
            .catch(err => {
                console.log(`Axios err: `, err)
                this.setState({
                    // username: '',
                    // password: '',
                    // confirmPassword: '',
                    // firstname: '',
                    // lastname: '',
                    // bio: '',
                    // gender: '',
                    // genderpref: '',
                    // dob: '',
                    // bDay: 0,
                    // bMonth: 0,
                    // bYear: 0,
                    // uploadedFile: null,
                    // uploadedFileCloudinaryUrl: '',
                    Message: 'Err Registering user. UserName may be taken by another user'
                })
            });
    }


    handleImageUpload(file) {
        this.setState({

            hidebutton: true
        })
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET) 
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                    hidebutton: false
                });
            }
        });
    }

    onImageDrop = files => {
        this.setState({
            uploadedFile: files[0]
        });
        console.log(`uploaded File: `, files[0])

        this.handleImageUpload(files[0]);

    }

    render() {
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
            preferredGender,
            budgetTier,
            uploadedFile,
            uploadedFileCloudinaryUrl } = this.state
        this.handleDiMOptions();

        return (
            <div className="registration">
            <h1>Registration</h1>
                <br />
                <br />
                Upload Profile Pic:
            <br />
                <br />

                <div>
                    <div className="FileUpload">
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                    </div>

                    <div>
                        {uploadedFile === null ? null : <div>
                            <h2>Preview:</h2> <img style={{ height: '200px' }} src={uploadedFile.preview} />
                        </div>}
                        {this.state.uploadedFileCloudinaryUrl === '' ? null :
                            <div>
                                <p>{this.state.uploadedFile.name}</p>
                                <img src={this.state.uploadedFileCloudinaryUrl} />
                            </div>}
                    </div>
                </div>


                <br />
                <br />
                First Name: <input id='firstName' onInput={this.handleFormInput} value={firstName} />
                <br />
                <br />
                Last Name: <input id='lastName' onInput={this.handleFormInput} value={lastName} />
                <br />
                <br />
                Date of Birth:  <select className='dob' onChange={this.handleMonthSelect} value={bMonth} >
                    {/* Month dropdown Select list Options made with dateOptions function (Found on Line 71). monthArr on Line 16:  */}
                    {this.dateOptions(this.monthArr)}

                </select>
                <select className='dob' onChange={this.handleDaySelect} >
                    {this.dateOptions(this.DiMArr)}

                </select>
                <select className='dob' onChange={this.handleYearSelect} value={bYear} >
                    {/* <option>Year</option> */}
                    {this.yearOptions()}


                </select>
                <br />
                <br />
                Username: <input id='username' onInput={this.handleFormInput} value={username} />
                <br />
                <br />
                Password: <input id='password' onInput={this.handleFormInput} type="password" value={password} />
                <br />
                <br />
                Confirm Password: <input id='confirmPassword' onInput={this.handleFormInput} type="password" value={confirmPassword} />
                <br />
                <br />
                My gender is:       <select id="gender" className='g' onChange={this.handleGenderSelect} value={gender} >
                    <option value='' >Gender</option>
                    <option value='M' >Male</option>
                    <option value='F' >Female</option>
                    <option value='N' >Neutral</option>

                </select>
                <br />
                <br />

                I'm interested in:  <select id='preferredGender' className='g' onChange={this.handleGenderSelect} value={preferredGender} >
                    <option value='' >Gender</option>
                    <option value='M' >Men</option>
                    <option value='F' >Women</option>
                    <option value='N' >Neutral</option>
                    <option value='ALL' >All Genders</option>

                </select>
                <br />
                <br />
                Please Select Budget Tier: <select id='budgetTier' className='b' onChange={this.handleGenderSelect} value={budgetTier} >
                    <option value='' >Budget Tier</option>
                    <option value='Free' >Free Tier</option>
                    <option value='$' >Low Tier</option>
                    <option value='$$' >Average Tier</option>

                </select>
                <br />
                <br />
                <h3>About Me:</h3>
                <textarea id='bio' value={bio} onInput={this.handleFormInput} className="messagebox" rows="10" cols="100">
                </textarea>
                <br />
                <p>{this.state.Message}</p>
                <br />
                <button className="signup" disabled={this.state.hidebutton} onClick={this.handleSubmit} id='formSubmit' >Submit</button>
                <br />
                <br />
            </div>
                            
        )
    }
}
export default Registration;