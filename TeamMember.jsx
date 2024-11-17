import React from 'react';

const TeamMember = ({ name, role, image, instagramLink }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4 py-2">
      <div className="team__area-item relative group ">
        <img
          src={image}
          alt={name}
          className="w-full rounded-lg transition duration-300 transform group-hover:scale-105 group-hover:blur-sm"
        />
        <div className="team__area-item-content  cursor-pointer absolute inset-0 flex flex-col justify-end items-center bg-red-700 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <div className="absolute top-60 right-6 ">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram  text-white text-2xl"></i>
            </a>
          </div>
          <div className="text-center p-4 w-full rounded-lg border border-white">
  <h5 className="text-lg text-white">{name}</h5>
  <span className="text-white">{role}</span>
</div>

        </div>
      </div>
    </div>
  );
};

const TeamArea = () => {
  return (
    <div className="team__area dark__image section-padding pb-0">
      <div className="container">
        <div className="row mb-35">
          <div className="team__area-title py-10  t-center w-full">
            
            <span className="subtitle-two  font-bold px-5 py-5 cursor-pointer text-red-500 text-xl"> <span >-</span>Our Team Member</span>
            <h2 className="font-bold text-4xl px-10 py-1 mt-4">Our Specialist</h2>
          </div>
        </div>
        <div className="row flex flex-wrap">
          <TeamMember
            name="Amelia Clover"
            role="Senior Advisor"
            image="https://conbix-nextjs.vercel.app/_next/static/media/team-1.1c260054.jpg"
            instagramLink="https://www.instagram.com"
          />
          <TeamMember
            name="Steve Rhodes"
            role="Health Coach"
            image="https://conbix-nextjs.vercel.app/_next/static/media/team-2.49f7e990.jpg"
            instagramLink="https://www.instagram.com"
          />
          <TeamMember
            name="Grace Elizabeth"
            role="Underwriter"
            image="https://conbix-nextjs.vercel.app/_next/static/media/team-4.86a58b1b.jpg"
            instagramLink="https://www.instagram.com"
          />
          <TeamMember
            name="Michael James"
            role="Claims Adjuster"
            image="https://conbix-nextjs.vercel.app/_next/static/media/team-3.9379d748.jpg"
            instagramLink="https://www.instagram.com"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
