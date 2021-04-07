import React, { Component } from 'react'
import Phonebook from './Phonebook';




export default class Form extends Component {
   
    render() {
        
        
        
        return (
            <div>
                <div id="results"></div>



                <div className="functions">
                    <input id="nameInput" placeholder="your full name,please"></input>
                    <br/>
                    <input id="phoneInput" placeholder="enter your phone number"></input>
                    <br/>
                    <button onClick={this.props.addFunc}>ADD</button>
                </div>
                
            </div>
        )
    }
}
