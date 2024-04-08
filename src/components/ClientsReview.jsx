import React from 'react'
import ReviewComponent from './Review_component';
import greenCardLogo from '../assets/green-card-logo.svg'
import clutchLogo from '../assets/clutch.svg'
import futureAcademyLogo from '../assets/future-academy.png'

const ClientsReview = ({hiddenCards = false}) => {

  const [openAccordionIndex, setOpenAccordionIndex] = React.useState(null);

  const handleToggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <section className="client-review montereal relative" id='clientReview'>
      <h3 className="text-3xl md:text-[3.5rem] border-b border-b-[#b2b2b2] pb-8 px-[3.5vw] text-[#212121]">
        Client's reviews
      </h3>

      {/* Reviews */}
      <div className="reviews-section pb-14">
        {
          clientReviewsData.map((review, index) => (
            <ReviewComponent
            key={index}
            {...review}
            isOpen={openAccordionIndex === index}
            onToggleAccordion={() => handleToggleAccordion(index)}
            />
          ))
        }
      </div>

      <ClientsReviewCards hidden={hiddenCards}/>
    </section>
  );
}

export const ClientsReviewCards = ({hidden=false}) =>{
return (
  <div className={`review-cards flex lg:flex-row flex-col py-4 px-[3.5vw] justify-between gap-3 ${hidden && 'hidden'}`}>
  <div className="review-card1 rounded-xl bg-[#004D43] h-80 lg:h-96 lg:basis-1/2">
    <div className="flex justify-center items-center w-full h-full relative">
      <picture className="h-16">
        <img
          src={greenCardLogo}
          alt="Ochi Logo"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute bottom-4 w-full px-4 text-[#CDEA68]">
        <span className="inline-block border border-[#CDEA68] p-1 px-3 rounded-full">
          &copy;2019-2022
        </span>
      </div>
    </div>
  </div>

  <div className="review-card-combo flex sm:flex-row flex-col gap-3 lg:basis-1/2 ">
    <div className="review-card2 rounded-xl bg-[#212121] h-80 lg:h-96 sm:basis-1/2 ">
      <div className="flex justify-center items-center w-full h-full relative">
        <picture className="h-20">
          <img
            src={clutchLogo}
            alt="Clutch Logo"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute bottom-4 w-full px-4 text-[#CDEA68]">
        <button
            className="relative uppercase lg:text-sm overflow-hidden font-medium text-[#f1f1f1] border border-[#f1f1f1] p-1 px-3 rounded-full text-sm
            hover:text-[#212121] z-0 duration-300 
            after:bg-[#f1f1f1] after:absolute after:w-[200%] after:h-[110%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after after:rounded-[50%] after:-z-10 after:transition-top after:duration-300 after:top-[200%] hover:after:top-1/2
            "
          >
            rating 5.0 on clutch
          </button>
        </div>
      </div>
    </div>
    <div className="review-card3 rounded-xl bg-[#212121] h-80 lg:h-96 sm:basis-1/2">
      <div className="flex justify-center items-center w-full h-full relative">
        <picture className="h-28">
          <img
            src={futureAcademyLogo}
            alt="Future Academy logo"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute bottom-4 w-full px-4 text-[#CDEA68]">
          <button
            className="relative uppercase lg:text-sm overflow-hidden font-medium text-[#f1f1f1] border border-[#f1f1f1] p-1 px-3 rounded-full text-sm
            hover:text-[#212121] z-0 duration-300 
            after:bg-[#f1f1f1] after:absolute after:w-[200%] after:h-[110%] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after after:rounded-[50%] after:-z-10 after:transition-top after:duration-300 after:top-[200%] hover:after:top-1/2
            "
          >
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
)
}


// Client Reviews Data 
const clientReviewsData = [
  {
    name1: "Karman Ventures",
    name2: "William Barnes",
    btnText: ["investor deck", "sales deck"],
    imgSrc: "../src/assets/William-Barnes.png",
    reviewText: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"
  },
  {
    name1: "Planetly",
    name2: "Nina Walloch",
    btnText: [
      "agency",
      "big news deck",
      "branded template",
      "investor deck",
      "product presentation",
      "sales deck",
      "startup pitch"
    ],
    imgSrc: "../src/assets/Nina.png",
    reviewText: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
  },
  {
    name1: "Workiz Easy",
    name2: "Tomer Levy",
    btnText: [
      "company presentation",
      "onboarding presentation",
      "policy deck & playbook",
      "redesign",
      "sales deck",
    ],
    imgSrc: "../src/assets/Tomer.png",
    reviewText: "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."
  },
  {
    name1: "Premium Blend",
    name2: "Ellen Kim",
    btnText: ["branded template", "illustrations"],
    imgSrc: "../src/assets/Ellen.png",
    reviewText: "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations."
  },
  {
    name1: "Hypercare Systems",
    name2: "Brendan Goss",
    btnText: ["investor deck", "startup pitch"],
    imgSrc: "../src/assets/Brendon.png",
    reviewText: "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough."
  },
  {
    name1: "Officevibe",
    name2: "Raff Labrie",
    btnText: ["branded template"],
    imgSrc: "../src/assets/Raff.png",
    reviewText: "Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"
  },
  {
    name1: "Orderlion",
    name2: "Stefan Strohmer",
    btnText: [
      "agency",
      "investor deck",
      "product presentation",
      "review",
      "sales deck",
    ],
    imgSrc: "../src/assets/Stefan.jpg",
    reviewText: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"
  },
  {
    name1: "Black Book",
    name2: "Jaci Smith",
    btnText: ["review", "startup pitch"],
    imgSrc: "../src/assets/Jaci.png",
    reviewText: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally."
  },
  {
    name1: "Trawa Energy",
    name2: "David Budde",
    btnText: ["branding", "investor deck", "startup pitch"],
    imgSrc: "../src/assets/David.png",
    reviewText: "We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company."
  }
];


export default ClientsReview