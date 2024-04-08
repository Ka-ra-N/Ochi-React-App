import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const SecondBtnArrow = ({btnText, linkTo='#'}) => {
  return (
    <NavLink className={`flex gap-1 group`} to={linkTo}>
              <button className="uppercase border border-[#575757] duration-[400ms] rounded-full px-3 py-1 md:text-sm text-base group-hover:bg-[#212121] group-hover:text-white">
                {btnText}
              </button>
              <button className="md:block hidden self-center border border-[#575757] rounded-full text-xl p-1 relative before:absolute before:w-0 before:h-0 before:bg-[#212121] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 overflow-hidden group-hover:before:w-full group-hover:before:h-full  z-10 before:-z-10 group-hover:text-white before:duration-[400ms] duration-[400ms] before:rounded-full">
                <MdOutlineArrowOutward />
              </button>
    </NavLink>
  )
}

export default SecondBtnArrow