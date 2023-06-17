const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());

app.use(
  cors()
);

app.get("/", async (req,res) => {
  return res.status(200).send("welcome to product microservice")
})



module.exports = app;
