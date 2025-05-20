import React from 'react'
import ContactFormLeft from './ContactFormLeft'
import ContactFormRight from './ContactFormRight'

export default function ContactFormMain() {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
      <h2 className='text-6xl text-sky mb-10 text-center font-body font-bold'>Contact Me</h2>
      <div className='flex justify-between gap-24 bg-sky p-8 rounded-xl lg:flex-row sm:flex-col'>
        <ContactFormLeft/>
        <ContactFormRight/>
      </div>
    </div>
  )
}
