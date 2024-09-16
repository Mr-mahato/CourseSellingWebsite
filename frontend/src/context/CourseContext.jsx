import { createContext, useEffect, useState } from "react";
import api from "../Utils/ApiBaseurl";
export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const resp = await api.get("/admin/courses");
        setCourse(resp.data.course);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchCourse();
  }, []);
  return (
    <CourseContext.Provider value={{ course }}>
      {children}
    </CourseContext.Provider>
  );
};
