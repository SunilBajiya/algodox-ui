import React from 'react'
import Footer from "../CustomFooter"
import ScrollToTop from '../Sections/ScrollToTop'
import PortfolioSection from '../Sections/PortfolioSection'

function Portfolio() {
  return (
    <div>
   <div className="hero relative min-h-screen bg-cover bg-no-repeat9" style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/hero-bg.f85b4ea749dce501d7d0.jpg')" }}>
 <div className="absolute inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-lg"></div>

    <div className="hero-content relative flex flex-col h-full  lg:px-39 py-40 col-12 row">
      <h1 className="text-5xl text-center text-white font-bold mx-80 my-80 mb-10 px-10">Protfolio </h1>
    </div>
    
    </div>
    <PortfolioSection />
    <section className=" cta-section pb-30 rpb-25 bg-white py-2 px-2 relative flex justify-center h-full">
  <div className="container ">
    <div
      className="contact-withus bg-cover  bg-center p-10"
      style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/cta-bg.900813190ce68414195f.jpg')" }}
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-withus-content">
            <h3 className="text-2xl font-bold">
              Contact With Us. To Require a Detailed Analysis of Your Plan.
            </h3>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-2 ">
          <div className="contact-withus-num flex flex-col items-start">
            <a className="contact-number text-xl text-white mb-4 " href="/project-details">
              +91-9571144478
            </a>
            <a
              className="btn theme-btn bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              href="/contact"
            >
              Contact Today
              <i className="icofont-double-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<ScrollToTop />
    <Footer />
    </div>
  )
}

export default Portfolio