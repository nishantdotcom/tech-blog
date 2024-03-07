import React from "react";
import { MdOutlineDescription } from "react-icons/md";
import { HiMiniBeaker } from "react-icons/hi2";
import { BiSolidTimer } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
import { TbTargetArrow } from "react-icons/tb";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";

function Problems() {
  return (
    <div className="   border border-gray-900 h-[100%]   bg-gray-800  rounded-xl">
      <div className="flex justify-between rounded-t-xl text-white bg-gray-900 p-1 ">
        <div className=" flex justify-start  gap-x-4 ">
          <div className=" flex justify-center gap-x-1 cursor-pointer hover:bg-gray-700 rounded-lg pl-1 pr-1 pt-0.5 pb-0.5">
            <div>
              <div className=" ">
                <MdOutlineDescription size={22} className="text-sky-500" />
              </div>
            </div>
            <div className=" text-sm pt-0.5 font-semibold">Description</div>
          </div>
          <div className=" flex justify-center gap-x-1  cursor-pointer hover:bg-gray-700 rounded-lg pl-1 pr-1 pt-0.5 pb-0.5">
            <div className="">
              <div>
                <div>
                  <HiMiniBeaker size={22} className="text-yellow-500" />
                </div>
              </div>
            </div>
            <div className="text-sm pt-0.5 font-semibold">Solutions</div>
          </div>
          <div className=" flex justify-center gap-x-1  cursor-pointer hover:bg-gray-700 rounded-lg pl-1 pr-1 pt-0.5 pb-0.5">
            <div>
              <div className="pt-0.5">
                <BiSolidTimer size={22} className="text-sky-500" />
              </div>
            </div>
            <div className="text-sm pt-0.5 font-semibold">Submissions</div>
          </div>
        </div>
        <div className=" text-white ">
          <div className=" cursor-pointer hover:opacity-65 pl-1 pr-1 pt-0.5 pb-0.5 rounded-lg   ">
            <FaBookmark size={22} className=" text-yellow-400  " />
          </div>
        </div>
      </div>
      <div className="m-3 ">
        <div className=" text-white flex justify-start gap-x-4">
          <div className="text-2xl font-semibold">536.</div>
          <div className=" text-2xl font-semibold">Reverse a Linked List</div>
        </div>
      </div>
      <div className=" m-3 text-white flex justify-start  gap-x-4">
        <div className="bg-gray-700 p-1 rounded-lg text-green-400 text-sm">
          Easy
        </div>
        <div className="bg-gray-700 p-1 rounded-lg flex justify-center gap-x-1 cursor-pointer hover:opacity-70">
          <div className="pt-1">
            <div>
              <FiTag />
            </div>
          </div>
          <div className="text-sm pt-0.5">Tags</div>
        </div>
        <div className="bg-gray-700 p-1 rounded-lg flex justify-center gap-x-2">
          <div className="pt-1">
            <div>
              <TbTargetArrow className=" text-yellow-500" />
            </div>
          </div>
          <div className=" text-sm pt-0.5">Gate 2022</div>
        </div>
        <div className=" text-white text-sm bg-gray-700 rounded-lg p-1 ">
          NAT
        </div>
      </div>
      <div className=" pt-4 m-3 text-white  text-md leading-loose tracking-wide ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum
        fuga doloremque delectus reprehenderit animi, velit nemo, quas
        necessitatibus nihil corporis amet vitae possimus consectetur enim ad
        quis porro. Velit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsum neque perferendis inventore? Nemo, architecto est ipsam
        dolorum error sequi earum distinctio quibusdam necessitatibus voluptate
        ipsa ducimus tempore quis similique officia.
      </div>
      <div className="pt-4 m-3 text-white flex justify-center  border border-white p-4">
        Image Div
      </div>
      <div className="  m-3 pt-4 ">
        <div className="   flex justify-start  gap-x-3  cursor-pointer hover:opacity-65 ">
          <div className="  text-white       ">
            <div className=" text-center ">
              <div className="flex justify-center pt-2 ">
                <Bs1Circle size={30} />
              </div>
            </div>
          </div>
          <div className="   text-white  text-md leading-loose tracking-wide border rounded-lg p-2  ">
            Lorem ipsum dolor lorem
          </div>
        </div>
        <div className="   flex justify-start  gap-x-3 pt-4 cursor-pointer hover:opacity-65 ">
          <div className="  text-white       ">
            <div className=" text-center ">
              <div className="flex justify-center pt-2 ">
                <Bs2Circle size={30} />
              </div>
            </div>
          </div>
          <div className="  text-white  text-md leading-loose tracking-wide border rounded-lg p-2  ">
            Lorem ipsum dolor lorem
          </div>
        </div>
        <div className="   flex justify-start  gap-x-3 pt-4 cursor-pointer hover:opacity-65 ">
          <div className="  text-white       ">
            <div className=" text-center ">
              <div className="flex justify-center pt-2 ">
                <Bs3Circle size={30} />
              </div>
            </div>
          </div>
          <div className="   text-white  text-md leading-loose tracking-wide border rounded-lg p-2  ">
            Lorem ipsum dolor lorem
          </div>
        </div>
        <div className="   flex justify-start  gap-x-3 pt-4 cursor-pointer hover:opacity-65 ">
          <div className="  text-white       ">
            <div className=" text-center ">
              <div className="flex justify-center pt-2 ">
                <Bs4Circle size={30} />
              </div>
            </div>
          </div>
          <div className="   text-white  text-md leading-loose tracking-wide border rounded-lg p-2  ">
            Lorem ipsum dolor lorem
          </div>
        </div>

        <div className=" flex justify-center text-white pt-12 gap-x-10 ">
          <div className="border-2  text-lg font-semibold rounded-lg pl-5 pr-5 pt-1 pb-1 bg-green-600 hover:opacity-90 cursor-pointer">
            Submit
          </div>
          <div className="border-2 text-lg font-semibold rounded-lg pl-5 pr-5 pt-1 pb-1 bg-gray-600 hover:opacity-90 cursor-pointer">
            Reset
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problems;
