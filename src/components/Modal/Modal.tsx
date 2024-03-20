import React, { useState } from "react";

import "./index.scss";

interface ModalProps {
  name: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ name, children }) => {
  // if (!isOpen) return null;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setIsOpenModal(true);
  };
  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="btn-show" onClick={() => handleShowModal()}>
        {name}
      </div>
      {isOpenModal && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <button className="close-btn" onClick={onClose}></button> */}
            <div>
              <div className="header_content">
                <button className="close-btn" onClick={onClose}>
                  X
                </button>
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
