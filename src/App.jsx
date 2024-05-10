import './App.css'
import {Routes,Route, BrowserRouter, Router} from 'react-router-dom';
import React from 'react'
import FrontPage from "./FrontPage"
import Mentors from '../components/Mentor Page/Mentors';
import SetUpProfile from '../components/Setup Profile/SetUpProfile';
import NameProfile from '../components/Setup Profile/MyProfile/NameProfile';
import YourMentors from '../components/Setup Profile/MyMentors/YourMentors';
import MentorMessages from '../components/Message Page/Mentor Message/MentorMessages';


const App = () => {
  return (
    <div>
      <Routes>
                  <Route path = '/' element = {<FrontPage/>} />
                  <Route path = '/Mentors' element = {<Mentors/>} />
                  <Route path = '/setup-profile' element = {<SetUpProfile/>} />
                  <Route path = '/mentor-messages' element = {<MentorMessages/>} />
      </Routes>
    </div>
  )
}

export default App