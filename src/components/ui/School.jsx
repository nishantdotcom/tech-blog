import React, { useState } from "react";

function School({ setshow }) {
  const [data, setData] = useState("xyz");

  function handleInput(event) {
    event.preventDefault();
    setData(event.target.value);
  }
  function handleSubmit() {
    console.log("api calls");
    console.log(data, "update data");
    setshow(false);
  }

  return (
    <div className="p-1">
      <div>
        <input
          className="border border-gray-400 rounded-lg p-2 "
          onChange={(event) => {
            handleInput(event);
          }}
          value={data}
        />
        <div className=" pt-2">
          <button
            className="bg-slate-400 p-2 rounded-lg mr-2 text-white font-semibold"
            onClick={() => {
              setshow(false);
            }}
          >
            cancel
          </button>
          <button
            className="bg-blue-400 p-2 rounded-lg  ml-2 text-white font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default School;
