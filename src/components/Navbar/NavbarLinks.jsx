import React from 'react'
import { Link } from 'react-scroll'
const Links = [
  {link: 'About Me', section:'about'},
  {link: 'Skills', section:'skills'},
  {link: 'Experience', section:'experience'},
  {link: 'Projects', section:'projects'},
  {link: 'Contact', section:'contact'}
]

const NavbarLinks = () => {
  return (
    <ul className='flex gap-6 font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-royalblue/30 backdrop-blur-lg lg:bg-black sm:w-full py-4'>
      {Links.map((item,index)=>{
        return (
          <li key={index} className='group'>
             <Link to={item.section} smooth={true} spy={true} offset={-100} duration={500}
             className='cursor-pointer hover:text-sky transition-all duration-500 font-body '>{item.link}</Link>
             <div className='mx-auto bg-sky w-0 group-hover:w-full h-[1px] transition-all duration-500'>

             </div>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLinks
