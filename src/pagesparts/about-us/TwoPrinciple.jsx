import React from 'react'
import principleImg1 from '../../assets/two-principle1.jpg'
import principleImg2 from '../../assets/two-principle2.jpg'
import { ClientsReviewCards } from '../../components/ClientsReview'
import PresentableCard from './PresentableCard'
import img1 from '../../assets/presentable-card1.jpg'
import DraggablePart from './DraggablePart'

const TwoPrinciple = () => {
  return (
    <section className='w-full montereal bg-[#f1f1f1] pt-32 rounded-t-xl'>
        <h3 className="text-3xl md:text-[3.5rem] border-b border-b-[#b2b2b2] pb-10 px-[3.5vw] text-[#212121] leading-none lg:flex ">
        <span className='lg:w-[70%] 2xl:w-full'>Two principles we stand behind in every part of our work:</span>
        </h3>

        <div className="lg:flex px-[3.5vw] mt-12">

          {/* 1st principle */}
          {[
            [`${principleImg1}`, "The presentation helps to see what's hidden, unseen, or simply never known before. We use design to drive their attention, focus them to clearly see, and help them feel the message. We’ve built long-lasting"],
            [`${principleImg2}`, "Whether the presentation needs to convince or educate it always has to change audience perception. We seek insights to make decks unexpectedly enlightening for our audience."],
          ].map((item, index) => {
            return (
              <div className="md:basis-1/2 lg:mb-0 mb-20" key={index}>

                <div className="img-container overflow-hidden rounded-xl w-full">
                  <img src={item[0]} alt="Eye Opening Image" className='object-cover w-full' />
                </div>
    
                <p className='lg:w-1/2 mt-5'>
                  {item[1]}
                </p>
  
            </div>
            )
          })}

        </div>

        <div className='lg:mt-20 border-b border-b-[#b2b2b2]'>
          <p className='text-3xl md:text-[3rem] py-10 text-[#212121] leading-none px-[3.5vw] lg:w-1/2'>We’ve built long-lasting partnerships with the most ambitious brands across the globe:</p>
        </div>

        {/* Draggable Cards */}
        <div className="w-full">
          <DraggablePart />
        </div>
        
        {/* Clients Review Cards */}
        <div className='pb-12'>
          <ClientsReviewCards />
        </div>

        {/* Insights Container */}
        <div className="insights pt-12">
          <h3 className="text-3xl md:text-[3.5rem] border-b border-b-[#b2b2b2] pb-8 px-[3.5vw] text-[#212121]">
            Insights
          </h3>

          <div className="md:flex px-[3.5vw] justify-between mt-4 pb-28">
            <p>Latest publications:</p>

            {/* Card */}
            <div className="basis-2/3 md:mt-0 mt-10"><PresentableCard btnAry={['presentation template']} imgSrc={`${img1}`} para1={"Developing company-wide presentation template for Premium Blend."} authorDetails={["Ihor Hulyahrdoskyy", "07 Dec. 22"]}/></div>
          </div>

        </div>

    </section>
  )
}

export default TwoPrinciple