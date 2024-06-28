import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

function Additional() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Additional Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />
            <div>
              <h3 className="skills__name">Python</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />
            <div>
              <h3 className="skills__name">Git</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />
            <div>
              <h3 className="skills__name">Java</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">C++</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />
            <div>
              <h3 className="skills__name">
                Software Project
                <br />
                Management
              </h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>

          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />
            <div>
              <h3 className="skills__name">Figma</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />

            <div>
              <h3 className="skills__name">Data structure</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <LuBadgeCheck className="bx-badge-check" />
            <div>
              <h3 className="skills__name">Algorithm</h3>
              {/* <span className="skills__level">Advanced</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Additional;
