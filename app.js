const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const deploymentDB = [];

app.use(bodyParser.json());

app.post("/deployments", (req, res) => {
  const deployment = req.body;
  deploymentDB.push(deployment);
  res.status(201).send(deployment);
});

app.get("/deployments", (req, res) => {
  res.send(deploymentDB);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
