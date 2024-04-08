import React from 'react'
import peopleGroup from '../../assets/about-us-img.jpg'
const AboutWeOchi = () => {
  return (
    <div className="montereal px-[3.5vw] py-28">

        <div className="md:flex mb-24">
            <p className='lg:basis-1/2 md:basis-1/3'>We are ochi design:</p>

            <div className="lg:basis-1/4 basis-1/3 lg:px-5 md:px-2">
                <p className='mb-10'>
                    The team of designers, storytellers, and passionate collaborators, who work together to create industry-shifting presentations that win people's hearts and minds.
                </p>
                <p>
                And we strive to become one of the most recognizable & influential presentation agencies of the time who does that.
                </p>
            </div>
        </div>

        {/* Image of people */}
        <div className="img-people mt-10 rounded-xl overflow-hidden"
        data-aos ="fade-up" data-aos-duration="800" data-aos-once data-scroll data-scroll-section
        >
            <img src={peopleGroup} alt="Group of People" className='w-full h-full object-cover rounded-xl'
            data-scroll data-scroll-section data-scroll-speed='.05'
            />
        </div>
    </div>
  )
}

export default AboutWeOchi