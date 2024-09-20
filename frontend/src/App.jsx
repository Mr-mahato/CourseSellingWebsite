import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import { AuthProvider } from "./context/authContext";
import { CourseProvider } from "./context/CourseContext.jsx";
import Missing from "./component/Missing";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetail from "./component/CourseDetail";
import Contact from "./pages/Contact/Contact.jsx";
export default function App() {
  return (
    <div>
      <CourseProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<Missing />} />
          </Routes>
        </AuthProvider>
      </CourseProvider>
    </div>
  );
}
