import React, { Component } from "react";

export default class BlogItems extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Blog Item</h2>
        <h3>Title:</h3>
        <h3>Description: {this.props.blogMessage}</h3>
        <h3>
          Author Name: {this.props.data.uName} {this.props.data.lastName}
        </h3>
      </div>
    );
  }
}
