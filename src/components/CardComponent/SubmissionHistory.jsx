
import { FaTasks } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
function SubmissionHistory() {
  return (
    <div className=" rounded-lg mt-2 bg-gray-800">
        
        <div className=" flex justify-center sm:justify-start sm:gap-x-6 p-4 ">
            <div className=" font-semibold p-2 hover:bg-gray-500  hover:cursor-pointer rounded-lg hover:opacity-50 flex justify-start gap-x-2">
                <div>
                <div className=" pt-0.5">
                <FaTasks size={15}/>
                </div>
                </div>
                <div className=" text-sm">RecentAC</div>
            </div>
            <div className=" font-semibold p-2 rounded-lg hover:opacity-50 hover:bg-gray-500  hover:cursor-pointer flex justify-start gap-x-2" >
            
            <div>
                <div className=" pt-0.5">
                <IoChatbubblesSharp size={15}/>
                </div>
                </div>
                <div className=" text-sm"> Discuss</div>
            </div>
            <div className=" font-semibold p-2 rounded-lg hover:opacity-50 hover:bg-gray-500  hover:cursor-pointer flex justify-start gap-x-2"> 
            <div>
                <div className=" pt-0.5">
                <BiTask size={15}/>
                </div>
                </div>
                <div className=" text-sm"> Solution</div>
            </div>
        </div>
    </div>
  )
}

export default SubmissionHistory