import React from 'react'
import './nameProfile.css'

const NameProfile = () => {
    const goToHome = ()=>{
        window.history.go(-1);
      }
  return (
    <div className='nameProfileBody'>
        <div className='profileCard'>
            <div className='profileTitle'>
                <p>WELCOME STUDENT</p>
            </div>

            <div className='container'>
                <div className='profileCardChild2'>
                    <div className='profilePic2'>
                        <div className='uploadEle'>
                            <p>UPLOAD PIC</p>
                        </div>
                        <img className='profilePicImg' src="/lundImage.jpg" alt="" />
                    </div>
                </div>

                <div className='profileCardChild'>
                    <div1>
                        <div className='profileEle1'>
                            <input type='text' required='required' spellCheck="false"/>
                            <p1>First Name</p1>
                        </div>
                        <div className='profileEle1'>
                            <input type='text' required='required' spellCheck="false"/>
                            <p1>Last Name</p1>
                        </div>
                    </div1>
                    
                    <div1>
                        <div className='profileEle1'>
                            <input required
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }}
                                />
                            <p1>Phone Number</p1>    
                        </div>
                        <div className='profileEle1'>
                            <input type='text' required='required' spellCheck="false"/>
                            <p1>E - Mail</p1>
                        </div>
                    </div1>

                    <div3>
                        <div className='profileEle1'>
                            <input maxLength={3} required
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                    }
                                }}
                                />
                            <p1>Pin Code</p1>    
                        </div>
                        <div className='profileEle1'>
                            <input type='text' required='required' spellCheck="false"/>
                            <p1>State</p1>
                        </div>
                        <div4 className='profileAgeEle'>
                            <input required
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                />
                                <p1>Age</p1>    
                        </div4>
                        
                        <div className='profileEle1'>
                            <input type='text' required='required' spellCheck="false"/>
                            <p1>Gender</p1>
                        </div>
                    
                    </div3>

                        <div className=''>
                            <textarea rows="2" cols="50" required='required' maxLength={150} spellCheck="false"></textarea>
                            <p1>Residence Address</p1>
                        </div>
                        <div className=''>
                            <textarea rows="2" cols="50" required='required' maxLength={150} spellCheck="false"></textarea>
                            <p1>Your Bio</p1>
                        </div>

                        <save className='submitEle'>
                            <p onClick={goToHome}>Go Back</p>
                            <p>Save Changes</p>
                        </save>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default NameProfile