import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io5";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://api.whatsapp.com/send?phone=+251929248080&text=Hello, more information!"
        className="home__social-icon"
        target="_blank"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        href="https://t.me/Hamzshaa"
        className="home__social-icon"
        target="_blank"
      >
        <TbBrandTelegram />
      </a>
      <a
        href="https://www.linkedin.com/in/hamza-jhad-ba5b36291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="home__social-icon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Hamzshaa/"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social;
