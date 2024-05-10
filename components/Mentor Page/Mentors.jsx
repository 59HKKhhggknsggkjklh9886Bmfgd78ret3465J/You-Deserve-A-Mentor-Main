import React from 'react'
import './Mentors.css'
import Navbar2 from './Navbar2'
import MentorPageImgSlider from './MentorPageImgSlider'
import MentorsForJeeMains from '../Mentor Categories/MentorsForJeeMains'
import MentorsForJeeAdvanced from '../Mentor Categories/MentorsForJeeAdvanced'
import Footer from '../Front Page/Footer'

const Mentors = () => {
  return (
    <div id= 'mentorBody' className='mentorsBody'>
      <Navbar2/>
      <MentorPageImgSlider/>

      {/* CUET UG mentors<MentorsForCuetUg/>
      CUET PG mentors <MentorsForCuetPg/> */ }
      {/* IIT JEE MAINS mentors */}<MentorsForJeeMains/>
      {/* IIT JEE ADVANCED mentors */}<MentorsForJeeAdvanced/>
      {/* NEET mentors<MentorsForNeet/>
      {CAT mentors}<MentorsForCat/>
      {SSC mentors}<MentorsForSsc/> */}
      
      {/* <div className='mentorPage'>
        <MentorsInPage/>
      </div> */}
        <Footer/>
    </div>
  )
}

export default Mentors