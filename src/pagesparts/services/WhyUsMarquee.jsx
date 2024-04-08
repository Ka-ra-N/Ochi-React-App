import React, { useRef } from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import { motion } from "framer-motion";

const WhyUsMarquee = () => {
  return (
    <div className="bg-[#004D43] montereal rounded-t-2xl">
      {/* Why Us Other Marquee */}
      <div>
        <MarqueeComponent textInMarquee={"why us other"} isHeightScreen={false} />
      </div>

      {/* What you can expect Text */}
      <div className="expectText w-full text-white">
        <div className="md:flex  justify-between px-[3.5vw] py-5">
          <div className="basis-1/2 flex-shrink lg:text-base text-lg">
            What you can expect
          </div>
          <ul className="basis-1/2 lg:grid flex flex-col grid-cols-2 gap-4 md:mt-0 mt-10">
            {[
              [
                "01",
                "Communication",
                "The relationship with the clients is our top priority. We put extra effort into keeping mutual respect, honesty, and clarity in the conversation. For each client, we develop a project view site in Notion to track milestones and see the thinking behind steps. You always know what and when we do, as you feel confident in the results we bring.",
              ],
              [
                "02",
                "Ukrainian Business",
                "We are a Ukrainian-born business working mainly with international clients. And as Ukrainians, we offer an unshakable workforce that's proven it can handle anything. The international arena was our focus from the start. And each working day, we showed up as genuine innovators and Ukraine ambassadors. Part of our mission is to promote our homeland by doing the most incredible work we can, each project at a time.",
              ],
              [
                "03",
                "Holistic Approach",
                "We simply ask lots of questions to understand your goals, business, and niche you operate. Our discovery process is essential as it informs our decisions throughout the project. Once we firmly define the goal, it is incredible to move towards that goal. That's why so much of our work is discovery, research, and asking good questions. The answers we get and the data we find go into the foundation of project success.",
              ],
              [
                "04",
                "One Point of Contact",
                "Every project is led by Ihor, the agency's founder and creative director. He ensures the whole project flows from start to finish. He puts together the right creative team for your specific project. You will always have this direct contact person available to speak your business language. He takes care of translating your business goals into the language of design for the team.",
              ],
              [
                "05",
                "Constantly Improving",
                "We are passionate about creating industry-shifting presentations. And as the world around us, we constantly evolve and improve. Our growth is fueled by an innovative ecosystem designed for each team member to grow. We provide them with frequent pieces for training both on design craft and personal development. We are constantly looking for new ways to support our creatives and our community as for our clients.",
              ],
              [
                "06",
                "Limited Amount of Clients",
                "We believe it is vital to dedicate sole focus and undivided attention to each project. To add as much value as possible, we serve a limited amount of clients per month. We have a rule that we follow to choosing projects: our client understands the value of the presentation as a communication tool. We believe in their products or ideas. Together, we work to create positive change.",
              ],
            ].map((item, index) => {
              return (
                <li key={index}>
                  <ExpectTextComponent
                    counting={item[0]}
                    heading={item[1]}
                    subHeading={item[2]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ExpectTextComponent = ({ counting, heading, subHeading }) => {
  const showMore = useRef(null);
  const readBtn = useRef(null);
  const hideBtn = useRef(null);

  return (
    <div className="bg-[#145B52] p-4 rounded-xl">
      <div className="flex flex-col justify-between h-[35vh]">
        <h2
          className="text-5xl font-semibold flex-shrink"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once
          data-aos-anchor-placement="top-bottom"
        >
          {counting}
        </h2>
        <div className="flex justify-between">
          <span
            onClick={() => 
                {
                    showMore.current.classList.toggle("hidden")
                    readBtn.current.classList.toggle("-translate-y-10")
                    hideBtn.current.classList.toggle("-translate-y-6")
                }
            }
            className="relative underline-transition cursor-pointer before:bg-white after:bg-white"
          >
            {heading}
          </span>
          <p
            onClick={() => 
                {
                    showMore.current.classList.toggle("hidden")
                    readBtn.current.classList.toggle("-translate-y-10")
                    hideBtn.current.classList.toggle("-translate-y-6")
                }
            }
            className="relative underline-transition cursor-pointer before:bg-white after:bg-white overflow-hidden"
          >
            <span ref={readBtn} className="duration-500 block">Read</span>
            <span ref={hideBtn} className="absolute left-0 duration-500">Hide</span>
          </p>
        </div>
      </div>

      {/*  */}
      <div
        ref={showMore}
        className={`hidden mt-4 border-t border-t-[#84A9A4] text-[#84A9A4] duration-300
    `}
      >
        
        {subHeading}
      </div>
    </div>
  );
};

export default WhyUsMarquee;
