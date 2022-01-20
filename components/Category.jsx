import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const Category = ({ title, tagLine }) => {
  return (
    <div className="m-4">
      <div className="flex justify-between items-center mt-10">
        <span>
          <h2>{title}</h2>
          <p>{tagLine}</p>
        </span>
        <span className="flex">
          <BiChevronLeft size={"2em"} color="#d8dadf" />
          <BiChevronRight size={"2em"} />
        </span>
      </div>
    </div>
  );
};

export default Category;
