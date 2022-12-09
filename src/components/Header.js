import React from "react";
import { Link } from "react-router-dom";
import Notification from "../assets/images/notification.svg";
import User from "../assets/images/user.svg";
import Search from "../assets/images/search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="common-width">
        <div className="header-content">
          <div className="header-logo-job">
            <Link to="/" className="header-logo">
              Logo
            </Link>
            <Link to="/" className="header-job">
              Jobs
            </Link>
          </div>
          <div className="header-menu-list">
            <Link to="/candidates" className="header-menu">
              Candidates
            </Link>
            <Link to="/" className="header-menu">
              Interviews
            </Link>
            <Link to="/" className="header-menu">
              Assessments
            </Link>
            <Link to="/" className="header-menu">
              Settings
            </Link>
          </div>
          <div className="header-search">
            <img src={Search} alt="" className="header-search-icon" />
            <input
              type="text"
              className="header-search-input"
              placeholder="Search…"
            />
          </div>
          <div>
            <img src={Notification} alt="" />
          </div>
          <div className="header-user">
            <img src={User} alt="" />
            <div>
              <p className="header-name">Austin Robertson</p>
              <p className="header-role">Marketing Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
