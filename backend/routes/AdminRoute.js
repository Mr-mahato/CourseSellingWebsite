const express = require('express');
const { signUp , login } = require('../controller/adminControler');
const app = express();
const adminRouter = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
adminRouter.post('/signup' ,signUp)
adminRouter.post('/login' ,login)

module.exports = {
    adminRouter
};