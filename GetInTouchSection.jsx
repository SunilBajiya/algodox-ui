import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const GetInTouchSection = () => {
  return (
<div className="getIn__touch px-10 py-20 section-padding relative bg-cover bg-blue-900 bg-opacity-50 h-70  bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://conbix-nextjs.vercel.app/_next/static/media/getInTouch.19193ef8.jpg")' }}>
  <div className="absolute inset-0 bg-red-900 bg-opacity-50  bg-cover backdrop-blur-lg"></div>

      <img className="getIn__touch-shape absolute inset-0 filter  opacity-50" src="https://conbix-nextjs.vercel.app/assets/img/shape/getInTouch.png" alt="shape" style={{ animation: 'move-icon 3s ease-in-out infinite' }} />
      <div className="container mx-auto py-10 left-1 px-10 lg:px-40 relative z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="getIn__touch-left bg-white p-10 rounded-lg shadow-md">
              <div className="getIn__touch-left-title mb-4">
                <span className="subtitle-one font-bold  text-blue-600">Get In Touch<br/></span>
                <h2 className="relative inline-block text-4xl font-bold py-2 px-3">
                  Free Consultation
                </h2>
              </div>
              <div className="getIn__touch-left-form">
                <form action="#">
                  <div className="mt-6">
                    <input placeholder="Full Name" required type="text" name="name" className="w-full p-4 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mt-6">
                    <input placeholder="Email Address" required type="email" name="email" className="w-full p-4 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mt-6">
                    <input placeholder="Subject" required type="text" name="subject" className="w-full p-4 border border-gray-300 rounded-lg" />
                  </div>
                  <div className="mt-6">
                    <button className="btn-one relative overflow-hidden w-full p-4 text-white bg-red-500 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-yellow-500">
                      Free Consulting
                      <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10 flex flex-col justify-between">
            <div className="getIn__touch-right text-white">
              <div className="getIn__touch-right-title mb-4">
                <h2 className="text-2xl lg:text-4xl font-semibold py-2">We Serving 30% Of Global 600 Companies</h2>
                <p>Aenean A Felis Consequat, Varius Orci Ut, Varius Metus. Donec Iaculis Leo Turpis, Vitae Sagittis Massa Luctus Feugiat. Donec Vel Sodales Dui,</p>
              </div>
              <div className="getIn__touch-right-bottom mt-8 flex items-center">
                <div className="getIn__touch-right-bottom-text mr-4">
                  <h4 className="flex items-center font-bold text-xl">
                    Client Satisfaction In The Globally
                    <FaArrowRight className="ml-2 animate-arrow" />
                  </h4>
                </div>
                <div className="getIn__touch-right-bottom-image cursor-pointer rounded-full flex -space-x-3">
                  <ul className="flex space-x-2">
                    <li><img src="https://conbix-nextjs.vercel.app/assets/img/avatar/avatar-4.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white" /></li>
                    <li><img src="https://conbix-nextjs.vercel.app/assets/img/avatar/avatar-3.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white" /></li>
                    <li><img src="https://conbix-nextjs.vercel.app/assets/img/avatar/avatar-1.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white" /></li>
                    <li><img src="https://conbix-nextjs.vercel.app/assets/img/avatar/avatar-2.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white" /></li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className="contact-info mt-10 lg:mt-0 bg-red-500 cursor-pointer p-6 rounded-lg shadow-md text-white flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-red-500 transition-colors duration-300">
                  <FaPhoneAlt className="text-white" />
                </div>
                <p className="text-lg">+91-9571144478</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-red-500 transition-colors duration-300">
                  <FaEnvelope className="text-white" />
                </div>
                <p className="text-lg">care@algodox.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default GetInTouchSection;
