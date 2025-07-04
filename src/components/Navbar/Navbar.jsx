import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import ic_search from '../../assets/search_icon.svg'
import ic_bell from '../../assets/bell_icon.svg'
import ic_profile from '../../assets/profile_img.png'
import ic_caret from '../../assets/caret_icon.svg'

const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else navRef.current.classList.remove('nav-dark');
    })
  }, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={ic_search} alt="" className='icons'/>
        <p>Children</p>
        <img src={ic_bell} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={ic_profile} alt="" className='profile'/>
          <img src={ic_caret} alt=""/>
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
