import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TagLine = ({ indexVal, indexes, itemContent }) => {
  const [showImgFull, setShowImg] = useState(false);

  const handleShowImgFull = () => {
    setTimeout(() => {
      setShowImg(true);
    }, 2100);
  };

  useEffect(() => {
    handleShowImgFull();
  }, []);

  return (
    <div
      key={indexes}
      className="masker grotesk pl-[3.7vw] flex md:flex-row flex-col md:items-center items-start"
    >
      {/* Animating IMAGE */}

      {showImgFull && indexes === indexVal && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "8.3rem" }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className={`lg:h-[5.5rem] h-[5rem] w-[8.5rem] rounded-lg overflow-hidden mr-3 relative top-[.5vw] before before:absolute before:w-full before:h-full before:bg-cover before:bg-left before:bg-no-repeat before:right-0 ${
            indexVal ? "eye-opening-img" : "contact-img"
          }`}
        ></motion.div>
      )}

      <div className="lg:text-[9.5vw] text-6xl uppercase lg:leading-[.75] leading-[.89] font-light">
        {itemContent}
      </div>
    </div>
  );
};

export default TagLine;
