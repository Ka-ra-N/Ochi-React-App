import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import Navbar from '../components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import ContactHeadline from '../pagesparts/contact-us/ContactHeadline';
import ContactForm from '../pagesparts/contact-us/ContactForm';
import ContactGreen from '../pagesparts/contact-us/ContactGreen';
import ContactFaq from '../pagesparts/contact-us/ContactFaq';
import Footer from '../components/Footer';
import BlackAnimation from '../components/BlackAnimation';

function ContactUs() {

  useEffect(() => {
    if(window.innerWidth >= 770){
      const locomotiveScroll = new LocomotiveScroll();
    }
  
  },[])

  return (
    <section>
      <BlackAnimation pageName={"contact us"}/>
        <Headroom>
            <Navbar />
        </Headroom>
        <ContactHeadline />
        <ContactForm />
        <ContactGreen />
        <ContactFaq />
        <Footer />
    </section>
  )
}

export default ContactUs
