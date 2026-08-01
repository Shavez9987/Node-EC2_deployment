import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("its shavez Hello, World!");
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});