import React from 'react'
//import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Abt from '../components/Abt'
import WhatsAppButton from '../components/WhatsAppButton'
import ActiveLocations from '../components/ActiveLocations'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <HeroSection/>
     <ActiveLocations/>
    <Abt/>

    <Services/>
    <Features/>
   
    <Testimonials/>

    </>
  )
}

export default Home