import React from "react";
import TagLine from "./TagLine";
import SecondBtnArrow from "./SecondBtnArrow";


function LandingPage() {
  return (
    <div className="max-w-full pt-1 text-[#212121] lg:block sm:grid relative" data-scroll data-scroll-section data-scroll-speed='-.8'>

      {/* TEXT IN LEFT */}
      <div className="textstructure 2xl:my-[22vh] md:my-[12vh] my-[15vh]">
        {["we create", "eye-opening", "presentations"].map((item, index) => (
          <TagLine key={index} itemContent = {item} indexes={index} indexVal={1}/>
        ))}
      </div>

      {/* HORIZONTAL LINE DIV*/}
      <div className="border-t border-t-[var(--border-dark)] lg:my-[7.4vw] my-20">
        <ul className="md:flex md:flex-row grid  md:gap-0 gap-5 py-3  justify-between md:px-12 px-7 md:items-center items-start  montereal lg:text-base md:text-xs text-lg">
          <li>For public and private companies</li>
          <li>From the first pitch to IPO</li>
          <li>
            <SecondBtnArrow btnText={"start the project"} linkTo="/about-us"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
