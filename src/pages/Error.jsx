import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../images/error2.gif";

import { FaArrowRight } from "react-icons/fa";

const Error = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-6 mt-5 pt-5 text-center">
            <img src={Image} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-6 mt-5 pt-5 px-3">
            <p
              className="display-1 fw-medium font2"
              style={{ color: "#caba9c" }}
            >
              Whoops!
            </p>
            <p className="h4 pt-2 fw-light">
              You didn't break the internet, but we can't find what you are
              looking for.
            </p>
            <p className="h5 pt-2">
              Please check the{" "}
              <span
                className="text-uppercase"
                style={{ color: "rgb(223, 162, 48)" }}
              >
                url
              </span> {""}
              and try again.
            </p>
            <a href="/">
              <button
                className="btn btn-outline-dark rounded-0 mt-3 px-5 py-2"
                style={{ fontSize: "18px" }}
              >
                EXPLORE OUR SITE
              </button>
            </a>

            <p className="mt-4">
              <a
                class="icon-link icon-link-hover nav-a h5"
                href="/Services"
                style={{ textDecoration: "none" }}
              >
                Our Services
                <svg class="bi" aria-hidden="true">
                  <FaArrowRight />
                </svg>
              </a>
            </p>
            <p>
              <a
                class="icon-link icon-link-hover nav-a h5"
                href="/Gallery"
                style={{ textDecoration: "none" }}
              >
                Our Gallery
                <svg class="bi" aria-hidden="true">
                  <FaArrowRight />
                </svg>
              </a>
            </p>
            <p>
              <a
                class="icon-link icon-link-hover nav-a h5"
                href="/Blog"
                style={{ textDecoration: "none" }}
              >
                Read Our Blogs
                <svg class="bi" aria-hidden="true">
                  <FaArrowRight />
                </svg>
              </a>
            </p>

            <a href="/Contact">
              <button
                className="btn btn-outline-dark rounded-0 px-5 py-2"
                style={{ fontSize: "18px" }}
              >
                CONTACT US
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Error;
