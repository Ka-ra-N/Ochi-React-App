import React, { useEffect, useState } from "react";
function Eyes({text=null, position='1/2',zIndex=0, bigEyes = false, haveBorder = false, smallEyes = false}) {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
    
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });

  return (
        <div className={`eyes z-${zIndex} absolute left-${position} -translate-x-1/2 top-${position} -translate-y-1/2 flex gap-10`}
        
        >
          <div className={`first-eye ${haveBorder && "border-[.15rem] border-[#b2b2b2]"} bg-white rounded-full grid place-items-center ${bigEyes ? "w-[20vw] h-[20vw]" : "w-[15vw] h-[15vw]"} ${smallEyes && "w-[8vw] h-[8vw]"}`}>
            <div className="relative w-3/5 h-3/5 bg-zinc-800 rounded-full grid place-items-center">
              <p className="tap-me uppercase text-white font-semibold text-[1.5vw] md:text-xl">
                {text}
              </p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-eye w-full h-8 flex items-center"
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className={`second-eye ${haveBorder && "border-[.15rem] border-[#b2b2b2]"} bg-white rounded-full grid place-items-center ${bigEyes ? "w-[20vw] h-[20vw]" : "w-[15vw] h-[15vw]"} ${smallEyes && "w-[8vw] h-[8vw]"}`}>
            <div className="relative w-3/5 h-3/5 bg-zinc-800 rounded-full grid place-items-center">
              <p className="tap-me uppercase text-white font-semibold text-[1.5vw] md:text-xl">
                {text}
              </p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-eye w-full h-8 flex items-center"
              >
                <div className="w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Eyes;
