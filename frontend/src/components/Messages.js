import React from 'react'
import {Link} from 'react-router-dom'


class Messages extends React.Component {
render(){
    return(
        <div>
            <h1>Chat With Your Thrifter Here!</h1>
            <table className="">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th> 
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>80</td>
                </tr>
            </table>
            <textarea class="messagebox" rows="5" cols="100">
            </textarea>
            <br />
            <button>Send</button> {' '}
        </div>
    )
}
}
export default Messages;