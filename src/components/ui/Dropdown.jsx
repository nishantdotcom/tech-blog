import React, { useState } from "react";

function Dropdown({ setshow }) {
  const [gender, setGender] = useState("Female");
  function handleSelectItem(event) {
    console.log(event.target.value);
    setGender(event.target.value);
  }
  function handleSubmit() {
    console.log("api call from gender");
    setshow(false);
  }
  return (
    <div>
      <div>
        <select
          className="p-1 border border-gray-400  rounded-lg"
          onChange={(event) => {
            handleSelectItem(event);
          }}
          value={gender}
        >
          <option value="">Select option..</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
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
  );
}

export default Dropdown;
