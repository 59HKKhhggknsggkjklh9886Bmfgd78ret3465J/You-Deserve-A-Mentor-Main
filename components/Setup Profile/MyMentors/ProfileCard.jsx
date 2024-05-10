import React from 'react';
import "./profileCard.css"
import { FaMessage } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import {Link as RouterLink, useNavigate} from 'react-router-dom';

const ProfileCards = ({name, position}) => {
  return (
        <div className="card_data">
            <div className='left-card-data'>
                <div>
                    <img src="./img1.jpg" alt="" />
                </div>
            </div>
            <div className='right-card-data'>

                <div className="pro_content">
                    <h2>{name}</h2>
                    <p className="position">{position}</p>
                    <p>Mai hu ek udhta lodu</p> 
                </div>
                <div className='social_icons'>
                    <li>
                        <i><AiFillSchedule/></i>
                        <p1>Schedule Meeting</p1>
                    </li>
                    <li>
                        <i><FaBookOpen/></i>
                        <p1>Notes</p1>
                    </li>
                    <li>
                        <i><FaVideo/></i>
                        <p1>Video Chat</p1>
                    </li>
                    <li>
                        <RouterLink to={"/mentor-messages"}><i><FaMessage/></i></RouterLink>
                        <p1>Chat</p1>
                    </li>
                </div>
            </div>
        </div>
  );
}

export default ProfileCards;
