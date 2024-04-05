import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

import { FaRegUserCircle } from "react-icons/fa";

import "../pages/Style.css";

const WeddingQ = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid p-0">
        <div className="bg-image pt-5 pb-5">
          <div className="container text-center">
            <p
              className="text-white display-4 pt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              ENJOY THE SOOTHING EXPERIENCE!
            </p>
            <p
              className="text-white display-1 pt-5 fw-bold"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
            </p>
            <center>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                style={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "20%",
                }}
              ></div>
            </center>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5 mb-5">
        <p
          className="display-3 fw-bold font2"
          style={{ color: "#caba9c" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* WEDDING ENQUIRIES */}
          Wedding Enquiries
        </p>
        <p className="h3" data-aos="fade-up" data-aos-delay="400">
          SEND US A MESSAGE
        </p>
      </div>

      <div className="container-fluid mb-5">
        <div className="container mt-5 pt-5 mb-5 pb-5 card4 rounded-5">
          <div className="container mt-5">
            <form action="https://formspree.io/f/xwkgnekl" method="POST">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <label
                      for="example1"
                      className="mb-2 mt-4 h6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control card3 icon"
                      name="Name:"
                      id="example1"
                      placeholder="Full Name"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label
                      for="example3"
                      className="mb-2 mt-4 h6"
                      data-aos="fade-up"
                      data-aos-delay="150"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="example3"
                      name="Phone Number:"
                      data-aos="fade-up"
                      data-aos-delay="150"
                      class="form-control card3"
                      placeholder="Enter Your Number "
                    />
                  </div>
                  <div className="container">
                    <label
                      for="example2"
                      className="mt-4 mb-2 h6"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="From:"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      id="example2"
                      class="form-control card3"
                      placeholder="Enter Your Email "
                    />
                  </div>
                  <div className="col-sm-6 ">
                    <label
                      for="example4"
                      className="mt-4 mb-2 h6"
                      data-aos="fade-up"
                      data-aos-delay="250"
                    >
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      id="example4"
                      name="Wedding Date:"
                      data-aos="fade-up"
                      data-aos-delay="250"
                      class="form-control card3"
                      placeholder="Enter Your Wedding Date"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label
                      for="example5"
                      className="mt-4 mb-2 h6"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Ceremony Start Time
                    </label>
                    <input
                      type="text"
                      id="example5"
                      name="Ceremony Start Time:"
                      data-aos="fade-up"
                      data-aos-delay="350"
                      class="form-control card3"
                      placeholder="Enter The Starting Time Of Ceremony"
                    />
                  </div>
                  <div className="container">
                    <label
                      for="example7"
                      className="mt-4 mb-2 h6"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      How many makeup applications do you need? Include mothers,
                      bridesmaids, etc (excluding bride)
                    </label>
                    <input
                      type="number"
                      name="Number of Applications:"
                      id="example7"
                      data-aos="fade-up"
                      data-aos-delay="450"
                      class="form-control card3"
                      placeholder="Enter The Number Of Applicants"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label
                      for="example8"
                      className="mt-4 mb-2 h6"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      Where did you find me?
                    </label>
                    <input
                      type="text"
                      id="example8"
                      name="Refrence:"
                      data-aos="fade-up"
                      data-aos-delay="550"
                      class="form-control card3"
                      placeholder="Refrence Name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label
                      for="example6"
                      className="mt-4 mb-2 h6"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      Location where makeup will be applied (Name and Address)
                    </label>
                    <input
                      type="text"
                      name="Location:"
                      id="example6"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      class="form-control card3"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="container text-center">
                    <button
                      type="submit"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      class="btn card3 mt-5 h1 px-5"
                      style={{ color: "#000", border: "1px solid black" }}
                    >
                      SUBMIT
                    </button>
                    <p className="mt-4 h6">
                      This form is protected by reCAPTCHA and the Google
                      <a href="">Privacy Policy</a> and
                      <a href="">Terms of Service</a> apply.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default WeddingQ;
