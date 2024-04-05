import React from "react";
import HomeImage from "../components/HomeImage";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 bg-white text-center">
            <HomeImage />
          </div>

          <div className="col-sm-6 bg-black text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 mt-5 pt-5">
                  <Logo />
                </div>
                <div className="col-sm-4"></div>
              </div>
            </div>
            <p className="h5 mt-3">
              Professional Makeup Artist, Esthetician, and Lash Extension
              Specialist
            </p>
            <a href="/Index">
              <button className="btn btn-outline-light rounded-0 mt-5 px-5 py-2 mb-5">
                ENTER
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
