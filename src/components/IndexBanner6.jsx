import React from "react";
import "../pages/Style.css";

const IndexBanner6 = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="bg-image7">
          <div className="container text-center pt-5">
            <p
              className="pt-5 ps-5 pe-5 h1 text-uppercase fw-bold"
              style={{ color: "#caba9c" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              High Quality Brands we work with
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="pt-3 ps-5 pe-5 display-5 text-white"
            >
              Our Favourite
            </p>
            <center>
              <hr
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ border: "2px solid white", width: "20%" }}
              />
            </center>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="container text-center pt-4  h6 text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              laborum architecto laudantium?
              <p className="pt-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div class="container text-center">
            {/* <div class="row row-cols-2 g-0"
              <div class="col">
                <img
                  src="https://codex-themes.com/thegem/sites/shop-organic-cosmetics/wp-content/uploads/2022/01/16.png"
                  className="img-fluid zoom"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </div>
              <div class="col">                
                <img
                  src="https://codex-themes.com/thegem/sites/hair-dress/wp-content/uploads/2018/10/29-thegem-person.png"
                  className="img-fluid zoom"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
              </div>
            </div> */}

            <div className="row">
              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/hair-dress/wp-content/uploads/2018/10/30-thegem-person.png"
                  className="img-fluid "
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </div>

              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/hair-dress/wp-content/uploads/2018/10/31-thegem-person.png"
                  className="img-fluid "
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>

              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/hair-dress/wp-content/uploads/2018/10/32-thegem-person.png"
                  className="img-fluid "
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </div>

              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/hair-dress/wp-content/uploads/2018/10/28-thegem-person.png"
                  className="img-fluid "
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>

          <div className="container text-center pb-5">
            <div className="row">
              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/shop-organic-cosmetics/wp-content/uploads/2022/01/17.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
              </div>
              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/c8.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>
              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/hairdressing-makeup/wp-content/uploads/2018/11/c2.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </div>
              <div className="col-sm-3 zoom">
                <img
                  src="https://codex-themes.com/thegem/sites/shop-organic-cosmetics/wp-content/uploads/2022/01/14.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexBanner6;
