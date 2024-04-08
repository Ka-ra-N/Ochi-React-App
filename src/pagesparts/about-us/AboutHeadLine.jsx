import React from 'react'
import TagLine from '../../components/TagLine'

const AboutHeadLine = () => {
  return (
    <div className='max-w-full pt-1 text-[#212121] lg:block sm:grid mb-32'>
      <div className="about-heading 2xl:my-[22vh] md:my-[5rem] my-[3rem]">
        {["we are", "ochi design"].map((item,index) => {
          return (
            <TagLine key={index} indexes={index} itemContent={item} indexVal={1} />
          )
        })}
      </div>
    </div>
  )
}

export default AboutHeadLine