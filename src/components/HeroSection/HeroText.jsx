import React from 'react'

export default function HeroText() {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <h2 className='lg:text-2xl sm:text-xl uppercase text-sky font-body'>Developer</h2>
      <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-white'>Nikhil Raj</h1>
      <p className='text-lg mt-4 text-white font-body font-bold'>A Student with a passion for learning</p>
    </div>
  )
}
