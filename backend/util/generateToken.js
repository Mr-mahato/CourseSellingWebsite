const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateToken = (obj)=>{
    const token =  jwt.sign(obj , process.env.secret , {expiresIn:'1h'});
    return token
}

module.exports={
    generateToken
}