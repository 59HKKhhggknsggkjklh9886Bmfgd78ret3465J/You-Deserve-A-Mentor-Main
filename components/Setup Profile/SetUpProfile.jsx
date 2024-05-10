import React, { useState } from 'react'
import './setUpProfile.css'
// import Navbar3 from './Navbar3'
import NameProfile from './MyProfile/NameProfile'
import ProfileMenu from './SideBar/ProfileMenu'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import YourMentors from './MyMentors/YourMentors'
import DashboardNavbar from './DNavbar/DashboardNavbar';

const SetUpProfile = () => {
  return (
    <div className='setUpProfileBody'>
        <div>
          <DashboardNavbar/>
        </div>
        
        <div className='profileLook'>
            <ProfileMenu/>
        </div>
      </div>
  )
}

export default SetUpProfile