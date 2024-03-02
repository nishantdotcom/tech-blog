import React from "react";
import Card from "./Card";

function Test() {
  return (
    <div className="">
      <div className="text-center text-slate-400   rounded-xl  m-4  ">
        Responsive Card Design 1
      </div>
      <div className="  flex justify-center ">
        <div className="  grid grid-cols-12  gap-y-20 sm:gap-x-10  ">
          <div className="  col-span-12  sm:col-span-6 md:col-span-6 lg:col-span-3 ">
            <Card />
          </div>
          <div className="col-span-12  sm:col-span-6 md:col-span-6  lg:col-span-3">
            <Card />
          </div>
          <div className="col-span-12  sm:col-span-6 md:col-span-6 lg:col-span-3  ">
            <Card />
          </div>
          <div className="col-span-12  sm:col-span-6 md:col-span-6 lg:col-span-3 ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
