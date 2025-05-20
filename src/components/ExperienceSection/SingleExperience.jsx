import React from 'react'

export default function SingleExperience({experiences}) {
  return (
    <div className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-sky border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-sky'>{experiences.job}</p>
      <p className='text-white'>{experiences.company}</p>
      <p className='text-lightGrey'>{experiences.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experiences.description.map((resp,i)=>{
        return <li key={i}>{resp}</li>
      })}</ul>
    </div>
  )
}
