import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1}  alt='PLACEHOLDER' />
          </div>
          <h3>ITEM PLACEHOLDER</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2}  alt='PLACEHOLDER' />
          </div>
          <h3>ITEM PLACEHOLDER</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3}  alt='PLACEHOLDER' />
          </div>
          <h3>ITEM PLACEHOLDER</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4}  alt='PLACEHOLDER' />
          </div>
          <h3>ITEM PLACEHOLDER</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5}  alt='PLACEHOLDER' />
          </div>
          <h3>ITEM PLACEHOLDER</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6}  alt='PLACEHOLDER' />
          </div>
          <h3>ITEM PLACEHOLDER</h3>
        <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio