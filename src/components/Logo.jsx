import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../images/Logo.png"

const Logo = () => {
  return (
    <div>
      <img
        src={Image}
        className="img-fluid mt-5"
        alt=""       
      />
    </div>
  );
};

export default Logo;
