import React, { useState } from "react";

function Location({ setshow }) {
  const [location, setlocation] = useState("old location");

  function handleChange(event) {
    event.preventDefault();
    setlocation(event.target.value);
  }
  function handleSubmit() {
    console.log("api call");
    setshow(false);
  }

  return (
    <div>
      <div>
        <input
          className="border border-gray-400  rounded-lg "
          onChange={(event) => {
            handleChange(event);
          }}
          value={location}
        />
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

export default Location;
