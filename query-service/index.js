const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
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
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);
  console.log(posts);

  res.send({});
});

app.listen(7000, async () => {
  console.log("App listening on port 7000");
  try {
    const response = await axios.get("http://event-bus-srv:6000/events");

    for (let event of res.data) {
      console.log("Processing event", event.type);
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});
