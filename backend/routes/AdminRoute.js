const express = require("express");
const { signUp, login } = require("../controller/adminControler");
const app = express();
const adminRouter = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + `-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const {
  jwtAuthenticate,
  handelImageUpload,
} = require("../util/jwtAuthenticate");
const {
  createCourse,
  getCourse,
  updateCourse,
} = require("../controller/adminCreateCourse");

adminRouter.post("/signup", signUp);
adminRouter.post("/login", login);

adminRouter.post(
  "/createCourses",
  jwtAuthenticate,
  upload.single("File"),
  createCourse
);

adminRouter.get("/courses", getCourse);

adminRouter.put("/updateCourse/:courseId" ,  updateCourse);


module.exports = {
  adminRouter,
};
