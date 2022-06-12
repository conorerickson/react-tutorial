import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section className='testimonial'>
      <h5>Review's From Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR1} alt='PLACEHOLDER' />
          </div>
            <h5 className='client__name'>PLACEHOLDER NAME</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum hic reprehenderit soluta magni amet, eaque laudantium nobis molestias impedit?</small>
        </article>
      </div>

      
      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR2} alt='PLACEHOLDER' />
          </div>
            <h5 className='client__name'>PLACEHOLDER NAME</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum hic reprehenderit soluta magni amet, eaque laudantium nobis molestias impedit?</small>
        </article>
      </div>
      
      
      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR3} alt='PLACEHOLDER' />
          </div>
            <h5 className='client__name'>PLACEHOLDER NAME</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum hic reprehenderit soluta magni amet, eaque laudantium nobis molestias impedit?</small>
        </article>
      </div>
      
      
      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVATAR4} alt='PLACEHOLDER' />
          </div>
            <h5 className='client__name'>PLACEHOLDER NAME</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum hic reprehenderit soluta magni amet, eaque laudantium nobis molestias impedit?</small>
        </article>
      </div>
      
    </section>
  )
}

export default Testimonials