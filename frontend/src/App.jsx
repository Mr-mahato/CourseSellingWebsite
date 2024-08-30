import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Signup from './component/Signup';
import SignIn from "./component/SignIn";
import { AuthProvider } from "./context/authContext";
import Missing from "./component/Missing";
import Profile from "./pages/Profile";
import Home from './pages/Home'
import Courses from "./component/Courses";
import CourseDetail from './component/CourseDetail'
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
        <Route path="/courses/:id" element={<CourseDetail/>}/>
        <Route path="/profile"  element={<Profile/>} />
        </Route>
        <Route path="*" element={<Missing/>} />
      </Routes>
      </AuthProvider>
    </div>
  );
}