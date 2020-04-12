const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const PostSchema = new Schema({
  title: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  content: { type: String },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = Mongoose.model("Post", PostSchema);
