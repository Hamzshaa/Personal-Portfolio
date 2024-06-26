import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">HTML</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">CSS</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">JavaScript</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">Next.js</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">React.js</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">Typescript</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">Redux toolkit</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
