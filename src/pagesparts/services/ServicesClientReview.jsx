import React from "react";
import ClientsReview from "../../components/ClientsReview";
import unleashTreasuryImg from "../../assets/unleash-treasury.png";

function ServicesClientReview() {
  return (
    <div className="py-24 bg-[#F1F1F1] montereal">
      {/* Clients Review */}
      <ClientsReview hiddenCards={true} />

      {/* Unleash Treasury Image */}
      <div
        className="unleash-img-container px-[3.5vw] group rounded-xl overflow-hidden h-auto"
        data-aos="fade-left"
        data-aos-duration="450"
        data-aos-once
        data-anchor-placement="top-center"
        data-aos-offset="50"
      >
        <img
          src={unleashTreasuryImg}
          alt="Image of Unleash Treasury"
          className="object-cover w-full h-full lg:grayscale lg:group-hover:grayscale-0 duration-500"
        />
      </div>

      {/* Ochi In numbers */}
      <div className="ochi-numbers w-full border-t border-t-[#b2b2b2] mt-20 text-[#212121]">
        <div className="md:flex  justify-between px-[3.5vw] py-5">
          <div className="flex-shrink lg:text-base text-lg">Ochi in numbers:</div>
          <ul className="basis-1/2 lg:grid flex flex-col grid-cols-2 gap-4 md:mt-0 mt-10">

            {[
              ['100+', 'Clients from 17 Countries'],
              ['$280+', 'Million raised for our Clients'],
              ['90%', 'Of our clients come back'],
              ['98%', 'Net Promoting Score']
            ].map((item, index)=>{
              return (
                <li key={index}>
                  <OchiNumbersComponent
                    heading={item[0]}
                    subHeading={item[1]}
                  />
                </li>
              )
            })}

          </ul>
        </div>
      </div>
    </div>
  );
}

export const OchiNumbersComponent = ({ heading, subHeading }) => {
  return(
  <div className="bg-[#E1E1E1] p-4 rounded-xl flex flex-col justify-between h-[35vh]">
    <h2
      className="text-5xl font-semibold"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once
      data-aos-anchor-placement="top-bottom"
    >
      {heading}
    </h2>
    <p className="">{subHeading}</p>
  </div>
  )
};

export default ServicesClientReview;
