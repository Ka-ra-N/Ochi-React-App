import React from "react";
import Eyes from "./Eyes";
import Btn_with_arrow from "./Btn_with_arrow";
function ReadyStart() {
  return (
    <>
      <div
        className="w-full min-h-fit bg-[#CDEA68] grid place-items-center relative lg:py-28 py-5"
        data-scroll data-scroll-section
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        data-scroll
        data-scroll-speed='.5'
        >
          <Eyes position={1/3} zIndex={40}/>
        </div>

        <div className="start-text grotesk lg:text-[15vw] text-6xl text-center leading-[.75] uppercase text-[#212121]">
          <h1>Ready</h1>
          <h1>to start</h1>
          <h1>the project?</h1>

          {/* Button */}
          <div className="buttons-ready montereal lg:mt-0 mt-[30vh]">
            <Btn_with_arrow
              textContent="Start the project"
              background="[#212121]"
              toLink = "/contact-us"
            />
            <p className="text-base">or</p>
            <Btn_with_arrow
              textContent="Hello @Karan_Singh"
              text="[#212121]"
              takeMargin={false}
              isDotBlack = {true}
              toLink="mailto:karansingh14032@gmail.com"
            />
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default ReadyStart;
