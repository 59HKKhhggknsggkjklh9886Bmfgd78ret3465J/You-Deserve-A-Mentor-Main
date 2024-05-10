import React from 'react'
import "./yourMentors.css"
// import ExProfileCard from './ExProfileCard'
import ProfileCard from './ProfileCard'

const yourmentors = ["choocha 1","choocha 2","choocha 3","choocha 4","choocha 5","choocha 6","choocha 7","choocha 8","choocha 9","choocha 10"]
const positions = ["Chemistry","Physics","Physics","Maths","Physics","Maths","Chemistry","Chemistry"]

const YourMentors = () => {

  return (
    <div className='yourMentorsBody'>
        <div className='mentorSearch'>
            <input type="text" placeholder='Search Your Mentors'/>
        </div>
        <div className='myMentors'>
            {yourmentors.map((mentor,key) => {
              return (
                <ProfileCard name = {yourmentors[key]} position={positions[key]}/>
                )
              })}
          </div>
    </div>
  )
}

export default YourMentors