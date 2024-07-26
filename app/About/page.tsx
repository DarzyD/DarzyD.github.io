'use client'
import React from 'react'
import AboutPage from '../components/AboutPage/AboutPage';
import TechStack from './TechStack';
import Navbar from '../components/Navbar/Navbar';
const page = () => {
  return (
    <main>
      <Navbar/>
      <AboutPage/>
  
    </main>
  )
}

export default page