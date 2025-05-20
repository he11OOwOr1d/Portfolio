import React from 'react'
import SingleExperience from './SingleExperience.jsx'
import { FaArrowRight } from "react-icons/fa6"; 
const experiences = [
  {
    job: 'Software Engineer',
    company: 'Tech Company',
    date: 'Jan 2020 - Present',
    description: ['Developing and maintaining web applications using React and Node.js.',
      'Collaborating with cross-functional teams to define, design, and ship new features.',
    ],
  },
  {
    job: 'Frontend Developer',
    company: 'Web Solutions',
    date: 'Jun 2018 - Dec 2019',
    description: ['Worked on various frontend projects using HTML, CSS, and JavaScript.'
      , 'Participated in code reviews and contributed to team knowledge sharing.',
    ],
  }
]

export default function AllExperience() {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-center'>
      {experiences.map((experiences,ind)=>{
        return(
          <>
            <SingleExperience key={ind} experiences={experiences}/>
            {ind < 1 ? <FaArrowRight className='text-6xl text-sky lg:block sm:hidden'/> : ' '}
          </>
        )
      })}
    </div>
  )
}
