const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("GET / route hit!");
  res.send("ROOT ROUTE WORKS");
});

app.listen(5600, () => {
  console.log("Server running on http://localhost:5600");
});
