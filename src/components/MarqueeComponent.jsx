import { motion } from "framer-motion";
import React from "react";

function MarqueeComponent({textInMarquee, isHeightScreen = true, animationDuration = 6}) {
  return (
  <div className={`max-w-full bg-[#004d43] py-20 pb-2 overflow-hidden rounded-t-[1vw] ${isHeightScreen && " md:h-screen "}`}>
      <div className=" text border-y border-y-[#3c776f] pb-6 inline-flex whitespace-nowrap text-white grotesk uppercase overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{duration:`${animationDuration}`, ease:"linear", repeat:Infinity}}
          className="text-[25vw] inline-block leading-[.75]"
        >
          {textInMarquee} &nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{duration:`${animationDuration}`, ease:"linear", repeat:Infinity}}
          className="text-[25vw] inline-block leading-[.75]"
        >
          {textInMarquee} &nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{duration:`${animationDuration}`, ease:"linear", repeat:Infinity}}
          className="text-[25vw] inline-block leading-[.75]"
        >
          {textInMarquee} &nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{duration:`${animationDuration}`, ease:"linear", repeat:Infinity}}
          className="text-[25vw] inline-block leading-[.75]"
        >
          {textInMarquee} &nbsp;
        </motion.h1>
      </div>
    </div>
  );
}

export default MarqueeComponent;
