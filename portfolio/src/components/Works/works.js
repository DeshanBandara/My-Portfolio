import React from 'react'
import './works.css'
import My1 from '../../assest/my1.png'
import My2 from '../../assest/my2.png'
import My3 from '../../assest/my3.png'
import My4 from '../../assest/my4.png'
import My5 from '../../assest/my5.png'
import My6 from '../../assest/my6.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <p className='worksDesc'>
      I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited
        to bring my skills and experience to help businesses achieve their goals and create a strong online presence. 
      </p>
      <div className='worksImgs'>
        <img src={My1} alt='' className='worksImg' />
        <img src={My2} alt='' className='worksImg' />
        <img src={My3} alt='' className='worksImg' />
        <img src={My4} alt='' className='worksImg' />
        <img src={My5} alt='' className='worksImg' />
        <img src={My6} alt='' className='worksImg' />
      </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works