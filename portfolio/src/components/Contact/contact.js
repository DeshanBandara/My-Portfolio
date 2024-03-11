import React, { useRef } from 'react'
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
import emailjs from '@emailjs/browser';
import ReactImg from '../../assest/react.png'
import Mongodb from '../../assest/mongodb.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_nlnsdx9', 'template_d46uida', form.current, {
            publicKey: 'TMuCAXcBzJvG52Hxc',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                alert('Email Sent!');
                e.target.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };
    
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='clientPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I use following technologies to fulfill your requirements
                </p>
                <div className='clientImgs'>
                    <img src={Adobe} alt='Adobe' className='clientImg' />
                    <img src={Git} alt='Git' className='clientImg' />
                    <img src={Canva} alt='Canva' className='clientImg' />
                    <img src={ReactImg} alt='React' className='clientImg' />
                    <img src={Figma} alt='Figma' className='clientImg' />
                    <img src={Mongodb} alt='Mongodb' className='clientImg' />
                    <img src={Microsoft} alt='Microsoft' className='clientImg' />
                    <img src={Youtube} alt='Youtube' className='clientImg' />
                </div>
            </div>
            
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className='submitBtn'>submit</button>
                    <div className='links'>
                        <a href='https://www.facebook.com/profile.php?id=61553988273586'><img src={Facebook} alt='Facebook' className='link' /></a>
                        <a href='https://github.com/DeshanBandara'><img src={Github} alt='Github' className='link' /></a>
                        <a href='https://www.linkedin.com/in/deshanbandarab68185204/'><img src={Linkedin} alt='Linkedin' className='link' /></a>
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