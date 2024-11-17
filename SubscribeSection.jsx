import React from 'react';
import { FaBell } from 'react-icons/fa';

const SubscribeSection = () => {
  return (
    <div className="container h-60  left-10 w-full px-12 relative">
      <div className="h-60 w-full px-10 flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("https://conbix-nextjs.vercel.app/_next/static/media/subscribe.f6397181.jpg")' }}>
        <div className="absolute h-full rounded-xl w-full bg-indigo-800 bg-opacity-50 backdrop-blur-lg"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start bg-white px-8 py-6 rounded-md shadow-lg w-full">
          <div className="lg:mr-4 flex-grow">
          <p className="text-red-500 text-xl py-2 mt-2">Join Over 90k People Getting Our Emails</p>

            <h2 className="text-gray-900 text-xl">Stay Connected</h2>
            <div className="flex items-center mt-2">
              <div className="text-gray-600 mr-2 icon-animation">
                <FaBell className="animate-bounce-left-right" />
              </div>
              <h6 className="text-gray-600 text-xl px-2">Get all notifications</h6>
            </div>
          </div>
          <div className="lg:ml-4 mt-4 lg:mt-0">
            <form className="flex items-center space-x-2">
              <input placeholder="Email address" type="email" name="email" className="border hover:border-blue-500 border-gray-300 rounded-l-md py-1 px-2 focus:outline-none" />
              <button type="submit" className="bg-red-500 hover:bg-indigo-800 text-white px-4 py-2 rounded-r-md">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
