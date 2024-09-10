import React, { useState } from "react";
import axios from "axios";
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
  const handelUserRegister = async () => {
    console.log(user);

    try {
      let resp = await axios.post("http://localhost:3001/admin/signup", user);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="lg:w-[30%] md:w-[40%] w-[90%] mx-auto bg-neutral-600 z-30 border-2 flex flex-col    rounded-lg  px-3 py-10">
        {/* Username input */}
        <h1 className="self-start font-bold text-xl  underline text-blue-600 underline-offset-3">
          Signup
        </h1>

        <div className="flex w-full flex-col gap-2  ">
          <label className="text-lg text-neutral-100 mustField font-semibold  after:text-red-600" htmlFor="username">
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
            className="text-lg text-neutral-100 mustField font-semibold  after:text-red-600 mustField  after:text-gray-600"
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
            className="text-lg text-neutral-100 mustField font-semibold  after:text-red-600 mustField"
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
        <div className="self-end mt-10">
          <button onClick={handelUserRegister} className="btn">
            Sign Up
          </button>
        </div>

        <button onClick={()=>setIsSignup(false)} className="self-start bg-red-600 text-neutral-100 rounded-md font-semibold px-4 py-1">Close</button>

      </div>
  );
}

export default Signup;
