import React from "react";

const ModalComponent = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <ModalWrapper>
        <ModalContent>
          {children}
          <button onClick={onClose}>Close</button>
        </ModalContent>
      </ModalWrapper>
    );
  };
  
  export default ModalComponent;