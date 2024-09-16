import React, { useContext, useState } from "react";
import api from "../Utils/ApiBaseurl";
import { AuthContext } from "../context/authContext";
function Login({setIsLogin}) {
  const {setUser , isAuth , setIsAuth} = useContext(AuthContext)
  const [user, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handelFormChange = (e) => {
    setUserInfo({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handelUserLogin = async (e) => {
    e.preventDefault();
    try {
      let {data} = await api.post("admin/login", {
        ...user,
      });
      const {token , message , user} = data;
      localStorage.setItem('token',JSON.stringify(token));
      setUser(user);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
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
          value={user.email}
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
          value={user.password}
          onChange={handelFormChange}
          placeholder="•••••••••"
          name="password"
        />
      </div>

      {/* submit button */}
      <div className="bg-neutral-300">
        <button  className="btn w-full">
          Log In
        </button>
      </div>
    </form>
  );
}

export default Login;
