
import pic from "../../assets/pic.jpg"
import { CiLocationOn } from "react-icons/ci";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
function SideProfile() {
  return (
    <div className="text-white  rounded-lg shadow-inner  p-4 bg-gray-800"  >
      <div className=" flex justify-start gap-x-4">
        <div>
          <img src={pic} className="h-24 w-24 rounded-xl" ></img>
        </div>
        <div>
        <div className="text-xl font-semibold ">Nishant Kumar</div>
        <div className="text-slate-400">rango_</div>
        <div className=" pt-5 flex justify-start gap-x-2">
          <div className=" text-xl ">Rank</div>
          <div className="text-xl font-semibold ">12345</div>
          </div>
        </div>
       
      </div>
    <div className="mt-4  flex justify-center text-[#2CBB5D] text-lg p-2 rounded-lg bg-[#2CBB5D1F] cursor-pointer">
      Edit Profile
    </div>
    <div className=" mt-4">

      <div className=" flex justify-start gap-x-4 text-slate-300 pt-4" >
        <div className=" ">
          <div><CiLocationOn size={20}/></div>
        </div>
        <div className=" pb-1 text-lg">India</div>
      </div> 
      <div className=" flex justify-start gap-x-4 text-slate-300 pt-2" >
        <div className=" ">
          <div><PiGraduationCapFill size={20}/></div>
        </div>
        <div className=" pb-1 text-lg">IIIT Sonepat</div>
      </div> 
      <div className=" pt-4">
      <hr className=" text-slate-300"/>
      </div>
      <div className=" pt-4">
        <div className="  text-lg font-semibold">Community Stats</div>

      </div>
      <div className=" flex justify-start gap-x-4 pt-4">
        <div>
          <div><FaEye size={18} className=" text-blue-600"/></div>
        </div>
        <div className="flex justify-start gap-x-2">
          <div className=" text-slate-400 text-sm">Views</div>
          <div className=" text-sm">1.2K</div>
        </div>
      </div>
      <div className=" flex justify-start gap-x-4 pt-4">
        <div>
          <div><FaRegSquareCheck size={18} className=" text-blue-600"/></div>
        </div>
        <div className="flex justify-start gap-x-2">
          <div className=" text-slate-400 text-sm">Submissions</div>
          <div className="text-sm">1.2K</div>
        </div>
      </div>
      
      <div className=" flex justify-start gap-x-4 pt-4">
        <div>
          <div><IoChatbubbles size={18} className=" text-green-600"/></div>
        </div>
        <div className="flex justify-start gap-x-2">
          <div className=" text-slate-400 text-sm">Discuss</div>
          <div className="text-sm">0</div>
        </div>
      </div>
      <div className=" flex justify-start gap-x-4 pt-4">
        <div>
          <div><FaStar size={18} className=" text-yellow-400"/></div>
        </div>
        <div className="flex justify-start gap-x-2">
          <div className=" text-slate-400 text-sm">Reputations</div>
          <div className="text-sm">1.2K</div>
        </div>
      </div>
    </div>
    <div className=" pt-4">
      <hr className=" text-slate-300"/>
      </div>
      <div className=" pt-4">
        <div className="  text-lg font-semibold"> Topic Covered</div>
    </div>
    <div className="mt-4   gap-y-4">
    <div className=" pt-2 flex gap-x-1">
    <div className="bg-slate-700   inline-block pl-2 pr-2 pt-1 pb-1 text-sm text-slate-400 rounded-xl">Computer Network</div>
    <div className=" text-sm text-slate-400 pt-1">x12</div>
    </div>
    <div  className=" pt-2 flex gap-x-1" >
    <div className="bg-slate-700   inline-block pl-2 pr-2 pt-1 pb-1 text-sm  text-slate-400 rounded-xl">Operating System</div>
    <div className=" text-sm text-slate-400 pt-1">x12</div>
    </div>
    <div  className=" pt-2  flex gap-x-1" >
    <div className="bg-slate-700   inline-block pl-2 pr-2 pt-1 pb-1 text-sm r text-slate-400  rounded-xl">Digital Logic</div>
    <div className=" text-sm text-slate-400 pt-1">x12</div>
    </div>
      
    </div>


    </div>
  )
}

export default SideProfile