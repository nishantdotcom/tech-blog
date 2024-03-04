import React from "react";
import Card3 from "./CardComponent/Card3";

function CardDesign3() {
  return (
    <div>
      <div className=" flex justify-center text-slate-400 m-4 text-2xl font-semibold">
        3rd Card Design
      </div>
      <div className="  flex justify-center mt-10 ">
        <div className=" grid grid-cols-12 gap-y-10 sm:gap-x-10  ">
          <div className=" col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3  ">
            <Card3 />
          </div>
          <div className=" col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3  ">
            <Card3 />
          </div>
          <div className=" col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3  ">
            <Card3 />
          </div>
          <div className=" col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3  ">
            <Card3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDesign3;
