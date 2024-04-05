import React from "react";

const IndexBanner3 = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
      <div className="col-sm-4">
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/beauty_salon_features_1_mini.jpg"
          className="img-fluid"
          alt=""
          data-aos="zoom-in"
        />
        <div className="container">
            <div className="pt-5 mt-4 ms-5">
            <p className="text-uppercase mt-5 h3 fw-bold font1" data-aos="fade-up" data-aos-delay="100">Hair</p>
            <p className="text-uppercase display-6 fw-bold font1" data-aos="fade-up" data-aos-delay="200">Coloring</p>
            <p className="text-uppercase display-6 fw-medium font1" style={{color:"#caba9c"}} data-aos="fade-up" data-aos-delay="300">Professional</p>
            <hr style={{width:"40%"}} data-aos="fade-up" data-aos-delay="400" />
            </div>
        </div>
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/beauty_salon_features_3_mini.jpg"
          className="img-fluid mt-5 pt-4"
          alt=""
          data-aos="zoom-in"
        />
      </div>

      <div className="col-sm-4">
        <div className="ms-5 mt-4 pt-5">
          <p className="text-uppercase mt-5 pt-3 h3 fw-bold font1" data-aos="fade-up" data-aos-delay="100">Hair</p>
          <p className="text-uppercase display-6 fw-bold font1" data-aos="fade-up" data-aos-delay="200">CUTTING</p>
          <p className="text-uppercase display-6 fw-medium font1" style={{color:"#caba9c"}} data-aos="fade-up" data-aos-delay="300">Professional</p>
          <hr style={{width:"40%"}} data-aos="fade-up" data-aos-delay="400" />
        </div>
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/beauty_salon_features_2_mini.jpg"
          className="img-fluid mt-5 pt-4"
          alt=""
          data-aos="zoom-in"
        />
        <div className="mt-5 ms-5 ">
          <p className="text-uppercase mt-5 pt-3 h3 fw-bold font1" data-aos="fade-up" data-aos-delay="100">Hair</p>
          <p className="text-uppercase display-6 fw-bold font1" data-aos="fade-up" data-aos-delay="200">Styling</p>
          <p className="text-uppercase display-6 fw-medium font1" style={{color:"#caba9c"}} data-aos="fade-up" data-aos-delay="300">Professional</p>
          <hr style={{width:"40%"}} data-aos="fade-up" data-aos-delay="400"/>
        </div>
      </div>

      <div className="col-sm-4">
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/beauty_salon_features_4_mini.jpg"
          className="img-fluid"
          alt=""
          data-aos="zoom-in"
        />
        <div className="container bg-dark text-white">
          <div className=" container ms-5 pt-5">
            <p className="text-uppercase mt-5 h3 fw-bold font1" data-aos="fade-up" data-aos-delay="100">Beauty</p>
            <p className="text-uppercase display-6 fw-bold font1" data-aos="fade-up" data-aos-delay="200">Make Up</p>
            <p className="text-uppercase display-6 fw-medium font1" style={{color:"#caba9c"}} data-aos="fade-up" data-aos-delay="300">Professional</p>
            <hr className="" style={{width:"40%", border:"1px solid white"}} data-aos="fade-up" data-aos-delay="400"/>
            <div className="pb-5"></div>
            <div className="pb-5"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default IndexBanner3;
