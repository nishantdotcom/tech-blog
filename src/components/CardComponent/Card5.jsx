import React from "react";
import { SiNike } from "react-icons/si";
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import shoes from "../../assets/shoesrem.png";
import { TbCircleFilled } from "react-icons/tb";

function Card5() {
  return (
    <div class="w-[320px] max-h-90 bg-white shadow-2xl rounded-2xl overflow-hidden m-10">
      <div class="p-4">
        <div className="flex justify-around  pt-2 gap-x-40">
          <div className="">
            <SiNike size={30} />
          </div>

          <div className="">
            <CiShoppingCart size={30} />
          </div>
        </div>
        <div className=" flex justify-center ">
          <img src={shoes} className="w-48 h-48 scale-150 "></img>
        </div>
        <div className=" pb-2 text-2xl font-medium">ADDIDAS GAZE ZX</div>
        <div className=" font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          reiciendis excepturi facilis option.
        </div>
        <div className="pt-2 flex gap-x-2">
          <div>
            <FaStar className="text-yellow-400" />
          </div>
          <div>
            <FaStar className="text-yellow-400" />
          </div>
          <div>
            <FaStar className="text-yellow-400" />
          </div>
          <div>
            <FaStar className="text-yellow-400" />
          </div>
          <div>
            <CiStar />
          </div>
        </div>
        <div className=" flex justify-between  pt-2">
          <div className=" flex gap-x-2 pt-2">
            <div className="pt-2 text-black   font-medium">Color</div>
            <div className="  flex">
              <div className=" border border-pink-400   rounded-full m-2 ">
                <TbCircleFilled size={22} className="text-pink-400 p-1 " />
              </div>
              <div className=" border border-blue-600 rounded-full m-2 ">
                <TbCircleFilled size={22} className="text-blue-600 p-1" />
              </div>
              <div className=" border border-yellow-400 rounded-full m-2 ">
                <TbCircleFilled size={22} className="text-yellow-400 p-1" />
              </div>
            </div>
          </div>
          <div className="pt-1 border ">
            <div className=" flex justify-end text-xl font-semibold text-slate-400">
              &#36; 9.00
            </div>
            <div className=" flex justify-end text-xs text-slate-400 border">
              Nine Doller only.
            </div>
          </div>
        </div>
        <div className="pt-10 flex justify-center">
          <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white text-lg  font-semibold pt-2 pb-2 pl-14 pr-14 rounded-2xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card5;
