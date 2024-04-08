import React from 'react'
import MarqueeComponent from '../../components/MarqueeComponent'
import rightCard1 from '../../assets/marquee-card1.jpg'
import rightCard2 from '../../assets/marquee-card2.png'
import rightCard3 from '../../assets/marquee-card3.png'

const BehanceMarqee = () => {
  return (
    <div className='bg-[#004D43] text-white pb-14 montereal'>
        <MarqueeComponent textInMarquee={'Behance'} isHeightScreen={false}/>

        <div className="md:flex justify-between px-[3.5vw] basis-1/5 pt-4">
            <p>Latest publications:</p>

            <div className="cards-right lg:flex lg:flex-row flex-col basis-[65%] gap-3 lg:mt-0 mt-10">

                {[
                    [rightCard1, "OFFICEVIBE PPT TEMPLATE"],
                    [rightCard2, "TRAWA ENERGY PITCH DECK"],
                    [rightCard3, "TEACH FOR UKRAINE"],
                ].map((item, index) => {
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


export const ZoomingCards = ({items}) =>{
    return (
        <div className="first-card flex flex-col gap-4 relative lg:mb-0 mb-8">
            <div className='overflow-hidden rounded-xl group h-[40vh]'>
                <img src={items[0]} alt="People pic" className='object-cover w-full h-full group-hover:scale-110 duration-500'/>
            </div>
            <p className='before:left-0 before:w-3 before:h-3 before:rounded-full before:bg-white before:absolute px-5 before:top-[.4rem] relative'>{items[1]}</p>
        </div>
    )
}

export default BehanceMarqee