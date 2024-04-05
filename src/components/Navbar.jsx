import React, { useContext } from "react";
import Image from "../images/Logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { TiSocialFacebookCircular } from "react-icons/ti";
// import { FaSnapchatGhost } from "react-icons/fa";
// import { TfiTwitter } from "react-icons/tfi";
import { TiSocialInstagramCircular } from "react-icons/ti";


// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../pages/Style.css";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar1 = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Sidak Vats
    </Tooltip>
  );
  return (
    <div className="container-fluid p-0">
      <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/" style={{ fontFamily: "Oxygen" }}>
            <img src={Image} height="140" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="icons" style={{ justifyContent: "end" }}>
            <Nav className="mx-auto" style={{ gap: "1rem" }}>
              <Nav.Link href="/Index">WELCOME</Nav.Link>
              <Nav.Link href="/Services">SERVICES</Nav.Link>
              <Nav.Link href="/Gallery">GALLERY</Nav.Link>
              <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
              <Nav.Link href="/Blog">BLOG</Nav.Link>
              <Nav.Link href="/Contact">CONTACT US</Nav.Link>
            </Nav>

            <Nav className="me-5 mb-1">
              <div className="d-flex mt-2" style={{ gap: "0.5rem" }}>
                {/* <a
                  href="https://www.facebook.com/priyankaglamourforever"
                  target="_blank"
                >
                  <TiSocialFacebookCircular
                    title="facebook"
                    className="h1 p-1 rounded-5"
                    style={{ backgroundColor: "white", color: "black"}}
                  />
                </a> */}
                {/* <TfiTwitter
                  className="h1 p-2 rounded-5"
                  style={{ backgroundColor: "white" }}
                />
                <FaSnapchatGhost
                  className="h1 p-2 rounded-5"
                  style={{ backgroundColor: "white" }}
                /> */}
                {/* <a href="https://www.instagram.com/priyankaglamourforever?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                  <TiSocialInstagramCircular
                    className="h1 p-1 rounded-5"
                    style={{ backgroundColor: "white", color: "black" }}
                  />
                </a> */}
              </div>
            </Nav>
  
              {/* <OverlayTrigger
                placement="bottom"
                delay={{ show: 150, hide: 200 }}
                overlay={renderTooltip}
              > */}
                <a href="/Login">
                  <div className="button btn btn-outline-warning rounded-5 px-5 py-1" style={{fontSize:"19px"}}>Login</div>
                </a>
              {/* </OverlayTrigger> */}
          
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <nav
          class="navbar navbar-expand-lg navbar-dark p-3 bg-dark"
          id="headerNav"
        >
          <div class="container-fluid">
            <a class="navbar-brand d-block d-lg-none" href="#">
              <img src={Image} height="80" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav mx-auto ">
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2 active" aria-current="page" href="/Index">
                    WELCOME
                  </a>
                </li>
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2" href="/Services">
                    SERVICES
                  </a>
                </li>
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2" href="/Gallery">
                    GALLERY
                  </a>
                </li>
                
                <li class="nav-item d-none d-lg-block">
                  <a class="nav-link mx-2" href="/">
                    <img src={Image} height="120" width="130"/>
                  </a>
                </li>
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2" href="/AboutUs">
                    ABOUT US
                  </a>
                </li>
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2" href="/Blog">
                    BLOG
                  </a>
                </li>
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2" href="/Contact">
                    CONTACT US 
                  </a>
                </li> 
                <li class="nav-item pt-5">
                  <a class="nav-link mx-2" href="/Account">
                    ACCOUNT
                  </a>
                </li>              
              </ul>
            </div>
          </div>
        </nav> */}
    </div>
  );
};

export default Navbar1;
