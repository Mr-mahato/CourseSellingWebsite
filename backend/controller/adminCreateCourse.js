const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/*Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }*/

const createCourse = (req, res) => {
  let course = req.body;
  const id = uuidv4();
  course = { ...course, id };
  fs.readFile("course.json", "utf-8", (err, data) => {
    if (err) res.status(400).send("Error while reading the file");
    const courses = JSON.parse(data);
    courses.push(course);
    fs.writeFile("course.json", JSON.stringify(courses), (err) => {
      if (err) res.status(400).send("Error while writing the file");
      else
        res
          .status(200)
          .json({ msg: "course created successfully ", courseId: id });
    });
  });
};

const getCourse = (req, res) => {
  fs.readFile("course.json", "utf-8", (err, data) => {
    if (err) res.send("error encounter while reading the file");
    const courses = JSON.parse(data);
    res.status(200).json({ course: courses });
  });
};

const updateCourse = async (req, res) => {
  try {
    const course = req.body;
    const { courseId } = req.params;
    console.log(courseId);
    fs.readFile("course.json", "utf-8", (err, data) => {
      if (err) res.status(400).send("error while reading the file");
      const courses = JSON.parse(data);
      const courseIndex = courses.findIndex((course) => course.id == courseId);

      if (courseIndex == -1) {
        res.status(400).send("Course not found");
        return;
      }
      Object.assign(courses[courseIndex], course);
      fs.writeFile("course.json", JSON.stringify(courses), (err) => {
        if (err) res.status(400).send("error while writing the file");
        res.send({ message: "Course Updated successfully" });
      });
    });
  } catch {
    console.log("error while updating the course");
    res.send("error");
  }
};

module.exports = {
  createCourse,
  getCourse,
  updateCourse,
};
