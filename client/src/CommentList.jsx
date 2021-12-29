import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
  //console.log(props);
  const rendredComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{rendredComments}</ul>;
};

export default CommentList;
