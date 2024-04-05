import React from 'react'
import "../pages/Style.css";
import { IoLocationOutline } from "react-icons/io5";

const Branches = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="bg-image4">
           <div className="h5 text-center text-white pt-5" data-aos="fade-up">THE TEAM OF PROFESSIONALS</div>
           <div className="display-4 text-center pt-2 pb-5 fw-bold text-uppercase" style={{color:"#caba9c"}} data-aos="fade-up">Our Branches</div>
           <div className="container pb-5">
                <div className="row">
                <div className="col-sm-6 p-5" data-aos="fade-up" data-aos-delay="300">
                    <div className='text-white' style={{border:"1px solid gray"}}>
                        <div className="container text-center mt-2 mb-3">
                            <div className='display-2'>
                                <IoLocationOutline className='p-2 rounded-circle' style={{backgroundColor:"#caba9c"}}/>
                            </div>                        
                        </div>
                        <p className='text-center h5 mt-4 mb-3 text-uppercase' style={{color:"#caba9c"}}>salon in brooklyn</p>
                        <div className="container text-center mb-5 h6">
                            <span>908 New Hampshire Avenue, Northwest #100, Washington, DC</span><br />
                            <span>Phone: +1 916-875-2235</span><br />
                            <span>Opening hours: Monday-Friday: 9:00 – 22:00</span><br />
                            <span>Saturday: 11:00 – 20:00</span>
                        </div>
                    </div>                  
                </div>
                <div className="col-sm-6 p-5" data-aos="fade-up" data-aos-delay="500">
                <div className='text-white' style={{border:"1px solid gray"}}>
                        <div className="container text-center mt-2 mb-3">
                            <div className='display-2'>
                                <IoLocationOutline className='p-2 rounded-circle' style={{backgroundColor:"#caba9c"}}/>
                            </div>                        
                        </div>
                        <p className='text-center h5 mt-4 mb-3 text-uppercase' style={{color:"#caba9c"}}>salon in brooklyn</p>
                        <div className="container text-center mb-5 h6">
                            <span>908 New Hampshire Avenue, Northwest #100, Washington, DC</span><br />
                            <span>Phone: +1 916-875-2235</span><br />
                            <span>Opening hours: Monday-Friday: 9:00 – 22:00</span><br />
                            <span>Saturday: 11:00 – 20:00</span>
                        </div>
                    </div>       
                </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Branches
