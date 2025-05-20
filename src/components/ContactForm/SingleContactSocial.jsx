import React from 'react'

export default function SingleContactSocial({Icon, link}) {
  return (
    <div className='text-2xl h-12 w-12 border border-royalblue rounded-full p-3 flex items-center justify-center'>
      <a href={link} className='cursor-pointer'>
      {Icon && <Icon />}
      </a>
    </div>
  )
}
