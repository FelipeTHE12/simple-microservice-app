const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
    console.log("Post criado", posts);
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    console.log(posts);
    console.log(postId);
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    console.log("Entoru aqui");
    console.log(id, content, postId, status);
    console.log(posts);
    const comment = post.comments.find((comment) => comment.id === id);
    console.log("Passou daqui");
    comment.status = status;
    comment.content = content;
  }

  console.log(posts);

  res.send({});
});

app.listen(7000, () => console.log("App listening on port 7000"));
