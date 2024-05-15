/* eslint-disable react/jsx-no-undef */
import { IoLogoGithub } from "react-icons/io5";
import CarouselComponent from "../Carousel/CarouselComponent";
import { FiExternalLink } from "react-icons/fi";

export default function PortfolioCard({
  imgs,
  title,
  description,
  github,
  online,
}) {
  return (
    <div className="portfolio__content">
      <CarouselComponent img={imgs} />

      <div className="portfolio__info">
        <div className="">
          <h3 className="portfolio__title">{title}</h3>
          <h3 className="portfolio__description">{description}</h3>
        </div>
        <div className="portfolio__buttons">
          <div className={`portfolio__github ${!github && "disabled"}`}>
            <a href={github} target="_blank">
              <IoLogoGithub className="portfolio__button-icon" />
              Github
            </a>
          </div>
          <div className={`portfolio__online ${!online && "disabled"}`}>
            <a href={online} target="_blank">
              <FiExternalLink className="portfolio__button-icon " />
              Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
