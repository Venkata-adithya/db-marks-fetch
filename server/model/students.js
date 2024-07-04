const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  sname: String,
  english: Number,
  maths: Number,
  science: Number,
});

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;
