import React, { useState } from "react";
import "./header.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegFileCode } from "react-icons/fa6";
import { IoBriefcaseOutline, IoImageOutline } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";
import { TbApps } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/Personal-Portfolio" className="nav__logo">
          ham
          <span className="nav__zz">zz</span>
          sha
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/Personal-Portfolio#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <AiOutlineHome className="nav__icon" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <a
                href="/Personal-Portfolio#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <AiOutlineUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/Personal-Portfolio#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FaRegFileCode className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="/Personal-Portfolio#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <IoBriefcaseOutline className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <Link
                to="/Personal-Portfolio/portfolios"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <IoImageOutline className="nav__icon" />
                Portfolios
              </Link>
            </li>
            <li className="nav__item">
              <a
                href="/Personal-Portfolio#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <BiMailSend className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <LiaTimesSolid
            className="nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <TbApps />
        </div>
      </nav>
    </header>
  );
}

export default Header;
