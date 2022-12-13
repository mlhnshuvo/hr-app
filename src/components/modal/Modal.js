import React from "react";
import ModalClose from "../../assets/images/modalclose.svg";

const Modal = ({ children, modalHandler }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-close" onClick={() => modalHandler(false)}>
          <img src={ModalClose} alt="" />
        </div>
        {children}
      </div>
      <p className="modal-overlay"></p>
    </div>
  );
};

export default Modal;
