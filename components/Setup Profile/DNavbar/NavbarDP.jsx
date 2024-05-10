import React from 'react'
import "./navbarDP.css"

const NavbarDP = ({firstName,rating}) => {
  return (
    <div className='navbarDPBody'>
        <div className='imgContainer'>
            <img className='navbarDpImg' src="img1.jpg" alt="" />
        </div>
        <div className='dashboardContentContainer'>
            <div>
                {firstName}
            </div>
            <div>
                Rating : {rating}
            </div>
        </div>
    </div>
  )
}

export default NavbarDP