import React, { useState } from "react";
import "./services.css";
import { FaArrowRight, FaTimes, FaRegEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiGrid31 } from "react-icons/ci";
import { IoCodeSharp } from "react-icons/io5";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <CiGrid31 className="services__icon" />
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <FaArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <IoCodeSharp className="services__icon" />
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More <FaArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <FaRegEdit className="services__icon" />
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More <FaArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p classNa me="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
