import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Btn_with_arrow({
  textContent,
  background = "transparent",
  text = "white",
  takeMargin = true,
  isDotBlack = false,
  toLink = null
}) {
  return (
    <div
      className={`btn-view-case flex justify-center items-center ${
        takeMargin ? "lg:mt-[9vh]" : "lg:mt-0"
      }`}
    >
      <NavLink to={toLink}>
      
      <button
        className={`${
          isDotBlack ? "md:mt-2 border border-[#212121] hover:text-white after:bg-[#212121]" : "md:mt-[2vw] border-none after:bg-black"
        } text-${text} flex rounded-full bg-${background} items-center gap-7 px-4 pl-8 py-4 justify-between my-[2vw] overflow-hidden group relative z-0 after:absolute after:w-[200%] after:h-[110%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after after:rounded-[50%] after:-z-10 hover:border-none after:transition-top after:duration-300 after:top-[200%] hover:after:top-1/2
          `}
      >
        <p className="uppercase text-sm">{textContent}</p>
        
          <span
            className={`relative z-20 text-lg
              before:absolute ${
                isDotBlack ? "before:bg-[#212121] group-hover:text-white" : "before:bg-white group-hover:text-[#212121]" 
              } before:w-[.79rem] before:h-[.79rem] before:top-[51%] before:left-[46%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:-z-10 group-hover:before:w-10 group-hover:before:h-10 before:duration-300`}
          >
            <MdOutlineArrowOutward />
          </span>
      </button>

      </NavLink>
    </div>
  );
}

export default Btn_with_arrow;
