import React, { useContext, useEffect, useState } from "react";
import "../styles/CourseDetail.css";
import { Rating, Button, TextField } from "@mui/material";

import { useParams } from "react-router-dom";
import { Done, Favorite, AddShoppingCart } from "@mui/icons-material";
import { CourseContext } from "../context/CourseContext";
import { AuthContext } from "../context/authContext";
import UpdateCourseModel from "../Model/UpdateCourseModel";
const learningPoints = [
  "Its best to learn now",
  "You will gain a lot of knowledge",
  "This course is comprehensive",
  "You will learn from experts",
  "The content is up-to-date",
  "You can learn at your own pace",
  "There are practical exercises",
  "You will receive a certificate upon completion",
  // Add more learning points as needed
];

function CourseDetail() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { course } = useContext(CourseContext);

  const { id } = useParams();

  useEffect(() => {
    const filterOutCourse = () => {
      let filteredCourse = course.filter((course, ind) => {
        return course._id == id;
      });
      console.log(...filteredCourse);
      setSelectedCourse(...filteredCourse);
    };
    if (course != null) {
      filterOutCourse();
    }
  }, [course]);

  if (!selectedCourse) {
    return <h1 className="text-2xl font-bold  mt-20">Loading.....</h1>;
  }
  return (
    <div className="CourseDetail-container">
      <UpperDiv selectedCourse={selectedCourse} />
      <WhatyouLearn selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
      <CheckOut selectedCourse={selectedCourse} />
    </div>
  );
}

// Checkout
const UpperDiv = ({ selectedCourse }) => {
  return (
    <div className="upperDiv-container mt-10">
      <div className="innerDiv-container">
        <h1>{selectedCourse.description}</h1>

        <div className="ratingCont">
          <p style={{ color: "gold", fontSize: "18px" }}>
            <b>4</b>
          </p>
          <Rating name="read-only" value={4} readOnly />
          <p style={{ textDecoration: "underline" }}>( 842 ratings )</p>
          <p>2,585 students</p>
        </div>
        <p>
          Created by <i> {selectedCourse.tutor}</i>
        </p>
      </div>
    </div>
  );
};

const WhatyouLearn = ({selectedCourse , setSelectedCourse}) => {
  const [updateCourseView, setUpdateCourseView] = useState(false);
  return (
    <div className="learn-Component">
      <div className="inner-Learn">
        <h1>What you'll Learn</h1>
        <div className="learn-listing">
          {learningPoints.map((point, index) => (
            <p key={index}>
              {" "}
              <Done sx={{ fontSize: "18px" }} /> {point}
            </p>
          ))}
        </div>
        {/* #TODO:mention the admin and only instructor to update the courses title , description , course image etc. */}
        {
          <button
            onClick={() => setUpdateCourseView(!updateCourseView)}
            className="bg-neutral-600 px-2 py-3 rounded-md text-neutral-200 hover:bg-neutral-600/90 font-semibold"
          >
            Update Course
          </button>
        }
      </div>
      {updateCourseView && <UpdateCourseModel selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />}
    </div>
  );
};

const CheckOut = ({ selectedCourse }) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // this is the handlePaymen
  const handlePayment = async () => {
    let amount = 100;
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_MOLFKRHMYodtpD", // This is Api key. you will get it from razorpay dashboard > account and settings > API keys
      amount: parseInt(amount * 100),
      currency: "INR", // your 3 letter currency code
      name: "Chandan Mahato", // project or transaction name
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/96912116?v=4", // your project logo
      handler: function (response) {
        // console.log("response", response);
        orderPlace(); // after payment completes on stripe this function will be called and you can do your stuff
      },
      prefill: {
        name: "Umang Bhalodiya",
        email: "umangbhalodiya660@gmail.com",
        contact: "9988556633",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "#158993",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const [text, setText] = useState("");
  const changeToUpperCase = (e) => {
    setText(e.target.value.toUpperCase());
  };
  return (
    <div className="checkout-container">
      <img
        src={selectedCourse.image_link}
        alt="this is the course"
      />

      <div className="innerCheckout">
        <h1>{selectedCourse.title}</h1>
        <h1 className="font-semibold">$ {selectedCourse.price}</h1>
        <div className="Buy-section">
          <Button
            variant="contained"
            sx={{ background: "#A435F0", color: "white", width: "70%" }}
            startIcon={<AddShoppingCart />}
            onClick={handlePayment}
          >
            Buy Now
          </Button>
          <Favorite sx={{ fontSize: "2rem", cursor: "pointer" }} />
        </div>

        <div className="CoupenSection">
          <div className="sharingSection">
            <Button
              sx={{
                fontSize: "10px",
                fontWeight: "bolder",
                color: "black",
                borderBottom: "2px solid blue",
              }}
            >
              Share
            </Button>
            <Button
              sx={{
                fontSize: "10px",
                fontWeight: "bolder",
                color: "black",
                borderBottom: "2px solid blue",
              }}
            >
              Apply Coupen
            </Button>
            <Button
              sx={{
                fontSize: "10px",
                fontWeight: "bolder",
                color: "black",
                borderBottom: "2px solid blue",
              }}
            >
              Gift this course
            </Button>
          </div>
          <div className="applyCoupen">
            <TextField
              label="Enter Coupen"
              value={text}
              variant="outlined"
              sx={{ fontSize: "2px" }}
              onChange={changeToUpperCase}
              type="text"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2D2F31",
                "&:hover": {
                  backgroundColor: "#2D2F31", // This will keep the button color the same on hover
                },
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetail;
