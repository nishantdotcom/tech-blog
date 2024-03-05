import React from "react";

function PasswordReset() {
  return (
    <div className=" flex justify-center items-center h-screen bg-slate-200">
      <div className="w-96 p-6 m-4 bg-white rounded-xl">
        <div className=" flex justify-center text-xl font-semibold p-4 ">
          Password Reset
        </div>
        <hr className="p-1"></hr>
        <div className=" border border-yellow-400 p-4 m-3 bg-yellow-100 text-slate-500">
          Forgotten your password? Enter your e-mail address below, and we'll
          send you an e-mail allowing you to reset it.
        </div>
        <div className="m-3 pt-4">
          <input
            placeholder=" E-mail address "
            className="border w-[100%] h-10 rounded-xl pl-4 shadow-inner focus:border-yellow-500 focus:outline-none duration-0 hover:border-black hover:transition hover:duration-1000"
          />
        </div>
        <div className="m-3 pt-4">
          <button className="  bg-green-600 p-3 rounded-xl text-white font-semibold">
            Reset My Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
