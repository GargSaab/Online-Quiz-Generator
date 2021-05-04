const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  noofquetion: Number,
  quetion: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  ans: String,
});

mongoose.model("UserData", UserSchema);
