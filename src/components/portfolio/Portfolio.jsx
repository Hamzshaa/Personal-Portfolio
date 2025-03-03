import React from "react";
import "./portfolio.css";

// import img from "../../assets/blog100.jpg";
// import blogLogo from "../../assets/trident_blog.png";
// import cheapDelalaLogo from "../../assets/CheapDelala-logo.png";
// import metshaftLogo from "../../assets/Metshaft.png";

import { IoLogoGithub } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
// import { IoCheckboxOutline } from "react-icons/io5";
// import { Carousel } from "react-responsive-carousel";
import CarouselComponent from "../Carousel/CarouselComponent";
import { metshaftImg } from "../../assets/trident-metshaft/data";
import { evangadiForumImgs } from "../../assets/evangadi-forum/data";
// import { cheapDelalaImg } from "../../assets/CheapDelala/data";
import { Link } from "react-router-dom";
import { cloudsunImgs } from "../../assets/cloudsun/data";
import { saramallImgs } from "../../assets/saramall/data";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolios</h2>
      <span className="section__subtitle">my portfolios</span>
      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <CarouselComponent img={saramallImgs} />

          <div className="portfolio__info">
            <div className="">
              <h3 className="portfolio__title">
                Sara-Mall Building Management System
              </h3>
              <h3 className="portfolio__description">
                The Sara Mall Building Management System is a comprehensive
                platform designed to simplify and automate the daily operations
                of mall administration. From managing tenant applications and
                rental agreements to tracking room availability and overseeing
                staff, the system ensures smooth coordination and reduced
                paperwork. With features like real-time announcements, built-in
                chat support, automated payment reminders, and detailed
                financial and occupancy reports, Sara Mall BMS creates an
                efficient, transparent, and connected experience for both
                tenants and administrators. Online
              </h3>
            </div>
            <div className="portfolio__buttons">
              {/* <div className="portfolio__github">
                <a href="https://github.com/Hamzshaa/Metshaft" target="_blank">
                  <IoLogoGithub className="portfolio__button-icon" />
                  Github
                </a>
              </div> */}
              <div className="portfolio__online">
                <a href="https://saramall-et.com/" target="_blank">
                  <FiExternalLink className="portfolio__button-icon " />
                  Online
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__content">
          <CarouselComponent img={cloudsunImgs} />

          <div className="portfolio__info">
            <div className="">
              <h3 className="portfolio__title">
                Cloud Sun Café: Restaurant Management System
              </h3>
              <h3 className="portfolio__description">
                The Cloud Sun Café Restaurant Management System is an all-in-one
                solution designed to optimize and simplify daily restaurant
                operations. With real-time ingredient tracking, flexible menu
                management, and seamless order processing, it helps ensure
                smooth service and accurate kitchen coordination. The system
                also provides automated reports and in-depth sales analytics,
                empowering restaurant owners to make data-driven decisions. With
                secure admin controls and efficient workflows, Cloud Sun Café
                RMS enhances both operational efficiency and the overall dining
                experience.
              </h3>
            </div>
            <div className="portfolio__buttons">
              {/* <div className="portfolio__github">
                <a
                  href="https://github.com/Hamzshaa/EvangadiForum"
                  target="_blank"
                >
                  <IoLogoGithub className="portfolio__button-icon" />
                  Github
                </a>
              </div> */}
              <div className="portfolio__online">
                <a href="https://cloudsuncafe.com/" target="_blank">
                  <FiExternalLink className="portfolio__button-icon" />
                  Online
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="portfolio__content">
          <CarouselComponent img={cheapDelalaImg} />

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
        </div> */}
      </div>

      <div className="see-more__button">
        <Link to="/Personal-Portfolio/portfolios">See All</Link>
      </div>
    </section>
  );
}
