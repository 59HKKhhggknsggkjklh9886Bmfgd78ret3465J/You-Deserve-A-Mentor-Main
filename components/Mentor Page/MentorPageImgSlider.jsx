import React from 'react'
import './MentorPageImgSlider.css'
import SimpleImageSlider from "react-simple-image-slider";

const MentorPageImgSlider = () => {
  const images = [
    { url: "img1.jpg" },
    { url: "img2.jpg" },
    { url: "img3.jpg" },
    { url: "img4.jpg" },
    { url: "img5.jpg" },
  ];

  return (
      <div>
        <SimpleImageSlider
            width="100%"
            height={300}
            images={images}
            showNavs={true}
            autoPlay={true}
            slideDuration={1}
            autoPlayDelay={5}
        />
        
      </div>
  )
}

export default MentorPageImgSlider