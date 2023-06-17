const mongoose = require("mongoose");
const mongoUrl='mongodb+srv://ashokzarmariya90:xOPrLm7aF8IThYSa@cluster0.ljwfwu8.mongodb.net/?retryWrites=true&w=majority'

const whatsapp="mongodb+srv://ashokzarmariya:yugraal8346@cluster0.ithqjss.mongodb.net/?retryWrites=true&w=majority"

const product_service='mongodb+srv://ashokzarmariya90:<password>@cluster0.j5u0wd8.mongodb.net/?retryWrites=true&w=majority'

const connect = () => {
  return mongoose.connect(mongoUrl);

};


module.exports = connect;



