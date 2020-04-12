const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const postRouter = require("./Routes/Post");
const MONGO_URI =
  "mongodb+srv://Maruth51:a7PzyvtM2wbLCWji@cluster0-qofv3.gcp.mongodb.net/blog?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", err => {
  console.error(err);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log("serever running");
});
