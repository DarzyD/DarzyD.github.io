import React from 'react'
import '../../styles/fonts.css';
import Icons from '../Icons/Icons';
import TechStackPage from './TechStackPage';
import WorkExperiencePage from './WorkExperiencePage';
const AboutPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <div>
          <h1 className="text-3xl font-bold">Hey! I'm <span className="blue"> Brian Dang</span> 👋</h1>
          <p className="mt-6 text-xl leading-9"> I recently graduated from the University of Massachusetts Amherst with a degree in Computer Science.  <br/>
           My primary interests lie in Software Engineering, Web Development, Networking, Information Technology, and Cybersecurity.</p>
           <div className="mt-3 flex gap-1">
              <a href="https://www.linkedin.com/in/brian-dang2024/" target="_blank"> 
                <Icons src = 'assets/images/linkedinLogo.png' alt = 'Linkedin icon' />
              </a>
              <a href='https://github.com/DarzyD' target="_blank">
                <Icons src = 'assets/images/githubLogo.png' alt = 'Github icon'/>
              </a>
           </div>
        </div>
        <div className="shrink-0">
          <img className="h-80 w-64" src="assets/images/profile.jpg" alt="Avatar image" loading="lazy"/>
        </div>
      </div>
      <WorkExperiencePage/>
      <TechStackPage/>
    </div>
  )
}

export default AboutPage