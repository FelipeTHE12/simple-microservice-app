import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
  //console.log(props);
  const rendredComments = comments.map((comment) => {
    const contentType = {
      APPROVED: comment.content,
      PENDING: "Aguardando Moderação",
      REJECTED: "Comentario Ofensivo",
    };

    const content = contentType[comment.status];

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{rendredComments}</ul>;
};

export default CommentList;
