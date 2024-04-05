import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../pages/Style.css";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  return (
    <div>
      {/* <a  href=" https://wa.me/8847757686" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/1024px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
          alt=""
          className="whatsapp"
        />
      </a> */}

      <div id="mybutton">
        <a
          href="https://api.whatsapp.com/send/?phone=919872504446"
          target="_blank"
          class="feedback  pb-1 px-1"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
