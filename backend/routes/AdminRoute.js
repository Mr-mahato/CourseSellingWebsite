const express = require('express');
const { signUp , login } = require('../controller/adminControler');
const app = express();
const adminRouter = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const {jwtAuthenticate} = require('../util/jwtAuthenticate');
const {getUserInfo}  = require('../util/getuserinfo');
const {createCourse , getCourse , updateCourse} = require('../controller/adminCreateCourse');
adminRouter.post('/signup' ,signUp)
adminRouter.post('/login' ,login)

adminRouter.post('/createCourses', jwtAuthenticate ,createCourse);

adminRouter.get('/courses', jwtAuthenticate ,getCourse);

adminRouter.put('/updateCourse/:courseId' , jwtAuthenticate , updateCourse);

adminRouter.get('/userInfo' , jwtAuthenticate , getUserInfo);
module.exports = {
    adminRouter
};