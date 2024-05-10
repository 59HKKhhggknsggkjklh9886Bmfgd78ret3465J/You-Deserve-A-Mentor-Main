import React from 'react'
import "./dashboardNavbar.css"
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import {Link as RouterLink, useNavigate} from 'react-router-dom';

const DashboardNavbar = () => {
    const rating = 1234;
  return (
    <div className='dashboardNavbar'>
        <div className='dashboardNotif'>
            <IoIosNotificationsOutline />
        </div>
        <div className='dashboardMessage'>
            <RouterLink to={"/mentor-messages"}><div className='mentorMessageIcon'><MdOutlineMessage/></div></RouterLink>
        </div>
    </div>
  )
}

export default DashboardNavbar