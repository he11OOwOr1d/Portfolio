import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';
export default function ContactInfo() {
  return (
    <div className='flex flex-col gap-4'>
      <SingleInfo text='4321nikhilraj@gmail.com' Image={MdOutlineEmail}/>
      <SingleInfo text='9316285926' Image={FiPhone}/>
      <SingleInfo text='Haryana, India' Image={IoLocationOutline}/>
    </div>
  )
}
