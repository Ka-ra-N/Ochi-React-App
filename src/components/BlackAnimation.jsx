import React, { useEffect, useRef } from "react";
import Eyes from "./Eyes";

const BlackAnimation = ({ pageName }) => {
  const animationTimeout = useRef(null);

  useEffect(() => {

    document.body.classList.add('overflow-hidden');

    const animationDuration = 2800; 
    animationTimeout.current = setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, animationDuration);

    return () => {
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []); 

  return (
    <div
      className="blackAnimationBox fixed w-screen h-[0vh] top-[100vh] overflow-hidden bg-[#212121] text-white px-[3.5vw]"
      style={{ zIndex: 2000 }}
    >
      <p
        className="lg:mt-[15rem] mt-[19rem] md:text-9xl text-8xl grotesk uppercase"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="850"
      >
        {pageName}
      </p>

      <div className="absolute h-52 w-52 right-14 grid place-items-center">
        <Eyes smallEyes={true} />
      </div>
    </div>
  );
};

export default BlackAnimation;
