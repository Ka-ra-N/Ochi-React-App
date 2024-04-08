import React from 'react'
import Eyes from '../../components/Eyes'

const WorkHeroSection = () => {
  return (
    <section className=' bg-[#CDEA68] overflow-hidden px-[3.5vw]'>
        <h1 className='2xl:my-[22vh] md:my-[12vh] my-[3rem] grotesk lg:text-[9.5vw] text-6xl text-[#212121] uppercase relative'>Work <sup className='montereal text-base absolute top-0'>(9)</sup></h1>
        
        <div className="h-[40vh] relative">
            <Eyes  bigEyes={true}/>
            <div className="line-1 rounded-t-xl bg-[#BFDA62] h-10 absolute bottom-10 w-[85%] left-1/2 -translate-x-1/2">
                
            </div>
            <div className="line-2 rounded-t-xl bg-[#B8D25E] h-10 absolute bottom-0 w-full">
                
            </div>
        </div>
    </section>
  )
}

export default WorkHeroSection