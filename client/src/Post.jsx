import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [title, setTitle] = useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(title);
    await axios.post("http://posts.com/posts/create", { title: title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={handleTitle}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Post;
