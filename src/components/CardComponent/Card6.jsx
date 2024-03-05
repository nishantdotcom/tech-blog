import React from "react";
import { SiLeetcode } from "react-icons/si";
import { ImGoogle3 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Card6() {
  return (
    <div className=" flex justify-center items-center h-screen bg-slate-200">
      <div className=" w-96 p-6  bg-white rounded-xl m-4">
        <div className=" flex justify-center pt-10">
          <div>
            <SiLeetcode size={60} />
          </div>
        </div>
        <div className="    flex justify-center m-6 text-2xl font-semibold ">
          LeetCode
        </div>
        <div className=" m-4">
          <input
            className=" border w-[100%] h-10 rounded-xl pl-4 shadow-inner focus:border-yellow-500 focus:outline-none duration-0 hover:border-black hover:transition hover:duration-1000"
            placeholder="Username or E-mail "
          />
        </div>
        <div className=" m-4">
          <input
            className=" border w-[100%] h-10 rounded-xl pl-4 shadow-inner focus:border-yellow-500 focus:outline-none duration-0 hover:border-black hover:transition hover:duration-1000"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-around  gap-x-10  m-4">
          <div className="p-2  font-semibold "> Enter Captcha</div>
          <div className="p-2 font-semibold ">1234</div>
        </div>
        <div className="  flex justify-center m-4">
          <button className=" w-[100%] duration-0 bg-slate-500 p-2 rounded-xl text-white hover:bg-gradient-to-r from-slate-400 via-slate-600  hover:transtion hover:duration-1000 ">
            Sign In
          </button>
        </div>
        <div className=" flex  justify-between m-4">
          <div className=" text-sm text-slate-500 cursor-pointer ">
            Forget Password?
          </div>
          <div className=" text-sm text-slate-500 cursor-pointer ">Sign Up</div>
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

export default Card6;
