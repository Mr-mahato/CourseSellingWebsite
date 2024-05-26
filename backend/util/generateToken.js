const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateToken = (obj)=>{
    const {id} = obj;
    const token =  jwt.sign({id} , process.env.secret , {expiresIn:'1h'});
    return token
}

module.exports={
    generateToken
}