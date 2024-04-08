import React from "react";
import TagLine from "../../components/TagLine";

const ContactHeadline = () => {
  return (
    <div className="max-w-full pt-1 text-[#212121] lg:block sm:grid mb-28 relative">
      <div className="contact-heading 2xl:my-[22vh] lg:my-[12vh] md:my-[5rem] my-[2rem] ">
        {["LET’S START", "A PROJECT TOGETHER"].map((item, index) => {
          return <TagLine key={index} indexes={index} itemContent={item} indexVal={0} />;
        })}
      </div>
    </div>
  );
};

export default ContactHeadline;
