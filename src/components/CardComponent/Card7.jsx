import React from "react";
import { SiLeetcode } from "react-icons/si";
import { ImGoogle3 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Card7() {
  return (
    <div className="flex justify-center max-h-max items-center  bg-slate-200">
      <div className="w-96 bg-white m-4 p-6 rounded-xl ">
        <div className=" flex justify-center pt-4">
          <div>
            <SiLeetcode size={60} />
          </div>
        </div>
        <div className="    flex justify-center m-6 text-2xl font-semibold ">
          LeetCode
        </div>
        <div className=" m-4">
          <input
            className=" border border-slate-400 p-2 pl-6 w-[100%] rounded-xl shadow-inner focus:border-yellow-500 focus:outline-none"
            placeholder="Username "
          />
        </div>
        <div className=" m-4">
          <input
            className=" border border-slate-400 p-2 pl-6 w-[100%] rounded-xl shadow-inner focus:border-yellow-500 focus:outline-none"
            placeholder="Password "
          />
        </div>
        <div className=" m-4">
          <input
            className=" border border-slate-400 p-2 pl-6 w-[100%] rounded-xl shadow-inner focus:border-yellow-500 focus:outline-none"
            placeholder="Confirm Password "
          />
        </div>
        <div className=" m-4">
          <input
            className=" border border-slate-400 p-2 pl-6 w-[100%] rounded-xl shadow-inner focus:border-yellow-500 focus:outline-none"
            placeholder="E-mail address"
          />
        </div>
        <div className=" flex justify-around  gap-x-10  m-4">
          <div className="p-2  font-semibold "> Enter Captcha</div>
          <div className="p-2 font-semibold ">1234</div>
        </div>
        <div className="  flex justify-center m-4">
          <button className=" w-[100%]  bg-slate-500 p-2 rounded-xl text-white hover:bg-gradient-to-r from-slate-400 via-slate-600 transition ">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center gap-x-2 p-2">
          <div className="text-slate-400 text-sm">Have an account? </div>
          <div className="text-blue-600 text-sm cursor-pointer">Sign In</div>
        </div>
        <div className=" text-slate-400 text-sm flex justify-center p-6">
          or you can sign with{" "}
        </div>
        <div className=" flex justify-center gap-x-4 pb-4">
          <div className="cursor-pointer">
            <ImGoogle3
              size={25}
              className="text-slate-400 hover:text-red-500"
            />
          </div>
          <div className="cursor-pointer">
            <FaGithub size={25} className="text-slate-400 hover:text-black" />
          </div>
          <div className="cursor-pointer">
            <FaFacebook
              size={25}
              className="text-slate-400 hover:text-blue-700"
            />
          </div>
          <div className="cursor-pointer">
            <FaLinkedin
              size={25}
              className="text-slate-400 hover:text-blue-500 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card7;
