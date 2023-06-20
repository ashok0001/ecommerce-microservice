require("dotenv").config();
const mongoose = require("mongoose");

const mongoUrl = process.env.MONGODB_ATLAST_URL

console.log("Mongo url ", mongoUrl)

const MONGODB_ATLAST_URL="mongodb+srv://ashokzarmariya90:k76wSLT1qNgAgfbQ@cluster0.j5u0wd8.mongodb.net/?retryWrites=true&w=majority"
const customerService='mongodb+srv://ashokzarmariya90:xOPrLm7aF8IThYSa@cluster0.ljwfwu8.mongodb.net/?retryWrites=true&w=majority'


const connect = () => {
  console.log("Mongo url ", mongoUrl)
  return mongoose.connect(MONGODB_ATLAST_URL);

};


module.exports = connect;



