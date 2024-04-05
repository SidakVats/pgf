import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../pages/Style.css";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import { IoFlowerSharp } from "react-icons/io5";

{
  /* ======================== Testimonaly data =========================== */
}
const testimonialsData = [
  {
    id: "1",
    name: "Sidak Vats",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae consequuntur similique dolorem laborum harum nobis, voluptatum commodi libero amet?",
    designation: "Manager",
  },
  {
    id: "2",
    name: "Bhavnish Arora",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae consequuntur similique dolorem laborum harum nobis, voluptatum commodi libero amet?",
    designation: "Manager2",
  },
  {
    id: "3",
    name: "Uday Kapoor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae consequuntur similique dolorem laborum harum nobis, voluptatum commodi libero amet?",
    designation: "Manager3",
  },
  {
    id: "4",
    name: "Pratham Mahajan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae consequuntur similique dolorem laborum harum nobis, voluptatum commodi libero amet?",
    designation: "Manager4",
  },
];

const AboutUs = () => {
  return (
    <div>
      {/* ======================== Navbar =========================== */}
      <Navbar />

      {/* ======================== Banner =========================== */}
      <div className="container-fluid p-0">
        <div className="bg-image12">
          <div className="container text-center">
            <p
              className=" display-4 pt-5 font1"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ color: "#caba9c" }}
            >
              ENJOY THE SOOTHING EXPERIENCE!
            </p>
            <p
              className="text-white display-3 pt-5 pb-5 fw-bold"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Us
            </p>
            <center>
              <hr
                style={{
                  width: "20%",
                  border: "2px solid #caba9c",
                  color: "#caba9c",
                }}
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </center>
          </div>
        </div>
      </div>

      {/* ======================== Info & Accordians =========================== */}
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-sm-6 pt-5 mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
            cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
            a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
            consequat auctor eu in elit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris in erat
            justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
            <p className="mt-5" data-aos="fade-up" data-aos-delay="300">
              Proin condimentum fermentum nunc:
            </p>
            <div className="d-flex">
              <p data-aos="fade-up" data-aos-delay="350">
                <IoFlowerSharp className="me-3" />
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="d-flex">
              <p data-aos="fade-up" data-aos-delay="400">
                <IoFlowerSharp className="me-3" />
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="d-flex">
              <p data-aos="fade-up" data-aos-delay="450">
                <IoFlowerSharp className="me-3" />
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>

          <div className="col-sm-6 p-5">
            <div className="container-fluid">
              <div
                class="accordion"
                id="accordionExample"
                style={{ width: "100%", marginBottom: "70px" }}
              >
                <div class="accordion-item mt-2 rounded-2">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. SPA THERAPY
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It
                      is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>


                <div class="accordion-item mt-2 mb-2 rounded-2">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. HAIR STYLING
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                      is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item mt-2 mb-2">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. MANICURE & PEDICURE
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                      is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mt-2 mb-5 rounded-2">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. WELLNESS & SPA
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                      is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================== Client Testimonials =========================== */}
      <section
        id="testimonials"
        className="testimonials-block bg-image13 pt-5 pb-5"
      >
        <Container fluid className="text-center">
          <div className="title-holder text-light">
            <div
              className="h1 fw-bold"
              style={{ color: "#caba9c" }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Client Testimonials
            </div>
            <div
              className="h5 fw-medium"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              What Clients Say About Us
            </div>
            <Carousel indicators={false} controls={true} className="mt-5">
              {testimonialsData.map((data) => {
                return (
                  <Carousel.Item key={data.id}>
                    <div className="container">
                      <blockquote>
                        <p
                          className="h4 pb-3 data-desc"
                          data-aos="fade-up"
                          data-aos-delay="350"
                        >
                          {data.description}
                        </p>
                        <span
                          className="h4 fw-bold"
                          style={{ color: "#caba9c" }}
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          {data.name}
                        </span>{" "}
                        <br />
                        <span
                          className="h4"
                          data-aos="fade-up"
                          data-aos-delay="450"
                        >
                          {data.designation}
                        </span>
                      </blockquote>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </section>

      {/* ======================== Footer =========================== */}
      <Footer />
    </div>
  );
};

export default AboutUs;
