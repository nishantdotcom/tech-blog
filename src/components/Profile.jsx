
import SideProfile from './CardComponent/SideProfile'
import ProfileCard from './CardComponent/ProfileCard'

function Profile() {
  return (
    <div className=" pl-20 pr-20 pt-2 pb-2 sm:flex  sm:gap-x-4 max-h-max bg-black">
    <div className=' sm:w-[30%]'>
    <SideProfile/>
    </div>
    <div className='sm:w-[70%]'>
    <ProfileCard/>
    </div>
    </div>
   
  )
}

export default Profile