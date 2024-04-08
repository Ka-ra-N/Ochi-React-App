import React from "react";

function CardBody({ imgSrc, imgAlt, listText}) {
  return (
    <div className="card-body-img-container md:w-[45vw] md:h-[40vw] group relative">
      <div className="card-heading-text flex gap-[.5rem] items-center my-4">
        <span className="bg-[#212121] w-3 h-3 inline-block rounded-full"></span>
        <span className="text-sm">{listText}</span>
      </div>
      <div className="card-body-img-container overflow-hidden rounded-xl  group-hover:scale-95 duration-500 ">
        <div className="card-img w-full h-full group-hover:scale-110 duration-1000">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>  
      <div className="card-hover-text h-auto w-full absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <div className="relative h-28 w-full overflow-hidden ">
            <p className="absolute font-bold text-[#cdea68] grotesk text-5xl md:text-9xl text-center w-full -bottom-28 group-hover:bottom-0 duration-300 whitespace-nowrap">
              {listText}
            </p>
          </div>
      </div>
    </div>
  );
}

export default CardBody;
