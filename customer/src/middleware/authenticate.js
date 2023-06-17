const { tokenVerify } = require("../utils/jwtProvider");


const aunthenticate = async (req, res, next) => {

  
  if (!req.headers?.authorization)
    return res.status(400).send({ message: "please provide a token" });

  const bearerToken = req.headers.authorization;

  if (!bearerToken.startsWith("Bearer "))
    return res.status(401).send({ message: "please provide a valide token" });

  const token = bearerToken.split(" ")[1];

  let user;

  try {
    user = tokenVerify(token);
    
  } catch (err) {
    return res.status(500).send(err.message);
  }
  req.user = user
  next();
};

module.exports = aunthenticate;