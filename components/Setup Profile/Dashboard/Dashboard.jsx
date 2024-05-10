import React from 'react'
import "./dashboard.css"
import LineChart from './Graph/LineChart'
import CalendarEle from './CalendarEle'
import GlobalRanking from './GlobalRanking'
import Event from '../Privacy/Events/Event'
import Tips from './Tips'
import Challenge from './Challenge'
import CurrentRank from './CurrentRank'
import NavbarDP from '../DNavbar/NavbarDP'
import ProfileDetails from './ProfileDetails'

const Dashboard = () => {
  return (
    <div className='dashboardBody'>
        <div>
            <ProfileDetails/>
        </div>
        <div className='container-2'>
            <div className='dashboardLineChart'>
                <LineChart/>
                <CurrentRank/>
            </div>
            <div>
                <GlobalRanking/>
            </div>
        </div>

        
        <div className='container-3'>
            
        </div>
        
        <div>
            <Tips/>
        </div>
    </div>
  )
}

export default Dashboard