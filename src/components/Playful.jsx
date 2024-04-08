import React, { useRef, useState } from "react";
import playfulImg from '../assets/playfulbg.jpg'
import videoUrl from '../assets/playfulvideo.mp4'
import Eyes from "./Eyes";
function Playful() {
  const [clicked, setClicked] = useState(false);

  const videoRef = useRef(null);

  function handleVideoEnded() {
    setClicked(false);
    videoRef.current.play();
  }

  return (
    <div
      className="w-full md:h-screen h-[90vw] overflow-hidden cursor-pointer relative"
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.8"
        className="relative w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${playfulImg})` }}
      >
        {/* Eyes comes here */}
        <Eyes text='Tap me'/>
        
        {/* Video play */}
        <div className="playvideo w-full h-full absolute">
        <video
          ref={videoRef}
          src={`${videoUrl}`}
          onClick={() => setClicked(!clicked)}
          onEnded={handleVideoEnded}
          autoPlay
          muted
          className={`${
            clicked ? "opacity-1" : "opacity-0"
          } w-full h-full md:object-cover object-contain transition-display duration-500`}
        ></video>
      </div>
      </div>

    </div>
  );
}

export default Playful;
