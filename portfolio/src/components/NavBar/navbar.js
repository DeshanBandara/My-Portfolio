import React from 'react'
import './navbar.css'
import logo from '../../assest/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
            <link></link>
        </div>
        <button className='desktopMenuButton'>
            <img src='' alt='' className='desktopMenuImg'/> Contact Me
        </button>
    </nav>
  )
}

export default Navbar