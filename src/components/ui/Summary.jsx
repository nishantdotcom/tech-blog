import React, { useState } from "react";

function Summary({ setshow }) {
  const [data, setdata] = useState("text");

  function setSummary(event) {
    event.preventDefault();
    setdata(event.target.value);
  }

  function handleSubmit() {
    console.log(data);
    console.log("api called");
    setshow(false);
  }
  return (
    <div className="p-1">
      <div>
        <textarea
          className="border border-gray-400  rounded-lg"
          onChange={(event) => {
            setSummary(event);
          }}
          value={data}
        />
      </div>
      <div className=" pt-2">
        <button
          onClick={() => {
            setshow(false);
          }}
          className="bg-slate-400 p-2 rounded-lg mr-2 text-white font-semibold"
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
  );
}

export default Summary;
