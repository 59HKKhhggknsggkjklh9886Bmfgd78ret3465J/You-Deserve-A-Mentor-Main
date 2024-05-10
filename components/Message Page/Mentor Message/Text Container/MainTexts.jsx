import React from 'react'
import "./mainText.css"
import Resources from './Resources'
import Texts from './Texts'

const MainTexts = ({showResources}) => {
  return (
    <div className='mainTextBody'> {/* height = 100% */}
        <div className='allTextsBody'>  {/* height = 100% */}
        <Resources classname={showResources ? "showResources" : "resourcesBody"}/>
            {/* textBody  height = 100%*/}
            {/* allTexts height = max content*/}
            <Texts showResources={showResources}/>
        </div>
    </div>
  )
}

export default MainTexts