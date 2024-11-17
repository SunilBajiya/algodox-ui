import React from 'react';

const HomeSection = () => {
    return (
    <div className="row">
      <div className="col-lg-8 col-xl-9">
        <div className="row">
          <div className="col-sm-6">
            <div className="service-item">
              <div className="serv-iconimg">
                <img src="data:image add url" alt="Service Icon" />
              </div>
              <div className="serv-content">
                <h5><a href="/service-details">Big Data And Analytics.</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-xl-3">
        <div className="service-img" style={{ background: 'url("/static/media/service-img.fb40a742470405488b26.jpg")' }}>
          <div className="service-details-btn">
            <a className="btn theme-btn" href="/service-details">
              More Services
              <i className="icofont-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeSection;
