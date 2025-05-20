import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

export default function Heromain() {
  return (
    <div className='pt-40 pb-16 relative'>
      {/* Smoke GIF Background for entire hero section */}
      <div className='absolute inset-0 -z-10 w-full h-full overflow-hidden'>
        <div
          className='w-full h-full bg-cover bg-left'
          style={{
            backgroundImage: 'url("/images/star.gif")',
            opacity: 0.7,
            filter: 'blur(5px)',
          }}
        />
      </div>
      
      <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4'>
        <HeroText/>
        <HeroImage/>
      </div>
    </div>
  )
}