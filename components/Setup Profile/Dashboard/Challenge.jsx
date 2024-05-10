import React, { useState } from 'react'
import "./challenge.css"

const question = "Why Saksham is Bauna?";
const answer = "Kharab Khoon";
const hiddenAns = "lafglag;lafhlsajfl;aj;gljalgj;j";
const points = 10
const Challenge = () => {
  const [hintOn,setHintOn] = useState(false);

  return (
    <div className='challengeBody'>
        <div className='challengeQues'>{<div>Q. {question} ({points} points)</div>}</div>
        <div className='challengeAnswer'>
            <input placeholder='Your Answer Here' spellCheck="false"/>
        </div>
        <div className='hiddenAnswer'>
            <div>
                {hintOn ? <div></div> : 
                    <div className='hiddenEffect'>
                      <div className='hiddenAnsBtn' onClick={()=>setHintOn(true)}>Show Hint</div>
                    <div className='tooltip'>cost you 50% of the points</div>
                </div>}
                <div>{hiddenAns}</div>
            </div>
        </div>
    </div>
  )
}

export default Challenge