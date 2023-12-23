import React from "react";
import { FaInstagram, FaDribbble } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://dribbble.com/"
        className="home__social-icon"
        target="_blank"
      >
        <FaDribbble />
      </a>
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social;
