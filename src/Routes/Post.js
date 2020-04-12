const express = require("express");

const postRouter = express.Router();
const PostController = require("../controllers/Postcontroler");

module.exports = postRouter;

postRouter
  .get("/", PostController.getPosts)
  .get("/:id", PostController.getPost);

module.exports = postRouter;
