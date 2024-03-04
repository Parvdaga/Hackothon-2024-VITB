const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoDBURL = "Link";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend", "index.html"));
});
app.get("/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend", "index.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend", "404.html"));
});

app.listen(PORT, () => {
  console.log(`server in now live on port ${PORT}`);
});
