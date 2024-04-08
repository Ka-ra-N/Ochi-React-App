import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from '../components/Navbar'
import Services_one from '../pagesparts/services/ServicesOne'
import HolisticProcess from '../pagesparts/services/HolisticProcess'
import ServicesGreenPart from '../pagesparts/services/ServicesGreenPart'
import Footer from '../components/Footer'
import ReadyStart from '../components/ReadyStart'
import ServicesClientReview from '../pagesparts/services/ServicesClientReview'
import WhyUsMarquee from '../pagesparts/services/WhyUsMarquee'
import LocomotiveScroll from 'locomotive-scroll'
import BlackAnimation from '../components/BlackAnimation'
function Services() {

  useEffect(() => {
    if(window.innerWidth >= 770){
      const locomotiveScroll = new LocomotiveScroll();
    }
    
  },[])

  return (
    <section className='bg-[#f1f1f1]'>
      <BlackAnimation pageName={"services"}/>
      <Headroom>
        <Navbar />
      </Headroom>
      <Services_one />
      <HolisticProcess />
      <ServicesGreenPart />
      <ServicesClientReview />
      <WhyUsMarquee />
      <ReadyStart />
      <Footer />
    </section>
  )
}

export default Services