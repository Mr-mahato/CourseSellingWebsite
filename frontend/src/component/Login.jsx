import React, { useContext, useState } from "react";
import api from "../Utils/ApiBaseurl";
import { AuthContext } from "../context/authContext";
import swal from "sweetalert";

function Login({ setUserLoginModel }) {
  const { setUser, isAuth, setIsAuth } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handelFormChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // #TODO:add the login info to the session in the backend
  const handelUserLogin = async (e) => {
    e.preventDefault();
    try {
      let { data } = await api.post("admin/login", {
        ...userInfo,
      });
      const { message } = data;
      swal({
        title: "Success!",
        text: message || "Your account has been created successfully.",
        icon: "success",
        button: "OK",
      });
      setIsAuth(true);
      setUserLoginModel(false);

      let response = await api.get('/user/user-session');
      console.log(response);
    } catch (err) {
      console.log(err);
      swal({
        title: "Error!",
        text:
          err.response || "Your account has been created successfully.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <form onSubmit={handelUserLogin} className="flex flex-col gap-2 w-full">
      {/* email input */}

      <div className="flex w-full flex-col gap-2  ">
        <label
          className="text-lg text-neutral-800 mustField font-semibold  after:text-red-600"
          htmlFor="username"
        >
          Email
        </label>
        <input
          className="inputField"
          type="email"
          required
          value={userInfo.email}
          onChange={handelFormChange}
          placeholder="Enter your Email..."
          name="email"
        />
      </div>

      {/* password input */}
      <div className="flex w-full flex-col gap-2  ">
        <label
          className="text-lg text-neutral-800 font-semibold mustField after:text-red-600"
          htmlFor="username"
        >
          Password
        </label>
        <input
          className="inputField"
          type="password"
          value={userInfo.password}
          onChange={handelFormChange}
          placeholder="•••••••••"
          name="password"
        />
      </div>

      {/* submit button */}
      <div className="bg-neutral-300">
        <button className="btn w-full">Log In</button>
      </div>
    </form>
  );
}

export default Login;
