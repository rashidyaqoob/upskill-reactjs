import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./CustomModal.css";

const CustomModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay show">
      <div className="modal">
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default CustomModal;
