import React from "react";
import Back from "../../assets/images/back.svg";

const TitleTop = () => {
  return (
    <div className="tt common-width">
      <div className="tt-back">
        <img src={Back} alt="" />
        <p className="tt-back-create">Create a candidate</p>
      </div>
      <div>
        <p className="tt-create">Create</p>
      </div>
    </div>
  );
};

export default TitleTop;
