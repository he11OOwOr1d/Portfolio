import React from 'react'
import ExperienceInfo from './ExperienceInfo'

export default function ExperienceTopLeft() {
  return (
    <div className='flex flex-col w-[300px] gap-6'>
      <p className='text-blueSky font-bold uppercase text-3xl font-body text-center'>Since 2023</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='1' text='Year'/>
        <p className='font-bold text-6xl text-white'></p>
        <ExperienceInfo number='10' text='Websites'/>
      </div>
      <p className='text-center text-white'>With 1 year of experience in Dev</p>
    </div>
  )
}
