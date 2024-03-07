import React from "react";
import Problems from "./CardComponent/Problems";
import TextEditor from "./CardComponent/TextEditor";
import { SiLeetcode } from "react-icons/si";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

function Question() {
  return (
    <div>
      <div className=" flex justify-between bg-gray-900     sticky top-0 z-50    ">
        <div className="  flex justify-start gap-x-4 ">
          <div className="m-4">
            <SiLeetcode size={30} className="text-white" />
          </div>
          <div className=" flex m-4 gap-x-6 ">
            <div className="  hover:bg-slate-600  rounded-lg duration-0 hover:trasition hover:duration-1000  relative inline-block   ">
              <FaChevronLeft
                size={30}
                className="p-1 text-white"
                onMouseOver={(e) => {
                  e.target.nextElementSibling.style.display = "block";
                }}
                onMouseOut={(e) => {
                  e.target.nextElementSibling.style.display = "none";
                }}
              />
              <div className="absolute hidden text-xs  bg-slate-600 border border-black text-white p-1 rounded top-10 left-1/2  transform -translate-x-1/2 whitespace-nowrap">
                Prev Question
              </div>
            </div>
            <div className="hover:bg-slate-600  rounded-lg duration-0 hover:trasition hover:duration-1000  relative inline-block ">
              <FaChevronRight
                size={30}
                className="p-1 text-white "
                onMouseOver={(e) => {
                  e.target.nextElementSibling.style.display = "block";
                }}
                onMouseOut={(e) => {
                  e.target.nextElementSibling.style.display = "none";
                }}
              />
              <div className="absolute hidden text-xs bg-slate-600 border border-black text-white p-1 rounded top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Next Question
              </div>
            </div>
          </div>
        </div>
        <div className="  m-4">
          <IoSettingsOutline size={30} className=" text-white" />
        </div>
      </div>

      <div className=" sm:flex  bg-black gap-x-2  p-2 max-h-max ">
        <div className=" w-[100%] sm:w-[80%] ">
          <Problems />
        </div>
        <div className="  sm:w-[20%] ">
          <TextEditor />
        </div>
      </div>
    </div>
  );
}

export default Question;
