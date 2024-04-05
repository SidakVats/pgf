import React from "react";

const IndexBanner = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="bg-image15">
          <div className="container-fluid pt-5 pb-5">
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6 pb-5">
                <div className="container-fluid pb-5">
                      <p
                        className="mt-5 pt-5 display-1 text-uppercase"
                        style={{ color: "#caba9c" }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        The Best
                      </p>
                      <p className=" display-1 text-uppercase fw-bold text-light" data-aos="fade-up"
                        data-aos-delay="200">
                        professional
                      </p>
                      <p className="display-1 text-uppercase text-light" data-aos="fade-up"
                        data-aos-delay="300">
                        care for{" "}
                      </p>
                      <p
                        className=" display-1 text-uppercase fw-bold"
                        style={{ color: "#caba9c" }}
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        YOUR HAIR
                      </p>
                      {/* <hr className="pb-5" style={{color:"", border:"2px solid #caba9c"}} /> */}
                      <hr
                        style={{
                          width: "35%",
                          border: "2px solid #caba9c",
                          color: "#caba9c",
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="100"
                      />
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexBanner;
