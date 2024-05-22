import React from "react";
import girl from "../assets/girlWithLaptop.png";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import uiUx from '../assets/uiUx.png'
import devlopment from '../assets/development.png'


import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faStar , faSearch , faAngleRight , faAngleLeft } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <main>
      <div className="hero-section">
        <div className="leftDesign">
          <h2 id="bright">Start Your Favourite Course</h2>
          {/* here horizontal line */}
          <p>
            Now Learning From Anywhere , and Build your{" "}
            <span id="bright"> bright Career. </span>
          </p>
          <p>
            Always helping the learning and keen students to learn and achieve
            the unexpected . Explore Your Potential.
          </p>
          <button id="CTA">Start A Course</button>
        </div>
        <div className="rightDesign">
          <img
            src={girl}
            alt="This is the girl with laptop who is ready ro start any course"
          />
          {/* this is the courses circle */}
          <div className="courses">
            <FontAwesomeIcon icon={faBookOpen} style={{ height: "1.3em" }} />

            <p>1,234</p>
            <p>Courses</p>
          </div>
          {/* this is the rating circle */}

          <div className="rating">
            <div>
              <span>4.5</span>
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: "1.3em", color: "gold" }}
              />
            </div>
            <p>Rating (50k)</p>
          </div>

          {/* this is the user comment section */}
          <div id="userComment">
            <div className="leftUser">
              <img src={user1} alt="this is the user1 profile image" />
              <img
                src={user2}
                id="user2"
                alt="this is the user2 profile image"
              />
            </div>
            <div className="rightUser">
              <p>
                <span id="userNumber">100+</span>Enthusiastic Learner
              </p>
              <p>Learning Daily</p>
            </div>
          </div>
        </div>
      </div>

    <div className="course-section">
        <div className="course-Header">
            <h1>All<span id="bright"> Courses </span> of Educare</h1>
            <div id="rightCourseHeader">
            <input type="text" placeholder="Search your course" />
            <FontAwesomeIcon icon={faSearch} style={{ height: "1.3em" }} />
            </div>
        </div>
        {/* this is the grid section */}
        <div className="grid-container">
            <div className="grid-child">
                <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
            <div className="grid-child">
                 <img src={devlopment} alt="this is the ui/Ux design course" />
                <p>Development</p>
            </div>
            <div className="grid-child">
                 <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
            <div className="grid-child">
                 <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
            <div className="grid-child">
                 <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
            <div className="grid-child">
                 <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
            <div className="grid-child">
                 <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
            <div className="grid-child">
                 <img src={uiUx} alt="this is the ui/Ux design course" />
                <p>UI/UX Design</p>
            </div>
        </div>

        <div className="courses-type">
            <div className="courseTypeHeader">
                <h1>Many types of <span id="bright"> Courses</span></h1>
                <div>
                    <FontAwesomeIcon icon={faAngleLeft} style={{ height: "1.3em" }} />
                    <FontAwesomeIcon icon={faAngleRight} style={{ height: "1.3em" }} />
                </div>
            </div>

            <div className="courseContainer">
                <div className="courseChild"></div>
                <div className="courseChild"></div>
                <div className="courseChild"></div>

            </div>
        <button>Explore More Course</button>
        </div>
    </div>

    </main>
  );
}

export default Home;
