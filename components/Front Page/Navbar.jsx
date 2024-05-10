import React, { useState } from 'react'
import './Navbar.css'
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'
import LoginPage from './LoginPage';
import { useEffect } from 'react';

const Navbar = () => {
  const [popupLogin,setPopupLogin] = useState(false);
  const [showProfilePic,setShowProfilePic] = useState(false);
  
  const goToHome = ()=>{
    window.history.go(-1);
    location.reload();
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the window has scrolled beyond a certain threshold
        if (window.scrollY > 500) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
})


  return (
    <div>
      <div className={scrolled ? "alt-nav-bar" : "nav-bar"}>
        <div className='left-navbar'>
          {/* <img onClick={goToHome} className='site-logo' src='/website_logo.jpg' height={200} alt='very cool logo'/> */}
          <p onClick={goToHome}>YDAM</p>
        </div>

        <div className='mid-navbar'>
          <ul className='navbar-btn'>
            <li>
              <ScrollLink className='navbtns' to="homeBody" spy={true} smooth={true} offset={-70} duration={100} >Home</ScrollLink>
            </li>
            <li>
              <ScrollLink className='navbtns'  to="aboutBody" spy={true} smooth={true} offset={-70} duration={100} onClick={()=>setShowProfilePic(true)}>About</ScrollLink>
            </li>
            <li>
              <ScrollLink className='navbtns' to="contactBody" spy={true} smooth={true} offset={-70} duration={100} onClick={()=>setShowProfilePic(false)}>Contact Us</ScrollLink>
            </li>
            <li>
              <RouterLink className='navbtns mentor' to={"/Mentors"}>Mentors</RouterLink>
            </li>
          </ul>
    </div>

        <div className='right-navbar'>
          <LoginPage trigger = {popupLogin} setTrigger = {setPopupLogin}/>
          {(showProfilePic) ? <RouterLink className='profilePic' to={"/setup-profile"}><profilepic>W</profilepic></RouterLink> : <p className='loginBtn' onClick={()=>setPopupLogin(true)}>Sign In</p>}
        </div>
      </div>
    </div>
  )
}

export default Navbar;