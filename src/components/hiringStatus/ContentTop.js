import React, { useState } from "react";
import BtnArrow from "../../assets/images/btnarrow.svg";

const ContentTop = () => {
  const [menu, setMenu] = useState({
    toggle: false,
    menuName: "Hiring Stage",
  });

  const menuToggle = (value) => {
    setMenu({
      toggle: !menu.toggle,
      menuName: value,
    });
  };

  return (
    <div className="common-width">
      <p className="content-top-border"></p>
      <div className="ct-content">
        <div className="ct-content ct-content__left">
          <div>
            <p className="ct-content-title">Last Job Applied</p>
            <p className="ct-content-des">HOD, Civil</p>
          </div>
          <div>
            <p className="ct-content-title">Hiring Status</p>
            <p className="ct-content-des">Shortlisted</p>
          </div>
          <div>
            <p className="ct-content-title">Resume</p>
            <p className="ct-content-des">View</p>
          </div>
        </div>
        <div className="ct-content ct-content__right">
          <p className="ct-content-btn">Schedule Interview</p>
          <p className="ct-content-btn">Assign to a job</p>
          <div className="ct-content-hs-reletive">
            <div
              className="ct-content-hs"
              onClick={() => menuToggle(menu.menuName)}
            >
              <p className="ct-content-btn ct-content-btn__hs">
                {menu.menuName}
              </p>
              <img src={BtnArrow} alt="" className="ct-content-btn-icon" />
            </div>
            {menu.toggle && (
              <ul className="ct-content-hs-items">
                <li
                  className="ct-content-hs-list"
                  onClick={() => menuToggle("Hiring Stage")}
                >
                  Hiring Stage
                </li>
                <li
                  className="ct-content-hs-list"
                  onClick={() => menuToggle("Applied")}
                >
                  Applied
                </li>
                <li
                  className="ct-content-hs-list"
                  onClick={() => menuToggle("Shortlisted")}
                >
                  Shortlisted
                </li>
                <li
                  className="ct-content-hs-list"
                  onClick={() => menuToggle("In Review")}
                >
                  In Review
                </li>
                <li
                  className="ct-content-hs-list"
                  onClick={() => menuToggle("  HR Interview")}
                >
                  HR Interview
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
