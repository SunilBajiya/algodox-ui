import React from 'react';
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />

const AboutUs = () => {
  return (
    <section className="about-us pt-30 sm:pt-25">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
    <div className="relative w-full lg:w-1/2 mb-8 lg:mb-2">
  <div className="flex flex-col lg:flex-row items-start">
    <div className="relative">
      <img className="mt-20 w-50 h-30" src="https://reactdemo-envotek.soyonexpress.com/static/media/about-img2.486724031d9be34353e4.jpg" alt="About Image" />
      <div className="experience-years absolute top-0 right-5 bg-white p-4 shadow-lg flex items-center">
        <h1 className="text-6xl font-bold text-red-600 mr-2">25+</h1>
        <h4 className="text-xl align-text-top text-right">Years Experience</h4>
      </div>
    </div>
    <img className="absolute top-35 left-20 cursor-pointer h-66 w-48 hover:shadow-outline mt-32 ml-40" src="https://reactdemo-envotek.soyonexpress.com/static/media/about-img1.a95eaffd1f27bd255ddd.jpg" alt="About Image" />
  </div>
</div>
      <div className="w-full lg:w-1/2">
        <div className="about-us-content">
          <div className="section-title mb-6">
            <span className="text-primary text-lg px-10 text-red-600">About Us</span>
            <h2 className="text-4xl font-bold">We are the best world IT Company. More than  years of experience.</h2>
          </div>
          <p className="mb-4">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of more recent advancements.
          </p>
          <blockquote className="mb-4 pl-4 border-l-4 border-primary  font-bold ">
            It has survived not only five centuries, but also the leap into typesetting, remaining essentially unchanged. It was popular with the release of more recent advancements.
          </blockquote>
          <p>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of more recent advancements.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutUs;