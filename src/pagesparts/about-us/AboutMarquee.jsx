import React, { useRef, useState } from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import ochiLogo from "../../assets/ochi.svg";
// import person2 from '../../assets/unique-card2.jpg'
import SwiperComponent from "../../components/SwiperComponent";

const AboutMarquee = () => {
  const mouseFollower = useRef(null);
  const [hasMouseCome, setMouseCome] = useState(false);

  const handleMouseMove = (event) => {
    const follower = mouseFollower.current;
    const { clientX, clientY } = event;
    setMouseCome(true);
    console.log(event);
    if (setMouseCome) {
      follower.style.top = clientY - 100 + "px";
      follower.style.left = clientX - 100 + "px";
    }
  };

  return (
    <div className="bg-[#004D43] rounded-t-xl montereal text-[#212121] pb-10">
      <MarqueeComponent
        textInMarquee={"core of the team"}
        isHeightScreen={false}
        animationDuration={11}
      />

      <div className="relative mt-20 z-0 overflow-hidden">
        <div
          className="relative xl:w-5/6 2xl:w-3/4 mx-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseCome(false)}
        >
          <span
            className={`hidden cursor-grab lg:block absolute bg-[#CDEA68]/70 backdrop-blur-sm rounded-full p-7 py-10 top-0 z-10 left-0 duration-75 uppercase ${
              hasMouseCome ? "scale-100" : "scale-0"
            } `}
            ref={mouseFollower}
          >
            Swipe
          </span>
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
};

export const UniqueCards = ({ name, role, imgSrc, count }) => {
  return (
    <div
      className={`h-full w-full flex justify-between overflow-hidden rounded-xl  p-4 absolute`}
    >
      <div className="basis-1/2 flex flex-col justify-between">
        <p className="w-12">
          <img
            src={ochiLogo}
            alt="Ochi Logo"
            className="h-full w-full object-cover"
          />
        </p>

        <div className="name uppercase grotesk lg:text-8xl md:text-6xl text-3xl lg:-space-y-5 md:-space-y-4 md:leading-none leading-[.75]">
          <p>{name[0]}</p>
          <p>{name[1]}</p>
        </div>
      </div>

      <div className="basis-auto flex flex-col justify-between">
        <div>
          <div className="person-img rounded-xl overflow-hidden lg:h-80 h-28 md:h-60">
            <img
              src={imgSrc}
              alt="Black & White Man with glasses"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs mt-4 capitalize">{role}</p>
        </div>

        <div className="grotesk text-end lg:text-8xl text-3xl md:text-6xl">
          <p>
            {count}
            <span className="font-extrabold">/</span> 4
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;
