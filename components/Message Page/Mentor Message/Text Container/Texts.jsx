import React from 'react'
import "./texts.css"

const Texts = () => {
    const sender = ["a","c","esdfksjf lsglg  gkadlkglk lg godjoao g ds;lgjo go og oadjgo; oifg oladg adhgldajgl lfo flhasklfoflaf asf lasjfglkjdglgklah glh glahog hlkagalhg aihgi agiiahilgliogl aoig","g"]
    const receiver = ["b","d","f","h"]
  return (
    <div className='textsBody'>
        <div className='allTexts'>
            {
                receiver.map((msg,index)=>{
                    return (
                        <div>
                            <div className='senderMessageBody'>
                                <p>
                                    {sender[index]}
                                </p>
                            </div>
                            <div className='receiverMessageBody'>
                                <p>
                                    {receiver[index]}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Texts