import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCalendarAlt, faPlay);

const BlogDetails = () => {
  return (
    <section className="py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <aside className="w-full lg:w-1/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-8">
                <form method="post" action="contact.html" className="flex items-center border border-gray-300 rounded hover:border-blue-500">
                  <input
                    type="search"
                    name="search-field"
                    placeholder="Search here..."
                    className="w-full p-2 border-none focus:ring-0 focus:outline-none"
                  />
                  <button type="submit" className="p-2">
                    <FontAwesomeIcon icon="search" className="text-gray-600" />
                  </button>
                </form>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Blog Category</h4>
                <ul className="space-y-2">
                  {['Web Design', 'Web Development', 'Graphic Design', 'Online Marketing', 'App Development'].map((category, index) => (
                    <li key={index}>
                      <a href="/blog-details" className="flex justify-between text-gray-700 hover:text-blue-900 hover:underline hover:underline-green-900">
                        <span><i className="icofont-double-right mr-2"></i>{category}</span>
                        <span>{index * 10 + 22}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Archive Post</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-red-500 mb-1 flex items-center">
                      <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> 25 May 2024
                    </p>
                    <h6>
                      <a href="/blog-details" className="text-gray-700 hover:text-gray-900">
                        Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.
                      </a>
                    </h6>
                  </div>
                  <div>
                    <p className="text-sm text-red-500 mb-1 flex items-center">
                      <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> 25 May 2024
                    </p>
                    <h6>
                      <a href="/blog-details" className="text-gray-700 hover:text-gray-900">
                        Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.
                      </a>
                    </h6>
                  </div>
                  <div>
                    <p className="text-sm text-red-500 mb-1 flex items-center">
                      <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> 25 May 2024
                    </p>
                    <h6>
                      <a href="/blog-details" className="text-gray-700 hover:text-gray-900">
                        Duis autem eum iriure dolor emn hendrerit consequa vel illum eu feugiat nulla.
                      </a>
                    </h6>
                  </div>
                  <div>
                    <p className="text-sm text-red-500 mb-1 flex items-center">
                      <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> 25 May 2024
                    </p>
                    <h6>
                      <blockquote className="bg-gray-100 p-4 rounded-lg mb-4">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged.
                      </blockquote>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden hover:scale-110 cursor-pointer transform transition-all duration-300" style={{ backgroundImage: `url('https://reactdemo-envotek.soyonexpress.com/static/media/blog-details1.cafae623e26e58fadc8d.jpg')` }}>
              </div>
            </div>
          </aside>
          <div className="w-full lg:w-2/3 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden hover:scale-110 transform transition-all duration-300" style={{ backgroundImage: `url('https://reactdemo-envotek.soyonexpress.com/static/media/blog-details1.cafae623e26e58fadc8d.jpg')` }}>
                <a className="flex items-center justify-center w-full h-full bg-black bg-opacity-50" href="https://www.youtube.com/watch?v=9_Do2-X62rw" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="play" className="text-white text-4xl" />
                </a>
                <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded shadow-md">
                  <span className="font-semibold  text-lg">22 June</span>
                </div>
              </div>
              <h3 className="text-2xl py-7 font-semibold mb-4">The Best IT Practices in Cloud And Security.</h3>
              <p className="mb-4">Trust Our Best IT Solution For Your</p>
              <blockquote className="bg-gray-100 p-4 rounded-lg mb-4">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. It was popular in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </blockquote>
              <div className="mb-4">
                <img src="https://reactdemo-envotek.soyonexpress.com/static/media/blog-details2.79984dab67b0aeae834d.jpg" alt="Blog Details Image Two" className="w-full rounded-lg hover:scale-90 cursor-pointer transform transition-all duration-300" />
              </div>
              <p className="mb-4 py-5" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <blockquote className=" bg-gray-100 p-4 rounded-lg mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</blockquote>
              <h3 className="text-2xl font-semibold mb-4">Help challenge critical activities</h3>
              <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <div className="mb-8 border border-blue-500 rounded-md p-2">
                <ul className="flex flex-wrap space-x-2">
                  <li className="text-gray-700">Tags:</li>
                  <li><a href="/blog-details" className="text-blue-500 hover:underline">Medical</a></li>
                  <li><a href="/blog-details" className="text-blue-500 hover:underline">Doctors</a></li>
                  <li><a href="/blog-details" className="text-blue-500 hover:underline">Therapy</a></li>
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Comments</h4>
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <img src="https://reactdemo-envotek.soyonexpress.com/static/media/commenter1.2a7dd896de4ea5d566ea.jpg" alt="Mayra Bolin" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h5 className="font-semibold">Mayra Bolin</h5>
                          <span className="text-gray-500">Web Developer</span>
                        </div>
                        <a href="/blog-details" className="text-blue-500 hover:underline"><i className="icofont-reply text-[#fc5546]"></i> Reply</a>
                      </div>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <img src="https://reactdemo-envotek.soyonexpress.com/static/media/commenter2.8afe1226010c5bceda55.jpg" alt="Rafaela Levy" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h5 className="font-semibold">Rafaela Levy</h5>
                          <span className="text-gray-500">Web Developer</span>
                        </div>
                        <a href="/blog-details" className="text-blue-500 hover:underline"><i className="icofont-reply"></i> Reply</a>
                      </div>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Leave A Comment</h4>
                <form>
                  <div className="space-y-4">
                    <div>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" id="name" name="name" placeholder="Name:" required />
                    </div>
                    <div>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded" id="email" name="email" placeholder="Email:" required />
                    </div>
                    <div>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" id="number" name="number" placeholder="Phone:" />
                    </div>
                    <div>
                      <textarea className="w-full p-2 border border-gray-300 rounded" id="message:" name="message:" rows="6" placeholder="Message:" required></textarea>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
                      Submit Comment<i className="icofont-arrow-right ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
