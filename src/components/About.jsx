import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import twoPersons from '../assets/twopersons.jpg'
import { NavLink } from "react-router-dom";
function About() {
  const [isBtnHovered, setBtnHovered] = useState(false)
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.43' className="min-h-full max-w-full bg-[#cdea68] rounded-t-xl md:rounded-t-3xl pb-[15vh] md:pb-[20vh]">
      {/* First Div Text */}

      <div className="text-1 montereal font-medium leading-[6vw] text-[#212121] text-[5.5vw] md:text-[4.5vw] md:leading-[4.5vw] py-[6vw] px-[3.5vw]">
        <h1 className="pr-[10vw]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to <span className="relative underline-transition">raise funds</span>, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>

      {/* Second Div Text */}
      <div className="block md:flex text-2 w-full min-h-[30vw] border-y py-[1.4vw] border-y-[var(--border-green)] text-[#212121] montereal">
        <div className="basis-1/2 px-[4vw] montreal">What you can expect:</div>
        <div className="md:flex block basis-1/2 px-[1.5vw]">
          <div className="basis-1/2">
            <p className="px-[2.3vw] mt-[4vw] md:max-w-[22vw]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="px-[2.3vw] mt-[4vw] md:max-w-[22vw] md:mt-[2.4vw]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>

          <div className="px-[2.3vw] md:my-[4vw] basis-1/2 md:flex justify-center items-center">
            <ul>
              <li className="mb-[1.8vw]">S:</li>
              <li>Instagram</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third div with an image */}
      <div className="w-full montereal px-[3vw] md:flex py-[1.4vw]">
        <div className="basis-1/2">
            <p className="font-medium text-3xl md:text-5xl text-[#212121] ">Our approach:</p>
            {/* Read More Button */}

            <NavLink to="/about-us">
            <button onMouseOver={()=> setBtnHovered(true)} onMouseLeave={()=> setBtnHovered(false)} className="md:mt-[2vw] text-white flex rounded-full bg-[#212121] items-center gap-7 px-4 pl-8 py-4 justify-between my-[2vw] overflow-hidden group relative z-0
            after:bg-black after:absolute after:w-[200%] after:h-[110%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after after:rounded-[50%] after:-z-10 hover:border-none after:transition-top after:duration-300 after:top-[200%] hover:after:top-1/2
            ">
              <p className="uppercase text-sm">Read More</p>
              <span className="relative z-20 text-lg
              before:absolute before:bg-white before:w-3 before:h-3 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:-z-10 group-hover:text-[#212121] duration-75 group-hover:before:w-10 group-hover:before:h-10 before:duration-300
              "><MdOutlineArrowOutward /></span>
            </button>
            </NavLink>

            {/* End Read More Button */}
        </div>
        <div className={`${isBtnHovered ? "scale-95" : "scale-100"}  duration-[2000ms] rounded-xl overflow-hidden basis-1/2 my-[5vw] md:my-0`}>
            <div className={`w-full h-full ${isBtnHovered ? "scale-110" : "scale-100"} duration-[1500ms]`}>
              <img src={`${twoPersons}`} alt="A man and woman with black t-shirt and glasses" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;

