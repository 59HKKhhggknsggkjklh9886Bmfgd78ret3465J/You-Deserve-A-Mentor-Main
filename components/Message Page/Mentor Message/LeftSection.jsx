import React from 'react'
import "./leftSection.css"
import { CiSearch } from "react-icons/ci";
import Profile from './Profile';


const LeftSection = () => {
  return (
    <div className='leftSectionBody'>
        <div className='messageMentorSearch'>
            <div className='messageMentorSearchIcon'>
                <CiSearch />
            </div>
            <input type="text" placeholder='Search For Mentors' />
        </div>
        <div className='leftProfileMentorBody'>
            <Profile/>
        </div>
    </div>
  )
}

export default LeftSection