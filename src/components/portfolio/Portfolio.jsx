import React from "react";
import "./portfolio.css";

import img from "../../assets/blog100.jpg";
import blogLogo from "../../assets/trident_blog.png";
import cheapDelalaLogo from "../../assets/CheapDelala-logo.png";

import { IoLogoGithub } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { IoCheckboxOutline } from "react-icons/io5";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolios</h2>
      <span className="section__subtitle">my portfolios</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div className="portfolio__img blog-portfolio">
            <img src={blogLogo} alt="" className="blur zoom" />
            <div className="portfolio__technologies fade">
              <div className="portfolio__tools">
                Technologies Used
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  Html
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  CSS
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  React
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  Express JS
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  MongoDB
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  and others...
                </li>
              </div>
            </div>
          </div>

          <div className="portfolio__info">
            <div className="">
              <h3 className="portfolio__title">Blog Website</h3>
              <h3 className="portfolio__description">
                a MERN stack blog website with JWT, bcryptjs, react-time-ago,
                and react-quill. It offers secure user authentication, password
                hashing, real-time timestamps, and a rich text editor for
                writing blog posts.
              </h3>
            </div>
            <div className="portfolio__buttons">
              <div className="portfolio__github">
                <a
                  href="https://github.com/Hamzshaa/react-blog-page"
                  target="_blank"
                >
                  <IoLogoGithub className="portfolio__button-icon" />
                  Github
                </a>
              </div>
              <div className="portfolio__online disabled">
                <a href="" target="_blank">
                  <FiExternalLink className="portfolio__button-icon " />
                  Online
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <div className="portfolio__img">
            <img src={cheapDelalaLogo} alt="" className="blur zoom" />
            <div className="portfolio__technologies fade">
              <div className="portfolio__tools">
                Technologies Used
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  Html
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  CSS
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  React
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  Express Js
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  MongoDB
                </li>
                <li>
                  <IoCheckboxOutline className="portfolio__check-icon" />
                  and others...
                </li>
              </div>
            </div>
          </div>

          <div className="portfolio__info">
            <div className="">
              <h3 className="portfolio__title">Cheap Delala</h3>
              <h3 className="portfolio__description">
                Cheap Delala is an online platform designed to facilitate secure
                and highly privatized agreements between home providers and home
                seekers for both rental and sale purposes. The platform will
                offer property posting and real-time chatting.
              </h3>
            </div>
            <div className="portfolio__buttons">
              <div className="portfolio__github">
                <a
                  href="https://github.com/Hamzshaa/Cheep-Delala"
                  target="_blank"
                >
                  <IoLogoGithub className="portfolio__button-icon" />
                  Github
                </a>
              </div>
              <div className="portfolio__online disabled">
                <a href="" target="_blank">
                  <FiExternalLink className="portfolio__button-icon" />
                  Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
