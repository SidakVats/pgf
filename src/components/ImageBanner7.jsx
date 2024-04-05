import React, { useState } from "react";

import { FaCrown } from "react-icons/fa";
import { HiScissors } from "react-icons/hi2";
import { FaPaintbrush } from "react-icons/fa6";
import { RiContrastDropFill } from "react-icons/ri";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ImageBanner7 = () => {
  const [text, settext] = useState(false);

  return (
    <div>
      <div className="container-fluid bg-dark p-5">
        <div className="row g-0">
          <div className="col-sm-2"></div>
          <div className="col-sm-2 pt-5 pb-5 text-center">
            <FaCrown data-aos="fade-down" data-aos-delay="100" className="h3" style={{ color: "#caba9c" }} />
            <ScrollTrigger
              onEnter={() => settext(true)}
              onExit={() => settext(false)}
            >
              <p className="text-white h1 pt-3 pb-3">
                {text && <CountUp start={0} end={571} duration={5} delay={0} />}
                +
              </p>
            </ScrollTrigger>
            <p className="h3" data-aos="fade-down" data-aos-delay="200" style={{ color: "#caba9c" }}>
              Beauty Styles
            </p>
          </div>
          <div className="col-sm-2 pt-5 pb-5 text-center">
            <HiScissors data-aos="fade-down" data-aos-delay="100" className="h3" style={{ color: "#caba9c" }} />
            <ScrollTrigger
              onEnter={() => settext(true)}
              onExit={() => settext(false)}
            >
              <p className="text-white h1 pt-3 pb-3">
                {text && <CountUp start={0} end={984} duration={5} delay={0} />}
                +
              </p>
            </ScrollTrigger>
            <p className="h3" data-aos="fade-down" data-aos-delay="200" style={{ color: "#caba9c" }}>
              Hair Cutting
            </p>
          </div>
          <div className="col-sm-2 pt-5 pb-5 text-center">
            <FaPaintbrush data-aos="fade-down" data-aos-delay="100" className="h3" style={{ color: "#caba9c" }} />
            <ScrollTrigger
              onEnter={() => settext(true)}
              onExit={() => settext(false)}
            >
              <p className="text-white h1 pt-3 pb-3">
                {text && <CountUp start={0} end={395} duration={5} delay={0} />}
                +
              </p>
            </ScrollTrigger>
            <p className="h3" data-aos="fade-down" data-aos-delay="200" style={{ color: "#caba9c" }}>
              Make Up
            </p>
          </div>
          <div className="col-sm-2 pt-5 pb-5 text-center">
            <RiContrastDropFill data-aos="fade-down" data-aos-delay="100" className="h3" style={{ color: "#caba9c" }} />
            <ScrollTrigger
              onEnter={() => settext(true)}
              onExit={() => settext(false)}
            >
              <p className="text-white h1 pt-3 pb-3">
                {text && <CountUp start={0} end={246} duration={5} delay={0} />}
                +
              </p>
            </ScrollTrigger>
            <p className="h3" data-aos="fade-down" data-aos-delay="200" style={{ color: "#caba9c" }}>
              Hair Coloring
            </p>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner7;
