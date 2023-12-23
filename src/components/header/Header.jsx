import React, { useState } from "react";
import "./header.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegFileCode } from "react-icons/fa6";
import { IoBriefcaseOutline, IoImageOutline } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";
import { TbApps } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";

function Header() {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Smith
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <AiOutlineHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <AiOutlineUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FaRegFileCode className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <IoBriefcaseOutline className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <IoImageOutline className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
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
