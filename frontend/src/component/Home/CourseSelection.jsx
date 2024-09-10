import React, { useEffect } from "react";

import CourseType from "../../pages/CourseType.json";

import { ImportContacts } from "@mui/icons-material";
function CourseSelection({ trackCarouselNum }) {
  

  const courseOptionElement = CourseType.map((val, ind) => {
    return (
      <div
        key={ind}
        className="flex shrink-0 w-[33%] px-2 box-border   flex-col justify-between gap-y-10 border rounded-md py-4"
        style={{ transform: `translateX(-${trackCarouselNum * 102}%)` }}
      >
        <div className="flex flex-col text-center justify-center items-center">
          <ImportContacts className="text-4xl h-[20px]" fontSize="xl2" />
          <h1 className="font-bold text-xl mt-10">{val.name}</h1>
          <p className="text-neutral-900 mt-4">
            Master {val.name} concepts and design.
          </p>
        </div>

        {/* 2nd section */}
        <div className="flex justify-between">
          <h1 className="self-center">3 week</h1>
          <button className="outline-2 border border-gray-300 rounded-md px-4 py-2">
            Learn More
          </button>
        </div>
      </div>
    );
  });
  return <div className="flex gap-2">{courseOptionElement}</div>;
}

export default CourseSelection;
