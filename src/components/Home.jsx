import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center text-slate-400 m-4 text-2xl  font-semibold">
        Try Different Responsive Card Designs
      </div>
      <div className=" flex justify-center gap-x-4 ">
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/test");
            }}
          >
            1
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/card2");
            }}
          >
            2
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/card3");
            }}
          >
            3
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/card4");
            }}
          >
            4
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/card5");
            }}
          >
            5
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/card6");
            }}
          >
            6
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/card7");
            }}
          >
            7
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/reset-password");
            }}
          >
            8
          </button>
        </div>
        <div>
          <button
            className="text-blue-400"
            onClick={() => {
              navigate("/question");
            }}
          >
            9
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
