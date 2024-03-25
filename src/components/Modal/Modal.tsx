import React from "react";

import "./index.scss";

interface ModalProps {
  name: string;
  children: React.ReactNode;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  // if (!isOpen) return null;

  return (
    <>
      {/* <div className="btn-show" onClick={() => handleShowModal()}>
        {name}
      </div> */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-btn" onClick={onClose}></button> */}
            <div>
              <div className="header_content">
                <button className="close-btn">X</button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
