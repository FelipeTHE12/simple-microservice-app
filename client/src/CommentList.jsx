import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  useEffect(() => {
    loadComments();
  }, []);

  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const response = await axios.get(
      `http://localhost:4200/posts/${postId}/comments`
    );

    setComments(response.data);
  };

  const rendredComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{rendredComments}</ul>;
};

export default CommentList;
