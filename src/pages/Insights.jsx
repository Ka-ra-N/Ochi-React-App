import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from '../components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import InsightsHeading from '../pagesparts/insights/InsightsHeading';
import LatestInsights from '../pagesparts/insights/LatestInsights';
import InsightsMarquee from '../pagesparts/insights/InsightsMarquee';
import Footer from '../components/Footer'
import BlackAnimation from '../components/BlackAnimation';

function Insights() {
  useEffect(() => {
    if(window.innerWidth >= 770){
      const locomotiveScroll = new LocomotiveScroll();
    }
  },[])
  
  return (
    <section className='bg-[#f1f1f1]'>
      <BlackAnimation pageName={"insights"}/>
        <Headroom>
            <Navbar />
        </Headroom>
        <InsightsHeading />
        <LatestInsights />
        <InsightsMarquee />
        <Footer />
    </section>
  )
}

export default Insights
