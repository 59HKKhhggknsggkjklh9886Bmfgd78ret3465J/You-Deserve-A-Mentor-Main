import React from 'react'
import './MentorCard.css'
import { CiHeart } from "react-icons/ci";

const MentorCard = () => {
  return (
      <div>
          <div className='mentorCard'>
                    <div className='mentorImg'>
                        <img src='lundImage.jpg' alt='lund Image'/>
                    </div>

                    <div className='mentorNameSub'>
                        <div className='mentorName'>
                            <p>Chunnu</p>
                        </div>
                        <div className='mentorSub'>
                            <p>10vi Fail</p>
                        </div>
                    </div>
                

                <div className='lowerMentorCard'>

                    <div className='mentorExp'>
                        <h1>Experience</h1>
                        <h2>5 Years</h2>
                    </div>
                    <div className='mentorBatch'>
                        <h1>Batch</h1>
                        <h2>10/30</h2>
                    </div>
                    <div className='rating'>
                        <h1>Rating</h1>
                        <h2>-10</h2>
                    </div>  
                </div>

                <div className='mentorBio'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, vitae.</p>
                </div>
                <div className='emptyBottom'>

                </div>
              <div className='mentorPrice'>
                  <p>1200/</p>
              </div>
              
            <div className='bookMentor'>
                <p>Book Now</p>
            </div>

            <div className='tooltip'>
                <img className='heartImg' src="/heartImg.png"/>
                
                {/* <i class="fa-thin fa-heart"></i> */}
                <span class="tooltiptext">Add to Wishlist</span>
            </div>
          </div>
      </div>
  )
}

export default MentorCard