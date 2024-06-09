const jwt = require("jsonwebtoken");
const fs = require("fs");



const jwtAuthenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
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

const handelImageUpload = (req, res) => {
  if (!req.file) {
    console.error('Error uploading file:', req.error);
    return res.status(500).send('Error uploading file');
  }
  // console.log(req.body)
  const {courseName , courseDescription , tutorName} = req.body;
  console.log(courseName)
  res.send('hello')
}

module.exports = {
  jwtAuthenticate,
  handelImageUpload
};
