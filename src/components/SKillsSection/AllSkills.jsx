import React from 'react'
import SingleSkill from './SingleSkill'
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
const skills = [{skill:'HTML',icon:FaHtml5},{skill:'CSS',icon:FaCss3},{skill:'JavaScript',icon:FaJsSquare},{skill:'React',icon:FaReact},{skill:'Node',icon:FaNodeJs},{skill:'Express',icon:SiExpress},{skill:'Github',icon:FaGithub}]

export default function AllSkills() {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item,i)=>{
          return <SingleSkill key={i} text={item.skill} imgSvg={<item.icon/>}/>
        })}
      </div>
    </div>
  )
}
