import React, { useState, useEffect } from "react";
import "../styles/course.css";
import books from "../assets/books.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function Courses() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses")
      .then((res) => {
        console.log(res.data.course);
        setCourse(res.data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!course)
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  const courseElem = course.map((course) => {
    return (
      <Link to={`/courses/${course._id}`} className="CoursePagegrid-child">
        <div className="CourseImage">
          <img src={`http://localhost:3000/${course.File}`} alt="This is the book" />
        </div>
        <h2>{course.Title}</h2>
        <p>{course.Tutor}</p>
        <b>4.5</b>
        <p>Star</p>
        <p>
          <b>${course.Price}</b>
        </p>
      </Link>
    );
  });

  return (
    <div className="coursePageContainer">
      <div className="CoursePagegrid-container">
       {courseElem}
      </div>
    </div>
  );
}

export default Courses;
