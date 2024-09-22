const { courseModal } = require("../modal/courseModal");
/*Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }*/

// here is little work is left to do ,
// task-1: apply the zod validation here for the course
// task-2:

const createCourse = async (req, res) => {
  try {
    const { Title, Description, Price, Published, Tutor } = req.body;

    // handel the file upload here

    console.log(req.file);
    const course = {
      Title,
      Description,
      Price,
      Published,
      Tutor,
      File: req.file.filename,
    };
    const courseData = new courseModal(course);

    const savedCourse = await courseData.save();
    console.log(savedCourse);
    if (savedCourse) {
      res.status(200).json({
        msg: "course created successfully ",
        courseId: savedCourse._id,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

//  you need Price , published and tutor

const getCourse = async (req, res) => {
  try {
    const courses = await courseModal.find({});
    res.status(200).json({ course: courses });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = req.body;
    const { courseId } = req.params;
    const updatedCourse = await courseModal.findOneAndUpdate(
      { _id: courseId },
      course,
      { new: true }
    );
    console.log("Updated course:");
    res
      .status(200)
      .json({ message: "Course updated successfully", updatedCourse });
  } catch (error) {
    console.log(error);
    res.status(403).send("error");
  }
};

module.exports = {
  createCourse,
  getCourse,
  updateCourse,
};
