import React, { useEffect, useState } from "react";
import girl from "../assets/girlWithLaptop.png";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import courseType from "./CourseType.json";

import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faStar,
  faSearch,
  faAngleRight,
  faAngleLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import CourseSelection from "../component/Home/CourseSelection";
function Home() {
  const [searchCourseType, setSearchCourseType] = useState("");
  const [filterCourse, setFileterCourse] = useState([]);
  const [trackCarouselNum, setTrackCarouselNum] = useState(0);

  useEffect(() => {
    if (searchCourseType === "") {
      setFileterCourse(courseType);
    } else {
      const filteredCourses = courseType.filter((val) =>
        val.name.toLowerCase().includes(searchCourseType.toLowerCase())
      );
      setFileterCourse(filteredCourses);
    }
  }, [searchCourseType]);

  const courseTypeComp = filterCourse.map((val, ind) => {
    return (
      <div
        key={ind}
        className="shadow-md flex flex-col py-4 justify-center items-center   basis-[15rem] "
      >
        <img
          src={val.image}
          className="w-[10rem] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
          alt={val.name}
        />
        <h1 className="text-lg font-bold justify-items-end">{val.name}</h1>
      </div>
    );
  });

  return (
    <main className="mt-10">
      {/* hero home section */}
      <div className="bg-[#eaedfa] min-h-[80vh] ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-10 pb-10  md:w-[90%] mx-auto">
          {/* this here is the left part */}
          <div className="p-2 flex flex-col gap-4 w">
            <h2 className="font-bold text-blue-600  mt-4">
              Start Your Favourite Course
            </h2>
            {/* here horizontal line */}
            <p className="sm:text-center md:text-left md:text-4xl  md:w-1/2">
              Now Learning From Anywhere , and Build your{" "}
              <span id="bright"> bright Career. </span>
            </p>
            <p className="">
              Always helping the learning and keen students to learn and achieve
              the unexpected . Explore Your Potential.
            </p>
            <button className="bg-blue-500 self-start px-4 py-2 font-semibold text-white mt-10 rounded-md">
              Start A Course
            </button>
          </div>
          {/* this here is the right part */}
          <div className="relative row-start-1 md:col-start-2 ">
            <img
              src={girl}
              className="object-cover w-full "
              alt="This is the girl with laptop who is ready ro start any course"
            />
            <div className="rounded-full bg-[#2f49cf] absolute top-[2rem] left-[2rem] flex flex-col justify-center items-center text-white w-[100px] h-[100px]">
              <FontAwesomeIcon icon={faBookOpen} style={{ height: "1.3em" }} />
              <p>1,234</p>
              <p>Courses</p>
            </div>

            <div className="rounded-full absolute top-[5rem] right-2  flex flex-col justify-center items-center w-[100px] h-[100px] bg-neutral-100">
              <div>
                <span>4.5</span>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ height: "1.3em", color: "gold" }}
                />
              </div>
              <p>Rating (50k)</p>
            </div>

            <div className="flex   absolute  md:top-[80%] top-[75%] md:right-[30%] right-[10%] px-2 mx-auto  bg-white py-2 rounded-md">
              <div className="leftUser flex">
                <img
                  src={user1}
                  className="w-[4rem] rounded-full h-[4rem] object-cover"
                  alt="this is the user1 profile image"
                />
                <img
                  src={user2}
                  className="w-[4rem] relative -left-6 rounded-full h-[4rem] object-cover"
                  alt="this is the user2 profile image"
                />
              </div>

              <div className="rightUser self-center text-sm">
                <p className="font-semibold">
                  <span id="userNumber" className="text-blue-600 font-bold">
                    100+{" "}
                  </span>
                  Enthusiastic Learner
                </p>
                <p className="font-semibold">Learning Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* types of courses */}
      <div className="course-section  px-2 py-4">
        <div className="md:flex justify-between">
          <h1>
            All<span id="bright"> Courses </span> of Educare
          </h1>

          {/* this is input section */}
          <div className="flex bg-neutral-200 py-2 px-4 justify-end gap-2">
            <input
              type="text"
              value={searchCourseType}
              onChange={(e) => setSearchCourseType(e.target.value)}
              className="outline-none h-full w-full text-neutral-600 bg-neutral-200 placeholder:text-neutral-500"
              placeholder="Search your course"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="self-center text-neutral-600"
              style={{ height: "1.3em" }}
            />
          </div>
        </div>

        {/* this is the grid section */}
        <div className="flex ml-4 mt-10 flex-wrap gap-2">{courseTypeComp}</div>
      </div>

      {/* crousel section */}
      <div className="courses-type w-[90%] mx-auto box-border mt-10">
        <div className="courseTypeHeader ">
          <h1 className="text-lg">
            Many types of <span id="bright"> Courses</span>
          </h1>

          {/* left right button */}
          <div style={{ display: "flex", gap: "2px" }}>
            <FontAwesomeIcon
              onClick={() => setTrackCarouselNum((prev) => prev - 1)}
              icon={faAngleLeft}
              style={{
                height: "1.3em",
                color: "white",
                cursor: "pointer",
                padding: "2px 6px",
                borderRadius: "5px",
                backgroundColor: "#2F49CF",
              }}
            />
            <FontAwesomeIcon
              onClick={() => setTrackCarouselNum((nxt) => nxt + 1)}
              icon={faAngleRight}
              style={{
                height: "1.3em",
                color: "white",
                cursor: "pointer",
                padding: "2px 6px",
                borderRadius: "5px",
                backgroundColor: "#2F49CF",
              }}
            />
          </div>
        </div>

        {/* container width 90% */}
        <div className="courseContainer w-full overflow-hidden ">
          <CourseSelection trackCarouselNum={trackCarouselNum} />
        </div>

        <div className="otherCourse">
          <button>Other Course</button>
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} />
        </div>
      </div>

      {/* instructor section */}
      <section className="bg-neutral-200 py-10 mb-10">
        <div className="md:flex  w-[90%] mx-auto ">
          <div className="instruction-left">
            <p
              style={{
                color: "#2F49CF",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Become A Instructor
            </p>
            <h1>
              You can join with <br />{" "}
              <span className="text-blue-600 font-semibold"> EduCare </span> as
              a instructor?
            </h1>
          </div>
          <div className="instruction-right mt-10">
            <button>Deep Information</button>
          </div>
          <div className="arrow-right"></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
