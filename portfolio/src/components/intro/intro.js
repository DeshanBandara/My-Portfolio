import React from 'react'
import './intro.css'
import bg from '../../assest/image.JPG'
import btnImg from '../../assest/hire_me.png'
import { Link } from 'react-scroll' //Link to a location


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Deshan Bandara</span> <br /> Full Stack Developer </span>
            <p className='introPara'>I am a skilled Full-Stack Developer in creating <br />visually appealing and user friendly applications.</p>
            <Link><button className='btn'><img src={ btnImg } className='btnImg' alt='Hire me' /> Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg' />
    </section>
  )
}

export default Intro