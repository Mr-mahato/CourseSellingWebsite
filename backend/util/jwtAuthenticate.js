const jwt = require("jsonwebtoken");
const fs = require("fs");
const {userModal} = require('../modal/userModal')


const jwtAuthenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ msg: "No token , authorization denied" });
      }
      const token = authHeader.split(" ")[1];
      console.log("token: " , token);
    if (!token) {
      return res
        .status(401)
        .json({ msg: "No authorizationtoken, authorization denied" });
    }

    const decodedId =  jwt.verify(token, process.env.secret);

    console.log(decodedId)
    const user = await userModal.findById({_id:decodedId.id});
    console.log(user);
    if(!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    if(user){
      req.user = {
        id: user._id,
        email: user.email,
        username: user.username
      }
      console.log(req.user);
      next();
    }
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
