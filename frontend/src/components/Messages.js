import React from 'react'
import {Link} from 'react-router-dom'


class Messages extends React.Component {
render(){
    return(
        <div>
            <h1>Chat With Your Thrifter <3 Here!</h1>
            <textarea class="messagebox"></textarea>
            <button>Send</button> {' '}
        </div>
    )
}
}
export default Messages;