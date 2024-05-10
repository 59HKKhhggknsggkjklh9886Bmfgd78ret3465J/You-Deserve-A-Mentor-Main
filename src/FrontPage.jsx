import './App.css'
import {Routes, Route} from 'react-router-dom';

import React from 'react'
import About from '../components/Front Page/About'
import Mentors from '../components/Mentor Page/Mentors'
import Contact from '../components/Front Page/Contact'
import Home from "../components/Front Page/Home"
import Navbar from '../components/Front Page/Navbar';
import LoginPage from '../components/Front Page/LoginPage';
import Footer from '../components/Front Page/Footer';

const FrontPage = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Contact />
      <Footer/>
    </div>
  )
}

export default FrontPage