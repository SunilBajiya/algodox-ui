import React, { useState, useEffect } from 'react';

function HomeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4500);
    setAnimate(interval);
    return () => clearInterval(interval);
  }, []);

  const handleCircleClick = (index) => {
    clearInterval(animate);
    setActiveIndex(index);
  };

  const handleNavClick = (direction) => {
    clearInterval(animate);
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % 3;
      } else {
        return (prevIndex - 1 + 3) % 3;
      }
    });
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="holder w-full max-w-md mx-auto p-4">
        <div className="image w-1/2 h-full float-left relative">
          {['jobs', 'zuck', 'usk'].map((img, index) => (
            <div
              key={index}
              className={`img w-full h-full absolute top-0 left-0 ${
                activeIndex === index? 'active' : ''
              }`}
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/hemantparashar/images/quote-cards/${img}-s.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
        <div className="right w-1/2 h-full float-right relative">
          <div className="text w-full h-full p-4">
            {['jobs', 'zuck', 'usk'].map((quote, index) => (
              <p
                key={index}
                className={`quote w-full h-full absolute top-0 left-0 ${
                  activeIndex === index? 'active' : ''
                }`}
              >
                <i className="fa fa-quote-left" style={{ fontSize: 30, color: 'blue' }} />
                {quote}
                <i className="fa fa-quote-right" style={{ fontSize: 30, color: 'blue' }} />
              </p>
            ))}
          </div>
          <nav className="flex justify-center mb-4">
            <a
              id="leftBtn"
              className="prev w-1/2 h-full py-2 px-4 text-lg text-white bg-gray-800 hover:bg-gray-900"
              onClick={() => handleNavClick('prev')}
            >
              <i className="fa fa-arrow-left" />
            </a>
            <a
              id="rightBtn"
              className="next w-1/2 h-full py-2 px-4 text-lg text-white bg-gray-800 hover:bg-gray-900"
              onClick={() => handleNavClick('next')}
            >
              <i className="fa fa-arrow-right" />
            </a>
          </nav>
        </div>
      </div>
      <div className="bg w-full h-full absolute top-0 left-0">
        {['jobs', 'zuck', 'usk'].map((bg, index) => (
          <div
            key={index}
            className={`slide w-full h-full absolute top-0 left-0 ${
              activeIndex === index? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/hemantparashar/images/quote-cards/${bg}-bg.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
      <div className="nav-circles flex justify-center mb-4">
        {['jobs', 'zuck', 'usk'].map((circle, index) => (
          <div
            key={index}
            className={`circle w-4 h-4 rounded-full bg-gray-800 hover:bg-gray-900 ${
              activeIndex === index? 'active' : ''
            }`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel;