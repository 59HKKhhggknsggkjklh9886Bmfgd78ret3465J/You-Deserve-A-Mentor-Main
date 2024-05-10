import React, { useState } from 'react'
import "./event.css"
import OngoingEvents from './OngoingEvents';
import Pastevents from './Pastevents';
import UpcomingEvents from './UpcomingEvents';

const eventBtns = ['ON GOING','PAST','UPCOMING'];

const Event = () => {

  const [selectedEvent,setSelectedEvent] = useState(0);
  const ShowEvent = ({index}) => {

    switch (index) {
        case 0: return <OngoingEvents/>
        case 1: return <Pastevents/>
        case 2: return <UpcomingEvents/>

        default:
            break;
    }
}
  return (
    <div className='eventBody'>
        <div className='eventDesign1'></div>
        <div className='eventDesign2'></div>
        <div className='eventHeading'>
            <div className='eventEffect1'></div>
            <div className='eventEffect2'></div>
            <p>EVENTS</p>
        </div>

        <div className='eventBtnGroup'>
            {
                eventBtns.map((btn,index)=>{
                    return (
                        <div className ={selectedEvent == index ? 'selectedEventBtn' : ''} onClick={()=>setSelectedEvent(index)}>
                            <p>{btn}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className='eventTitles'>
                <ShowEvent index={selectedEvent}/>
        </div>
    </div>
  )
}

export default Event;