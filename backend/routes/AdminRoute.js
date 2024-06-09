const express = require('express');
const { signUp , login } = require('../controller/adminControler');
const app = express();
const adminRouter = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+`-${file.originalname}`);
  }
})

const upload = multer({storage:storage})


const {jwtAuthenticate , handelImageUpload} = require('../util/jwtAuthenticate');
const {getUserInfo}  = require('../util/getuserinfo');
const {createCourse , getCourse , updateCourse} = require('../controller/adminCreateCourse');
adminRouter.post('/signup' ,signUp)
adminRouter.post('/login' ,login)

adminRouter.post('/createCourses', jwtAuthenticate ,createCourse);

adminRouter.get('/courses', jwtAuthenticate ,getCourse);

adminRouter.put('/updateCourse/:courseId' , jwtAuthenticate , updateCourse);


adminRouter.post('/fileUpload', upload.single('file'), handelImageUpload);

adminRouter.get('/userInfo' , jwtAuthenticate , getUserInfo);


module.exports = {
    adminRouter
};