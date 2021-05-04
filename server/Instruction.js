const mongoose = require("mongoose");

const InstructionSchema = new mongoose.Schema({
  line: Array,
  mqtopass: Number,
});

mongoose.model("Instructions", InstructionSchema);
