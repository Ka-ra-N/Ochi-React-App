import React from 'react'
import Eyes from '../../components/Eyes'
import ContactAddress from './ContactAddress'

const ContactGreen = () => {

  return (
    <section className=' bg-[#CDEA68]'>
      <div className='w-full grid place-items-center relative py-28'>

        {/* Eyes Container */}
        <div className="eyes-container absolute z-10"
        data-scroll 
        data-scroll-section
        data-scroll-speed=".3"
        >
          <Eyes />
        </div>


        <div className="all-social-texts uppercase grotesk lg:text-[15vw] md:text-[12.5vw] text-7xl text-[#212121] leading-[.75] text-center grid lg:grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-x-10 md:gap-8 gap-6">

          {/* All Social Texts */}
          {[
          ['instagram', "https://www.instagram.com/the.moody_boy_01/"],
          ['behance', "https://www.behance.net/ochi_design"],
          ['facebook', "https://www.facebook.com/people/OCHI-presentation-design/100067218942460/"],
          ['linkedin', "https://www.linkedin.com/in/karan-singh-koshyari-743a572a5"]
          ].map((item,index) => 
          <a key={index} href={item[1]} className='relative group overflow-hidden'>
              <div className='relative overflow-hidden'>
                <p className='primary-text md:group-hover:-translate-y-[30vh] duration-200' >{item[0]}</p>
                <p className='absolute hidden md:block left-1/2 -translate-x-1/2 top-[30vh] group-hover:top-0 duration-200'>{item[0]}</p>
              </div>
          </a>
          )}

        </div>
      </div>

      <ContactAddress />
    </section>
  )
}

export default ContactGreen