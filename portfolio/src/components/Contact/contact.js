import React from 'react'
import './contact.css'
import Adobe from '../../assest/adobe.png'
import Git from '../../assest/git.png'
import Canva from '../../assest/canva.png'
import Facebook from '../../assest/facebook.png'
import Figma from '../../assest/figma.png'
import Linkedin from '../../assest/linkedin.png'
import Microsoft from '../../assest/microsoft.png'
import Youtube from '../../assest/youtube.png'
import Twitterx from '../../assest/twitterx.png'
import Twitter from '../../assest/twitter.png'
import Insta from '../../assest/instagram.png'
import YoutubeIcon from '../../assest/youtubeIcon.png'
import Github from '../../assest/github.png'

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='clientPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a divers group of companies.
                some of the notable companies I have worked with includes. 
            </p>
            <div className='clientImgs'>
                <img src={Adobe} alt='Adobe' className='clientImg' />
                <img src={Git} alt='Git' className='clientImg' />
                <img src={Canva} alt='Canva' className='clientImg' />
                <img src={Facebook} alt='Facebook' className='clientImg' />
                <img src={Figma} alt='Figma' className='clientImg' />
                <img src={Linkedin} alt='Linkedin' className='clientImg' />
                <img src={Microsoft} alt='Microsoft' className='clientImg' />
                <img src={Youtube} alt='Youtube' className='clientImg' />
            </div>
        </div>
        
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>submit</button>
                <div className='links'>
                    <img src={Facebook} alt='Facebook' className='link' />
                    <img src={Github} alt='Github' className='link' />
                    <img src={Linkedin} alt='Linkedin' className='link' />
                    <img src={Twitterx} alt='Twitterx' className='link' />
                    <img src={Insta} alt='Insta' className='link' />
                    <img src={YoutubeIcon} alt='YoutubeIcon' className='link' />
                    <img src={Twitter} alt='Twitter' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact