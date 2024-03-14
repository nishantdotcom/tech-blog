import React, { useState } from "react";

function Input({ setshow }) {
  console.log("input render");
  const [name, setName] = useState("nishant");

  function handleChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }
  function handleNameSubmit() {
    console.log("api call");
    setshow(false);
  }
  return (
    <div>
      <div>
        <input
          className="border border-gray-400 rounded-md  "
          value={name}
          onChange={(event) => {
            handleChange(event);
          }}
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
          onClick={handleNameSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Input;
