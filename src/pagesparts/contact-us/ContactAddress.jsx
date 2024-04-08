import React from 'react'
import SecondBtnArrow from '../../components/SecondBtnArrow'

const ContactAddress = () => {
  return (
    <div className='contact-address pt-5 pb-16 border-t border-t-[#9BAF53] montereal text-[#212121]'>
        <div className="size-full px-[3.5vw] md:flex justify-between">
            <p className='lg:basis-1/2 md:basis-1/3'>Our contact</p>

            <div className="lg:basis-1/2 md:basis-2/3 md:flex justify-between">

                {/* Address */}
                <div className='basis-1/2'>
                    <ul className='flex flex-col items-start'>
                        <li className='mb-5'>L:</li>
                        <li className='underline-transition relative'>Uttam Nagar,</li>
                        <li className='mb-5 underline-transition relative'>New Delhi,</li>
                        <li className='underline-transition relative'>India,</li>
                        <li className='underline-transition relative'>110059</li>
                    </ul>
                </div>

                {/* Btn */}
                <div className='md:mt-0 mt-10'>
                    <SecondBtnArrow btnText={"HELLO@OCHI.DESIGN"} linkTo="/our-work"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactAddress