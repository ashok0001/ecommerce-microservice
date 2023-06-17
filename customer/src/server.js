require('dotenv').config();

const app = require(".");
const connect = require('./db/config');
const port = process.env.PORT


app.listen(port, async () => {
  await connect()
  console.log("customer michroservice listening on port", port);
});
