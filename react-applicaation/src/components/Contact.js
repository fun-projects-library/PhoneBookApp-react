
import React from "react"
import Form from "./Form"
import List from "./List"


class Contact extends React.Component {
    
    state = {
        contacts: [
            {name: "name 1",phone: "+123567897" },
            {name: "name 2",phone: "+987654321" },
            {name: "name 3",phone: "+123567897" }
        ],
    }

    addContact = (param) => {
        const {contacts} = this.state;
        contacts.push(param)
        this.setState({
            contacts: contacts
        })
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div>
                <List contacts={this.state.contacts}/>
                <Form addContact={this.addContact}/>
            </div>
        )
    }
}


export default Contact;