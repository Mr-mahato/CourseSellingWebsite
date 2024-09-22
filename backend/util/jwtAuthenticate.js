const jwt = require("jsonwebtoken");
const fs = require("fs");
const {userModal} = require('../modal/userModal')


const jwtAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
      res.status(401).json({ msg: "No token , authorization denied" });
      }
     
    if (!token) {
      return res
        .status(403)
        .json({ message:"No token provided" });
    }

    const decodedId =  jwt.verify(token, process.env.secret);

    console.log(decodedId)
    const user = await userModal.findById({_id:decodedId.id});
    console.log(user);
    if(!user) {
      res.status(404).json({ message: "User not found" });
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



module.exports = {
  jwtAuthenticate
};
