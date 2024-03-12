
import { useState } from "react";
import pic from "../../assets/pic.jpg"
import { FaExternalLinkAlt } from "react-icons/fa";
function EditProfile() {
  const [show,setshow]=useState(false);
  function handleEditName()
  {
    setshow(true);
  }
  return (
    <div>
      <div className=" " >
      <div className=" bg-slate-900" >
        <div  className="p-10  flex justify-center" ><img src={pic} className="h-40 w-40 rounded-2xl border-8"/></div>

        <div className=" text-white  p-2   flex justify-center ">
          <div>
          <div className=" text-lg font-semibold  flex gap-x-4" >
          <div>
          Nishant kumar 
          </div>
          <div className="pt-0.5">
          <FaExternalLinkAlt className="text-blue-500 cursor-pointer"/>
          </div>
          </div>
          <div className="text-sm text-gray-500">Leetcode id : rango_</div>
          </div>
        </div>
      </div>
      <div className="h-[70%]">
      

        <div className=" flex justify-center items-center  pb-20">
         <div className="w-full md:w-1/2 border border-slate-400 p-2  rounded-b-xl ">  
        <div className="">
          <div className=" text-md text-slate-600 font-semibold">
          Basic info
          </div>
          <div className=" flex justify-between">
            
              {
                show  ? (<>
                <div className="  md:flex  gap-x-10">
                  <div className="p-1"> Name</div>
                  <div>
                  <input className="border border-black rounded-md "/>
                </div>
                <div  className="">
                <button onClick={()=>{
                  setshow(false)
                }} className="bg-slate-400 p-2 rounded-lg mr-2"> cancel </button>
                 <button className="bg-blue-400 p-2 rounded-lg  ml-2" >  Submit</button>
                </div>
                </div>
                </>):(<>
                  <div className="  md:flex  gap-x-10">
                  <div className="p-1"> Name</div>
                <div className="p-1 text-slate-400" > Nishant</div>
              </div>
                <div className="p-1 text-blue-600 cursor-pointer" onClick={handleEditName}>Edit</div>
                
                
                </>)
              }
          </div>
          <hr className="m-2"/>
        </div>
          
          <div className=" flex justify-between">
              <div className="  md:flex gap-x-10">
              <div className="p-1"> Gender</div>
                <div className="p-1 text-slate-400" > Male</div>
              </div>
                <div className="p-1 text-blue-600 cursor-pointer">Edit</div>
            </div>
            <hr className="m-2"/>

            
          <div className=" flex justify-between">
              <div className="  md:flex  gap-x-10">
              <div className="p-1"> Location</div>
                <div className="p-1 text-slate-400" > Bihar</div>
              </div>
                <div className="p-1 text-blue-600 cursor-pointer">Edit</div>
            </div>
            <hr className="m-2"/>
            
          <div className=" flex justify-between">
              <div className="  md:flex  gap-x-10">
              <div className="p-1"> Birthday</div>
                <div className="p-1 text-slate-400" > 13/01/2000</div>
              </div>
                <div className="p-1 text-blue-600 cursor-pointer">Edit</div>
            </div>

            <hr className="m-2"/>
            <div className=" flex justify-between ">
              <div className="  md:flex  gap-x-10">
              <div className="p-1"> Summary</div>
                <div className="p-1 text-slate-400" >hii guys.......</div>
              </div>
                <div className="p-1 text-blue-600 cursor-pointer">Edit</div>
            </div>

            <hr className="m-2"/>
            <div className=" flex justify-between ">
              <div className="  md:flex  gap-x-10">
              <div className="p-1"> College</div>
                <div className="p-1 text-slate-400" >IIIT sonepat</div>
              </div>
                <div className="p-1 text-blue-600 cursor-pointer">Edit</div>
            </div>


          






          </div>

          
        </div>


      
      </div>

      </div>
     
      
      </div>
  )
}

export default EditProfile