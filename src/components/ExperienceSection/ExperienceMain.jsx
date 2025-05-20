import React from 'react'
import ExperienceText from './ExperienceText.jsx'
import ExperienceTop from './ExperienceTop.jsx'
import AllExperience from './AllExperience.jsx'
export default function ExperienceMain() {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>
      <ExperienceText/>
      <ExperienceTop/>
      <div className='w-full h-1 mt-4 bg-lightCyan lg:block sm:hidden'></div>
      <AllExperience/>
    </div>
  )
}
