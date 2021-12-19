import React from "react";
import Post from "./Post";
import PostList from "./PostList";

const App = () => {
  return (
    <>
      <h1>Add a new Post</h1>
      <Post />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </>
  );
};

export default App;
