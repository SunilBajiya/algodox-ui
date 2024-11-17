import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faClock, faUser, faEnvelope, faMobileAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <div className="flex flex-wrap  -mx-2 px-3 py-3 bg-slate-300">
     <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0 flex flex-col">
  <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex-grow">
    <h3 className="text-4xl font-semibold  mb-4">Office Address</h3>
    <p className="mb-6">Get in touch with us to see how our company can help you grow your business online.</p>
    <div className="mb-6 flex items-center">
      <FontAwesomeIcon icon={faPhoneAlt} className="text-xl mr-4" />
      <div>
        <h4 className="font-semibold">Phone Number &amp; Email</h4>
        <p>
          <a href="tel:+91-9571144478" className="text-blue-500 hover:underline">+91-7300093286</a><br />
          <a href="mailto:care@algodox.co.in" className="text-blue-500 hover:underline">sunil@algodox.co.in</a>
        </p>
      </div>
    </div>
    <div className="mb-6 flex items-center border-b border-gray-300 py-2">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-4" />
      <div>
        <h4 className="font-semibold">Our Office Address</h4>
        <p>605, SGH, Vaishali Nagar, Jaipur, India</p>
      </div>
    </div>
    <div className="flex items-center border-b border-gray-300 pb-6 mb-6">
      <FontAwesomeIcon icon={faClock} className="text-xl mr-4" />
      <div>
        <h4 className="font-semibold">Official Work Time</h4>
        <p>9:00am - 6:00pm (Mon - Fri)</p>
      </div>
    </div>
    <div className="flex px-10">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5zCcvxp-huIL8fMtOYn-FedBZsk-Vr4Zsg&s"
    alt="Algodox Contact Center"
    className="h-60 w-60"
  />
</div>

  </div>

      </div>
      <div className="w-full lg:w-1/2 px-2  flex flex-col">
        <div className="p-6 bg-white border border-gray-300  py-16 px-10 rounded-lg shadow-lg flex-grow">
          <h3 className="text-4xl font-semibold mb-4">Leave a Message</h3>
          <p className="mb-6">We’re Ready To Help You</p>
          <form className="space-y-6 py-16 px-10 flex flex-col h-full" action="https://algodox.co.in/contact/send-mail" method="POST">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div className="relative">
                  <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <FontAwesomeIcon icon={faUser} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <div className="relative">
                  <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <FontAwesomeIcon icon={faEnvelope} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div className="relative">
                  <input type="text" name="phone" id="phone" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <FontAwesomeIcon icon={faMobileAlt} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <textarea name="message" id="message" placeholder="Type Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-full"></textarea>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
                Submit Message<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </div>
          </form>
          <p className="mt-3 text-red-500 form-messages"></p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
