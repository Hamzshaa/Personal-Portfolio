import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

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
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. Allrights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
