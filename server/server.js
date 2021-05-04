const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");
require("./Users");
require("./Instruction");
app.use(bodyParser.json());
app.use(cors());
// password = xAf25BepaZNVSzo2;
const Users = mongoose.model("UserData");
const Instructions = mongoose.model("Instructions");
const mongouri =
  "mongodb://<username>:<password>@<address>";

mongoose.connect(mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("Error:", err);
});

app.get("/", (req, res) => {
  Users.find({})
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
app.get("/instructions", (req, res) => {
  Instructions.find({})
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
app.post("/send", (req, res) => {
  const UsersD = new Users({
    quetion: req.body.quetion,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    ans: req.body.ans,
  });
  UsersD.save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.post("/send-instructions", (req, res) => {
  const Instruction = new Instructions({
    line: req.body.line,
    mqtopass: req.body.mqtopass,
  });
  Instruction.save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});
app.listen(3000, () => {
  console.log("server running");
});
