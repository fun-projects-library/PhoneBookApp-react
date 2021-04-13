import React, { Component } from 'react'
import "../styles/List.css"
import PropTypes from "prop-types"

export default class List extends Component {
    
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }


    state = { filterText: "" };
    onChangeFilter = (e) =>{
        //console.log('hello')
        this.setState({filterText: e.target.value})
    }

    render() {
        const filteredData = this.props.contacts.filter((item)=>{
            return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
        })
        return (
            <div className="listDiv">
                <h3>List</h3>
                <input name="filter" id="filter" placeholder="search by name or phone" value = {this.state.filterText}
                onChange={this.onChangeFilter} />
                <ul>
                    {filteredData.map((item,index)=>{
                        return(
                        <li key={index}>
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
