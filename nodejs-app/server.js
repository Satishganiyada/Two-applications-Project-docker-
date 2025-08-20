const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js Express App!");
});

app.listen(4000, () => {
  console.log("Node.js app running on port 4000");
});
