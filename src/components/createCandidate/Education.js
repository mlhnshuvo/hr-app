import React from "react";
import SelectArrow from "../../assets/images/selectarrow.svg";

const CreateCandidate = () => {
  return (
    <div className="cc-edu">
      <p className="cc-pd">Education Details</p>
      <div className="cc-form-content">
        <div>
          <label className="cc-label">Institute</label>
          <br />
          <input
            type="text"
            placeholder="Search for the country name..."
            className="cc-input"
          />
        </div>
        <div>
          <label className="cc-label">Degree</label>
          <br />
          <input
            type="text"
            placeholder="Search for the city name..."
            className="cc-input"
          />
        </div>
      </div>
      <div className="cc-form-content">
        <div className="cc-form-select">
          <label className="cc-label">From Month</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Month</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">From Year</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Year</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">To Month</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Month</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">To Year</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Year</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
      </div>
    </div>
  );
};

export default CreateCandidate;
