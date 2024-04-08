import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from '../components/Navbar'
import ReadyStart from '../components/ReadyStart'
import Footer from '../components/Footer'
import WorkHeroSection from '../pagesparts/our-work/WorkHeroSection'
import WorkCardSection from '../pagesparts/our-work/WorkCardSection'
import BehanceMarqee from '../pagesparts/our-work/BehanceMarqee'
import LocomotiveScroll from 'locomotive-scroll'
import BlackAnimation from '../components/BlackAnimation'


function OurWork() {

  useEffect(() => {
    if(window.innerWidth >= 770){
      const locomotiveScroll = new LocomotiveScroll();
    }
  
  },[])

  return (
    <section className='bg-[#CDEA68]'>
      <BlackAnimation pageName={"our work"}/>
        <Headroom>
            <Navbar />
        </Headroom>
        <WorkHeroSection />
        <WorkCardSection />
        <BehanceMarqee />
        <ReadyStart />
        <Footer />
    </section>
  )
}

export default OurWork
