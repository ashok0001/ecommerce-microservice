const jwt = require("jsonwebtoken");
require("dotenv").config();

export const tokenVerify = (token) => {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, process.env.THE_SECERET_TOKEN, function (err, user) {
      if (err) return reject(err);
      resolve(user);
    });
  });
};


export const generateToken = (user) => {
  return jwt.sign({ user: user }, process.env.THE_SECERET_TOKEN);
}
