import React from 'react'
import MarqueeComponent from '../../components/MarqueeComponent'
import img1 from '../../assets/insights-img1.png'
import img2 from '../../assets/insights-img2.jpg'
import img3 from '../../assets/insights-img3.jpg'
import {ZoomingCards} from '../our-work/BehanceMarqee'

const InsightsMarquee = () => {
  return (
    <div className='bg-[#004d43] mt-16 montereal pb-28'>
        {/* Instagram Marquee */}
        <div className="marquee-container">
            <MarqueeComponent textInMarquee={'instagram'} animationDuration={10} isHeightScreen={false}/>
        </div>

        {/* Latest Publications */}
        <div className="md:flex justify-between px-[3.5vw] basis-1/5 pt-4 text-white">
            <p>Latest publications:</p>

            <div className="cards-right lg:flex lg:flex-row flex-col basis-[65%] gap-3 lg:mt-0 mt-10">
                
                {[
                    [img1, "Sales calls?⁠ Oh no!👀"],
                    [img2, "Are you trying to be the main character?"],
                    [img3, "New Top 7 💥"]
                ].map((item, index)=>{
                    return (
                        <div key={index}>
                            <ZoomingCards items={item}/>
                        </div>
                    )
                })}

            </div>

        </div>
    </div>
  )
}

export default InsightsMarquee