import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import HomeLayout from "./Layout/HomeLayout";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/authContext";
import Missing from "./pages/Missing";
import Profile from "./pages/Profile";
import Home from './pages/Home'
import Courses from "./component/Courses";
import CreateCourse from "./pages/CreateCourse";
export default function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/profile"  element={<Profile/>} />
        </Route>
        <Route path="/create" element={<CreateCourse/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      </AuthProvider>
    </div>
  );
}
