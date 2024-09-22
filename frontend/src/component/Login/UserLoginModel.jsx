import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function UserLoginModel({setUserLoginModel}) {
  const [loginBtn, setLoginBtn] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleClickOutside = (event) => {
    
    if (event.target.classList.contains("modal-overlay")) {
      setIsModalVisible(false);
      setUserLoginModel(false);
    }
  };

  if (!isModalVisible) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-20 modal-overlay"
      onClick={handleClickOutside}
    >
      <div className="rounded-lg shadow-md flex flex-col gap-2 px-10 py-10 w-[30%] bg-neutral-100">
        <div className="text-center">
          <h1 className="text-3xl text-neutral-900 font-bold">Welcome to our Web</h1>
          <p className="text-neutral-700 font-semibold">Login or create an account</p>
        </div>

        <div className="flex w-[90%] mx-auto bg-neutral-300 rounded-md py-1 px-2">
          <h1 onClick={()=>setLoginBtn(true)} className={`loginModel ${loginBtn && 'bg-neutral-100 rounded-md '}`}>Login</h1>
          <h1 onClick={()=>setLoginBtn(false)} className={`loginModel ${!loginBtn && 'bg-neutral-100 rounded-md '}`}>Sign Up</h1>
        </div>

        
        {loginBtn ? <Login setUserLoginModel={setUserLoginModel}/> : <Signup setLoginBtn={setLoginBtn}/>}
      </div>
    </div>
  );
}

export default UserLoginModel;