import React from 'react'
import CardBottomBtn from '../../components/CardBottomBtn'
import PresentableCard from '../about-us/PresentableCard'
import img1 from '../../assets/presentable-card1.jpg'
import img2 from '../../assets/presentable-card2.jpg'

const LatestInsights = () => {
  return (
    <div className='border-t border-t-[#b2b2b2] py-4 monetereal'>
        <div className="md:flex jusitfy-between px-[3.5vw] items-center">
            <p className='basis-1/3 md:mb-0 mb-5'>Latest insights:</p>
            <ul className='uppercase flex text-[#212121] items-center gap-3 flex-wrap'>
                <li className='bg-[#212121] text-white px-4 rounded-full py-1'>All</li>

                <li>
                    <CardBottomBtn isCardComponent={false} buttonCounts={3} btnText={['presentation template','public speaking', 'story telling']}/>
                </li>
            </ul>
        </div>

        {/* Insights Presentation Cards */}
        <div className="presentation-cards-container flex md:flex-row flex-col px-[3.5vw] mt-20 gap-5">
                <PresentableCard btnAry={['public speaking', 'story telling']} imgSrc={`${img2}`} para1={"Presenting to an International Audience: Tips and Lessons Learned."} authorDetails={["Ihor Hulyahrdoskyy", "26 May. 23"]}/>
                
                <PresentableCard btnAry={['presentation template']} imgSrc={`${img1}`} para1={"Developing company-wide presentation template for Premium Blend."} authorDetails={["Ihor Hulyahrdoskyy", "07 Dec. 22"]}/>
             </div>
    </div>
  )
}

export default LatestInsights