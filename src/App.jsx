import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import Insights from "./pages/Insights";
import ContactUs from "./pages/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./output.css";

function App() {
    AOS.init();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
