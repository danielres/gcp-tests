const express = require("express");

const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from push-deploy test (frozen-lock)!!!!!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
