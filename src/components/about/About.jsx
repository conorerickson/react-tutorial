import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import {AiOutlineFolderAdd} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {ME} alt='PLACEHOLDER IMG' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years!</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>70+ Worldwide!</small>
            </article>

          <article className='about__card'>
              <AiOutlineFolderAdd className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects!</small>
            </article>
          </div>
          
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet aperiam perspiciatis. Possimus, incidunt magni, aut asperiores error esse cumque sunt consequuntur harum fugit vitae unde, maxime natus provident dolor!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>

          </div>
      </div>
    </section>
  )
}

export default About