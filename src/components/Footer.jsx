import React from "react";
import { NavLink, Link } from "react-router-dom";
import ochiLogo from "../assets/ochi.svg";

const navLinksAry = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/our-services" },
  { name: "Our work", to: "/our-work" },
  { name: "About us", to: "/about-us" },
  { name: "Insights", to: "/insights" },
  { name: "Contact us", to: "/contact-us" },
];
function Footer() {
  return (
    <footer className="footer w-full h-full px-[3.5vw] text-[#212121] grid py-10 bg-white relative">
      {/* Upper Footer */}
      <div className="footer-upper-text lg:flex justify-between">
        <div className="footer-upper-text1 basis-1/2 leading-[.75] uppercase  lg:text-[9vw] text-[13vw] grotesk">
          <p
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-once
            data-anchor-placement="top-center"
            data-aos-offset="50"
          >
            Eye-
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-once
            data-anchor-placement="top-center"
            data-aos-offset="50"
          >
            Opening
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-once
            data-anchor-placement="top-center"
            data-aos-offset="50"
          >
            presentations
          </p>
        </div>

        <div className="footer-upper-text2 basis-1/2 flex flex-col montereal gap-[1.5em] lg:mt-0 mt-[1.5em]">
          <h1
            data-aos="fade-up"
            data-aos-duration="450"
            data-aos-once
            data-anchor-placement="top-center"
            data-aos-offset="50"
            className="uppercase text-[9vw] grotesk lg:block hidden"
          >
            presentations
          </h1>

          <div className="footer-upper-social flex lg:block">
            <div className="block lg:hidden bottom-nav basis-1/2">
              <p className="mb-[1.5em]">M:</p>

              <div className="bottom-nav-links flex flex-col">
                {navLinksAry.map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink
                        to={item.to}
                        key={index}
                        className={`underline-transition relative`}
                      >
                        {item.name}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="basis-1/2">
              <p className="mb-[1.5em]">S:</p>
              <ul className="flex flex-col">
                {[
                  { name: "Instagram", toLink: "#" },
                  { name: "Behance", toLink: "#" },
                  { name: "Facebook", toLink: "#" },
                  { name: "Linkedin", toLink: "#" },
                ].map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.toLink}
                      className={`underline-transition relative`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-upper-address flex justify-between">
            <div className="basis-4/5">
              <p>L:</p>
              <ul>
                {["Uttam Nagar,", "New Delhi,", "India,", "110059"].map(
                  (item, index) => {
                    let className = "";
                    if (index === 1) {
                      className = "mb-[1.5em]";
                    }
                    return (
                      <li key={index} className={className}>
                        {item}
                      </li>
                    );
                  }
                )}
              </ul>

              <p className="mt-[1.5em]">E:</p>
              <p className="underline-transition relative inline-block">
                hello@karansingh14032@gmail.com
              </p>
            </div>

            <div className="lg:block hidden bottom-nav basis-1/6">
              <p className="mb-[1.5em]">M:</p>

              <div className="bottom-nav-links flex flex-col">
                {navLinksAry.map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink
                        to={item.to}
                        key={index}
                        className={`underline-transition relative`}
                      >
                        {item.name}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="footer-lower-text lg:flex justify-between mt-4 items-center">
        <div className="ochi-logo basis-1/2 lg:mb-0 mb-12 mt-5">
          <img src={ochiLogo} alt="Ochi Logo" />
        </div>

        <div className="basis-1/2 text-gray-400 capitalize text-sm lg:flex justify-between items-center lg:gap-0">
          <p>&copy; I cloned it ~ 2024. no terms & conditions applied</p>
          <p className="bg-[#CDEA68] text-center text-black grotesk px-5 py-2 lg:text-base rounded-full lg:mt-0 mt-5 text-xl">
            Cloned by Karan_Singh
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
