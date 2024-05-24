import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import HomeLayout from "./Layout/HomeLayout";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}
