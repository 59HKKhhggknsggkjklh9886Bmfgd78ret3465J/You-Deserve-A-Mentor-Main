import React from 'react'
import "./profileDetails.css"

const ProfileDetails = () => {
  return (
    <div className='profileDetailsBody'>
        <div className='profilePicture'>
            <img src="/img1.jpg" alt="" />
        </div>
        <div className='profilePictureContainer2'>
            {/* name */}
            <div className='profileDetailsName'>
                <p>PRINCE CHAUHAN</p>
            </div>
            {/* bio */}
            <div className='profilePictureBio'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur assumenda molestiae fuga corrupti culpa ex voluptates cum suscipit vitae, harum mollitia dolorem porro omnis veritatis accusantium vero? At eum beatae ipsam vitae sed cupiditate vel ad atque inventore quas.</p>
            </div>
            {/* rating */}
            {/* skills */}
            <div className='profilePictureSkills'>
                <p>DSA</p>
                <p>WEB DEVELOPER</p>
                <p>REACT JS</p>
                <p>NEXT JS</p>
                <p>CPP</p>
                <p>PYTHON</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileDetails