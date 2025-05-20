import React from 'react'

import './App.css'
import NavbarMain from './components/Navbar/NavbarMain'
import Heromain from './components/HeroSection/Heromain'
import Subhero from './components/HeroSection/Subhero'
import AboutMain from './components/AboutMe/AboutMain'
import HelperSection from './components/HelperSection'
import SkillMain from './components/SKillsSection/SkillMain'
import SubSkill from './components/SKillsSection/SubSkill'
import ExperienceMain from './components/ExperienceSection/ExperienceMain'
import ProjectMain from './components/ProjectSection/ProjectMain'
import ContactFormMain from './components/ContactForm/ContactFormMain'
import FooterMain from './components/Footer/FooterMain'

function App() {

  return (
    <main>
      <NavbarMain/>
      <Heromain/>
      <Subhero/>
      <AboutMain/> 
      <SkillMain/>
      <SubSkill/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactFormMain/>
      <FooterMain/>
      <HelperSection/>
    </main>
  )
}

export default App
