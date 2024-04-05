import "bootstrap/dist/css/bootstrap.css";


import Home from "./pages/Home";         
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import WeddingQ from "./pages/WeddingQ";
import AllQueries from "./pages/AllQueries";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import ServiceDescription from "./pages/ServiceDescription"
import ProgressBar from "./components/ProgressBar";
import Whatsapp from "./components/Whatsapp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";


import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"

import { Route,Routes } from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing: "ease-in-out",
      delay: 100
    });
   
  },[])

  return (
    <>
    <ProgressBar />
    
    <Routes>
      <Route path="/" Component={Home} exact/>
      <Route path="/Index" Component={Index} exact/>
      <Route path="/Services" Component={Services} exact/>
      <Route path="/Gallery" Component={Gallery} exact/>
      <Route path="/AboutUs" Component={AboutUs} exact/>
      <Route path="/Blog" Component={Blog} exact/>
      <Route path="/Contact" Component={Contact} exact/>
      <Route path="/Wedding" Component={WeddingQ} exact/>
      <Route path="/Other" Component={AllQueries} exact/>
      <Route path="/ServiceDescription/:id" Component={ServiceDescription} exact/>
      <Route path="/Login" Component={Login} exact/>
      <Route path="/SignUp" Component={SignUp} exact/>
      <Route path="*" Component={Error} exact/>
    </Routes>

    <Whatsapp/>
    </>
  )
}

export default App
