const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
const AuthorSchema = new Schema({
  name: {
    type: String,
    require: true
  }
});

module.exports = Mongoose.model("Author", AuthorSchema);
