
import React from "react"
import Form from "./Form"
import List from "./List"

class Contact extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        contacts: [
            {name: "name 1",phone: "+123567897" },
            {name: "name 2",phone: "+123567897" },
            {name: "name 3",phone: "+123567897" }
        ],
    }


    render(){
        return(
            <div>
                <List contacts={this.state.contacts}/>
                <Form />
            </div>
        )
    }
}


export default Contact;