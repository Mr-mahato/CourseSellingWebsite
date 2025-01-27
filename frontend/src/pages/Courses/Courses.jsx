import React, { useState, useEffect, useContext } from "react";
import "../../styles/course.css";
import books from "../../assets/books.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext.jsx";
function Courses() {

 const {course} = useContext(CourseContext);

console.log(course)

  if (!course)
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  const courseElem = course.map((course, ind) => {

    return (
      <Link
        to={`/courses/${course._id}`}
        key={ind}
        className="  border border-gray-400 rounded-lg w-[15rem] h-[20rem]"
      >
        <div className="CourseImage px-4 py-2 flex flex-col gap-2">
          <img
            src={course.image_link}
            alt="This is the book"
            className="rounded-md"
          />
          <h2 className="text-lg text-neutral-800 font-semibold">{course.title}</h2>
          <p className="text-neutral-600">Tutor: {course.tutor}</p>
          <p className="font-bold text-neutral-900">
            ${course.price}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="coursePageContainer mt-20  gap-2 ">
      <div className="CoursePagegrid-container flex w-[95%] flex-wrap gap-2 mx-auto">
        {courseElem}
      </div>
    </div>
  );
}

export default Courses;
