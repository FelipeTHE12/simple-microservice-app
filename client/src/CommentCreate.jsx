import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content: content,
    });
    setContent("");
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <div className="form-group">
          <label>New Comment</label>
          <input value={content} onChange={handleContent} type="text" />
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default CommentCreate;
