import React from 'react'
import './navbar.css'
import logo from '../../assest/logo.png'
import contactImg from '../../assest/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
            <Link className='DesktopMenuListItem'>Home</Link>
            <Link className='DesktopMenuListItem'>Client</Link>
            <Link className='DesktopMenuListItem'>Portfolio</Link>
            <Link className='DesktopMenuListItem'>About</Link>
        </div>
        <button className='desktopMenuButton'>
            <img src={ contactImg } alt='' className='desktopMenuImg'/> Contact Me
        </button>
    </nav>
  )
}

export default Navbar