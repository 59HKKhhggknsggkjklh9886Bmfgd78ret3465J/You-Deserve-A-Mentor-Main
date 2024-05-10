import React, { useState } from 'react'
import "./textContainer.css"
import TextNavbar from './TextNavbar'
import MainTexts from './MainTexts'
import TypeMessage from './TypeMessage'

const TextContainer = () => {
  const [showResources, setShowResources] = useState(false);
  return (
    <div className='textContainerBody'>
        {/* textnavbar (dp,name,phone,vidcall,resourses, time period)*/}
        <TextNavbar showResources = {showResources} setShowResources = {setShowResources}/>
        {/* main texts */}
        <MainTexts showResources = {showResources} setShowResources = {setShowResources}/>
        {/* type message */}
        <TypeMessage />
    </div>
  )
}

export default TextContainer