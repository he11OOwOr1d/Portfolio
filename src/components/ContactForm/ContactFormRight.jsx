import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
export default function ContactFormRight() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src='/images/email.png' alt='contact-me' className='max-w-[300px]'></img>
      <ContactInfo/>
      <ContactSocial/> 
    </div>
  )
}
