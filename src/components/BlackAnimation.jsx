import React, { useEffect, useState } from "react";
import Eyes from "./Eyes";

const BlackAnimation = ({ pageName }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleAnimationStart = () => setIsAnimating(true);
    const handleAnimationEnd = () => setIsAnimating(false);

    const animationElement = document.querySelector(".blackAnimationBox");
    animationElement.addEventListener("animationstart", handleAnimationStart);
    animationElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      animationElement.removeEventListener(
        "animationstart",
        handleAnimationStart
      );
      animationElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const handleScroll = (event) => {
    if (isAnimating) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
      document.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimating]);

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
