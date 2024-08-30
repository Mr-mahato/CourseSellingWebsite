import React, { useState } from "react";
import axios from "axios";
function Signup() {
    const [user , setUser] = useState({
      username:'',
      email:'',
      password:''
    })

    const handelFormChange = (e)=>{
        setUser({
          ...user,
          [e.target.name]:e.target.value
        })
    }


    // sending the data to the backend for registration
    const handelUserRegister = async()=>{

      console.log(user)

      try {
        let resp = await axios.post('http://localhost:3001/admin/signup',
          user
        )
          console.log(resp)
      } catch (error) {
        console.log(error);
      }

    }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[30rem] h-[25rem] border-2   rounded-lg  p-20 flex flex-col gap-2  items-center justify-center ">
        {/* Username input */}
      <h1 className="self-start font-bold text-xl  underline text-blue-600 underline-offset-3">Signup</h1>

          <div className="flex w-full flex-col gap-2  ">
            <label className="text-lg text-neutral-600" htmlFor="username">
              Username
            </label>
            <input
              className="px-2 py-2 outline-none bg-neutral-200"
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
              className="text-lg text-neutral-600 mustField  after:text-gray-600"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="px-2 py-2 required:border-red-500 outline-none bg-neutral-200"
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
              className="text-lg text-neutral-600 mustField"
              htmlFor="username"
            >
              Password
            </label>
            <input
              className="px-2 py-2 outline-none bg-neutral-200"
              type="password"
              required
              value={user.password}
              onChange={handelFormChange}
              placeholder="Enter your password..."
              name="password"
            />
          </div>

          {/* submit button */}
          <div className="self-end">
            <button onClick={handelUserRegister} className="btn">Sign Up</button>
          </div>
          
      </div>
    </div>
  );
}

export default Signup;
