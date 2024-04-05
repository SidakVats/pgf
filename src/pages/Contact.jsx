import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../pages/Style.css";
import Branches from "../components/Branches";

import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";


const Contact = () => {
  return (
    <>
      {/* ======================== Navbar =========================== */}
      <Navbar />

      {/* ====================== Parallex Banner 1 ================= */}
      <div className="container-fluid p-0">
        <div className="bg-image3">
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6 mt-5 mb-5">
              <p
                className="pt-5 h1 text-uppercase fw-bold"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Individual
              </p>
              <p
                className="display-2 text-uppercase fw-bold"
                style={{ color: "#caba9c" }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Approach
              </p>
              <p
                className="h1 text-uppercase"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                To the choice
              </p>
              <p
                className="h1 text-uppercase fw-bold"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Of Your Style
              </p>
              <hr
                className="ms-2"
                style={{ border: "2px solid gray", width: "75px" }}
                data-aos-delay="900"
                data-aos="fade-up"
              />
              <div className="container">
                <div className="col-sm-10">
                  <p
                    className="mt-3 mb-4"
                    style={{ fontSize: "18px" }}
                    data-aos-delay="1100"
                    data-aos="fade-up"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.{" "}
                  </p>
                </div>
                <div className="col-sm-2"></div>
              </div>
              <div className="ms-3">
                <button
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="btn btn-outline-dark px-4 ms-1 py-1 rounded-0"
                  style={{ fontSize: "22px" }}
                >
                  Learn More
                </button>
              </div>
              <div className="pb-5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== Parallex Banner2 15 years Experience ================= */}
      <div className="container-fluid p-0">
        <div className="bg-image5">
          <div className="container text-center">
            <div
              className="text-white pt-4"
              data-aos="zoom-in"
              data-aos-delay="1000"
              style={{ fontSize: "150px" }}
            >
              15
            </div>
            <div
              className="text-white h1 text-uppercase"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Years
            </div>
            <div
              className="text-white h1 pt-5 pb-5 text-uppercase"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              of experience
            </div>
            <div className="row">
              <div className="col-sm-6  pt-5">
                {/* <img src={Image} className="pt-5 bg-dark rounded-5" height="300" width="300"/> */}
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== Contact Circles ================= */}
      <div className="container mt-3">
        <div className="row">
          <div
            className="col-sm-4 p-4 text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="p-5 color rounded-circle">
              <div className="container mt-2 mb-3">
                <IoLocationOutline
                  className="p-2 rounded-circle display-2"
                  style={{ backgroundColor: "#caba9c", color: "white" }}
                />
              </div>
              <p className="h3 fw-light pt-1 pb-3">WE ARE HERE</p>
              <p className="fw-light text-wrap">
                908 New Hampshire Avenue Northwest #100, Washington, DC 20037,
                United States
              </p>
            </div>
          </div>

          <div
            className="col-sm-4 p-4 text-center "
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <div className="p-5 color rounded-circle">
              <div className="container mt-2 mb-3">
                <FaPhone
                  className="p-2 rounded-circle display-2"
                  style={{ backgroundColor: "#caba9c", color: "white" }}
                />
              </div>
              <p className="h3 fw-light pt-1 pb-3">CALL US</p>
              <p className="fw-light">
                Phone: +1 916-875-2235 <br />
                Mobile: +1 916-875-2235 <br />
                Fax: +1 916-875-2235
              </p>
            </div>
          </div>

          <div
            className="col-sm-4 p-4 text-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="p-5 color rounded-circle">
              <div className="container mt-2 mb-3">
                <GiClockwork
                  className="p-2 rounded-circle display-2"
                  style={{ backgroundColor: "#caba9c", color: "white" }}
                />
              </div>
              <p className="h3 fw-light pt-1 pb-3">WORKING HOURS</p>
              <p className="fw-light">
                Monday-Friday: 9:00 – 22:00 <br />
                Saturday: 11:00 – 20:00 <br />
                Sunday: 11:00 – 17:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== AWARDS & RECOGNITION title ================= */}
      <div className="container text-center mt-5 ">
        <p className="h1" data-aos="fade-up" data-aos-delay="200">
          AWARDS & RECOGNITION
        </p>
        <p className="h6 pt-3" data-aos="fade-up" data-aos-delay="400">
          Lorem ipsum dolor elit. Fugiat aliquid magnam minima culpa.
          Consectetur libero architecto modi, quo laudantium?
        </p>
        <p className="h6 pt-1 pb-5" data-aos="fade-up" data-aos-delay="400">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* ====================== AWARDS & RECOGNITION ================= */}
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877064458-REUES2PX40RXJ8OLXW40/TheKnot_badge.jpg?format=100w"
              className="img-fluid zoom mt-2"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="150">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877064522-UVAQHTRDV3QT6TNSWB2R/Style_me_pretty_blog_badge.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877070962-CH8XS9GR0V6UXFAH2WCF/WeddingWire-Rated-Black.jpg?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="250">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877066900-Z2G2N8K2XJNPLM6Y88FO/winners-badge.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="300">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877066567-UAOXENYH48EXBE0JPPGI/winners-badge+%281%29.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="350">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877066289-VYSFYOJQZP3U9WWH68I1/CCA15-Badge.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ====================== Buttons ================= */}
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="400">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877065373-VV2D2FU5QCDRC6MI45QM/CCA14-Badge.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="450">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877065164-J0ACWB7X6AC0SF0C4NK7/download.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="500">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877065043-DF8LABKQITOS8BFRPYSR/wedding-wire-2012-badge.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2" data-aos="zoom-in" data-aos-delay="550">
            <img
              src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1484877065043-DF8LABKQITOS8BFRPYSR/wedding-wire-2012-badge.png?format=100w"
              className="img-fluid zoom mt-3"
              alt=""
            />
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-0">
          <div className="col-sm-1"></div>
          <div className="col-sm-2"></div>
          <div className="col-sm-3 text-center">
            <a href="/Wedding">
              <div
                className="button btn btn-outline-dark rounded-0 px-5 py-2 mt-2"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ fontSize: "18px" }}
              >
                WEDDING INQUERIES
              </div>
            </a>
          </div>
          <div className="col-sm-3 text-center">
            <a href="/Other">
              <div
                className="button btn btn-outline-dark rounded-0 px-5 py-2 mt-2"
                data-aos="fade-up"
                data-aos-delay="400"
                style={{ fontSize: "18px" }}
              >
                OTHER INQUERIES
              </div>
            </a>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-1"></div>
        </div>
      </div>

      <div className="container-fluid text-center mt-5">
        <div className="bg-image6">
          <p className="h1 pt-5 pb-1" data-aos="fade-down" data-aos-delay="200">
            Get Discount Info
          </p>
          <p
            className="display-1 pb-3 fw-bold"
            style={{ color: "#caba9c" }}
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Newsletter
          </p>
          <p className="h4" data-aos="fade-down" data-aos-delay="600">
            Subscribe to our PGF newsletter and stay up to date with all events
            and latest news coming straight in your mailbox:
          </p>
          <div className="container text-center">
            <center>
              <input
                type="text"
                id="example5"
                class="form-control card3 text-center mt-5"
                placeholder="Enter Your Mail"
                data-aos="fade-down"
                data-aos-delay="700"
                style={{ width: "80%", fontSize: "16px" }}
              />
            </center>
            <br />
          </div>
          <button
            className="btn btn-outline-dark px-5 mb-5 py-2 rounded-0"
            style={{ fontSize: "18px" }}
            data-aos="fade-down"
            data-aos-delay="700"
          >
            SUSCRIBE
          </button>
        </div>
      </div>

      <Branches />

      <Footer />
    </>
  );
};

export default Contact;
