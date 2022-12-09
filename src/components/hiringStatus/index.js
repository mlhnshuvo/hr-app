import React from "react";
import TitleTop from "./TitleTop";
import ContentTop from "./ContentTop";
import CandidateProfileLeft from "./CandidateProfileLeft";
import CandidateProfileRight from "./CandidateProfileRight";

const index = () => {
  return (
    <div>
      <TitleTop />
      <ContentTop />
      <div className="common-width">
        <p className="content-top-border content-top-border__can-pro"></p>
        <div className="can-pro">
          <CandidateProfileLeft />
          <CandidateProfileRight />
        </div>
      </div>
    </div>
  );
};

export default index;
