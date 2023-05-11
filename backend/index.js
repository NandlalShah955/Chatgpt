require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")
const bodyparser = require("body-parser");
const PORT = process.env.PORT;
const UserRouter=require("./src/routes/user.route")
const connect=require("./src/config/db")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
mongoose.set("strictQuery", false);
app.use("/user",UserRouter)
app.get("/", (req, res) => res.send("hello"));


app.listen(8080, function() {
    console.log('Server listening on port 8000!');
  });

 