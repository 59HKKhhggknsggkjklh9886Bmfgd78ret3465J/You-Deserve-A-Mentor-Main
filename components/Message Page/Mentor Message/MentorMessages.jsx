import React from 'react'
import "./mentorMessages.css"
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import MessageNavbar from './MessageNavbar'

const MentorMessages = () => {
  return (
    <div className='mentorMessagesBody'>
      <div>
          <MessageNavbar/>
      </div>
        <div className='mentorMessagesChild'>
          <LeftSection/>
          <RightSection/>
        </div>
    </div>
  )
}

export default MentorMessages