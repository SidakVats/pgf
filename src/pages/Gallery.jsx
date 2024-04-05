import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaTimes } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [
  // { href: "Logo.png" },
  { href: "101.jpg" },
  { href: "102.jpg" },
  { href: "103.jpg" },
  { href: "104.jpg" },
  { href: "105.jpg" },
  { href: "106.jpg" },
  { href: "107.jpg" },
  { href: "108.jpg" },
  { href: "109.jpg" },
  { href: "110.jpg" },
  { href: "111.jpg" },
  { href: "112.jpg" },
  { href: "164.jpg" },
  { href: "165.jpg" },
  { href: "166.jpg" },
  { href: "167.jpg" },
  { href: "168.jpg" },
  { href: "169.jpg" },
  { href: "170.jpg" },
  { href: "171.jpg" },
  { href: "172.jpg" },
  { href: "173.jpg" },
  { href: "174.jpg" },
  { href: "175.jpg" },
  { href: "176.jpg" },
  { href: "177.jpg" },
  { href: "178.jpg" },
  { href: "179.jpg" },
  { href: "180.jpg" },
  { href: "181.jpg" },
  { href: "182.jpg" },
  { href: "183.jpg" },
  { href: "184.jpg" },
  { href: "185.jpg" },
  { href: "186.jpg" },
  { href: "187.jpg" },
  { href: "188.jpg" },
  { href: "189.jpg" },
  { href: "190.jpg" },
  { href: "191.jpg" },
  { href: "192.jpg" },
  { href: "193.jpg" },
  { href: "194.jpg" },
  { href: "195.jpg" },
  { href: "196.jpg" },
  { href: "197.jpg" },
  { href: "198.jpg" },
  { href: "199.jpg" },
  { href: "200.jpg" },
  { href: "210.jpg" },
  { href: "211.jpg" },
  { href: "212.jpg" },
  { href: "213.jpg" },
  { href: "214.jpg" },
  { href: "215.jpg" },
  { href: "216.jpg" },
  { href: "217.jpg" },
  { href: "218.jpg" },
  { href: "219.jpg" },
  { href: "113.jpg" },
  { href: "114.jpg" },
  { href: "115.jpg" },
  { href: "116.jpg" },
  { href: "117.jpg" },
  { href: "118.jpg" },
  { href: "119.jpg" },
  { href: "120.jpg" },
  { href: "121.jpg" },
  { href: "122.jpg" },
  { href: "123.jpg" },
  { href: "124.jpg" },
  { href: "125.jpg" },
  { href: "126.jpg" },
  { href: "127.jpg" },
  { href: "128.jpg" },
  // { href: "129.jpg" },
  { href: "130.jpg" },
  { href: "131.jpg" },
  { href: "132.jpg" },
  { href: "133.jpg" },
  { href: "134.jpg" },
  { href: "135.jpg" },
  { href: "136.jpg" },
  { href: "137.jpg" },
  { href: "138.jpg" },
  { href: "139.jpg" },
  { href: "140.jpg" },
  { href: "141.jpg" },
  { href: "142.jpg" },
  { href: "143.jpg" },
  { href: "144.jpg" },
  { href: "145.jpg" },
  { href: "146.jpg" },
  { href: "147.jpg" },
  { href: "148.jpg" },
  { href: "149.jpg" },
  { href: "150.jpg" },
  { href: "151.jpg" },
  { href: "152.jpg" },
  { href: "153.jpg" },
  { href: "154.jpg" },
  { href: "155.jpg" },
  { href: "156.jpg" },
  { href: "157.jpg" },
  { href: "158.jpg" },
  { href: "159.jpg" },
  { href: "160.jpg" },
  { href: "161.jpg" },
  { href: "162.jpg" },
  { href: "163.jpg" },
  { href: "247.jpg" },
];

const videos = [
  // { href: "220.mp4" },
  // { href: "221.mp4" },
  { href: "222.mp4" },
  // { href: "223.mp4" },
  // { href: "224.mp4" },
  // { href: "225.mp4" },
  // { href: "226.mp4" },
  // same as 226 { href: "227.mp4" },
  // { href: "228.mp4" },

  { href: "229.mp4" },
  { href: "230.mp4" },
  { href: "231.mp4" },
  { href: "232.mp4" },
  { href: "233.mp4" },
  { href: "234.mp4" },

  // { href: "235.mp4" },
  // same as 235 { href: "236.mp4" },

  { href: "237.mp4" },
  { href: "238.mp4" },

  // { href: "239.mp4" },
  // same as 239 { href: "240.mp4" },

  // { href: "241.mp4" },
  // { href: "242.mp4" },
  // { href: "243.mp4" },
  // { href: "244.mp4" },
  // { href: "245.mp4" },
  // { href: "246.mp4" },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const calculateAosDelay = (index) => (200 * index).toString();

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handlePreviousImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {/* ======================== Navbar =========================== */}
      <Navbar />

      {/* ======================== Banner =========================== */}
      <div className="container-fluid p-0">
        <div className="bg-image8">
          <div className="container pt-5 text-center">
            <p
              className="text-white display-4 pt-5 text-uppercase"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Gallery Of Photos
            </p>
            <p
              className=" display-3 pt-3 pb-5 fw-bold text-uppercase"
              style={{ color: "#caba9c" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              our work
            </p>
            <br />
          </div>
        </div>
      </div>

      {/* =========================== Title ======================= */}
      <div className="container text-center mt-5">
        <p
          className="display-2 fw-medium font2"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          Our Story So Far
        </p>
      </div>

      <div ref={imageContainerRef} className="image-container">
        {/* Gallery Section */}
        <div className="container mb-5" style={{ marginTop: "150px" }}>
          <div className="row">
            {images.map((data, index) => (
              <div
                className="col-sm-3 col-md-4 col-lg-3 card1 mt-3"
                key={index}
                onClick={() => handleImageClick(index)}
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={calculateAosDelay(index)}
                  className="p-3"
                >
                  <img
                    src={`../src/images/${data.href}`}
                    className="img-fluid rounded-4"
                    style={{ height: "100%" }}
                    alt=""
                  />
                </div>
              </div>
            ))}
            <div className="container text-center mt-5 mb-5">
              <div
                className="display-1 pt-5 pb-5 fw-bold font2"
                style={{ color: "#caba9c" }}
              >
                Videos
              </div>
            </div>

            {videos.map((data, index) => (
              <div className="col-sm-3 card1 mt-3" key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={calculateAosDelay(index)}
                  className="p-3"
                >
                  <a href={`../src/images/${data.href}`}>
                    <video
                      src={`../src/images/${data.href}`}
                      class="img-fluid rounded-4"
                      autoPlay="true"
                      style={{ height: "100%" }}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Popup (conditionally rendered) */}
        {isOpen && (
          <div
            className="image-popup"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="popup-content">
              <button
                className="close-btn p-2  pb-2 h5 rounded-circle"
                onClick={handleClosePopup}
                style={{
                  position: "absolute",
                  top: "35px",
                  right: "25px",
                  background: "white",
                  color: "black",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <FaTimes />
              </button>
              <div className="popup-image-container">
                <FaArrowLeftLong
                  className="prev-btn me-2 h1 p-2 rounded-5"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={handlePreviousImage}
                  disabled={currentIndex === 0}
                />
                <img
                  src={`../src/images/${images[currentIndex].href}`}
                  className="large-image"
                  alt=""
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    objectFit: "cover",
                  }}
                />

                <FaArrowRightLong
                  className="next-btn ms-2 h1 p-2 rounded-5"
                  onClick={handleNextImage}
                  disabled={currentIndex === images.length - 1}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ======================== Footer =========================== */}
      <Footer />
    </>
  );
};

export default Gallery;
