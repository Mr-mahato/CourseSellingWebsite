const jwt = require("jsonwebtoken");
const fs = require("fs");

const jwtAuthenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) {
      res.status(401).json({ msg: "No token , authorization denied" });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ msg: "No authorizationtoken, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.secret);

    const { email } = decoded;
    fs.readFile("data.json", "utf-8", (err, data) => {

      if (err) res.json({msg:err});
      const users = JSON.parse(data);
      const user = users.find((user) => user.email == email);
      console.log(user);
      if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};



module.exports = {
  jwtAuthenticate,
};
