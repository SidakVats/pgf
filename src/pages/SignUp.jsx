import React, { useContext, useState } from "react";
import "../pages/Style.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "../images/signup.gif";

import { useLocation, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

import { AuthContext } from "../contexts/AuthProvider";

import Swal from 'sweetalert2'

const auth = getAuth();
const provider = new GoogleAuthProvider();

const SignUp = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigat = useNavigate();
  const from = location.state?.from?.pathname || "/Login";
  const from2 = location.state?.from?.pathname || "/Index";

  const handleRegister = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setErrorMessage(() => {
          Swal.fire({
            title: "Nice!",
            text: "Login successful",
            icon: "success",
          });
        });
        navigat(from2, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(() => {
          Swal.fire({
            title: "Error!",
            text: "Please provide valid email and password",
            icon: "error",
          });
        });
      });

    // console.log("btn clicked");
  };
  const handlesignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    // console.log(name, email, password, confirmpassword);

    if (password !== confirmpassword) {
      setErrorMessage(() => {
        Swal.fire({
          title: "Error!",
          text: "Password does not match! Please provide a correct Password",
          icon: "error",
        });
      });
    } else {
      setErrorMessage("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Swal.fire({
            title: "Nice!",
            text: "Accounts created successfully! Please LogIn",
            icon: "success",
          });
          navigat(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          const msg1 = error.message
          // alert(msg1);
          Swal.fire({
            title: "Error!",
            text: "Invalid-Email Or Password is weak",
            icon: "error",
          });
        });
    }
  };
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
            SignUp
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
              <form class="row g-2 needs-validation" onSubmit={handlesignup}>
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <label
                    for="validationCustom02"
                    class="form-label"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    class="form-control card5"
                    id="validationCustom02"
                    placeholder="Enter Your UserName"
                    name="name"
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
                    E-mail
                  </label>
                  <input
                    type="email"
                    class="form-control card5"
                    id="validationCustom03"
                    placeholder="Enter Your Email"
                    name="email"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <label
                    for="validationCustom02"
                    class="form-label"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control card5"
                    id="validationCustom02"
                    placeholder="Password"
                    name="password"
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
                    for="validationCustom02"
                    class="form-label"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control card5"
                    id="validationCustom02"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <div class="form-check text-center">
                    <label
                      class="form-check-label"
                      for="invalidCheck"
                      data-aos="fade-up"
                      data-aos-delay="440"
                    >
                      Already have an Account? <a href="/Login">LogIn</a>
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div class="col-md-2"></div>

                <div class="col-md-4"></div>
                <div class="col-md-4 text-center pt-2">
                  <button
                    class="btn btn-outline-dark py-2 px-5 rounded-5 card5"
                    style={{ fontSize: "16px" }}
                    type="submit"
                    data-aos="fade-up"
                    data-aos-delay="470"
                  >
                    SignUp
                  </button>
                  <p
                    className="text-center pt-2"
                    style={{ color: "gray" }}
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    OR
                  </p>
                </div>

                <div class="col-md-4"></div>

                <div class="col-md-2"></div>
                <div class="col-md-8 text-center">
                  <button
                    className="btn btn-outline-dark px-5 py-2"
                    data-aos="fade-up"
                    data-aos-delay="500"
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

export default SignUp;
