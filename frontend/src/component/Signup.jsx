import React, { useState } from "react";
import axios from "axios";
import api from "../Utils/ApiBaseurl";

function Signup({setIsSignup}) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelFormChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // sending the data to the backend for registration
  const handelUserRegister = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      let resp = await api.post("admin/signup", user);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <form onSubmit={handelUserRegister} className=" z-30  flex flex-col  gap-2 rounded-lg  ">
        {/* Username input */}
      

        <div className="flex w-full flex-col gap-2  ">
          <label className="text-lg text-neutral-800 mustField font-semibold  after:text-red-600" htmlFor="username">
            Username
          </label>
          <input
            className="inputField"
            type="text"
            value={user.username}
            placeholder="Enter your username..."
            name="username"
            onChange={handelFormChange}
          />
        </div>

        {/* email input */}

        <div className="flex w-full flex-col gap-2  ">
          <label
            className="text-lg text-neutral-800 mustField font-semibold  after:text-red-600 mustField  after:text-gray-600"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="inputField"
            type="email"
            required
            value={user.email}
            onChange={handelFormChange}
            placeholder="Enter your Email..."
            name="email"
          />
        </div>

        {/* password input */}
        <div className="flex w-full flex-col gap-2  ">
          <label
            className="text-lg text-neutral-800 mustField font-semibold  after:text-red-600 mustField"
            htmlFor="username"
          >
            Password
          </label>
          <input
            className="inputField"
            type="password"
            required
            value={user.password}
            onChange={handelFormChange}
            placeholder="•••••••••"
            name="password"
          />
        </div>

        {/* submit button */}
        <div className="">
          <button onClick={handelUserRegister} className="w-full btn">
            Sign Up
          </button>
        </div>


      </form>
  );
}

export default Signup;
