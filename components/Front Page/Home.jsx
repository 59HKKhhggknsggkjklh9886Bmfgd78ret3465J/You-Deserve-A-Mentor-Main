import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div id='homeBody'>
        <div className='defaultPage'>
          <div className='defaultPic'>
              {/* <img className='defPic' src='/defpageimage.png' height={1000} width={1000}/> */}
          </div>
          <div className='defaultText'>
              <p>You Deserve A Mentor</p>
          </div>

          {/* <div className='courseCategories'>
              <div className='courseCategory'>
                  <p>JEE</p>
              </div>
          </div> */}
        </div>
    </div>
  )
}

export default Home