import React from 'react'
import "./messageNavbar.css"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const MessageNavbar = () => {
    const navigate = useNavigate();
  return (
    <div className='messageNavbarBody'>
        <div className='goBackMessage' onClick = {()=>navigate(-1)}>
            <FaArrowLeft />
        </div>
    </div>
  )
}

export default MessageNavbar