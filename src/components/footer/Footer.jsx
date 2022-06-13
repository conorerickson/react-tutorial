import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='#home' className='footer__logo'>ERICKSON</a>
      
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><BsFacebook /></a>
        <a href='https://instagram.com'><AiOutlineInstagram /></a>
        <a href='https://twitter.com'><FiTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; CONOR ERICKSON. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer