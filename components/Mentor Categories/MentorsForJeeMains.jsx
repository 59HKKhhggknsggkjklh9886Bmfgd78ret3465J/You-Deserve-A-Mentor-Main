import React from 'react'
import MentorCard from "../Mentor Page/MentorCard"
import { FaArrowRight } from "react-icons/fa";

const arr = [1,2,3,4,5,6];


const MentorsForJeeMains = () => {
  return (
    <div className='mentorCategory'>
      <div className='mentorTitle'>
        <p>JEE MAINS</p>
      </div>
        <div className='everyMentors'>
          {arr.map((mentor, key) => {
              return (
                <div key={key}>
                    <MentorCard/>
                </div>
              )
          })}
      </div>
        <div className='seeMoreBody'>
        <div className='seeMore'>
                <p className='seeMoreText'><FaArrowRight /></p>
                <p className='seeMoreText2'>See More</p>
            </div>
        </div>
    </div>
  )
}

export default MentorsForJeeMains