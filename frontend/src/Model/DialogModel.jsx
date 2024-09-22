import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

function DialogModel({ setDialogModelShow }) {
  const { user , setIsAuth } = useContext(AuthContext);

  console.log(user);

  const [isShow, setIsShow] = useState(false);
  const handelOutsideClick = (event) => {
    if (event.target.classList.contains("user-dialogModel")) {
      setIsShow(true);
      setDialogModelShow(false);
    }
  };

  const handelUserLogOut = ()=>{
    localStorage.removeItem('user');
    setIsAuth(false);
    setIsShow(true)
  }
  if (isShow) return null;
  return (
    <div
      onClick={handelOutsideClick}
      className="inset-0 fixed flex justify-end items-start mt-12 mr-10  user-dialogModel text-white z-20"
    >
      <div className="bg-[#7d57e6] py-4 flex flex-col gap-4 px-4 mb-4 rounded-md">
        <div className="flex gap-6 border-b border-gray-800 py-4">
          {/* Lets put the image */}
          <h1 className="w-8 flex justify-center items-center h-8 text-md bg-neutral-400 rounded-full">
            CM
          </h1>

          <div>
            <h1 className="text-[#1A2130] font-semibold">
              Good morning , {user.username}
            </h1>
            <h2 className="text-neutral-700 text-sm">{user.role}</h2>
          </div>
        </div>

        <div>
          <h1>Email</h1>
          <p>{user.email}</p>
        </div>

        <button onClick={handelUserLogOut} className="bg-neutral-500 py-2 rounded-md">Logout</button>
      </div>
    </div>
  );
}

export default DialogModel;
