import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../pages/Style.css";

const AllQueries = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid p-0">
        <div className="bg-image2 pt-5 pb-5">
          <div className="container text-center">
            <p
              className="text-white display-4 pt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A Women Who Is Going To Cut Her Hair Is About To Change Her World
            </p>
            <p
              className=" display-3 pt-5 pb-5 fw-bold"
              style={{ color: "#caba9c" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Make A Appoinment
            </p>
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
          don't shy away from
        </p>
        <p className="h3" data-aos="fade-up" data-aos-delay="400">
          SENDING US A MESSAGE
        </p>
      </div>

      <div className="container-fluid mt-5 mb-5">
       <div className="container mt-5 pt-5 mb-5 pb-5 card4 rounded-5">
        <form class="row g-3 px-3" action="https://formspree.io/f/xrgnazgq"  method="POST">
          <div class="col-md-6">
            <label
              for="validationDefault01"
              class="form-label"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              First name
            </label>
            <input
              type="text"
              class="form-control card3"
              id="validationDefault01"
              name="first name"
              placeholder="Enter Your First Name"
              data-aos="fade-up"
              data-aos-delay="100"
              required
            />
          </div>
          <div class="col-md-6">
            <label
              for="validationDefault02"
              class="form-label"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Last name
            </label>
            <input
              type="text"
              name="last name"
              class="form-control card3"
              id="validationDefault02"
              placeholder="Enter Your Last Name"
              data-aos="fade-up"
              data-aos-delay="150"
              required
            />
          </div>

          <div class="col-md-12">
            <label
              for="validationDefault03"
              class="form-label"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              class="form-control card3"
              id="validationDefault03"
              placeholder="Enter Your Email"
              data-aos="fade-up"
              data-aos-delay="200"
              required
            />
          </div>

          <div class="col-md-12">
            <label
              for="validationDefault03"
              class="form-label"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              class="form-control card3"
              id="validationDefault03"
              placeholder="Subject"
              data-aos="fade-up"
              data-aos-delay="250"
              required
            />
          </div>

          <div class="col-md-12">
            <label
              for="validationDefault03"
              class="form-label"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Message
            </label>
            <input
              type="text"
              name="message"
              class="form-control card3"
              placeholder="Enter Your Message"
              style={{ height: "10vh" }}
              id="validationDefault03"
              data-aos="fade-up"
              data-aos-delay="300"
              required
            />
          </div>

          <div class="col-12">
            <button
              class="btn card3 mt-4 h1 px-5 ms-2"
              type="submit"
              data-aos="fade-up"
              data-aos-delay="350"
              style={{ color: "#000", border: "1px solid black" }}
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
      </div>
   
      <Footer />
    </>
  );
};

export default AllQueries;
