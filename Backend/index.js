import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.sendFile("");
});

app.listen(PORT, () => {
  console.log(`server in now live on port ${PORT}`);
});
