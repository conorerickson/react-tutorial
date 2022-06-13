import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href='mailto:conore21@gmail.com' target='_blank' rel="noreferrer">Send an Email!</a>
          </article>
        </div>

        <div className='contact__options'>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href='https://m.me/conor.erickson.3' target='_blank' rel="noreferrer">Message Me!</a>
          </article>
        </div>

        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/conor-erickson/' target='_blank' rel="noreferrer">Message Me!</a>
          </article>
        </div>

        {/* END OF CONTACT INFO */}

      </div>
    </section>
  )
}

export default Contact