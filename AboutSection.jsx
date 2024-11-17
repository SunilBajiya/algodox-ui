import React from 'react';
import { FaCheck } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about__one dark__image  section-padding py-12">
      <div className="container mx-auto">
        <div className="row flex items-center">
          {/* Left Side */}
          <div className="col-xl-6 col-lg-6 mb-8 lg:mb-30">
            <div className="about__one-left">
              <div className="about__one-left-image relative h-50 ">
                <img
                  className="one w-60 h-70 border rounded-xl"
                  src="https://conbix-nextjs.vercel.app/_next/static/media/about-1.b6048e7b.jpg"
                  alt="about-image"
                />
                <img
                  className="two absolute h-70 top-10 right-2 left-40 w-50 transform translate-y-14 border rounded-xl"
                  src="https://conbix-nextjs.vercel.app/_next/static/media/about-2.21b174ae.jpg"
                  alt="about-image"
                />
              </div>
              <div className="about__one-left-experience mt-4 box text-white bg-red-500 rounded p-4">
                <h1 className="text-4xl font-bold">
                  <span>15</span>+
                </h1>
                <h6 className="text-xl">Years Experience Our Company</h6>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-xl-6 col-lg-6 left-9 px-44 ">
            <div className="about__one-right px-20">
              <div className="about__one-right-title">
                <span className="text-red-600 hover:underline text-2xl">About Company</span>
                <h2 className="text-3xl font-semibold">Our Skilled Team .</h2>
                <p className="mt-4 text-gray-700">
                  Aliquam volutpat diam a orci euismod ornare. Suspendisse quis massa justo.
                  Suspendisse tortor lacus, tincidunt ut ex a, pretium lobortis sapien. Vestibulum
                  rutrum pharetra ex,
                </p>
              </div>
              <div className="about__one-right-btn right-20 px-20 flex mt-8 items-center">
                <a
                  className="mt-4 box text-white bg-red-500 rounded p-4"
                  href="/aboutUs"
                >
                  Discover More
                  <i className="far fa-chevron-double-right ml-2"></i>
                </a>
                <div className="about__one-right-btn-author flex items-center ml-4">
                  <div className="about__one-right-btn-author-avatar">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://conbix-nextjs.vercel.app/_next/static/media/avatar-1.7624b99f.jpg"
                      alt="about-avatar"
                    />
                  </div>
                  <div className="about__one-right-btn-author-name ml-4">
                    <span className="text-one font-medium">Mukesh Swami</span>
                    <h6 className="text-sm">Founder CEO</h6>
                  </div>
                </div>
              </div>
              <div className="about__one-right-bottom mt-8 flex justify-between">
                <div className="about__one-right-bottom-list text-gray-700">
                  <span className="flex items-center">
                  <FaCheck />

                    <i className="FaCheck mr-2"></i>Performing market research.
                  </span>
                  <span className="flex items-center mt-2">
                  <FaCheck />

                    <i className="FaCheck mr-2"></i>Providing information to a client.
                  </span>
                  <span className="flex items-center mt-2">
                    <FaCheck />
                    <h2 className="FaCheck mr-2"></h2>Strategic planning.
                  </span>
                </div>
                <div className="about__one-right-bottom-experience mt-4 box text-white bg-red-500 rounded p-4">
                  <h3 className="text-4xl font-bold">
                    <span className="counter">50</span>+
                  </h3>
                  <h6 className="text-xl">Expert Team members</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
