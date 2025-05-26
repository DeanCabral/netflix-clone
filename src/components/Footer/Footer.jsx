import React from 'react'
import './Footer.css'
import ic_youtube from '../../assets/youtube_icon.png'
import ic_twitter from '../../assets/twitter_icon.png'
import ic_instagram from '../../assets/instagram_icon.png'
import ic_facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={ic_youtube} alt="" />
        <img src={ic_twitter} alt="" />
        <img src={ic_instagram} alt="" />
        <img src={ic_facebook} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
