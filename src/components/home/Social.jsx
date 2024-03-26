import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { TbBrandTelegram } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io5";

import { FaTelegram } from "react-icons/fa";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://api.whatsapp.com/send?phone=+251929248080&text=Hello, more information!"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        href="https://t.me/Hamzshaa"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaTelegram />
      </a>
      <a
        href="https://www.linkedin.com/in/hamza-jhad-ba5b36291/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Hamzshaa/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social;
