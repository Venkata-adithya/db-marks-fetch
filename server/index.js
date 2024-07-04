const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db/connect");
const studentModel = require("./model/students");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/getStudents", (req, res) => {
  studentModel
    .find()
    .then((students) => res.json(students))
    .catch((err) => res.json(err));
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(3001, () => {
      console.log("server is running on port 3001");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
