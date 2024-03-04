import React from "react";

function Home() {
  return (
    <div>
      <div className="flex justify-center text-slate-400 m-4 text-2xl  font-semibold">
        Try Different Responsive Card Designs
      </div>
      <div className="flex justify-center gap-x-4 ">
        <a href="/test" className="text-white bg-blue-500 rounded-full p-2">
          1
        </a>
        <a href="/card2" className="text-white bg-blue-500 rounded-full p-2">
          2{" "}
        </a>
        <a href="/card3" className="text-white bg-blue-500 rounded-full p-2">
          3
        </a>
        <a href="/card4" className="text-white bg-blue-500 rounded-full p-2">
          4
        </a>
        <a href="/card5" className="text-white bg-blue-500 rounded-full p-2">
          5
        </a>
      </div>
    </div>
  );
}

export default Home;
