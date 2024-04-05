import React from "react";

import Image from "../images/Logo.png";
// import { FaFacebook } from "react-icons/fa6";
// import { BiLogoInstagramAlt } from "react-icons/bi";
// import { LuTwitter } from "react-icons/lu";

import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaSnapchatGhost } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { TiSocialInstagramCircular } from "react-icons/ti";

import { FaLocationArrow } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="bg-image14 footer">
          <div className="row mt-5 pt-5">
            <div className="col-sm-3 text-center">
              <img
                src={Image}
                className="img-fluid"
                style={{ width: "40%" }}
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <p
                className="text-white p-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                facere perferend incidunt magni!
              </p>
            </div>

            <div className="col-sm-3 text-center">
              <p
                className="text-light h3 mt-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Navigation Links
              </p>
              <ul className=" mt-4" style={{ listStyle: "none" }}>
                <a
                  href="/Index"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className="pb-1 h5 nav-li"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Home
                  </li>
                </a>
                <a
                  href="/Services"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className="pb-1 h5 nav-li"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    SERVICES
                  </li>
                </a>
                <a
                  href="/Gallery"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className="pb-1 h5 nav-li"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    GALLERY
                  </li>
                </a>
                <a
                  href="/Blog"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className="pb-1 h5 nav-li"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    BLOG
                  </li>
                </a>
                <a
                  href="/Contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className="pb-1 h5 nav-li"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    CONTACT US
                  </li>
                </a>
                <a
                  href="/AboutUs"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li
                    className="pb-1 h5 nav-li"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  >
                    ABOUT US
                  </li>
                </a>
              </ul>
            </div>

            
            <div className="col-sm-3 ">
              <p
                className="text-light h3 mt-5 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our Social
              </p>
              {/* <ul className="text-white mt-3" style={{ listStyle: "none" }}>
                <li>
                  <a href="https://www.facebook.com/priyankaglamourforever" target="_blank">
                    <TiSocialFacebookCircular
                      className="h1 p-1 rounded-5"
                      style={{ backgroundColor: "white", color: "black" }}
                      data-aos="fade-up"
                      data-aos-delay="350"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/priyankaglamourforever?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <TiSocialInstagramCircular
                    className="h1 p-1 rounded-5"
                    style={{ backgroundColor: "white", color: "black" }}
                    data-aos="fade-up"
                    data-aos-delay="500"
                  /></a>
                </li>
                <li>
                  <a href="">
                    <TfiTwitter
                      className="h1 p-2 rounded-5"
                      style={{ backgroundColor: "white", color: "black" }}
                      data-aos="fade-up"
                      data-aos-delay="400"
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaSnapchatGhost
                      className="h1 p-2 rounded-5"
                      style={{ backgroundColor: "white", color: "black" }}
                      data-aos="fade-up"
                      data-aos-delay="450"
                    />
                  </a>
                </li>
              </ul> */}

              <center>
                <ul className="mt-3">
                  <li>
                    <div class="wrapper">
                      <a
                        href="https://www.facebook.com/priyankaglamourforever"
                        target="_blank"
                      >
                        <div class="button text-start">
                          <div class="icon ">
                            <i class="fab fa-facebook-f"></i>
                          </div>
                          <span>Facebook</span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="wrapper2">
                      <a
                        href="https://www.instagram.com/priyankaglamourforever?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                      >
                      <div class="button text-start">
                        <div class="icon">
                          <i class="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                      </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </center>

              {/* <div class="wrapper">
                <div class="button">
                  <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <span>Facebook</span>
                </div>
                <div class="button">
                  <div class="icon">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <span>Instagram</span>
                </div>
                <div class="button">
                    <div class="icon">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <span>Twitter</span>
                </div>

                <div class="button">
                    <div class="icon">
                      <i class="fab fa-youtube"></i>
                    </div>
                    <span>YouTube</span>
                </div>
              </div> */}


            </div>
            <div className="col-sm-3 text-center">
              <p
                className="text-light h3 mt-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Address
              </p>
              <div className="container mx-auto">
                <div className="mt-3 text-center">
                  <p data-aos="fade-up" data-aos-delay="300">
                    <FaLocationArrow
                      className="h1"
                      style={{ color: "white" }}
                    />
                    <span className="mt-2 text-light ms-2">
                      OM Enterprise, Modal Town
                    </span>
                  </p>
                </div>
                <div className="">
                  <p data-aos="fade-up" data-aos-delay="350">
                    <IoPhonePortrait
                      className="h1"
                      style={{ color: "white" }}
                    />
                    <span className="mt-2 text-light ms-2">+91 1234567890</span>
                  </p>
                </div>
                <div className="">
                  <p data-aos="fade-up" data-aos-delay="400">
                    <MdEmail className="h1" style={{ color: "white" }} />
                    <span className="mt-2 text-light ms-2">
                      dummy@gmail.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
