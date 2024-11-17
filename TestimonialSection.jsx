import React from "react";
import "tailwindcss/tailwind.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialSection = () => {
  const options = {
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: false,
    smartSpeed: 3000,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  const testimonials = [
    {
      name: "Robert Clarkson",
      position: "CEO, Axura",
      text: "The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/17/27/business-woman-2697954_960_720.jpg",
    },
    {
      name: "Robert Clarkson",
      position: "CEO, Axura",
      text: "The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.",
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/10/56/man-1209494_960_720.jpg",
    },
    {
      name: "Robert Clarkson",
      position: "CEO, Axura",
      text: "The team at Tectxon industry is very talented, dedicated, well organized and knowledgeable. I was most satisfied with the quality of the workmanship. They did excellent work.",
      image:
        "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_960_720.jpg",
    },
  ];

  return (
    <section className="testimonial_section py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12">
            <div className="about_content bg-[#020d26] p-8 lg:pr-52 relative">
              <div className="background_layer absolute inset-0 bg-[#020d26] -ml-52 lg:w-full"></div>
              <div className="layer_content relative z-10 h-full">
                <div className="section_title mb-6">
                  <h5 className="text-white text-sm font-light mb-1 -mt-1">
                    CLIENTS
                  </h5>
                  <h2 className="text-white text-3xl lg:text-5xl font-light leading-tight mb-6">
                    Happy with
                    <strong className="font-semibold block">
                      Customers & Clients
                    </strong>
                  </h2>
                  <div className="heading_line relative">
                    <span className="after:block after:content-[''] after:left-16 after:bottom-7 after:absolute after:w-4 after:border-b-4 after:border-gray-400"></span>
                    <div className="after:block after:content-[''] after:left-1/12 after:bottom-7 after:absolute after:w-14 after:border-b-4 after:border-[#ff5e14]"></div>
                  </div>
                  <p className="text-white mb-4">
                    If you need any industrial solution we are available for
                    you. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-white text-sm font-semibold capitalize transition-all duration-300 hover:text-[#ff5e14]"
                >
                  Contact Us<i className="icofont-long-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 mt-12 lg:mt-0">
            <div className="testimonial_box relative mt-12 lg:mt-0">
              <div className="testimonial_container bg-[#ff5e14] -ml-44 lg:ml-0 relative">
                <div className="background_layer absolute inset-0 bg-[#ff5e14] bg-no-repeat bg-center bg-cover"></div>
                <div className="layer_content relative z-10 h-full">
                  <OwlCarousel className="testimonial_owlCarousel" {...options}>
                    {testimonials.map((testimonial, index) => (
                      <div className="testimonials" key={index}>
                        <div className="testimonial_content bg-white p-8 shadow-lg relative z-10 transition-all duration-500">
                          <div className="testimonial_caption mb-4 relative">
                            <h6 className="text-lg font-semibold text-[#020d26]">
                              {testimonial.name}
                            </h6>
                            <span className="text-xs text-gray-500">
                              {testimonial.position}
                            </span>
                            <div className="after:block after:content-[''] after:w-7 after:h-0.5 after:bg-[#ff5e14] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:mt-1"></div>
                          </div>
                          <p className="text-sm italic text-gray-600">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="images_box absolute top-20 left-10">
                          <div className="testimonial_img">
                            <img
                              className="w-1/3 border-4 border-white shadow-md transition-transform duration-300 hover:scale-105"
                              src={testimonial.image}
                              alt="testimonial"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
