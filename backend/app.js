const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require("./models/post");


mongoose.connect('mongodb+srv://moof44:mywill24@cluster0.ryehv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: 'node-angular' // Specify the database name here
  })
  .then(()=>{
    console.log('Connected')
  })
  .catch(()=>{
    console.log('Connection failed');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log('post:', Post, post);
  post.save();
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
    post: post,
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching posts failed",
      });
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = app;
