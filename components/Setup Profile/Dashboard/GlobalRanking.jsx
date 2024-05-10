import React from 'react'
import "./globalRanking.css"
import BarGraph from './Graph/BarGraph'

const GlobalRanking = () => {
  return (
    <div className='globalrankingBody'>
          <BarGraph/>
          <p className='globalRankingText'>
            Global Ranking
          </p>
    </div>
  )
}

export default GlobalRanking