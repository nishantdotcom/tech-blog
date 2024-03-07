import React from "react";
import { MdNoteAdd } from "react-icons/md";
function TextEditor() {
  return (
    <div className=" border border-gray-900 bg-gray-800  h-[100%]  rounded-xl">
      <div className=" flex justify-start  gap-x-4 rounded-t-xl text-white bg-gray-900 p-1 ">
        <div className=" flex justify-center gap-x-1 cursor-pointer hover:bg-gray-700 rounded-lg pl-1 pr-1 pt-0.5 pb-0.5">
          <div>
            <div className=" ">
              <MdNoteAdd size={22} className="text-sky-500" />
            </div>
          </div>
          <div className=" text-sm pt-0.5 font-semibold">Add Note</div>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
