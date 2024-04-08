import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from '../../assets/draggable-img1.svg'
import img2 from '../../assets/draggable-img2.svg'
import img3 from '../../assets/draggable-img3.svg'
import img4 from '../../assets/draggable-img4.svg'
import img5 from '../../assets/draggable-img5.svg'
import img6 from '../../assets/draggable-img6.svg'
import img7 from '../../assets/draggable-img7.svg'
import img8 from '../../assets/draggable-img8.svg'
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/all";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const DraggablePart = () => {

    useGSAP(()=>{
        gsap.to('.slide', {
            scrollTrigger:{
                trigger:".main-draggable-container",
                start:"top top",
                end:'bottom top',
                scrub:1,
            },
            x:"-95rem",
            ease:'power4',
            duration:5,
        })
    },[])

  return (
    <>
    {/* Larger Devices Draggable */}
    <div className='main-draggable-container w-full h-[380vh] py-20 relative lg:block hidden'>

        {/* Main Content of Draggable Part */}

        <div className="slides w-full sticky lg:top-20 md:top-40 left-0 flex gap-8 overflow-hidden  px-[3.5vw]">
            

            {/* All Slides Comes Here */}
            {cardsInfo.map((card, index) => {
                return (
                   
                        <div className="slide lg:basis-1/4 flex-shrink-0" key={index}>
                            <div className="img-container w-16">
                                <LazyLoadImage src={card[0]} className='w-full h-full object-cover'/>
                            </div>

                            <div className="text-info mt-10">
                                <p className="heading underline mb-3">{card[1]}</p>

                                <p>{card[2]}</p>
                            </div>
                        </div>
                    
                )
            })}
     
        </div>

    
    </div>

    {/* Mobile Devices Non-Draggable */}
    <div className='mobile-draggable-container w-full py-20 relative lg:hidden block'>

        {/* Main Content of Draggable Part */}

        <div className="w-full gap-8 flex flex-col overflow-hidden  px-[3.5vw]">
            

            {/* All Slides Comes Here */}
            {cardsInfo.map((card, index) => {
                return (
                   
                        <div className="lg:basis-1/4 flex-shrink-0" key={index}>
                            <div className="img-container w-16">
                                <LazyLoadImage src={card[0]} className='w-full h-full object-cover'/>
                            </div>

                            <div className="text-info mt-10">
                                <p className="heading underline mb-3">{card[1]}</p>

                                <p>{card[2]}</p>
                            </div>
                        </div>
                    
                )
            })}
     
        </div>

    
    </div>
    </>
  )
}

const cardsInfo = [
    [`${img1}`, 'Planetly', 'Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.'],
    [`${img2}`, 'Officevibe', 'Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!'],
    [`${img3}`, 'Nestle', "This is just a great experience for us! As an established company, you operate within different industries and expect immediate input with a certain level of service. Ihor and the team delivered exactly that. Fantastic result, quick delivery time, and highly responsive. This team is a hidden gem. We've already started to outline our next projects for them."],
    [`${img4}`, 'Toyota', 'Great work, great communication, and work ethic. Their skills, and understanding of project scope and subject matter - are simply unmatched. Looking very forward to working again soon.'],
    [`${img5}`, 'Lexus', 'Thanks for your great work! The communication was excellent, the team was able to grasp in detail what we wanted and plastered it on the company presentation and sales deck. Their work is absolutely amazing.'],
    [`${img6}`, 'Aflorithmic', 'Super responsive and quick. A charm to work with. Unfortunately, often designers are not like that and you end up losing a lot of time with briefings that don\'t lead anywhere. This is definitely not the case here. I\'d work again with Ihor and his team anytime!'],
    [`${img7}`, 'Orderlion', 'The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!'],
    [`${img8}`, 'Black Book', 'They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.'],
]

export default DraggablePart