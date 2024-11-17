import React from 'react';

const HomeBlogSection = () => {
  const currentDate = "18 May, 2024";

  return (
    <section className="blog-section pt-28 pb-18">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <span className="block text-lg font-semibold text-gray-600">Blog Post</span>
              <h2 className="text-3xl font-bold mt-2">Some Latest Articles From Our News Feed.</h2>
            </div>
          </div>
        </div>
        <div className="row mt-10 flex flex-wrap">
          <div className="col-lg-6 w-full lg:w-1/2 p-4">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image border rounded-xl h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog1.8eaa511278f63f538ec6.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm" style={{ color: '#fc5546' }}>{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-black">It uses a dictionary of over combined handful.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2 p-4">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog3.927cb80613bf95e1cd8b.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm" style={{ color: '#fc5546' }}>{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-black">Efficiently monetize models transparent sources.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2 p-4">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog2.e495947e70752da7c7c4.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm" style={{ color: '#fc5546' }}>{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-black">Market Insights To Manage People Related Costs.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 w-full lg:w-1/2 p-4">
            <div className="blog-item flex bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div
                className="blog-image h-64 w-1/3 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://reactdemo-envotek.soyonexpress.com/static/media/blog4.c2aa54b795d12fc69618.jpg)' }}
              ></div>
              <div className="blog-content p-6 w-2/3">
                <span className="date text-sm" style={{ color: '#fc5546' }}>{currentDate}</span>
                <h5 className="text-xl font-semibold mt-2">
                  <a href="/blog-details" className="text-black hover:text-black">New Remote Workers Visible To Security.</a>
                </h5>
                <p className="text-gray-600 mt-4">It has survived not only five centuries typesetting remaining essentially was the release more recent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
