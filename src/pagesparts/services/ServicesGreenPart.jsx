import React, { useRef, useState } from "react";
import ButtonArrow from "../../components/ButtonArrow";
import raiseFundImg from "../../assets/fundRaise.jpg";
import sellProductImg from "../../assets/sellProducts.jpg";
import additionalImg from "../../assets/additional.jpg";
import hireManageImg from "../../assets/hireManage.jpg";
import OverlayModal from "../../components/OverlayModal";

const ServicesGreenPart = () => {
  const [isImg1Expanded, setIsImg1Expanded] = useState(false);
  const [isImg2Expanded, setIsImg2Expanded] = useState(false);
  const [isImg3Expanded, setIsImg3Expanded] = useState(false);
  const [isImg4Expanded, setIsImg4Expanded] = useState(false);

  return (
    <>
      <div className="bg-[#CDEA68] mt-28 text-[#212121] montereal py-3 relative pb-28">
        <div className="services-summary text-[5.5vw] md:text-[3.8vw] md:leading-[4vw] pt-[6vw] px-[3.5vw]">
          <p>
            <span className="relative underline-transition">
              Let’s be honest.
            </span>{" "}
            There are really no excuses to have a bad presentation anymore. No
            one has time for poorly communicated ideas. Focus on what you do
            best —{" "}
            <span className="relative underline-transition">
              growing your business
            </span>
            , while we do our best at making your presentations awesome.
          </p>
        </div>

        <div className="our-capabilites mt-14 border-t border-t-[#99AD53] py-4">
          <div className="lg:flex px-[3.5vw] justify-between">
            <p>Our Capabilites:</p>

            {/* Content of capabilites */}
            <div className="basis-4/5">
              {/* Upper part */}

              <div className="upper-part md:flex justify-between">
                <div className="animated-img-container lg:block hidden rounded-xl overflow-hidden basis-1/5 self-center">
                  <div
                    className={`w-0 h-full origin-center duration-500 ${
                      isImg1Expanded || isImg2Expanded
                        ? "w-full"
                        : "w-0 opacity-0"
                    }`}
                  >
                    {(isImg1Expanded || isImg2Expanded) && (
                      <img
                        src={
                          (isImg1Expanded && raiseFundImg) ||
                          (isImg2Expanded && sellProductImg)
                        }
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <div
                  className="lg:px-5 lg:mt-0 mt-10"
                  onMouseOver={() => {
                    setIsImg1Expanded(true);
                  }}
                  onMouseLeave={() => {
                    setIsImg1Expanded(false);
                  }}
                >
                  <ServicesGreenPartListItems
                    headingLine={"raise funds"}
                    buttonItems={["investor deck", "startup pitch"]}
                  />
                </div>

                <div
                  className="lg:px-5 lg:mt-0 mt-10"
                  onMouseOver={() => {
                    setIsImg2Expanded(true);
                  }}
                  onMouseLeave={() => {
                    setIsImg2Expanded(false);
                  }}
                >
                  <ServicesGreenPartListItems
                    headingLine={"SELL PRODUCTS"}
                    buttonItems={[
                      "buisness proposal",
                      "company presentation",
                      "product presentatio",
                      "sales deck",
                      "service deck",
                    ]}
                  />
                </div>
              </div>

              {/* Lower part */}

              <div className="lower-part md:flex justify-between md:mt-20">
                <div className="animated-img-container lg:block hidden rounded-xl overflow-hidden basis-1/5 self-center">
                  <div
                    className={`w-0 h-full origin-center duration-500 ${
                      isImg3Expanded || isImg4Expanded
                        ? "w-full"
                        : "w-0 opacity-0"
                    }`}
                  >
                    {(isImg3Expanded || isImg4Expanded) && (
                      <img
                        src={
                          (isImg3Expanded && hireManageImg) ||
                          (isImg4Expanded && additionalImg)
                        }
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <div
                  className="lg:px-5 lg:mt-0 mt-10"
                  onMouseOver={() => {
                    setIsImg3Expanded(true);
                  }}
                  onMouseLeave={() => {
                    setIsImg3Expanded(false);
                  }}
                >
                  <ServicesGreenPartListItems
                    headingLine={"HIRE & MANAGE PEOPLE"}
                    buttonItems={[
                      "big news deck",
                      "branded template",
                      "onboarding presentation",
                      "policy deck & playbook",
                      "progress report",
                    ]}
                  />
                </div>
                <div
                  className="lg:px-5 lg:mt-0 mt-10"
                  onMouseOver={() => {
                    setIsImg4Expanded(true);
                  }}
                  onMouseLeave={() => {
                    setIsImg4Expanded(false);
                  }}
                >
                  <ServicesGreenPartListItems
                    headingLine={"ADDITIONAL"}
                    buttonItems={[
                      "agency",
                      "branding",
                      "corporate training",
                      "redesign",
                      "review",
                    ]}
                  />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export const ServicesGreenPartListItems = ({
  headingLine,
  buttonItems = [],
}) => {
  return (
    <ul className="flex flex-col gap-3">
      <li className="relative before:absolute before:w-[.65rem] before:h-[.65rem] before:bg-[#212121] before:-left-1 before:top-1 before:rounded-full uppercase px-4 text-sm">
        {headingLine}:
      </li>
      {buttonItems.map((item, index) => (
        <li key={index} className="inline-block">
          <ButtonArrow buttonContent={item} />
        </li>
      ))}
    </ul>
  );
};


export default ServicesGreenPart;
