import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import OverlayModal from "./OverlayModal";
function ButtonArrow({buttonContent}) {
  return (
    <div className="btn flex gap-2 group">
      <button className="uppercase border border-[#212121] p-[.35rem] px-3 lg:text-[1vw] text-sm rounded-full group-hover:bg-[#212121] group-hover:text-white duration-200 inline-block">
        {buttonContent}
      </button>
      <button
        className="hidden md:block p-2 text-transparent group-hover:text-white group-hover:border group-hover:border-[#212121] rounded-full
                                        relative before:absolute before:h-[.35rem] before:w-[.35rem] group-hover:before:bg-[#212121] before:top-1/2 before:left-1/2 before:-translate-x-1/2 group-hover:before:w-full group-hover:before:h-full before:duration-300 before:-translate-y-1/2 before:rounded-full z-0 before:-z-10 
                                        "
      >
        <MdOutlineArrowOutward />
      </button>
    </div>
  );
}
export default ButtonArrow;
