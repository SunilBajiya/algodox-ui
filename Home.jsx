import React from 'react';
import Footer from '../CustomFooter';
import HomeBlogSection from '../Sections/HomeBlogSection';
import WhyChooseUs from "../Sections/WhyChooseUs";
import ScrollToTop from '../Sections/ScrollToTop'
import AboutSection from '../Sections/AboutSection';
import SubscribeSection from '../Sections/SubscribeSection';

function Home() {
  return (
    <div>
   <div className="hero relative h-60 min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://reactdemo-envotek.soyonexpress.com/static/media/hero-bg.f85b4ea749dce501d7d0.jpg')" }}>
    <div className="absolute inset-0 bg-purple-900 bg-opacity-50 backdrop-blur-lg"></div>
    <div className="hero-content relative flex flex-col h-full lg:px-39 py-40 col-12 row">
    <div className="hero-content relative flex flex-col h-full lg:px-39 py-40 col-12 row">
    <div className="hero-content relative flex flex-col h-full lg:px-9 py-10 col-12 row">
    <div className="absolute left-10 top-1 pl-20">
        <h1 className="text-4xl  pl-10 text-white font-bold mb-10">
            IT Management <br />
            Service & Support <br />
            for Your Business.
        </h1>
        <p className="text-white pl-10 font-bold text-xl mt-5">Keep your business safe & ensure high availability.</p>
        <a class="rounded-md box-border  hover:text-white hover:border-red-700 py-2 px-4 w-44 h-14 cursor-pointer tracking-widest border-2 hover:bg-transparent bg-red-500 border-red-500 hover:border-solid hover:opacity-50 transition duration-300 ease-in-out flex items-center justify-center mt-5" href="#">
            <span>Find Solution</span>
            <span class="ml-2">&#xBB;</span>
        </a>
    </div>
</div>

</div>

</div>
</div>

  
    <HomeBlogSection />
    <WhyChooseUs />
    <AboutSection />
    <ScrollToTop />
    <SubscribeSection />
    <Footer />
  </div>
  
  );
}

export default Home;
