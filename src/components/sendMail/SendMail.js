import React from "react";
import Back from "../../assets/images/back.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SelectArrow from "../../assets/images/selectarrow.svg";

const SendMail = () => {
  return (
    <div className="send-mail common-width">
      <div className="tt">
        <div className="tt-back">
          <img src={Back} alt="" />
          <p className="tt-back-create">Send Email</p>
        </div>
      </div>
      <div className="sched-inter-content-main">
        <div className="sched-inter-content-right">
          <div className="cc-form-select">
            <label className="cc-label">Select Email Template</label>
            <br />
            <select className="cc-input sched-inter__input">
              <option>Interview meeting</option>
            </select>
            <img src={SelectArrow} alt="" className="cc-form-select-icon" />
          </div>
          <div className="sched-inter-left-input">
            <label className="cc-label sched-inter-location__label">
              From:
            </label>
            <input
              type="text"
              placeholder="zubair.khan@gmail.com"
              className="cc-input sched-inter__input"
            />
          </div>
          <div className="sched-inter-left-input">
            <label className="cc-label sched-inter-location__label">To:</label>
            <input
              type="text"
              placeholder="abhineet.sabharwal@gmail.com"
              className="cc-input sched-inter__input"
            />
          </div>
          <div className="sched-inter-left-input">
            <label className="cc-label sched-inter-location__label">
              Subject:
            </label>
            <input
              type="text"
              placeholder="Type your subject here..."
              className="cc-input sched-inter__input"
            />
          </div>
          <div className="sched-inter-react-quill">
            <label className="cc-label">Email Body</label>
            <ReactQuill theme="snow" />
          </div>
          <div className="sched-inter-left-input sched-inter-left-input-attach">
            <p className="cc-label sched-inter-location__label">Attachment:</p>
            <label className="">
              <input
                type="file"
                placeholder="Email Template subect will come here ..."
                className="sched-inter-right-file-input"
              />
              <p className="sched-inter-right-file-text">Browse</p>
            </label>
          </div>
          <p className="sched-inter-content-btn sched-inter-content-btn__send">Send</p>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
