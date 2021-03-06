import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const handlePosts = async () => {
    const response = await axios.get("http://posts.com/posts");
    console.log(response.data);
    setPosts(response.data);
  };

  useEffect(() => {
    handlePosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    console.log(post);
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return <div className="">{renderedPosts}</div>;
};

export default PostList;
