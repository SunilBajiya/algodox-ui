import React from 'react';
import Footer from '../CustomFooter';
import ContactSection from '../Sections/ContactSection';


function ContactUs() {
  return (
    <div>
    <div className="hero relative min-h-screen bg-cover bg-no-repeat9" style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/hero-bg.f85b4ea749dce501d7d0.jpg')" }}>
 <div className="absolute inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-lg"></div>
    <div className="hero-content relative flex flex-col h-full  lg:px-39 py-40 col-12 row">
      <h1 className="text-5xl text-center text-white font-bold mx-80 my-80 mb-10 px-10">Contact Us</h1>
    </div>
    </div>
    <ContactSection />
    <Footer />
    </div>

     );
}

export default ContactUs;