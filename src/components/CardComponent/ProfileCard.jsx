import SubmissionHistory from "./SubmissionHistory"


function ProfileCard() {
  return (
    <div className=" text-white pt-4 ">

      <div className=" xl:flex justify-center sm: gap-x-4 ">
        <div className=" xl:w-[50%]  rounded-lg bg-gray-800">
          <div className="text-sm p-2 text-slate-400">
           Solved Problem
          </div>
          <div className=" flex justify-start m-4">
            <div className=" w-36 ">
            <div className="  pt-4">
              <div className=" border-4 border-slate-400 rounded-full p-8 sm:p-8 m-4  font-bold " >756 
              <div className="text-xs">Solved</div>
            </div>
            </div>
            </div>
            <div className=" w-[100%]  m-2 ">
              <div className=" ">
                <div className="flex justify-start gap-x-4">
                <div className=" text-slate-400 text-sm">Easy</div>
                  <div className=" flex justify-start gap-x-1">
                    <div className="">223</div>
                    <div className="text-sm text-slate-400">/ 456</div>
                  </div>
                </div>
               <div><hr className="w-full  border-[#2CBB5D40] border-4 rounded-lg" /></div>
              </div>
              <div className=" pt-4">
                <div className="flex justify-start gap-x-4">
                <div className=" text-slate-400 text-sm">Medium</div>
                  <div className=" flex justify-start gap-x-1">
                    <div className="">223</div>
                    <div className="text-sm text-slate-400">/ 456</div>
                  </div>
                </div>
               <div><hr className="w-full  border-[#FFC01E40] border-4 rounded-lg" /></div>
              </div>
              <div className=" pt-4">
                <div className="flex justify-start gap-x-4">
                <div className=" text-slate-400 text-sm">Hard</div>
                  <div className=" flex justify-start gap-x-1">
                    <div className="">223</div>
                    <div className="text-sm text-slate-400">/ 456</div>
                  </div>
                </div>
               <div><hr className="w-full  border-[#EF474340] border-4 rounded-lg" /></div>
              </div>
             
            
            </div>
              
            </div>
            
          
          
        </div>
        <div className=" xl:w-[50%]  rounded-lg bg-gray-800">
          
          <div className="text-sm p-2 text-slate-400">
           Badges Earned
          </div>
          <div className="pl-2 text-xl font-semibold">16</div>
        </div>
      </div>
      <SubmissionHistory/>
    </div>
  )
}

export default ProfileCard