import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft.jsx'
import ExperienceTopMiddle from './ExperienceTopMiddle.jsx'
import ExperienceTopRight from './ExperienceTopRight.jsx'
export default function ExperienceTop() {
  return (
    <div className='flex lg:flex-row sm:flex-col justify-center items-center'>
      <ExperienceTopLeft/>
      <ExperienceTopMiddle/>
      <ExperienceTopRight/>
    </div>
  )
}
