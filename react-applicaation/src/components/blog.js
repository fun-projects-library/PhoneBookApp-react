import React from "react";
import BlogItems from "./BlogItems";

class Blog extends React.Component {
  render() {
    let greet = "Welcome ...";
    let userInfo = { uName: "Jack", lastName: "Johanson" };
    return (
      <>
        <h1 id="title">Blog Component</h1>
        <p>{greet}</p>

        <BlogItems
          blogMessage="This is a message from BLOG.js!"
          data={userInfo}
        />
      </>
    );
  }
}

export default Blog;
