import React from 'react'
import Ellipse from '../../assets/Images/Ellipse1.svg'

const ProfileIcon = () => {
  return (
    // <div className="w-[39px] h-[39px] ">
    //   <img
    //     className="flex w-[39px] h-[39px] top-0 left-0 "
    //     alt="Profile"
    //     src={Ellipse}
    //   />
    // </div>
    <div className="flex items-center gap-3 p-2">
      <img
        src={Ellipse}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-lg font-medium text-gray-600">Nusrat</span>
    </div>
  )
}

export default ProfileIcon