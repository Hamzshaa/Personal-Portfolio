import React from "react";
import { FiAward } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FiAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>

      <div className="about__box">
        <IoBriefcaseOutline className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className="about__box">
        <BiSupport className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
