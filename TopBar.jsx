import React from 'react';
import 'tailwindcss/tailwind.css';

const TopBar = () => {
  return (
    <div className="bg-blue-300 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-800">
            <a
              href="https://www.google.com/maps"
              className=" hover:text-red-500"
            >
                           <i className="fas fa-map-marker mr-2 text-red-500"></i>
 605, SGH, Vaishali Nagar, Jaipur, India
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:care@algodox.co.in"
              className="flex items-center text-black-500 hover:text-red-500"
            >
              <i className="fas fa-envelope mr-2 text-gree-500"></i>sunil@algodox.co.in
            </a>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-500"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-500"
              >
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-500"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;