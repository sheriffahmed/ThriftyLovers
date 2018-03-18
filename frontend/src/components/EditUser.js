import React from 'react'
import {Link} from 'react-router-dom'

class EditUser extends React.Component {
render(){
    return(
        <div>
            <h1>User Profile</h1>

            <img class="mandatory" src="https://vignette.wikia.nocookie.net/warriorcatsrpg/images/1/19/Yellow_tiger_cat.jpg/revision/latest?cb=20110830125714" />
            <img class="optional" src="https://pbs.twimg.com/profile_images/378800000560709341/f304187183447a26eb801a3761b8353a.jpeg" />
            <img class="optional" src="http://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg" /> 
            <br />
            
            <textarea class=""></textarea>

        </div>
    )
}
}
export default EditUser;