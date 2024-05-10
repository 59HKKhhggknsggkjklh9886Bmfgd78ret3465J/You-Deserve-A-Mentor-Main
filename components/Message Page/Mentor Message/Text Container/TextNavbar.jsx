import React, { useState } from 'react'
import "./textNavbar.css"
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import Resources from './Resources';

const TextNavbar = ({showResources,setShowResources}) => {
    const name = "PRINCE";
    const timePeriod = "25 days left";
  return (
    <div className='textNavbarBody'>
        {/* left side (name, time period)*/}
        <div className='leftTextNavbar'>
            <div className='textNavbarDp'>
                <img src="img1.jpg" alt="" />
            </div>
            <div className='textNavbarInfoContainer'>
                <div className='textNavbarName'>
                    <p>{name}</p>
                </div>
                <div className='textNavbarTimePeriod'>
                    <p>{timePeriod}</p>
                </div>
            </div>
        </div>

        <div className='midTextNavbar'>
            {/* voice call */}
            <div className='callingTextNavbar'>
                <div className='voiceTextNavbar'>
                    <p><FaPhoneAlt /></p>
                </div>
                {/* video call */}
                <div className='videoTextNavbar'>
                    <p><FaVideo /></p>
                </div>
            </div>
            <div className={showResources ? "closeTextNavbar" : 'resourcesTextNavbar'} onClick={()=>{
                    if (showResources == true)
                    {
                        setShowResources(false)
                    }
                    else
                    {
                        setShowResources(true)
                    }
                    }}>

                <p className = {showResources ? "closeBtnOn" : "closeBtnOff"}>close</p>
                <p className = {showResources ? "resourceBtnOff" : "resourceBtnOn"}>RESOURCES</p>
            </div>
        </div>
        {/* <div className='rightTextNavbar'>
            
        </div> */}
    </div>
  )
}

export default TextNavbar