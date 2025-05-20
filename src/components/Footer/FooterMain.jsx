import React from 'react'
import { Link } from 'react-scroll'
const Links = [
  {link: 'About Me', section:'about'},
  {link: 'Skills', section:'skills'},
  {link: 'Experience', section:'experience'},
  {link: 'Projects', section:'projects'},
  {link: 'Contact', section:'contact'}
]

export default function FooterMain() {
  return (
    <div className='px-4'>
      <div className='w-full h-[1px] bg-sky mt-24'></div>
      <div className='md:flex sm:hidden justify-between max-w-[1200px] mx-auto mt-4'>
        <p className='text-3xl text-white'>Nikhil Raj</p>
        <ul className='flex gap-4 text-white text-xl'>
          {Links.map((item,index)=>{
            return (
              <li key={index}>
                <Link to={item.section} smooth={true} spy={true} offset={-100} duration={500} className='hover:text-sky transition-all duration-500 cursor-pointer'>{item.link}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-white'> 2025 Nikhil Raj | All Rights Reserved</p>
    </div>
  )
}
