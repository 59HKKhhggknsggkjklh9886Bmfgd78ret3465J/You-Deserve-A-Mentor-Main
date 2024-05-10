import React from 'react'
import "./typeMessage.css"
import { IoMdSend } from "react-icons/io";

const TypeMessage = () => {
  return (
    <div className='typeMessageBody'>
        {/* input */}
        <div className='inputTypeMessage'>
            <input type="text" placeholder='Send Message'/>
        </div>
        {/* send button */}
        <div className='sendIconTypeMessage'>
            <p><IoMdSend /></p>
        </div>
    </div>
  )
}

export default TypeMessage