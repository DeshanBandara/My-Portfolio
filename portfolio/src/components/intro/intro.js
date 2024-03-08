import React from 'react'
import './intro.css'
import bg from '../../assest/image.JPG'


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
        </div>
        <img src={bg} alt="profile" className='bg' />
    </section>
  )
}

export default Intro