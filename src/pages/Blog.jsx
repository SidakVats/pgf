import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSnapchat } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.css";

const Blog = () => {
  return (
    <div>
      {/* ======================== Navbar =========================== */}
      <Navbar />



      {/* ======================== Banner =========================== */}
      <div className="box text-center">
        <div className="bg-image10 pt-5 pb-5">
          
          <div
            className="display-5 pt-5 fw-medium "
            style={{ color: "#caba9c" }}
            data-aos="fade-up"
            fade-aos-delay="100"
          >
            ENJOY THE SOOTHING EXPERIENCE!
          </div>
          <div
            className="display-1 fw-bold pt-3 pb-3 text-light"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our News
          </div>
          <center>
            <hr
              style={{
                width: "15%",
                border: "2px solid #caba9c",
                color: "#caba9c",
              }}
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </center>
        </div>
      </div>

      {/* ======================== 3 Blogs =========================== */}
      <div class="container mt-5">
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/2-2-thegem-blog-default.jpg"
          class="img-fluid mt-5 zoom1"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <p
          class="display-6 mt-5 fw-bold nav-a"
          style={{ cursor: "pointer" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          ALL ABOUT THE BEST MUSIC FESTIVAL
        </p>
        <p data-aos="fade-up" data-aos-delay="350">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed,
          libero quod veniam pariatur nulla omnis non earum dignissimos totam a
          nobis suscipit quidem! Dolorum, excepturi blanditiis libero culpa
          facere alias et mollitia ullam accusamus cupiditate modi laborum cum
          vel qui obcaecati est accusantium illo ab numquam dolores ex
          laboriosam sint, ducimus sunt quidem!
        </p>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="h5">
                <span class="nav-a" data-aos="fade-up" data-aos-delay="400">
                  Februrary 13,2024
                </span>
                <a
                  href="#"
                  style={{ color: "black" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  /Culture
                </a>
                <span class="nav-a" data-aos="fade-up" data-aos-delay="400">
                  /Sound
                </span>
                <a
                  class="icon-link icon-link-hover nav-a ms-3 h5"
                  href="#"
                  style={{ textDecoration: "none" }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </p>
            </div>
            <div class="col-sm-6" data-aos="fade-up" data-aos-delay="450">
              <FaFacebook class="h3" style={{ color: "black" }} />
              <BiLogoInstagramAlt
                class="ms-3 h3 "
                style={{ color: "black" }}
              />
              <FaSnapchat class="ms-3 h3" style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/2-2-thegem-blog-default.jpg"
          style={{ cursor: "pointer" }}
          class="img-fluid mt-5 zoom1"
          data-aos="zoom-in"
          data-aos-delay="200"
          alt=""
        />
        <p
          class="display-6 mt-5 fw-bold nav-a"
          style={{ cursor: "pointer" }}
          data-aos="fade-up"
          data-aos-delay="350"
        >
          OUTSTANDING SOUND DAY: 1 MAIN STAGE
        </p>
        <p data-aos="fade-up" data-aos-delay="350">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed,
          libero quod veniam pariatur nulla omnis non earum dignissimos totam a
          nobis suscipit quidem! Dolorum, excepturi blanditiis libero culpa
          facere alias et mollitia ullam accusamus cupiditate modi laborum cum
          vel qui obcaecati est accusantium illo ab numquam dolores ex
          laboriosam sint, ducimus sunt quidem!
        </p>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="h5">
                <span class="nav-a" data-aos="fade-up" data-aos-delay="400">
                  Februrary 15,2024
                </span>
                <a
                  href="#"
                  style={{ color: "black" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  /Culture
                </a>
                <span class="nav-a" data-aos="fade-up" data-aos-delay="400">
                  /Bussiness
                </span>
                <a
                  class="icon-link icon-link-hover nav-a ms-3 h5"
                  href="#"
                  style={{ textDecoration: "none" }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </p>
            </div>
            <div class="col-sm-6" data-aos="fade-up" data-aos-delay="450">
              <FaFacebook class="h4 " style={{ color: "black" }} />
              <BiLogoInstagramAlt
                class="ms-3 h3"
                style={{ color: "black" }}
              />
              <FaSnapchat class="ms-3 h4" style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 mb-5">
        <img
          src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/2-2-thegem-blog-default.jpg"
          style={{ cursor: "pointer" }}
          class="img-fluid mt-5 zoom1"
          alt=""
          data-aos="zoom-in"
          data-aos-delay="200"
        />
        <p class="display-6 mt-5 fw-bold nav-a" style={{ cursor: "pointer" }} data-aos="fade-up"
          data-aos-delay="350">
          It’s Something That You Really Love
        </p>
        <p data-aos="fade-up"
          data-aos-delay="350">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed,
          libero quod veniam pariatur nulla omnis non earum dignissimos totam a
          nobis suscipit quidem! Dolorum, excepturi blanditiis libero culpa
          facere alias et mollitia ullam accusamus cupiditate modi laborum cum
          vel qui obcaecati est accusantium illo ab numquam dolores ex
          laboriosam sint, ducimus sunt quidem!
        </p>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="h5">
                <span class="nav-a" data-aos="fade-up"
          data-aos-delay="400">Februrary 9,2024</span> 
                <a href="#" style={{ color: "black" }} data-aos="fade-up"
          data-aos-delay="400">
                  /Culture
                </a>
                 <span class="nav-a" data-aos="fade-up"
          data-aos-delay="400">/Art, Sound</span>
                <a
                  class="icon-link icon-link-hover nav-a ms-3 h5"
                  href="#"
                  style={{ textDecoration: "none" }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Read More
                  <svg class="bi" aria-hidden="true">
                    <FaArrowRight />
                  </svg>
                </a>
              </p>
            </div>
            <div class="col-sm-6" data-aos="fade-up"
          data-aos-delay="450">
              <FaFacebook class="h4" style={{ color: "black" }} />
              <BiLogoInstagramAlt
                class="ms-3 h3"
                style={{ color: "black" }}
              />
              <FaSnapchat class="ms-3 h4" style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>



      {/* ======================== Footer =========================== */}
      <Footer />
    </div>
  );
};

export default Blog;
