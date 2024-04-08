import React from "react";
import CardBody from "./CardBody";
import CardBottomBtn from "./CardBottomBtn";
import Btn_with_arrow from "./Btn_with_arrow";
import Card1 from '../assets/card-img1.png'
import Card2 from '../assets/card-img2.jpg'
import Card3 from '../assets/card-img3.jpg'
import Card4 from '../assets/card-img4.png'


function Features() {
  return (
    <div className="Featured-section w-full min-h-fit bg-[#f1f1f1] montereal pb-[15vh]">

      <div className="w-full px-[3.5vw] pt-[12vw] md:pt-[8vw] montereal text-[#212121] md:rounded-t-3xl rounded-t-xl border-b border-b-[var(--border-dark)]">

        <p className="text-3xl md:text-5xl  pb-[3.2vw]">Featured projects</p>

      </div>

      <div className="featured-cards px-[3.5vw] py-[1.5vw] md:grid grid-cols-2 gap-[1vw] gap-y-[5vh]">
        {/* First Card */}
        <div className="featured-card1">
          <CardBody
            listText="FYDE"
            imgSrc={Card1}
            imgAlt="Girl Avatar in Image"
          />
          <CardBottomBtn
            buttonCounts={4}
            btnText={["audit", "copywriting", "sales deck", "slides design"]}
          />
        </div>
        {/* Second Card */}
        <div className="featured-card2">
          <CardBody
            listText="VISE"
            imgSrc={Card2}
            imgAlt="Vise Logo"
          />
          <CardBottomBtn
            buttonCounts={2}
            btnText={["agency", "company presentation"]}
          />
        </div>
        {/* Third Card */}
        <div className="featured-card3">
          <CardBody
            listText="TRAWA"
            imgSrc={Card3}
            imgAlt="Vise Logo"
          />
          <CardBottomBtn
            buttonCounts={3}
            btnText={["brand identity", "design research", "investor deck"]}
          />
        </div>
        {/* Fourth Card */}
        <div className="featured-card4">
          <CardBody
            listText="PREMIUM BLEND"
            imgSrc={Card4}
            imgAlt="Premium Blend Pic"
          />
          <CardBottomBtn buttonCounts={1} btnText={["branded template"]} />
        </div>
      </div>

    {/* Button */}
      <Btn_with_arrow 
        textContent="view all case studies"
        background="[#212121]"
        toLink="/our-work"
      />
    {/*  */}
    </div>
  );
}

export default Features;
