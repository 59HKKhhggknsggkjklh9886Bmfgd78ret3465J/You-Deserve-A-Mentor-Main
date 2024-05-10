import React from 'react'
import './profileMenu.css'
import { FaUser } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import ButtonGrp from './ButtonGrp';
import NameProfile from '../MyProfile/NameProfile';
import YourMentors from '../MyMentors/YourMentors';
import Dashboard from '../Dashboard/Dashboard';
import Privacy from '../Privacy/Privacy';
import Settings from '../Settings/Settings';
import Payments from '../Settings/Settings';
import { FiMessageCircle } from "react-icons/fi";
import { MdEventAvailable } from "react-icons/md";

const buttons = ["Dashboard","My Profile","My Mentors","Events"]
const icons = [MdSpaceDashboard,FaUser,BsFillPeopleFill,MdEventAvailable,BsCashCoin,FaSignOutAlt]


const ShowComponent = ({index}) => {

    switch (index) {
        case 0: return <Dashboard/>
        case 1: return <NameProfile/>
        case 2: return <YourMentors/>
        case 3: return <Privacy/>
        case 4: return <Settings/>
        case 5: return <Payments/>

        default:
            break;
    }
}

const ProfileMenu = () => {
    const [selectedBtn, setSelectedBtn] = useState(0);

  return (
    <div className='profileMenuBody'>
        <div className='profileMenuBodyChild'>
                <a className="dashboardLogo" href='/'>YDAM</a>
                {/* <div className="dashboardLogo">YDAM</div> */}
                <ButtonGrp buttons={buttons} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} icons={icons}/>

                <div className='informBtn'>
                    <btn className="informChild" >
                        <p>
                            <p className='informIcon'><FiMessageCircle /></p>
                            <p className='informText'>Inform a Problem</p>
                        </p>
                    </btn>
                </div>
        </div>

        <div className='profileComponent'>
            <ShowComponent index={selectedBtn}/>
        </div>
    
    </div>
  )
}

export default ProfileMenu