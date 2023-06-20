const app = require(".");


const port=8000;

app.listen(port, async () => {
  console.log("microservice gateway listening on port", port);
});
