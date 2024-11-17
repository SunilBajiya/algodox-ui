import React from 'react';

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-12">
          <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
          <h1 className='font-bold text-red-700'>FROM THE BLOG</h1>
            <h2 className="text-4xl font-bold px-3">Blog & Articles</h2>
            <span className="block text-gray-600 px-4 py-3">From The Blog</span>
          </div>
          <div className="w-full lg:w-1/3 text-right">
            <a href="/blog" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              See more blog <i className="fas fa-chevron-double-right"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {[
            {
              id: 1,
              title: 'Revamp Your Business with Expert Consulting',
              date: '10 June',
              img: 'https://conbix-nextjs.vercel.app/_next/static/media/blog-2.98ae3148.jpg',
              comments: 2,
              link: '#',
            },
            {
              id: 2,
              title: 'Drive Business Growth with our Consulting',
              date: '12 June',
              img: 'https://conbix-nextjs.vercel.app/_next/static/media/blog-3.95498b34.jpg',
              comments: 3,
              link: '#',
            },
            {
              id: 3,
              title: 'Teaching and training employees',
              date: '13 June',
              img: 'https://conbix-nextjs.vercel.app/_next/static/media/blog-1.fc9b3799.jpg',
              comments: 6,
              link: '#',
            },
          ].map((blog) => (
            <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 px-5 mb-4 hover:bg-greay-900">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <a href={blog.link}>
                    <img
                      src={blog.img}
                      alt="blog"
                      className="w-full h-56 object-cover transition-transform transform hover:scale-105"
                    />
                    <div className="absolute bottom-0 border-b   border-gray-900 pb-6 right-5 h-16 w-12 bg-red-500 text-white text-sm px-2 py-1 rounded">
                      {blog.date}
                    </div>
                  </a>
                </div>
                <div className="p-4 ">
                  <div className="flex items-center cursor-pointer justify-between  border-b border-gray-300 pb-6 text-gray-600 text-sm mb-2">
                    <div>
                      <i className=" text-red-600 far fa-user"></i> By-Admin
                    </div>
                    <div>
                      <i className="text-red-600 far fa-comment-dots"></i> Comments ({blog.comments}<span>K</span>)
                    </div>
                  </div>
                  <h4 className="text-lg px-6  font-semibold mb-2">
                    <a href={blog.link} className="hover:no-underline hover:text-red-700 ">
                      {blog.title}
                    </a>
                  </h4>
                  <p className="text-gray-700 px-8">Experts say some good first steps in starting business are researching</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
