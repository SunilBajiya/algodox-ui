import React, { useState } from "react";
import 'animate.css/animate.min.css';

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("tab-one");

  return (
    <section className=" bg-gray-100 bg-cover my-5 section-padding py-12 ">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="content-box">
              <div className="sec-title mb-8">
                <div className="sub-title text-xl text-gray-600">Why Choose Us</div>
                <h2 className="text-3xl font-bold">
                  Why Should You <br />
                  Choose Us?
                </h2>
              </div>
              <ul className="nav nav-tabs tab-btn-style-one flex mb-8 border-b border-gray-300" role="tablist">
                <li className="nav-item mr-4">
                  <button
                    className={`nav-link text-lg font-medium ${activeTab === "tab-one" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"} `}
                    id="tab-one-area"
                    onClick={() => setActiveTab("tab-one")}
                    role="tab"
                    aria-controls="tab-one"
                    aria-selected={activeTab === "tab-one"}
                  >
                    Our Mission
                  </button>
                </li>
                <li className="nav-item mr-4">
                  <button
                    className={`nav-link text-lg font-medium ${activeTab === "tab-two" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"} `}
                    id="tab-two-area"
                    onClick={() => setActiveTab("tab-two")}
                    role="tab"
                    aria-controls="tab-two"
                    aria-selected={activeTab === "tab-two"}
                  >
                    Our Vision
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link text-lg font-medium ${activeTab === "tab-three" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"} `}
                    id="tab-three-area"
                    onClick={() => setActiveTab("tab-three")}
                    role="tab"
                    aria-controls="tab-three"
                    aria-selected={activeTab === "tab-three"}
                  >
                    Our Values
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab === "tab-one" && (
                  <div className="tab-pane active animate__animated animate__fadeInUp" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div className="clearfix flex">
                      <div className="w-1/3">
                        <img
                          className="lazy-image  border rounded-xl owl-lazy loaded"
                          src="https://reactdemo-envotek.soyonexpress.com/static/media/blog2.e495947e70752da7c7c4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text w-2/3 pl-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua.
                          Ut enim ad minim veni am, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                          error
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-two" && (
                  <div className="tab-pane animate__animated animate__fadeInUp" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                    <div className="clearfix flex">
                      <div className="w-1/3">
                        <img
                          className="lazy-image border rounded-xl owl-lazy loaded"
                          src="https://conbix-nextjs.vercel.app/_next/static/media/portfolio-4.8c1300b1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text w-2/3 pl-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua.
                          Ut enim ad minim veni am, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                          error
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-three" && (
                  <div className="tab-pane animate__animated animate__fadeInUp" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                    <div className="clearfix flex">
                      <div className="w-1/3">
                        <img
                          className="lazy-image border rounded-xl owl-lazy loaded"
                          src="https://conbix-nextjs.vercel.app/_next/static/media/portfolio-5.33345db9.jpg"
                          alt=""
                        />
                      </div>
                      <div className="text w-2/3 pl-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisici ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua.
                          Ut enim ad minim veni am, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                          error
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-2 lg:w-1/3 cursor-pointer ">
  <div className="image-wrapper  bg-cover relative top-100  left-35 ">
    <div className="image-one absolute left-2 top-5 w-2/3 transition-transform transform hover:scale-105 hover:filter hover:blur-sm hover:bg-blue-900/50">
      <img
        className="lazy-image w-80 h-80 border rounded-xl owl-lazy loaded"
        src="http://azim.commonsupport.com/Finandox/assets/images/resource/image-6.jpg"
        alt=""
      />
    </div>
    <div className="image-two absolute right-2  top-40  w-1/2 transition-transform transform hover:scale-105">
      <img
        className="lazy-image h-60 border rounded-xl owl-lazy loaded"
        src="http://azim.commonsupport.com/Finandox/assets/images/resource/image-5.jpg"
        alt=""
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
