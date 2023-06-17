require('dotenv').config();

const app = require(".");
const connect = require('./db/config');
const port = process.env.PORT


app.listen(port, async () => {
  await connect()
  console.log("products microservice listening on port", port);
});
