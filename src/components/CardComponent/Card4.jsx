import React from "react";
import pic from "../../assets/pic.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BiShare } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";

function Card4() {
  return (
    <div>
      <div className=" flex justify-center text-2xl font-semibold  text-slate-400 m-4">
        4th Card Design
      </div>
      <div className=" pt-4 flex justify-center">
        <div className=" h-[480px] w-[300px]  shadow-2xl rounded-2xl ">
          <div className="h-[40%] bg-blue-600 rounded-t-2xl">
            <div className=" flex justify-center p-20 ">
              <img
                src={pic}
                className="h-[120px] w-[120px] rounded-full border-2 border-blue-600 p-1 bg-white "
              />
            </div>
          </div>
          <div className="h-[60%] rounded-b-lg bg-slate-100  pt-6">
            <div className=" flex justify-center text-xl font-semibold ">
              Coding Lab
            </div>
            <div className=" flex justify-center m-2"> Coding & Blogging</div>
            <div className=" flex justify-center gap-x-4 m-6">
              <div className=" bg-blue-600 p-2 rounded-full">
                <FaFacebookF size={20} className="text-white" />
              </div>
              <div className="bg-black p-2 rounded-full">
                <FaGithub size={20} className=" text-white" />
              </div>
              <div className="bg-pink-600 p-2 rounded-full">
                <FaInstagram size={20} className=" text-white" />
              </div>
              <div className="bg-blue-300 p-2 rounded-full">
                <FaTwitter size={20} className=" text-white" />
              </div>
            </div>
            <div className="flex justify-around">
              <button className="bg-blue-600 rounded-xl p-3 text-white font-semibold">
                Subscribe
              </button>
              <button className="bg-blue-600 rounded-xl p-3 text-white font-semibold">
                Message
              </button>
            </div>
            <div className=" flex justify-center gap-x-2 m-6">
              <div className=" border-r border-black pr-4">
                <div className="flex justify-around gap-x-2">
                  <div className="pt-1">20k</div>
                  <div className="pt-1">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
              <div className=" border-r border-black  pr-4">
                <div className="flex justify-around gap-x-2">
                  <div className="pt-1">1k</div>
                  <div className="pt-1">
                    <BiShare size={20} />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-around gap-x-2">
                  <div className="p-1">1.2k</div>
                  <div className="pt-1">
                    <AiOutlineMessage size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
