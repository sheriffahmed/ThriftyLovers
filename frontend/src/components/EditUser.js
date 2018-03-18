import React from 'react'
import {Link} from 'react-router-dom'

class EditUser extends React.Component {
render(){
    return(
        <div>
            
            <h1>User Profile</h1>
            <h2><a href="">New Matches: 3</a></h2>
            <img class="mandatory" src="https://vignette.wikia.nocookie.net/warriorcatsrpg/images/1/19/Yellow_tiger_cat.jpg/revision/latest?cb=20110830125714" />
            <img class="optional" src="https://pbs.twimg.com/profile_images/378800000560709341/f304187183447a26eb801a3761b8353a.jpeg" />
            <img class="optional" src="http://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg" /> 
            <br/>
            <h3>About Me</h3>
            <textarea class="aboutme">I enjoy fine wine, long walks on the beach, and modern art.</textarea>
            <br/>
            <h3>Edit Profile</h3>
            <h5>On dates, I'd prefer to:</h5>
                <form class="bill">
                    <input type="radio" name="bill" value="Split the bill" checked/>Split the bill<br/>
                    <input type="radio" name="bill" value="I pay the bill"/>I pay the bill<br/>
                    <input type="radio" name="bill" value="Other"/>Other
                </form>
                <br/>
                <br/>
                <br/>
            First Name: <input/>
                <br/>
                <br/>
                Last Name: <input/>
                <br/>
                <br/>
                Date of Birth:  <select>
                                    <option>Month</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <select>
                                    <option>Day</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                                <select>
                                    <option>Year</option>
                                    // Map years in some function
                                    <option id='year'></option>
                                </select>
                <br/>
                <br/>
                Username: <input/>
                <br/>
                <br/>
                Password: <input/>
        </div>
    )
}
}
export default EditUser;