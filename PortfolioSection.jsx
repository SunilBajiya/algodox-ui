import React, { useState } from 'react';

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const projects = [
    { category: "Corporate", title: "Business Analytics", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-2.9640ddda.jpg", link: "#" },
    { category: "Marketing", title: "Marketing Strategy", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-4.8c1300b1.jpg", link: "#" },
    { category: "Business", title: "Business Strategy", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-1.016466f8.jpg", link: "#" },
    { category: "Corporate", title: "Financial Analysis", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-5.33345db9.jpg", link: "#" },
    { category: "Marketing", title: "Brand Development", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-5.33345db9.jpg", link: "#" },
    { category: "Corporate", title: "Business Analytics", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-2.9640ddda.jpg", link: "#" },
    { category: "Marketing", title: "Marketing Strategy", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-4.8c1300b1.jpg", link: "#" },
    { category: "Corporate", title: "Financial Analysis", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-5.33345db9.jpg", link: "#" },
    { category: "Business", title: "Business Strategy", image: "https://conbix-nextjs.vercel.app/_next/static/media/portfolio-4.8c1300b1.jpg", link: "#" },
    // Add more projects as needed
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="team__three section-padding px-20">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="filter_button px-10 py-5">
              <button className={`filter-btn px-6 h-8 mx-2 border border-red-500 text-white-500 rounded-xl ${filter === "All" ? "bg-red-500 text-white" : ""}`} onClick={() => handleFilterChange("All")}>All</button>
              <button className={`filter-btn px-6 h-8 mx-2 border border-red-500 text-white-500 rounded-xl ${filter === "Marketing" ? "bg-red-500 text-white" : ""}`} onClick={() => handleFilterChange("Marketing")}>Marketing</button>
              <button className={`filter-btn px-6 h-8 mx-2 border border-red-500 text-white-500 rounded-xl ${filter === "Business" ? "bg-red-500 text-white" : ""}`} onClick={() => handleFilterChange("Business")}>Business</button>
              <button className={`filter-btn px-6 h-8 mx-2 border border-red-500 text-white-500 rounded-xl ${filter === "Corporate" ? "bg-red-500 text-white" : ""}`} onClick={() => handleFilterChange("Corporate")}>Corporate</button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredProjects.map((project, index) => (
            <div className="w-1/3 p-2" key={index}>
              <div className="relative group">
                <a href={project.link}>
                  <img src={project.image} alt={project.title} className="w-full border rounded-xl border-gray-300" />
                  <div className="absolute inset-0 flex justify-center items-center border rounded-xl bg-red-800 bg-opacity-75 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <h2 className="text-lg font-semibold">{project.title}</h2>
                      <p>{project.category}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
