const express = require("express");
const app = express();
const cors = require("cors");
const proxy = require("express-http-proxy");


app.use(express.json());

app.use(
  cors()
);

app.get("/", async (req,res) => {
  return res.status(200).send("welcome to microservice gateway")
})

app.use("/user", proxy("http://localhost:5000"));
// app.use("/shopping", proxy("http://localhost:8003"));
app.use("/product", proxy("http://localhost:5001")); // products


module.exports = app;
