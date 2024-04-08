import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ochiLogo from "../assets/ochi.svg";

const navLinksAry = [
  { name: "Services", to: "/our-services" },
  { name: "Our work", to: "/our-work" },
  { name: "About us", to: "/about-us" },
  { name: "Insights", to: "/insights" },
  { name: "Contact us", to: "/contact-us" },
];

function Navbar({bgWhite = false}) {
  const mobileNav = useRef(null);
  const mobileNavContent = useRef(null);

  const addBodyOverflow = () => {
    document.body.style.overflow = 'hidden';
  }

  const removeBodyOverflow = () => {
    document.body.style.overflow = 'auto';
  }

  const handleHamburger = () => {
    mobileNav.current.classList.remove("mobileNavBarUp");
    mobileNav.current.classList.toggle("hidden");
    mobileNav.current.classList.add("mobileNavBarDown");
    setTimeout(() => {
      mobileNavContent.current.classList.remove("opacity-0");
    }, 500);
    addBodyOverflow()
  }
  
  const handleCrossIcon = () => {
    mobileNav.current.classList.remove("mobileNavBarDown");
    setTimeout(() => {
      mobileNav.current.classList.toggle("hidden");
    }, 200);
    mobileNav.current.classList.add("mobileNavBarUp");
    mobileNavContent.current.classList.add("opacity-0");
    removeBodyOverflow()
  }

  return (
    <>
      {/* desktop navbar */}
      <nav className={`hidden duration-300 z-[1000] w-full lg:px-12 lg:py-4 p-3 md:flex montereal items-center justify-between backdrop-blur-[7px]
      ${bgWhite && "bg-[#CDEA68]"}`}>
        {/* Logo */}
        <Link className="Logo lg:h-auto lg:w-auto w-10" to="/">
          <img src={ochiLogo} alt="Ochi logo" />
        </Link>
        {/* Nav List items */}
        <ul className="links h-full flex lg:gap-5 gap-3">
          {navLinksAry.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => `${
                index === 4 && "lg:ml-36"
              } text-[#212121] text-sm lg:text-base relative overflow-hidden group 
              before:absolute before:bg-[#212121] before:h-[1px] before:left-0  before:duration-500 before:bottom-0
              after:absolute after:bg-[#212121] after:h-[1px] after:right-0 after:duration-500 after:bottom-0
              ${
                isActive
                  ? "before:w-full"
                  : "before:w-0 after:w-0 before:hover:w-2/3 after:hover:w-2/3 "
              }
              `}
            >
              <p className={`group-hover:-translate-y-10 duration-500`}>
                {item.name}
              </p>
              <p className={`absolute group-hover:-translate-y-6 duration-500`}>
                {item.name}
              </p>
            </NavLink>
          ))}
        </ul>
        {/*  */}
      </nav>

      {/* mobile navbar */}
      <nav className={`mobile-navbar w-full md:hidden flex backdrop-blur-[7px] z-[1000] relative`}>
        <div className="flex justify-between w-full px-6 py-4 items-center relative">
          {/* Logo */}
          <Link to="/" className="Logo lg:h-auto lg:w-auto w-20">
            <img src={ochiLogo} alt="Ochi logo" />
          </Link>

          {/* hamburger */}
          <div
            onClick={handleHamburger}
            className="hamburger flex flex-col gap-[.32rem] mr-4 cursor-pointer z-10 relative"
          >
            <div className="line bg-[#898989] h-[2px] w-6"></div>
            <div className="line bg-[#898989] h-[2px] w-6"></div>
          </div>

          {/*  */}

          <div
            ref={mobileNav}
            className="hidden mobile-nav-content absolute transition-all duration-300 left-0 w-full h-screen bg-[#212121] top-0 overflow-y-scroll" 
          >
            <div className="dark-navbar fixed w-full flex justify-between items-center px-6 py-4 pb-16 border-b border-b-[#646464] z-[200] backdrop-blur-[200vw]">
              {/* Ochi Logo */}
              <Link to="/" className="Logo lg:h-auto lg:w-auto w-20 invert">
                <img src={ochiLogo} alt="Ochi logo" />
              </Link>

              {/* Cross Menu Button */}

              <div
                onClick={handleCrossIcon}
                className="crossMenu -translate-x-[.35rem] translate-y-1 flex flex-col gap-[.32rem] mr-4 cursor-pointer z-auto"
              >
                <div className="line bg-[#D5D5D5] h-[2px] w-6 linerotate1 rotate-45"></div>
                <div className="line bg-[#D5D5D5] h-[2px] w-6 linerotate2 -rotate-45"></div>
              </div>

              {/*  */}
            </div>

            {/* Main Content of Mobile Navbar */}
            <div
              ref={mobileNavContent}
              className="opacity-0 duration-75 mobile-content overflow-y-scroll mt-28 px-6 py-4 grotesk text-white"
            >
              <ul className="flex flex-col gap-2 mb-24 items-start">
                {navLinksAry.map((item, index) => {
                  return (
                    <NavLink
                      onClick={removeBodyOverflow}
                      to={item.to}
                      key={index}
                      className={`text-6xl uppercase relative`}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </ul>

              <ul className="montereal mb-6">
                <li className="mb-4">S:</li>
                <li>Instagram</li>
                <li>Behance</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>

              <ul className="montereal mb-6">
                <li className="mb-4">L:</li>
                <li>Uttam Nagar</li>
                <li className="mb-4">New Delhi</li>
                <li>110059</li>
              </ul>

              <ul className="montereal mb-6">
                <li className="mb-4">L:</li>
                <li>karansingh14032@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
