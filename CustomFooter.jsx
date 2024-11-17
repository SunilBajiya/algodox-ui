import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function CustomFooter() {
  return (
    <MDBFooter style={{ backgroundColor: 'blue', color: 'white' }} className='text-center text-lg-start text-muted'>
      <section className='hero-content'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-5'>
            <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center footer-spacing">
              <div className="lg:w-1/5 md:w-1/2 sm:w-full px-4">
                <h5 className="text-xl font-bold text-white">Algodox</h5>
                <p className="text-white pt-4">
                AlgoDox is your technology partner for innovative and impactful digital solutions.</p>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-top'>
        <div className='me-5 d-none d-lg-block'>
          <span className="text-white">Connect with us on social media:</span>
        </div>
        <div className="flex space-x-4 py-4">
  <a href="#" className="text-reset text-white">
    <BsFacebook />
  </a>
  <a href="#" className="text-reset text-white">
    <BsTwitter />
  </a>
  <a href="#" className="text-reset text-white">
    <BsInstagram />
  </a>
  <a href="#" className="text-reset text-white">
    <BsGithub />
  </a>
  <a href="#" className="text-reset text-white">
    <BsDribbble />
  </a>
</div>

      </section>
              </div>
              <div className="lg:w-1/5 md:w-1/2 sm:w-full px-4 pt-8 md:pt-0">
                <h5 className="text-xl font-bold text-white">PRODUCTS</h5>
                <ul className="list-none pt-4">
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Angular
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      React
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Vue
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Laravel
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 sm:w-full px-4 pt-8 md:pt-0">
                <h5 className="text-xl font-bold text-white">USEFUL LINKS</h5>
                <ul className="list-none pt-4">
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Settings
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Orders
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                      Help
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 sm:w-full px-4 pt-8 md:pt-0">
                <h5 className="text-xl font-bold text-white">CONTACT</h5>
                <ul className="list-none pt-4">
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                    605, SGH, Vaishali Nagar, Jaipur, India
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                    care@algodox.co.in
                    </a>
                  </li>
                  <li className="text-white mb-2">
                    <a className="text-white hover:text-gray-300" href="#">
                    +91-9571144478
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/5 md:w-1/2 sm:w-full px-4 pt-8 md:pt-0">
                <h5 className="text-xl font-bold text-white">GALLERY</h5>
              <div className="flex flex-wrap pt-4  cursor-pointer px-5">
  <img src="https://media.istockphoto.com/id/1456367827/photo/young-business-people-meeting-office-teamwork-group-laptop-presentation-seminar-businesswoman.jpg?s=612x612&w=0&k=20&c=XjLCbw5qWHC5eC7JFAW2u5QlbuEH6Nk-w93r23MKjT4=" alt="Gallery Image 1" className=" m-1 w-12 h-12" />
  <img src="https://media.istockphoto.com/id/1467107435/photo/young-business-people-meeting-office-teamwork-group-laptop-presentation-seminar-businesswoman.jpg?s=612x612&w=0&k=20&c=3wxkHANN2J0m1lFVptj5ze5rSVw7SvdcfNejuWDZfEk=" alt="Gallery Image 2" className="m-1 w-12 h-12" />
  <img src="https://media.istockphoto.com/id/1188929913/photo/smiling-mixed-race-colleagues-explaining-project-ideas-to-female-teammates.jpg?s=612x612&w=0&k=20&c=xvf_tp9ArMz4OY6cWYMaBliKcQbKGAQs6l57cn0e_HY=" alt="Gallery Image 3" className="m-1 w-12 h-12" />
  <img src="https://media.istockphoto.com/id/508384370/photo/sharing-ideas-have-never-been-easier.jpg?s=612x612&w=0&k=20&c=jrvdlro2hm6oGwUBCBQecGAz21h2CRkepIeDpICWB_w=" alt="Gallery Image 4" className="m-1 w-12 h-12" />
  <img src="https://media.istockphoto.com/id/1849153869/photo/happy-entrepreneurs-talking-while-using-wireless-technology-in-the-office.jpg?s=612x612&w=0&k=20&c=thhMt6vjyKjmjG4aOL_mbSFdF0TqNlHF74wkHzQXssg=" alt="Gallery Image 5" className="m-1 w-12 h-12" />
  <img src="https://media.istockphoto.com/id/515519115/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=bOwvEmbC1kiqeYjLgQgICKpxm1396OYrKXTvuuAmQOQ=" alt="Gallery Image 6" className="m-1 w-12 h-12" />
</div>

              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>

      
      <div className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  <div className="text-white">
    <span>© {new Date().getFullYear()} <a>AlgoDox</a>. All rights reserved by AlgoDox Technology. <span style={{ color: 'red' }}>❤️</span></span>
  </div>
</div>

    </MDBFooter>
  );
}

export default CustomFooter;
