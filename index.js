const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
require("dotenv").config();

app.get(`/`, (req, res) => {
  res.send("hello e_commerce");
});

const useRoutes = require("./routes/user.router");

app.use("/users", useRoutes);

mongoose.connect(
  "mongodb+srv://aziz:aziz@cluster0.xts2pp4.mongodb.net/nesrine?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error :"));

db.on("open", function () {
  console.log("dtbase connected ...");
});

app.listen(port, () => {
  console.log(`app listing on port ${process.env.port}`);
});
