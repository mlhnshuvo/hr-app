import React from "react";
import SelectArrow from "../../assets/images/selectarrow.svg";

const AssigntoJob = () => {
  return (
    <div className="cc-form-content">
      <div className="cc-form-select">
        <label className="cc-label">Assign to a job</label>
        <br />
        <select className="cc-input cc-input-atj">
          <option>General Questions</option>
        </select>
        <img src={SelectArrow} alt="" className="cc-form-select-icon" />
      </div>
    </div>
  );
};

export default AssigntoJob;
