'use strict'

const express = require("express");
// const file = require("file");
const path = require("path");

const app = express();
const config = require("./config.json");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/public", express.static("./public"));

app.listen(3000, "127.0.0.1", () => {
  console.log("server is running at port 3000 ...");
});
