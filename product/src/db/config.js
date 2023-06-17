const mongoose = require("mongoose");


const mongoUrl = process.env.MONGODB_ATLAST_URL

const connect = () => {
  return mongoose.connect(mongoUrl);

};


module.exports = connect;



