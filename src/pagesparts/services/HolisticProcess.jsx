import React from 'react';
import ReviewComponent from '../../components/Review_component';
import discoveryImg from '../../assets/discovery.png';
import structureImg from '../../assets/StructurePhase2.png';
import designImg from '../../assets/Designphase3.png';
import feedbackImg from '../../assets/Feedbackphase4.png';
import deliveryImg from '../../assets/Deliveryphase5.png';

const HolisticProcess = () => {

  const [openAccordionIndex, setOpenAccordionIndex] = React.useState(null);

  const handleToggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };
  
  const reviewComponentsData = [
    {
      name1: "01. Phase",
      name2: "Discovery",
      imgSrc: discoveryImg,
      reviewText: "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions."
    },
    {
      name1: "02. Phase",
      name2: "Storytelling",
      imgSrc: structureImg,
      reviewText: "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions."
    },
    {
      name1: "03. Phase",
      name2: "Design",
      imgSrc: designImg,
      reviewText: "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the presentation wins people's hearts and leaves a perfect long-lasting impression."
    },
    {
      name1: "04. Phase",
      name2: "Feedback",
      imgSrc: feedbackImg,
      reviewText: "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears."
    },
    {
      name1: "05. Phase",
      name2: "Delivery",
      imgSrc: deliveryImg,
      reviewText: "We will carefully collect and prepare all the project files to ensure smooth future use."
    }
  ];

  return (
    <div className='text-[#212121] my-6 montereal'>
      <div className="heading border-b border-b-[#b2b2b2] pb-8">
        <h2 className='px-[3.5vw] text-5xl'>Holistic process</h2>
      </div>

      <div className="process-parts">
        {reviewComponentsData.map((data, index) => (
          <ReviewComponent
            key={index}
            {...data}
            isOpen={openAccordionIndex === index}
            onToggleAccordion={() => handleToggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HolisticProcess;
