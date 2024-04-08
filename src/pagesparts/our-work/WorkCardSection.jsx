import React from 'react'
import Card1 from '../../assets/card-img1.png'
import Card2 from '../../assets/card-img2.jpg'
import Card3 from '../../assets/card-img3.jpg'
import Card4 from '../../assets/card-img4.png'
import Card5 from '../../assets/card-img5.png'
import Card6 from '../../assets/card-img6.jpg'
import Card7 from '../../assets/card-img7.jpg'
import Card8 from '../../assets/card-img8.jpg'
import Card9 from '../../assets/card-img9.jpg'
import CardBody from '../../components/CardBody'
import CardBottomBtn from '../../components/CardBottomBtn'
const WorkCardSection = () => {
  return (
    <section className='bg-white px-[3.5vw] montereal py-8 text-[#212121] rounded-t-xl'>
        <p className='text-3xl md:text-[3.5rem] leading-none pt-14'>Purpose driven, <span className='underline-transition relative'>strategy-led presentations</span> that people care about.</p>


        <div className="all-work-cards py-[1.5vw] md:grid grid-cols-2 gap-[1vw] gap-y-[6vh] mt-5">
            
            
            {[
                {
                    text:"FYDE", src:`${Card1}`, alt: "Girl Avatar in Image", btn:4, btnText:["audit", "copywriting", "sales deck", "slides design"]
                },
                {
                    text:"TRAWA", src:`${Card3}`, alt: "Vise Logo", btn:3, btnText:["brand identity", "design research", "investor deck"]
                },
                {
                    text:"PREMIUM BLEND", src:`${Card4}`, alt: "Premium Blend Pic", btn:1, btnText:["branded template"]
                },
                {
                    text:"PLANETLY", src:`${Card5}`, alt: "Premium Blend Pic", btn:6, btnText:["agency", "big news deck", "branded template", "investor deck", "policy deck & playbook", "sales deck"]
                },
                {
                    text:"BLACK BOOK", src:`${Card6}`, alt: "Blackbox image", btn:3, btnText:["investor deck", "redesign", "review"]
                },
                {
                    text:"VISE", src:`${Card2}`, alt: "Vise Image", btn:2, btnText:["agency", "company presentation"]
                },
                {
                    text:"SOFTSTART", src:`${Card7}`, alt: "Softstart Image", btn:2, btnText:["branded template","sales deck"]
                },
                {
                    text:"OFFICEVIBE", src:`${Card8}`, alt: "OfficeVide Image", btn:1, btnText:["branded template"]
                },
                {
                    text:"WORKIZ EASY", src:`${Card9}`, alt: "Workis easey Image", btn:3, btnText:["onboarding presentation", "policy deck & playbook", "sales deck"]
                },
            ].map((item, index)=>{
                return (
                    <div className="work-card" key={index}>
                        <CardBody
                            listText={item.text}
                            imgSrc={item.src}
                            imgAlt={item.alt}
                        />
                        <CardBottomBtn
                            buttonCounts={item.btn}
                            btnText={item.btnText}
                        />
                    </div>
                )
            })}


        </div>  

    </section>
  )
}

export default WorkCardSection