//const { body } = require("express-validator/check");
const Post = require("../Models/PostModel");
const Author = require("../Models/AuthorModel");

exports.addPost = (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  });
  newPost
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.error(err);
    });
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("author");
    res.json({ posts });
  } catch (err) {
    console.log(err);
    res.status(200).send("Internal server Error");
  }
};
exports.getPost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id).populate("author");
    console.log(post);
    res.json({ post });
  } catch (err) {
    console.error(err);
    res.status(200).send("Internal server Error");
  }
};
