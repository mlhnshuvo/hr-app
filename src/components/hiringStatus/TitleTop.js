import React from "react";
import Back from "../../assets/images/back.svg";
import Bar from "../../assets/images/bar.svg";

const TitleTop = () => {
  return (
    <div className="tt common-width">
      <div className="tt-back">
        <img src={Back} alt="" />
        <p className="tt-back-create">Abhineet Sabharwal</p>
        <p className="tt-back-info">M. Tech. (Structure)</p>
        <p className="tt-back-info">+91-9930705653</p>
      </div>
      <img src={Bar} alt="" />
    </div>
  );
};

export default TitleTop;
