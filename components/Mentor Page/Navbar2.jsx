import React, { useState } from 'react'
import './Navbar2.css'
import styled from 'styled-components';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'
import LoginPage from '../Front Page/LoginPage';

const Navbar2 = () => {
  const [popupLogin,setPopupLogin] = useState(false);
  const [showProfilePic, setShowProfilePic] = useState(false);
  const goToHome = ()=>{
    window.history.go(-1);
  }
  
  return (

      <div>
      <div className="nav-bar2">

        <div className='left-navbar2'>
          <img onClick={goToHome} className='site-logo' src='logo.png' alt='very cool logo'/>
        </div>

        <div className='mid-navbar2'>
          <input name="myInput" placeholder='Search for your courses, mentors, etc' maxLength={70}/>
          
        </div>

        <div className='right-navbar'>
          <LoginPage trigger = {popupLogin} setTrigger = {setPopupLogin}/>
          {(showProfilePic) ? <profilepic>W</profilepic> : <p className='loginBtn' onClick={()=>setPopupLogin(true)}>Sign In</p>}
        </div>
      </div>
    </div>
  )
}

export default Navbar2;