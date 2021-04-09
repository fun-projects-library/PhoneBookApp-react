import React, { Component } from 'react'
import "../styles/List.css"
import PropTypes from "prop-types"

export default class List extends Component {
    constructor(props){
        super(props)
    }
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className="listDiv">
                <h3>List</h3>
                <input name="filter" id="filter" placeholder="search by name or phone"></input>
                <ul>
                    {this.props.contacts.map(item=>{
                        return(
                        <li>
                            <span className="names">{item.name}</span>
                            <span className="phones">{item.phone}</span>
                        </li>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
}
