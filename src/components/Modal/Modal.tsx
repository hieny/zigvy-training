import React, { createContext, useContext, useEffect, useState } from "react";

import "./index.scss";

type ModalContextType = {
  handleCloseModal: () => void;
  handleOpenModal: () => void;
};

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const ModalContext = createContext<ModalContextType | null>(null);

const Modal = ({ children, isOpen }: ModalProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const contextValue: ModalContextType = {
    handleCloseModal,
    handleOpenModal,
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpenModal(true); // Open the modal only if it's not already open
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider value={contextValue}>
      {isOpenModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div>
              <div className="header_content">
                <button className="close-btn" onClick={handleCloseModal}>
                  X
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default Modal;

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
