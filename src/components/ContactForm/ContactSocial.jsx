import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function ContactSocial() {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='#' Icon={FaGithub}/>
      <SingleContactSocial link='#' Icon={FaLinkedin}/>
      <SingleContactSocial link='#' Icon={SiLeetcode}/>
    </div>
  )
}
