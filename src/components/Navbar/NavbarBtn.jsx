import React from 'react'
import { FaArrowTrendDown } from "react-icons/fa6";

const NavbarBtn = () => {
  return (
    <button className=' flex px-4 py-2 rounded-full text-xl font-body font-bold border-royalblue border items-center gap-1 bg-gradient-to-r from-royalblue to-sky hover:border-sky hover:scale-110 transition-all duration-500 hover:shadow-blueShadow'>
      Hire Me
      <div className='sm:hidden md:block'>
        <FaArrowTrendDown />
      </div>
      
    </button>
  )
}

export default NavbarBtn
