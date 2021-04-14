import React, { Component } from 'react'
import "../styles/Form.css"
// import Contact from './Contact';
import PropTypes from "prop-types"




export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: ""
        }
    }


    onChange = (e) => {

        // if(e.target.name === "name"){
        //     this.setState({
        //         name: e.target.value
        //     })
        // } else if(e.target.name === "phone"){
        //     this.setState({
        //         phone: e.target.value
        //     })
        // }
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    componentDidUpdate(){
        //console.log(this.state)
    }

    static checkingPropTypes = {
        addContact: PropTypes.func
    }

    sendForm = (e) => {
        e.preventDefault();
        if(this.state.name && this.state.phone){
            this.props.addContact({...this.state});
        }
        

        // document.getElementById("nameInput").value = "";
        // document.getElementById("phoneInput").value = "";
        this.setState({name:"" , phone: ""})
    }

    render() {
        
        return (
            <form onSubmit={this.sendForm} className="formField">
                <h3>Form</h3>
                <input onChange={this.onChange} name="name" id="nameInput" placeholder="Enter a name..." value={this.state.name}/>
                <br />
                <input onChange={this.onChange} name="phone" id="phoneInput" placeholder="Enter the phone number ...." value={this.state.phone}/>
                <br />
                <button id="button">ADD</button>
                
            </form>
        )
    }
}
