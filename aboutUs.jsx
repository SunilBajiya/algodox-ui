import React from 'react'
import Footer from "../CustomFooter"
import AboutUs from '../Sections/AboutUS';

import ScrollToTop from '../Sections/ScrollToTop'
function aboutUs() {
  return (
    <div>
    <div className="hero relative min-h-screen bg-cover bg-no-repeat9" style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/hero-bg.f85b4ea749dce501d7d0.jpg')" }}>
 <div className="absolute inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-lg"></div>

    <div className="hero-content relative flex flex-col h-full  lg:px-39 py-40 col-12 row">
      <h1 className="text-5xl text-center text-white font-bold mx-80 my-80 mb-10 px-10">About Us</h1>
    </div>
    
    </div>

<section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
  <div className="print flex justify-center lg:justify-start">
    <img
      src="https://techcorp-react.travolgi.com/static/media/mission.75f1a3c721a17c59a0de.webp"
      alt="About us - Tech Corp: Business Services & IT Solutions HTML Website Template"
      className=" rounded-2xl w-75 border-gray-300 transition-transform transform hover:scale-105"
    />
  </div>
  <article>
    <h1 className="text-4xl font-bold mb-4">
      Who{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        We Are
      </span>
    </h1>
    <h2 className="text-2xl font-semibold mb-4">Much more than an IT team</h2>
    <p className="mb-4">
      Welcome to Tech Corp, where innovation meets reliability. Founded on the
      principles of cutting-edge technology and unwavering commitment to
      excellence, we are your trusted partner for business services and IT
      solutions.
    </p>
 
    <blockquote className="p-4 bg-gray-100 border-l-4 border-blue-500 italic mb-4">
    At Tech Corp, we are a team of passionate professionals dedicated to
      empowering businesses with transformative technology solutions. With a
      rich history of successful partnerships and a forward-thinking approach,
      we strive to be at the forefront of the ever-evolving tech landscape.              </blockquote>
    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
    <p className="mb-3">
      Our mission is to drive your success through innovative and tailored IT
      solutions. We believe in the power of technology to propel businesses
      forward, and we are committed to delivering solutions that not only meet
      but exceed your expectations.
    </p>
  </article>
</section>


    <AboutUs />
    <section className="team-section pt-110 pb-120 rpt-90 rpb-60">
  <div className="container">
    <div className="row">
      <div className="col-12 py-4">
        <div className="section-title text-center text-5xl">
          <span>Team Members</span>
          <h2>Our Professional Team Members</h2>
        </div>
      </div>
    </div>
    <div className="team-wrap">
      <div className="border-shap pb-2"></div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="team-member flex flex-col items-center mb-10">
          <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 transition duration-300">
            <img
              src="https://reactdemo-envotek.soyonexpress.com/static/media/team-member3.3996a233712e6c8ee2cf.jpg"
              alt="Sharyl Etheridge"
              className="w-full h-auto"
            />
            <div className="info-box bg-white p-4 py-6">
              <h5 className="text-xl font-bold mb-2">Sharyl Etheridge</h5>
              <span className="text-sm">Consultant Officer</span>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full blur-sm transition duration-300 mr-4">Contact</button>
                <a href="#" className="transform hover:scale-110"><i className="fab fa-instagram text-blue-500 text-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member flex flex-col items-center mb-10">
          <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 transition duration-300">
            <img
              src="https://reactdemo-envotek.soyonexpress.com/static/media/team-member2.fa7a7f664f9d0f120787.jpg"
              alt="Brittaney Hickson"
              className="w-full h-auto"
            />
            <div className="info-box bg-white p-4 py-6">
              <h5 className="text-xl font-bold mb-2">Brittaney Hickson</h5>
              <span className="text-sm">Web Developer</span>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full blur-sm transition duration-300 mr-4">Contact</button>
                <a href="#" className="transform hover:scale-110"><i className="fab fa-instagram text-blue-500 text-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member flex flex-col items-center mb-10">
          <div className="member-image relative border border-gray-300 rounded-lg overflow-hidden mb-4 hover:scale-110 transition duration-300">
            <img
              src="https://reactdemo-envotek.soyonexpress.com/static/media/team-member1.a008367e29d1e6eee5f9.jpg"
              alt="Rosalina Sheldon"
              className="w-full h-auto"
            />
            <div className="info-box bg-white p-4 py-6">
              <h5 className="text-xl font-bold mb-2">Rosalina Sheldon</h5>
              <span className="text-sm">UI Designer</span>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full blur-sm transition duration-300 mr-4">Contact</button>
                <a href="#" className="transform hover:scale-110"><i className="fab fa-instagram text-blue-500 text-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <ScrollToTop />
    <Footer />
    </div>

  );
}

export default aboutUs