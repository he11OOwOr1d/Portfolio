import React from 'react'

export default function SingleSkill({imgSvg, text}) {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-sky h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-royalblue'>{imgSvg}</div>
        <p className='text-white font-body font-bold'>{text}</p>
      </div>
      <div className='w-[100px] h-[200px] absolute top-[50px] bg-orange -z-10'></div>
    </div>
  )
}
