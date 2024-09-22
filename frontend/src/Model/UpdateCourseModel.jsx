import React, { useState } from "react";
import axios from "axios";
import api from "../Utils/ApiBaseurl";

function UpdateCourseModel({ selectedCourse, setSelectedCourse }) {
  const [isVisible, setIsVisible] = useState(false);
  const [courseInfo, setCourseInfo] = useState(selectedCourse);
  const [file, setFile] = useState(null);

  const handelModelView = (e) => {
    if (e.target.classList.contains("updateCourse")) {
      setIsVisible(true);
    }
  };
  if (isVisible) return null;

  const handelCourseInfoChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo({
      ...courseInfo,
      [name]: value,
    });
  };

  const handelFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();
    console.log(courseInfo);
    const formData = new FormData();

    console.log(file);

    formData.append("file", file);
    formData.append("upload_preset", "upload_image");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgxknutrg/image/upload",
        formData
      );
      const cloud_upload_link = response.data.secure_url;
      console.log(cloud_upload_link);
      setCourseInfo({
        ...courseInfo,
        image_link: cloud_upload_link,
      });
      setSelectedCourse({
        ...courseInfo,
        image_link: cloud_upload_link,
      });

      const resp = await api.put(`/admin/updateCourse/${courseInfo._id}`, {
        ...courseInfo,
        image_link: cloud_upload_link,
      });
      console.log(resp);
      if (resp.status == 200) {
        alert("course updated");
      }
    } catch (error) {
      console.log(error.response);
      alert("course updationg failed!!");
    }
  };

  return (
    <div
      onClick={handelModelView}
      className="absolute inset-0 flex justify-center items-center min-h-screen mt-20 z-10 updateCourse"
    >
      {/* form container */}
      <div className="border px-10 py-5 rounded-lg bg-neutral-400">
        <h1 className="text-center mb-4">Course Update</h1>
        <form onSubmit={handelFormSubmit}>
          {/* title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="contactInput w-full"
              placeholder="Course Title"
              value={courseInfo.title}
              onChange={handelCourseInfoChange}
              name="title"
            />
          </div>
          {/* description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Course Description
            </label>
            <textarea
              rows={4}
              className="w-full contactInput"
              value={courseInfo.description}
              onChange={handelCourseInfoChange}
              placeholder="Course Description"
              name="description"
            />
          </div>
          {/* tutor */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tutor
            </label>
            <input
              className="contactInput w-full"
              type="text"
              placeholder="Tutor Name"
              onChange={handelCourseInfoChange}
              value={courseInfo.tutor}
              name="tutor"
            />
          </div>
          {/* price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              className="contactInput w-full"
              type="number"
              placeholder="Price"
              value={courseInfo.price}
              onChange={handelCourseInfoChange}
              name="price"
            />
          </div>
          {/* image upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image Upload
            </label>
            <input
              type="file"
              className="p-2 contactInput"
              name="image"
              onChange={handelFileChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCourseModel;
