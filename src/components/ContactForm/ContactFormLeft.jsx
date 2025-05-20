import React from 'react'
import ContactForm from './ContactForm'

export default function ContactFormLeft() {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-black text-3xl mb-4'>Get In touch</h2>
        <p className='text-black'>Feel free to reach out to me to collab</p>
      </div>
      <ContactForm/>
    </div>
  )
}
