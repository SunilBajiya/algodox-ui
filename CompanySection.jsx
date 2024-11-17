import React, { useState, useEffect } from 'react';

const CompanySection = () => {
  const [completedProjects, setCompletedProjects] = useState(1);
  const [happyCustomers, setHappyCustomers] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment completed projects up to 50k
      if (completedProjects < 50) {
        setCompletedProjects(prevProjects => prevProjects + 1);
      }
      // Increment happy customers up to 50k
      if (happyCustomers < 300) {
        setHappyCustomers(prevCustomers => prevCustomers + 4);
      }
      
      // Add lime when completedProjects reach 70k
      if (completedProjects >= 700) {
        document.body.style.backgroundColor = 'lime';
      }
      
      // Stop the increment when completedProjects reach 50k
      if (completedProjects >= 500) {
        clearInterval(interval);
      }
    }, 90); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [completedProjects, happyCustomers]); // Dependencies added to the useEffect

  return (
    <div className="company__two section-padding pt-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="lg:order-2">
            <div className="company__two-right dark__image t-right overflow-hidden">
              <img
                className="img__full rounded-xl cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out"
                src="https://conbix-nextjs.vercel.app/_next/static/media/about-9.fec0c424.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className="lg:order-1 px-10">
            <div className="company__two-left">
              <div className="company__two-left-title">
                <span className="subtitle-one  text-red-600"> <span>-</span>Who we are</span>
                <h2 className="font-semibold text-3xl py-3">Best Company <br/> Especially in Business</h2>
                <p className="px-5 py-4 bg-gray-100 rounded-xl  "> 
                  Aenean ac vulputate nibh, sed fringilla metus. Pellentesque
                  porttitor felis eu nunc feugiat, nec condimentum magna
                  ultricies. Nam vitae est accumsan nunc
                </p>
              </div>
              <div className="company__two-left-skill ">
                <div className="company__two-left-skill-item">
                  <h2 className="font-bold text-3xl  ">
                    <span className='cursor-pointer'>{completedProjects}</span>k
                  </h2>
                  <h6 className='lg:order-2 px-12'>Project Completed Last Years</h6>
                </div>
                <div className="company__two-left-skill-item  py-10" >
                  <h2 className="font-bold text-3xl">
                    <span className='cursor-pointer'>{happyCustomers}</span>k
                  </h2>
                  <h6 className='lg:order-2  px-12 '>Happy Customer Worldwide</h6>
                </div>
              </div>
              <a className="btn-twobg-blue-500 gap-y-10  text-white py-3 px-6 rounded-xl bg-red-700 hover:bg-blue-600" href="/aboutUs">
                Discover more <i className="far fa-chevron-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
