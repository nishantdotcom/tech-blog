import React from "react";
import pic from "../../assets/pic.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Card3() {
  return (
    <div className="h-[300px] w-[300px] bg-slate-100 rounded-2xl shadow-2xl ">
      <div className="h-[50%] ">
        <div className=" flex justify-center">
          <img
            src={pic}
            className="h-[110px] w-[110px] rounded-full m-4 border-2 border-red-600 p-1"
          ></img>
        </div>
      </div>
      <div className="h-[50%] flex-row">
        <div className=" flex justify-center font-semibold text-xl ">
          Nishant Kumar
        </div>
        <div className=" flex justify-center font-semibold text-xl text-red-400 pt-4 ">
          Web Designer
        </div>
        <div className="flex justify-center gap-x-4 pt-6">
          <div className="bg-red-500 rounded-full p-2">
            <FaFacebookF className="text-slate-200" />
          </div>
          <div className="bg-red-500 rounded-full p-2">
            <FaTwitter className="text-slate-200" />
          </div>
          <div className="bg-red-500 rounded-full p-2">
            <FaGithub className="text-slate-200" />
          </div>
          <div className="bg-red-500 rounded-full p-2">
            <FaInstagram className="text-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
