import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    };
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="text-white bg-red-400 hover:bg-blue-500 focus:ring-4 focus:ring-gray-300 rounded-full p-3 shadow-lg transition duration-300 animate-zoom-out"
        >
          <FaArrowCircleUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

