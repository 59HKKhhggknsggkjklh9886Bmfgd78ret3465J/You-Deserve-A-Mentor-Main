import React from 'react'
import "./event.css"

const ongoingevents = ["","","",""];

const OngoingEvents = () => {
    return (
    <div className='eventCards'>
        {
            ongoingevents.map((events,index)=>{
                return (
                    <div className='eventCardBody'>
                        {/* event name */}
                        <div className='leftEventCard'>
                            <div className='leftTopSectionEventCard'>
                                <div className='eventName'>
                                    <p>On Going Evensdf aflsf laf l;ajfl lajflajfljt</p>
                                </div>
                                {/* event date */}
                                <div className='eventDate'>
                                    <p>On 12/03/2025</p>
                                </div>
                            </div>
                            <div className='eventBio'>
                                <p>dasfl fl;lkfh lakh flkjhf lkashflkahfkljasdh fklhflkahflkah f fl hlfd fllkffkla hfklhfkahskfhlka hfklahfklahfklahflkahfklshfklaflkahflkhflksdhfl  fsa f;laj fioadjf lkgjhlkadhlfkahfl khfl flkhadlkjfhlka s</p>
                            </div>
                        </div>
                        <div className='rightEventCard'>
                            {/* time remaining */}
                            <div className='eventTimeRemaining'>
                                <p>2days 3hours</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OngoingEvents