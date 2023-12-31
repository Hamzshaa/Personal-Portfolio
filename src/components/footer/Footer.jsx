import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hamza</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://t.me/Hamzshaa"
            className="home__social-icon"
            target="_blank"
          >
            <TbBrandTelegram />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+251929248080&text=Hello, more information!"
            className="home__social-icon"
            target="_blank"
          >
            <IoLogoWhatsapp />
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

        <span className="footer__copy">
          &#169; Hamza Jhad. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
