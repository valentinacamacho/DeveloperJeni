import React from 'react';
import "../Stylesheets/Contact.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact-container">
      <div className="quote">
        <p>Llegar juntos es el principio. Mantenerse juntos, es el progreso. Trabajar juntos es el éxito</p>
        <p className="author">- Henry Ford</p>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jenifercamachodesarrolladoraweb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="icon-con" />
        </a>
        <a href="https://github.com/valentinacamacho" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="icon-con" />
        </a>
        <a>
          <MdOutgoingMail size={40} className="" />
          <span>jenifercamacho0206@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
