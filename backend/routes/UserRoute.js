const express = require('express');
const app = express();
const {getUserInfoFromSession} = require('../controller/getUserInfoFromSession')

const userRouter = express.Router();

userRouter.get("/user-session",getUserInfoFromSession);


module.exports={
    userRouter
}