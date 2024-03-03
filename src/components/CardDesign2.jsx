import React from "react";

import Card2 from "./CardComponent/Card2";
function CardDesign2() {
  return (
    <div>
      <div className="  flex justify-center text-slate-400 m-4">
        2nd Card Design
      </div>
      <div className=" flex justify-center mt-40">
        <div className=" grid grid-cols-12 gap-y-10 sm:gap-x-10">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <Card2 />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <Card2 />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <Card2 />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDesign2;
