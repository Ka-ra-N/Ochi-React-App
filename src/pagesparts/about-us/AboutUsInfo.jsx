import React from "react";
import SecondBtnArrow from "../../components/SecondBtnArrow";
import Eyes from "../../components/Eyes";
const AboutUsInfo = () => {
  return (
    <div className="mt-16 mb-5 py-5 border-y border-y-[#b2b2b2] montereal">
      <div className="px-[3.5vw] md:flex justify-between">
        <p className="lg:basis-1/2 md:basis-1/3 md:mb-0 mb-10">About us:</p>

        <div className="right-content md:flex justify-between lg:basis-1/2 md:basis-2/3">
          <div className="only-text basis-1/2 flex flex-col gap-10 md:px-[1.3vw]">
            <p>
              In Ukrainian, ochi - means eyes. It's not just a beautiful word,
              but our philosophy. Almost everything that needs to be
              communicated is better shown than explained.
            </p>
            <p>
              We believe a great presentation evokes interest and drives
              business results far better than any saying can. Hence, we founded
              ochi to help you persuade colleagues and clients by creating
              eye-opening presentations.
            </p>
          </div>

          <div className="btn md:mt-0 mt-10">
            <SecondBtnArrow btnText={"our works"} linkTo="/our-work" />
          </div>
        </div>
      </div>
      {/* Eyes */}
      <div className="eyes-moving relative w-full h-[40vh] lg:my-24">
        <Eyes bigEyes={true} haveBorder={true}/>
      </div>

      {/* Another TagLine */}
      <p className="px-[3.5vw] text-3xl md:text-[3.5rem] text-[#212121] leading-none md:mb-8 mb-4 font-medium">We save businesses from ugly and ineffective presentations.</p>
    </div>
  );
};

export default AboutUsInfo;
