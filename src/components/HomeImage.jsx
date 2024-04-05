import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import homeImg from "../images/home-image.jpg"

const HomeImage = () => {
  return (
    <>
      <img
        src={homeImg}
        className="img-fluid"
        alt=""
      />
    </>
  );
};

export default HomeImage;
