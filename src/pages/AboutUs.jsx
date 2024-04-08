import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from '../components/Navbar'
import LocomotiveScroll from 'locomotive-scroll'
import AboutHeadLine from '../pagesparts/about-us/AboutHeadline'
import AboutUsInfo from '../pagesparts/about-us/AboutUsInfo'
import AboutWeOchi from '../pagesparts/about-us/AboutWeOchi'
import AboutMarquee from '../pagesparts/about-us/AboutMarquee'
import TwoPrinciple from '../pagesparts/about-us/TwoPrinciple'
import ReadyStart from '../components/ReadyStart'
import Footer from '../components/Footer'
import BlackAnimation from '../components/BlackAnimation'

export default function AboutUs() {
  useEffect(() => {
    if(window.innerWidth >= 770){
      const locomotiveScroll = new LocomotiveScroll();
    }
  
  },[])


  return (
    <section className='bg-[#f1f1f1]'>
      <BlackAnimation pageName={"about us"}/>
      <Headroom>
        <Navbar />
      </Headroom>
      <AboutHeadLine />
      <AboutUsInfo />
      <AboutWeOchi />
      <AboutMarquee />
      <TwoPrinciple />
      <ReadyStart />
      <Footer />
    </section>
  )
}
