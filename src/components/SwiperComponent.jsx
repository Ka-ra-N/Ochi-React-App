import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { UniqueCards } from "../pagesparts/about-us/AboutMarquee";
import { EffectCards } from "swiper/modules";
import person1 from "../assets/unique-card1.jpg";
import person2 from '../assets/unique-card2.jpg'
import person3 from '../assets/unique-card3.jpg'
import person4 from '../assets/unique-card4.jpg'

export default function App() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >

        {CardData.map((card, index) => (
          <SwiperSlide key={index}>
          <div className="bg-[#f1f1f1] md:h-[33.5rem] h-[15rem] w-full rounded-xl relative">
            <UniqueCards
              count={index + 1}
              name={card.name}
              role={card.role}
              imgSrc={card.imgSrc}
            />
          </div>
        </SwiperSlide>
        ))}

    </Swiper>
  );
}

const CardData = [
  {
    name: ["ihor", "hulyahrodskyy"],
    role: "founder and CEO",
    imgSrc: `${person1}`,
  },
  {
    name: ["kseniia", "palamarchuk"],
    role: "lead designer",
    imgSrc: `${person2}`,
  },
  {
    name: ["anna", "syrota"],
    role: "presentation designer",
    imgSrc: `${person3}`,
  },
  {
    name: ["olena", "zderka"],
    role: "communication consultant",
    imgSrc: `${person4}`,
  },
]
