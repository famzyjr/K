import React from "react";
import "./contact.css";
import wallpaperflare from "../../imgs/wallpaperflare.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <h2>Get in touch</h2>
          </div>
          <div className="contacts">
            <div className="email">
              <span>
                <MdOutlineEmail className="icon" /><span>Email address: <a href="mailto:kaeyclothing@gmail.com" target="blank">kaeyclothing@gmail.com</a></span>
              </span>
            </div>

            <div>
              <MdOutlineLocalPhone className="icon" />
              <span>Phone Number:</span> <span> <a href="tel:+08029870012">+2348178070418</a></span>
             
            </div>
            <div className="">
            <p><IoHomeOutline className="icon" /> Office address:</p> <span> <a href="https://maps.app.goo.gl/4U59mx43xsEfLmKM6">Okota Police Station off Chemist Bus stop</a></span>
            </div>
          </div>
          <div className="socials">
         <span> <a href="https://www.instagram.com/kaey_clothing/"><FaInstagram /> </a></span> 
          <span><a href=""><FaFacebookSquare/></a></span>
           <span><a href="https://api.whatsapp.com/send?phone=+2348178070418"><FaWhatsapp /></a></span>
          </div>
        </div>
        
      </div>
  );
}

export default Contact;
