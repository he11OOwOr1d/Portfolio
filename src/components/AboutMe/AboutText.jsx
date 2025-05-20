import React from 'react'

export default function AboutText() {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-royalblue mb-10'>About Me</h2>
      <p className='text-white'>I am a student from NST and Risihood University pursuing Btech in CS 
        and AI, Love to play and watch Cricket</p>
      <button className='border border-sky rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-royalblue transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white'>My Projects</button>
    </div>
  )
}
