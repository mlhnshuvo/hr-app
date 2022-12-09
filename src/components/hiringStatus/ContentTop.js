import React, { useState } from "react";
import BtnArrow from "../../assets/images/btnarrow.svg";

const ContentTop = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
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
            <div className="ct-content-hs" onClick={menuHandler}>
              <p className="ct-content-btn ct-content-btn__hs">Hiring Stage</p>
              <img src={BtnArrow} alt="" className="ct-content-btn-icon" />
            </div>
            {menu && (
              <ul className="ct-content-hs-items">
                <li className="ct-content-hs-list" onClick={menuHandler}>
                  Applied
                </li>
                <li className="ct-content-hs-list" onClick={menuHandler}>
                  Shortlisted
                </li>
                <li className="ct-content-hs-list" onClick={menuHandler}>
                  In Review
                </li>
                <li className="ct-content-hs-list" onClick={menuHandler}>
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
