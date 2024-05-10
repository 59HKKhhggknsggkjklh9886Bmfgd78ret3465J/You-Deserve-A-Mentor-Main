import React, { useState } from 'react'
import "./profile.css"
import MCards from './MCards'

const Profile = () => {
    const [activeMessageProfile,setActiveMessageProfile] = useState(0);

    const boughtMentors = ["Choocha 1","Choocha2","Choocha3","Choocha4","Choocha5","Choocha6","Choocha7","Choocha8","Choocha9","Choocha10","Choocha11"];
    const messages = ['ssssssss  fkjf kjs gljsdl lsjg klslj jslg;jhkd gjlhglksjgol ihgdg lk gksldg lksdgosd']
    return (
    <div className='profileBody'>
        {
            boughtMentors.map((name,key)=>{
                return (
                    <div onClick={()=>{setActiveMessageProfile(key)}}>
                        <MCards classname = {activeMessageProfile == key ? "selectedMessageMentor" : "mCardsBody"} name = {name} messages = {messages[0]}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Profile