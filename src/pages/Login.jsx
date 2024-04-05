import React, { useContext, useState } from "react";
import "../pages/Style.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "../images/login1.gif";
import Image2 from "../images/error.gif";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Login = () => {
  // const [errorMessage, setErrorMessage] = useState("");

  const { createUser } = useContext(AuthContext);
  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form)
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password)

    login(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Nice!",
          text: "Login successful",
        });
        navigat(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        seterrorMessage(() => {
          Swal.fire({
            title: "Error!",
            text: "Invalid Email Or Password",
            icon: "error",
          });
        });
      });
  };

   // If you intend to use Firebase's Google Sign-In for registration, you need to use signInWithPopup with the Google provider.
    // signInWithPopup(auth, provider)

    const handleRegister = (event) => {
      event.preventDefault();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          Swal.fire({
            title: "Nice!",
            text: "Accounts created successfully!",
            icon: "success",
          });
          navigat(from, { replace: true });
        })
        .catch((error) => {
          const errorMsg = error.message;
          seterrorMessage(() => {
            Swal.fire({
              title: "Error!",
              text: "Please provide valid email and password",
              icon: "error",
            });
          });
        });
  
      // console.log("btn clicked");
    };

  const [errorMessage, seterrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigat = useNavigate();

  const from = location.state?.from?.pathname || "/Index";

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="container mt-5 pt-5 mb-5 pb-5 card4 rounded-5">
          <p
            className="display-2 text-center mb-5 fw-bold font2"
            style={{ color: "#caba9c" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Login
          </p>
          <div className="row">
            <div className="col-sm-6 text-center">
              <img
                src={Image}
                className="img-fluid rounded-circle"
                style={{ backgroundColor: "#caba9c" }}
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
              />
            </div>

            <div className="col-sm-6">
              <form class="row g-2 needs-validation" onSubmit={handleLogin}>
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <label
                    for="validationCustom02"
                    class="form-label"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control card5"
                    id="validationCustom02"
                    placeholder="Enter Your E-mail"
                    // value={email} onChange={(e) => { setEmail(e.target.value) }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <label
                    for="validationCustom03"
                    class="form-label"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control card5"
                    name="password"
                    id="validationCustom03"
                    placeholder="Enter Your Password"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-2"></div>

                {/* <div>{errorMessage && <div>{errorMessage}</div>}</div> */}

                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <div class="form-check">
                    <div className="d-flex ">
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                        data-aos="fade-up"
                        data-aos-delay="420"
                      />
                      <label
                        class="form-check-label"
                        for="invalidCheck"
                        data-aos="fade-up"
                        data-aos-delay="440"
                      >
                        Rembember Me
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>

                      <span
                        className="ms-5 ps-5"
                        data-aos="fade-up"
                        data-aos-delay="470"
                      >
                        Forgot Password
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8 text-center pt-2">
                  <button
                    class="btn btn-outline-dark py-2 px-5 rounded-5 card5"
                    style={{ fontSize: "16px" }}
                    type="submit"
                    data-aos="fade-up"
                    data-aos-delay="470"
                  >
                    LogIn
                  </button>
                  <p className="pt-3">
                    Don't have a Account <a href="/SignUp">Register Here</a>
                  </p>
                  <p
                    className="text-center pt-2"
                    style={{ color: "gray" }}
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    OR
                  </p>
                </div>

                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8 text-center">
                  <button
                    className="btn btn-outline-dark px-5 py-2"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    onClick={handleRegister}
                  >
                    <img
                      src="https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg"
                      className="img-fluid me-2 rounded-5"
                      style={{ width: "25px" }}
                      alt=""
                    />
                    <span>Sign In with Google</span>
                  </button>
                </div>
                <div class="col-md-2"></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
