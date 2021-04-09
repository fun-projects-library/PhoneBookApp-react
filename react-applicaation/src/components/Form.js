import React, { Component } from 'react'
import "../styles/Form.css"




export default class Form extends Component {
   
    render() {
        
        return (
            <div>
                <h3>Form</h3>
                <input name="name" id="nameInput" placeholder="Enter a name..."></input>
                <br />
                <input name="phone" id="phoneInput" placeholder="Enter the phone number ...."></input>
                <br />
                <button id="button">ADD</button>
            </div>
        )
    }
}
