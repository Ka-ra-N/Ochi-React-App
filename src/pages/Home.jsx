import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Playful from '../components/Playful'
import Features from '../components/Features'
import ClientsReview from '../components/ClientsReview'
import ReadyStart from '../components/ReadyStart'
import Footer from '../components/Footer'
import WeOchiMaruqee from '../components/WeOchiMaruqee'
import LocomotiveScroll from 'locomotive-scroll'
import BlackAnimation from '../components/BlackAnimation'

function Home() {
  useEffect(() => {
    if(window.innerWidth >= 770){
      const locomotiveScroll = new LocomotiveScroll();
    }
    
  },[])

  return (
    <section className='max-w-full min-h-full relative bg-[#f1f1f1]'>
      <BlackAnimation pageName={"ochi"}/>
      <Headroom>
        <Navbar />
      </Headroom>
      <LandingPage />
      <WeOchiMaruqee />
      <About />
      <Playful />
      <Features />
      <ClientsReview />
      <ReadyStart />
      <Footer />
    </section>
  )
}

export default Home


