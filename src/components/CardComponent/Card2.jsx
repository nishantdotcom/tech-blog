import React from "react";
import pic from "../../assets/pic.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Card2() {
  return (
    <div className="h-[400px] w-[250px] shadow-2xl  rounded-2xl">
      <div className="h-[40%]  rounded-t-2xl bg-purple-600 flex justify-center ">
        <div className="   w-[80%] flex justify-center  pl-12 pt-[50px] ">
          <div className="border-y-4 border-purple-600">
            <img
              src={pic}
              className="h-[140px] w-[140px] rounded-full  border-4 border-white "
            ></img>
          </div>
        </div>
        <div className="  w-[20%]  pt-2  ">
          <div className="flex justify-center pt-6">
            <FaFacebookF className=" text-slate-300 " />
          </div>
          <div className="flex justify-center pt-6">
            <FaTwitter className=" text-slate-300 " />
          </div>
          <div className="flex justify-center pt-6">
            <FaGithub className=" text-slate-300 " />
          </div>
        </div>
      </div>
      <div>
        <div className="h-[60%] rounded-xl pt-10">
          <div className="   flex justify-center font-semibold text-xl">
            Nishant Kumar
          </div>
          <div className=" flex justify-center m-4 "> App Developer</div>
          <div className=" flex justify-center m-4 ">
            <div className=" flex justify-center gap-x-2">
              <div>
                <FaStar className="text-purple-600" />
              </div>
              <div>
                <FaStar className="text-purple-600" />
              </div>
              <div>
                <FaStar className="text-purple-600" />
              </div>
              <div>
                <FaRegStar className="text-purple-600" />
              </div>
              <div>
                <FaRegStar
                  className="
                  text-purple-600"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-around pt-4">
            <div>
              <button className="p-2 bg-purple-600 rounded-2xl text-white">
                {" "}
                About Me
              </button>
            </div>
            <div>
              <button className=" p-2 bg-purple-600 rounded-2xl text-white ">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
