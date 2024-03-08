import React from 'react'
import './skills.css'
import UIDesign from '../../assest/UIUX.png'
import WebDesign from '../../assest/Web_design.png'
import FrontEnd from '../../assest/frontend_develop.png'
import DataBase from '../../assest/database.png'
import AppDesign from '../../assest/app_design.png'
import Backend from '../../assest/backend_development.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
          I am a skilled full-stack developer with expertise in creating visually appealing and user-friendly websites. 
          I excel in frontend technologies such as HTML, CSS, and JavaScript, ensuring responsive design and intuitive user interfaces. 
          On the backend, I specialize in building robust server-side architectures using frameworks like Node.js and databases like MySQL. 
          With a keen eye for detail and a passion for delivering high-quality results, I thrive in collaborative environments where I can 
          contribute to the success of web projects from start to finish.
        </span>
        <div className='skillBars'>

          <div className='skillBar'>
            <img src={UIDesign} alt='Ui/UX Design' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Ui/Ux Development</h2>
              <p>This is a demo text, I'll write the description later.</p>
            </div>
          </div>
          
          <div className='skillBar'>
            <img src={WebDesign} alt='Web Development' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Web Development</h2>
              <p>This is a demo text, I'll write the description later.</p>
            </div>
          </div>
          
          <div className='skillBar'>
            <img src={FrontEnd} alt='Front-end Development' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Front-end Development</h2>
              <p>This is a demo text, I'll write the description later.</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={Backend} alt='Back-end Development' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Back-end Development</h2>
              <p>This is a demo text, I'll write the description later.</p>
            </div>
          </div>
          
          <div className='skillBar'>
            <img src={DataBase} alt='Data Base Management' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Data Base Management</h2>
              <p>This is a demo text, I'll write the description later.</p>
            </div>
          </div>
          
          <div className='skillBar'>
            <img src={AppDesign} alt='Mobile Application Development' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Mobile Application Development</h2>
              <p>This is a demo text, I'll write the description later.</p>
            </div>
          </div>
          

        </div>
    </section>
  )
}

export default Skills