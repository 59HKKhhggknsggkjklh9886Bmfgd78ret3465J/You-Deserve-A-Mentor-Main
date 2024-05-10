import React from 'react';
import "./Contact.css"
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className='contactBody'>
      <div className="contact-container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"><FaLinkedin /></i>
              <div className="topic">Linked In</div>
              <div className="text-one">@xxxxxxxxxx</div>
              {/* <div className="text-two">@xxxxxxxxxx</div> */}
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"><AiFillInstagram /></i>
              <div className="topic">Instagram</div>
              <div className="text-one">@..........</div>
              {/* <div className="text-two">@..........</div> */}
            </div>
            <div className="email details">
              <i className="fas fa-envelope"><IoMdMail /></i>
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              {/* <div className="text-two">info.codinglab@gmail.com</div> */}
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Get In Touch</div>
            <p>If you require my services or have any questions regarding my tutorials, please don't hesitate to send me a message here. I'm here to assist you with pleasure.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Write your message..."></textarea>
              </div>
              <div className="sendnow-btn">
                <p>Send Now</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Contact;
