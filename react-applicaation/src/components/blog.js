import React from "react";
import BlogItems from "./BlogItems";

class Blog extends React.Component {
  blogClick = ()=>{
    console.log("another hi to everyone from the BLOG.js :)")
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
