import React, { useState } from "react";
import ButtonArrow from "./ButtonArrow";

function ReviewComponent({
  name1,
  name2,
  btnText = [],
  imgSrc = null,
  reviewText,
  isOpen,
  onToggleAccordion
}) {

  const isReviewTextArray = Array.isArray(reviewText);

  return (
    <div
      className={`${
        isOpen && `md:h-[70vh] lg:h-[35rem]  ${isReviewTextArray ? `h-[45rem]` : `${btnText.length > 0 ? "h-[110vh]" : "h-[85vh]"}`}`
      } border-b border-b-[#B2B2B2] px-[3.5vw] py-4 ${isReviewTextArray ? 'h-24 lg:h-14' : 'h-14'} overflow-hidden duration-500 ease-in-out`}
    >
      <div>
        {/* Large screens */}
        <div className="flex w-full justify-between mb-10">
          <span className={`basis-1/2`}>{name1}</span>

          {btnText.length>0 && (
          <span className="hidden md:block basis-1/4">
            <div className="all-text">
              <p className={`mb-4 duration-300 ${isOpen ? "opacity-1" : "opacity-0"}`}>Services:</p>

              <div className={`services-btns text-[#212121] flex flex-col gap-2 ${isOpen ? "opacity-1" : "opacity-0"} duration-500`}>
                {Array.from({ length: btnText.length }, (_, i) => {
                  return (
                    <div key={i}>
                      <ButtonArrow buttonContent={btnText[i]}/>
                    </div>
                  );
                })}
              </div>

              <p></p>
            </div>
          </span>
          )}

          <span className={`hidden md:block ${isReviewTextArray ? 'basis-2/4': 'basis-2/5'}`}>
            <p>{name2}</p>
            {imgSrc &&
            <div className={`${!isOpen && "opacity-70"} duration-500 overflow-hidden rounded-xl max-w-28 mt-14 mb-8 group`}>
              <img
                src={imgSrc}
                alt="Some Picture"
                className={`w-full h-full object-cover duration-500 scale-1 ${isOpen ? "img-scaling-down-animated":"scale-110"}`}
              />
            </div>
            }

            {Array.isArray(reviewText) ?
            (<div className={`flex flex-col gap-4 my-5 ${isOpen ? "block" : "hidden"}`}>
              {reviewText.map((review, index) =>
                <p key={index}>{review}</p>
              )}
            </div>):
            (<p>{reviewText}</p>)
            }
          </span>

          <button
            onClick={onToggleAccordion}
            className={`${isOpen ? "text-[#B2B2B2]" : "text-[#212121] underline-transition"} cursor-pointer h-6 uppercase relative `}
          >
            Read
          </button>
        </div>
        
        {/* Services - mobile screens */}
        {btnText.length > 0 && (
        <div className="services-text md:hidden block mb-8">
          <p className="mb-4">Services:</p>

          <div className="services-btns text-[#212121] flex gap-2 flex-wrap">
            {Array.from({ length: btnText.length }, (_, i) => {
              return (
                <div key={i}>
                <ButtonArrow buttonContent={btnText[i]}/>
              </div>
              );
            })}
          </div>

          <p></p>
        </div>
        )}

        {/* Name2 - mobile screens */}
        <div className={`name2 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <p>{name2}</p>
          
          {imgSrc &&

          <div className="overflow-hidden rounded-xl max-w-28 my-4">
            <img
              src={imgSrc}
              alt="William-Barnes"
              className="w-full h-full object-cover"
            />
          </div>

          }
          
          {isReviewTextArray ?
            (<div className="flex flex-col gap-4 my-5">
              {reviewText.map((review, index) =>
                <p key={index}>{review}</p>
              )}
            </div>):
            (<p>{reviewText}</p>)
            }
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
