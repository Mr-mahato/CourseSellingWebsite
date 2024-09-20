import React, { useState } from "react";
import api from "../Utils/ApiBaseurl";
import swal from "sweetalert";

// #TODO:maintain the RBA here -->Role based authentication
function Signup({ setLoginBtn }) {
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
      let { data } = await api.post("admin/signup", user);

      const { token, message } = { data };
      swal({
        title: "Success!",
        text: message || "Your account has been created successfully.",
        icon: "success",
        button: "OK",
      });
      setLoginBtn(true);
    } catch (err) {
      swal({
        title: "Error!",
        text:
          err.response.data.message ||
          "Oops!!.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <form
      onSubmit={handelUserRegister}
      className=" z-30  flex flex-col  gap-2 rounded-lg  "
    >
      {/* Username input */}

      <div className="flex w-full flex-col gap-2  ">
        <label
          className="text-lg text-neutral-800 mustField font-semibold  after:text-red-600"
          htmlFor="username"
        >
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
          className="text-lg text-neutral-800 mustField font-semibold  after:text-red-600 mustField  "
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
          type="text"
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
