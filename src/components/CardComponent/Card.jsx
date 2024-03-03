import React from "react";
import pic from "../../assets/pic.jpg";
function Card() {
  return (
    <div className="h-[360px] w-[250px] rounded-2xl shadow-2xl ">
      <div className="h-[50%] bg-blue-600 rounded-2xl flex justify-center pt-5">
        <div className="h-[100px] w-[100px] rounded-full bg-white ">
          <img
            src={pic}
            className="rounded-full h-[100px] w-[100px] object-fill border border-8px border-white p-[2px] "
          ></img>
        </div>
      </div>
      <div className="h-[50%] bg-white rounded-2xl">
        <div className=" text-center mt-4 font-sans font-semibold">
          Nishant Kumar
        </div>
        <div className=" text-center mt-4 text-slate-600 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          reprehenderit
        </div>
        <div className="">
          <div className=" flex justify-center pt-4 ">
            <button className=" bg-blue-600 rounded-xl p-2 text-white font-semibold  border border-white border-4px">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
