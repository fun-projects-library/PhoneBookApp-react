import React, { Component } from "react";
import PropTypes from "prop-types"
import "../styles/BlogItem.css"

export default class BlogItems extends Component {

  constructor(props){
    super(props)
    console.log("hello from constructor!")
    //console.log(props)
    this.state = {
      name: "Tom",
      lastName: "Jackson",
      age: 32,
      address: "23 Broadway"
    }
  }

  static propTypes = {
    blogMessage: PropTypes.string,
    // data: PropTypes.object,
    text: PropTypes.string.isRequired,
    data: PropTypes.shape({uName: PropTypes.string.isRequired})
  }
  buttonClick = () => {
    console.log("hello from button")
    this.props.blogClick()
  };
  
  render() {
    
    // console.log(this.props);
    const myStyle = {
      color: "black",
      backgroundColor: "aqua",
      padding: "10px"
    }
    
    return (
      <div id="mainDiv">
        <h2 style={{color: "red",}}>Blog Item</h2>
        <h3 className="subtitle">Title:</h3>
        <h3>Description: {this.props.blogMessage}</h3>
        <h5 style={myStyle}><u>Text:</u> '{this.props.text}'</h5>
        <button onClick={this.buttonClick.bind(this)}>Greet</button>
        {/* <h3>
          Author Name: {this.props.data.uName} {this.props.data.lastName}
        </h3> */}
        {/* <span>{console.log(this.props)}</span> */}
        <hr />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
