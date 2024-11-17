import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';


const ServiceDetails = () => {
  return (
    <section className="service-details pt-28 pb-28">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4">
            <div className="service-sidebar">
            <div className="sidebar-widget service-widget mb-8 bg-gray-200">
                <h4 className="text-2xl font-semibold mb-4 text-center py-5">All Services</h4>
                <ul>
                  <li className="mb-4 p-4 border border-blue-300 rounded-lg shadow-md bg-white">
                    <Link to="/service-details" className="text-blue-600 hover:underline">Web Development</Link>
                  </li>
                  <li className="mb-4 p-4 border border-blue-300 rounded-lg shadow-md bg-white">
                    <Link to="/service-details" className="text-blue-600 hover:underline">Data Management</Link>
                  </li>
                  <li className="mb-4 p-4 border border-blue-300 rounded-lg shadow-md bg-white">
                    <Link to="/service-details" className="text-blue-600 hover:underline">Cyber Security</Link>
                  </li>
                  <li className="mb-4 p-4 border border-blue-300 rounded-lg shadow-md bg-white">
                    <Link to="/service-details" className="text-blue-600 hover:underline">Software Development</Link>
                  </li>
                  <li className="mb-4 p-4 border border-blue-300 rounded-lg shadow-md bg-white">
                    <Link to="/service-details" className="text-blue-600 hover:underline">Cloud Management</Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget service-video-widget rounded-xl text-center bg-cover h-60 bg-center p-6 relative cursor-pointer hover:bg-blue-500 transition duration-300" style={{ backgroundImage: 'url("https://reactdemo-envotek.soyonexpress.com/static/media/service-details.60df85d0434a99b7d480.jpg")' }}>
  <div className="absolute inset-0 bg-red-700  rounded-xl opacity-0 hover:opacity-50 transition duration-300"></div>
  <div className="relative z-10 project-text mt-4">
    <h4 className="text-white font-bold text-xl">Have any project in your mind?</h4>
    <a href="tel:+00669783" className="text-white mt-2 inline-block"> <FaPhoneAlt className='h-8 w-6 text-white-800 '/>+91-9571144478</a>
  </div>
</div>

            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="service-details-content">
              
            <div className="company__two-right dark__image w-full h-auto  t-right overflow-hidden relative">
  <img
    className="img__full rounded-xl   cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
    src="https://reactdemo-envotek.soyonexpress.com/static/media/video-widget-bg.5670f0f06464c71af5f0.jpg"
    alt="image"
  />
  <div className="overlay"></div>
</div>

              <h2 className="text-3xl font-semibold mb-4">IT Management Service</h2>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              <blockquote className="p-4 bg-gray-100 border-l-4 border-blue-500 italic mb-4">
                It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular in the release and more recent times. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </blockquote>
              <div className="work-part-content">
                <div className="flex flex-wrap -mx-4 mb-8">
                <div className="w-full md:w-1/2 px-8 py-6 mb-4 md:mb-0 relative">
                    <div className="work-left">
                      <div className="work-image mb-4 cursor-pointer relative">
                        <img src="https://reactdemo-envotek.soyonexpress.com/static/media/work-img2.1a0010b52509b8be08da.png" alt="Work Image" className="w-80 h-96 rounded-md" />
                        <div className="work-image-two absolute top-1/2 transform -translate-y-1/2 left-40">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="work-content">
                      <h2 className="text-2xl font-semibold mb-4">How it works?</h2>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <p className="mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Help challenge critical activities</h2>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
                <blockquote className="p-4 bg-gray-100 border-l-4 border-blue-500 italic mb-4">
                  It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular in the release and more recent times. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </blockquote>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
