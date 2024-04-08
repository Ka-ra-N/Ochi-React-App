import React from 'react'

function Services_one() {
  return (
    <div className='text-[#212121]'>
      <div className="first-heading md:my-[12vh] my-[15vh]">
        <h1 className='uppercase grotesk px-[3.5vw] lg:text-[9.5vw] text-7xl'>services</h1>
      </div>

      <div className="sub-heading border-y border-y-[#B2B2B2] montereal">
        <div className='sub-heading-text px-[3.5vw] text-[5.5vw] md:text-[4.5vw] md:leading-[4.5vw] pb-[4.5vw] pt-[1.5vw]'>
          <p>We create <span className='relative underline-transition'>eye-catching</span> and <span className='relative underline-transition'>eye-opening</span></p>
          <p>presentations that educate, inspire and influence</p>
          <p>action.</p>
        </div>
      </div>

      <div className="simple-approach lg:flex pt-[1.5vw] pb-[4.5vw] montereal">
        <div className="simple-approach-left basis-1/2 px-[3.5vw]">
          <p>We do this by following</p>
          <p>simple approach:</p>
        </div>
        <div className="simple-approach-right basis-1/2 px-[3.5vw] lg:mt-0 mt-8">

          <div className="simple-approach-right-first-part lg:flex gap-8">
            <div className='goal basis-1/2'>
              <p className='relative underline-transition inline-block'>Goal defines it all</p>
              <p className='mt-4'>What do you want to achieve?</p>
              <p>Understanding the purpose of your presentation allows us to tailor it to ensure it hits the mark and drives results.</p>
            </div>
            <div className='context basis-1/2 lg:mt-0 mt-7'>
              <p className='relative underline-transition inline-block'>Context makes a difference</p>
              <p className='mt-4'>When do you present? Online or live?</p>
              <p>At a sales meeting, at a conference, or just sending a cold email? We knit the context together to decide the style of the presentation.</p>
            </div>
          </div>

          <div className="simple-approach-right-second-part lg:flex mt-7">
            <div className='audience basis-1/2'>
              <p className='relative underline-transition inline-block'>Audience is the hero</p>
              <p className='mt-4'>Who is it for? What do they want? Why does it matter to them? </p>
              <p>We need to know your audience well enough to deliver a personalized presentation that they truly care about.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services_one
