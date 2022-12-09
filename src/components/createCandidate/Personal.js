import React from "react";
import SelectArrow from "../../assets/images/selectarrow.svg";

const CreateCandidate = () => {
  return (
    <div>
      <p className="cc-pd">Personal Details</p>

      <div className="cc-form-content">
        <div>
          <label className="cc-label">First Name*</label>
          <br />
          <input
            type="text"
            placeholder="Enter first name..."
            className="cc-input"
          />
        </div>
        <div>
          <label className="cc-label">Last Name*</label>
          <br />
          <input
            type="text"
            placeholder="Enter last name..."
            className="cc-input"
          />
        </div>
      </div>
      <div className="cc-form-content">
        <div className="cc-form-select">
          <label className="cc-label">Email*</label>
          <br />
          <select className="cc-input">
            <option>Enter mobile email...</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div>
          <label className="cc-label">Mobile Number*</label>
          <br />
          <input
            type="text"
            placeholder="Enter mobile number..."
            className="cc-input"
          />
        </div>
      </div>
      <div className="cc-form-content">
        <div>
          <label className="cc-label">Alternate Email</label>
          <br />
          <input
            type="text"
            placeholder="Enter mobile email..."
            className="cc-input"
          />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">Enter mobile number...</label>
          <br />
          <select className="cc-input">
            <option>Alternate Mobile Number</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
      </div>
      <div className="cc-form-content">
        <div className="cc-form-select">
          <label className="cc-label">Address</label>
          <br />
          <select className="cc-input">
            <option>Type street address</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">Country</label>
          <br />
          <select className="cc-input">
            <option>Choose country</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
      </div>
      <div className="cc-form-content">
        <div className="cc-form-select">
          <label className="cc-label">State</label>
          <br />
          <select className="cc-input">
            <option>Select state...</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">City</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>City...</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">Zip Code</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Zip Code</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
      </div>
      <div className="cc-form-content">
        <div className="cc-form-select">
          <label className="cc-label">Highest Degree</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Select Degree</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
        <div className="cc-form-select">
          <label className="cc-label">Total Experience</label>
          <br />
          <select className="cc-input cc-form-select-double">
            <option>Select</option>
          </select>
          <img src={SelectArrow} alt="" className="cc-form-select-icon" />
        </div>
      </div>
    </div>
  );
};

export default CreateCandidate;
