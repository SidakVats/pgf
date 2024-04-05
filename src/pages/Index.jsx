import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import "../pages/Style.css";

import IndexBanner from "../components/IndexBanner";
import IndexBanner2 from "../components/IndexBanner2";
import IndexBanner3 from "../components/IndexBanner3";
import IndexBanner4 from "../components/IndexBanner4";
import IndexBanner5 from "../components/IndexBanner5";
import IndexBanner6 from "../components/IndexBanner6";
import ImageBanner7 from "../components/ImageBanner7";
import IndexBanner8 from "../components/IndexBanner8";


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>

      {/* ======================== Navbar =========================== */}
      <Navbar />

      {/* ============================ First Image ==================  */}
      <IndexBanner />
      
      {/* ==================== Parralex Effect Image ================ */}
      <div className="container-fluid p-0">
        <div className="box">
          <IndexBanner2 />
        </div>
      </div>

      {/* ==================== Why choose our salon ================= */}
      <IndexBanner5 />

      {/* =========== Hair Cutting Professional section  =========== */}
      <IndexBanner3 />

      {/* ======================== Countup =========================== */}
      <div className="container-fluid">
        <ImageBanner7 />
      </div>

      {/* ======================== Services =========================== */}
      <IndexBanner8/>

      {/* ======================== Services 2 ========================= */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484843869825-KGSNYTUQAOVEPU3XO2AQ/13072734_822550634516167_8348749389572188912_o.jpg?format=750w"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484843367357-QGJEKS1WJ50UK01869LV/image-asset.jpeg?format=750w"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* <div className="col-sm-4">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484842919039-C400DDJ82VFXL05GM1PV/Jill+Stonier+Makeup+Saint+Augustine+3.jpg?format=750w"
              className="img-fluid"
              alt=""
            />
          </div> */}
        </div>
      </div>

      {/* ======================== Brands section ===================== */}
      <IndexBanner6 />

      {/* ======================== About section =========================== */}
      <div className="container-fluid mb-5">
        <div className="box3">
          <IndexBanner4 />
        </div>
      </div>


      
      {/* ======================== Footer =========================== */}
      <Footer />
    </>
  );
};

export default Index;
