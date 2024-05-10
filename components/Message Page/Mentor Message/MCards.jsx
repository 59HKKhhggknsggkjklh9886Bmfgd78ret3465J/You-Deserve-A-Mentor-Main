import React from 'react'
import "./mCards.css"

const MCards = ({name, messages, classname}) => {
  return (
    <div className={classname}>
        {/* dp */}
        <div className='mCardsLeftSection'>
            <div className='mCardsDp'>
                <img src="img1.jpg" alt="" />
            </div>
        </div>

        {/* name */}
        <div className='mCardsRightSection'>
            <div className='mCardsName'>
                {/* <p>{name}</p> */}
                name
            </div>
            <div className='mCardsMessage'>
                <p>{messages}</p>
            </div>
        </div>
        {/* message */}
        {/* unreadMsg */}
        <div className='mCardsUnread'>

        </div>
        <div1 className='mCardsHoverEffect1'></div1>
    </div>
  )
}

export default MCards