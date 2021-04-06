import React from "react";
import BlogItems from "./BlogItems";

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 10
    }
  }
  blogClick = ()=>{
    
    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state.number)
  }
  
  render() {
    let greet = "Welcome ...";
    let userInfo = { uName: "Jack", lastName: "Johanson", age: 25 };
    let text = "sdfklsajdf dsjfslk dfjsdsdlfj asdlfja sdfiwerwe uroiwepipsdo,x,mcxc .,mvwej wpqeirp idndgndj gndjkb kjsbdfds";

    return (
      <div id="mainDiv">
        <h1 id="title">Blog Component</h1>
        <p>{greet}</p>

        <BlogItems
          blogMessage="This is a message from BLOG.js!"
          data={userInfo} text ={text} blogClick={this.blogClick}
        />
      </div>
    );
  }
}

export default Blog;
