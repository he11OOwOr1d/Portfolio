import React from 'react'
import SingleSkill from './SingleSkill'
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
const skills = [{skill:'HTML',icon:FaHtml5},{skill:'CSS',icon:FaCss3},{skill:'JavaScript',icon:FaJsSquare},{skill:'React',icon:FaReact},{skill:'Node',icon:FaNodeJs},{skill:'Express',icon:SiExpress},{skill:'Github',icon:FaGithub}]

export default function AllSkillsSm() {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item,i)=>{
        return <div key={i} className='flex flex-col items-center'>
          {<item.icon className='text-7xl text-royalblue'/>}
          <p className='text-center mt-4 text-white'>{item.skill}</p>
          </div>
      })}
    </div>
  )
}
