import React, { useState } from "react";

function Birthday({ setshow }) {
  const [date, setdate] = useState("2024-03-05"); //yyy:dd:mm
  function handleChange(event) {
    console.log(event.target.value);
    setdate(event.target.value);
  }
  function handleSubmit() {
    console.log(date, "date");
    console.log("api call");
    setshow(false);
  }

  return (
    <div>
      <div>
        <input
          type="date"
          className=" border border-gray-400 rounded-lg p-2"
          onChange={(event) => {
            handleChange(event);
          }}
          value={date}
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

export default Birthday;
