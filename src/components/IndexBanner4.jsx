import React from "react";

const IndexBanner4 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <div className="banner">
              <img
                src="https://images.squarespace-cdn.com/content/v1/567189a9841aba7b5264fb36/1485482784709-QYRSWGEDUY5VE7JXWABS/Jill+on+chair.jpg?format=1000w"
                alt=""
                className="img-fluid p-2 ms-2"
              />
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <p
              className="display-1 fst-italic fw-medium"
              style={{ color: "grey" }}
            >
              ABOUT
            </p>
            <p
              className="display-1 fst-italic fw-medium"
              style={{ color: "grey" }}
            >
              JILL
            </p>
            <div className="container">
              <div className="row">
                <div className="col-sm-8 mt-3 h5">
                  Hello! Thank you for stopping by! I’m Jill Stonier,
                  Professional Makeup Artist, located on Market Street in
                  Palencia in Saint Augustine, FL. 
                  <p>My passion for makeup
                  artistry began at a very young age. I can remember going to my
                  aunt Trini’s home and my cousin and I would make lotions and
                  potions. My Aunt always reminded me of a movie star and it was
                  her beauty and the products she used that inspired me to
                  follow my dream.</p>
                </div>
                <div className="col-sm-4"></div>
              </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-6">
                        <button className="btn btn-outline-dark rounded-0 mt-3 px-4 py-2 mb-5" style={{border:"2px solid", fontSize:"18px"}}>
                            READ MORE
                        </button>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexBanner4;
