const express = require("express");
const app = express();
const cors = require("cors");
const { authRoutes } = require("./routes");


app.use(express.json());

app.use(
  cors()
);

app.get("/", async (req,res) => {
  return res.status(200).send("welcome to user michroservice")
})

// auth
app.use("/auth",authRoutes)



module.exports = app;
