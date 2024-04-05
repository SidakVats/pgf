import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.css";
import { FaArrowRight } from "react-icons/fa";

import "../pages/Style.css";

const Services = () => {
  return (
    <div>

      {/* ======================== Navbar =========================== */}
      <Navbar />



      {/* ======================== Banner =========================== */}
      <div className="container-fluid text-center p-0">
        <div className="bg-image11 p-5">
          <div
            className="display-1 fw-bold pt-5 text-light"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our
          </div>
        </div>
      </div>

      {/* ======================== Title  & Services ========================= */}
      <div className="container text-center p-5">

        {/* ==================== Title =============== */}
        <p
          className="display-4 fw-bold font1"
          data-aos="zoom-out"
          data-aos-delay="200"
          style={{ color: "#caba9c" }}
        >
          ALL SERVICES
        </p>
        <p
          className="display-2 fw-medium"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          AT OUR SALON
        </p>

        {/* =============== Services ================ */}

        <div className="row mt-5">
          <div className="col-sm-4">
            <div data-aos="zoom-out" data-aos-delay="200">
              <img
                src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/4-thegem-portfolio-justified.jpg"
                className="img-fluid"
                alt=""
              />
              <div
                className="text-center pb-3"
                style={{ backgroundColor: "#f9f6f5" }}
              >
                <p className="pt-5 h4">HAIR STYLING SERVICES</p>
                <center>
                  <hr style={{ width: "20%" }} />
                </center>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet dolor sit, <br /> Lorem, ipsum
                  dolor.
                </p>

                <a
                  class="icon-link icon-link-hover nav-a h5"
                  href="/ServiceDescription"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-5" data-aos="zoom-out" data-aos-delay="200">
              <img
                src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/5-thegem-portfolio-justified.jpg"
                className="img-fluid"
                alt=""
              />
              <div
                className="text-center pb-3"
                style={{ backgroundColor: "#f9f6f5" }}
              >
                <p className="pt-5 h4">HAIR CUTTING SERVICES</p>
                <center>
                  <hr style={{ width: "20%" }} />
                </center>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet dolor sit, <br /> Lorem, ipsum
                  dolor.
                </p>

                <a
                  class="icon-link icon-link-hover nav-a h5"
                  href="/ServiceDescription"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div data-aos="zoom-out" data-aos-delay="200">
              <img
                src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/2-thegem-portfolio-justified.jpg"
                className="img-fluid"
                alt=""
              />
              <div
                className="text-center pb-3"
                style={{ backgroundColor: "#f9f6f5" }}
              >
                <p className="pt-5 h4">HAIR COLORING SERVICES</p>
                <center>
                  <hr style={{ width: "20%" }} />
                </center>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet dolor sit, <br /> Lorem, ipsum
                  dolor.
                </p>

                <a
                  class="icon-link icon-link-hover nav-a h5"
                  href="/ServiceDescription"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-5" data-aos="zoom-out" data-aos-delay="200">
              <img
                src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/6-thegem-portfolio-justified.jpg"
                className="img-fluid"
                alt=""
              />
              <div
                className="text-center pb-3"
                style={{ backgroundColor: "#f9f6f5" }}
              >
                <p className="pt-5 h4">HAIR SPA TREATMENT SERVICES</p>
                <center>
                  <hr style={{ width: "20%" }} />
                </center>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet dolor sit, <br /> Lorem, ipsum
                  dolor.
                </p>

                <a
                  class="icon-link icon-link-hover nav-a h5"
                  href="/ServiceDescription"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div data-aos="zoom-out" data-aos-delay="200">
              <img
                src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/3-thegem-portfolio-justified.jpg"
                className="img-fluid"
                alt=""
              />
              <div
                className="text-center pb-3"
                style={{ backgroundColor: "#f9f6f5" }}
              >
                <p className="pt-5 h4">HAIR STYLING SERVICES</p>
                <center>
                  <hr style={{ width: "20%" }} />
                </center>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet dolor sit, <br /> Lorem, ipsum
                  dolor.
                </p>

                <a
                  class="icon-link icon-link-hover nav-a h5"
                  href="/ServiceDescription"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-5" data-aos="zoom-out" data-aos-delay="200">
              <img
                src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/7-thegem-portfolio-justified.jpg"
                className="img-fluid"
                alt=""
              />
              <div
                className="text-center pb-3"
                style={{ backgroundColor: "#f9f6f5" }}
              >
                <p className="pt-5 h4">HEAD MEDICAL SPA</p>
                <center>
                  <hr style={{ width: "20%" }} />
                </center>
                <p style={{ color: "gray" }}>
                  Lorem ipsum dolor sit amet dolor sit, <br /> Lorem, ipsum
                  dolor.
                </p>

                <a
                  class="icon-link icon-link-hover nav-a h5"
                  href="/ServiceDescription"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ======================== Footer =========================== */}
      <Footer />
    </div>
  );
};

export default Services;
